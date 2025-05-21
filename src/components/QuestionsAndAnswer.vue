<template>
  <div
    class="top fixed md:w-[85%] w-[95%] mx-auto z-[10px] py-1 rounded-lg px-2 top-[20px] flex items-center justify-between"
  >
    <h2
      class="text-blue-500 bg-white relative z-[1000px] flex gap-2 items-center font-bold border-blue-950 shadow-md shadow-gray-200 px-5 py-3 rounded-md"
    >
      <span class="text-slate-700">Total Score </span>{{ score.toFixed(2) }}%
    </h2>
    <h2
      class="flex gap-4 items-center bg-white relative z-[1000px] left-[15px] md:left-[15px] border-blue-950 cursor-pointer shadow-lg shadow-gray-300 px-4 py-4 rounded-md text-gray-950 font-bold"
    >
      <i class="pi pi-bars font-bold"></i>
    </h2>
  </div>
  <div
    v-if="!clicked"
    class="h-[500px] fixed md:w-[85%] w-[95%] flex flex-col justify-center items-center rounded-lg"
  >
    <h2 class="text-black font-bold text-[30px] md:text-[40px] text-center">
      <i class="pi pi-pencil shadow-2xl border p-2 shadow-slate-800 rounded-full text-blue-300 font-bold "></i>
      GENERATE QUESTIONS <br />
      AS YOU PREPARE FOR
      <br />
      EXAMINATION 
    </h2>
  </div>
  <div class="main fixed top-[500px] md:w-[85%] w-[95%] mx-auto md:my-10">
    <n-form ref="form" v-if="!clicked" :modal="formData" label-placement="top">
      <n-form-item>
        <n-input
          v-model:value="questionText"
          class="bg-gray-950 border focus:bg-red-100 text-gray-800 border-slate-200 pt-1 px-4 rounded"
          type="textarea"
          placeholder="Generate quiz from any topic or paste to generate questions for you"
          :bordered="false"
          :autosize="{
            minRows: 3,
            maxRows: 3,
          }"
        />
      </n-form-item>
      <div class="flex justify-between items-center mt-[-15px]">
        <button
          class="px-3 flex items-center shadow-lg py-3 border border-slate-300 rounded-md"
        >
          <i class="pi pi-microphone text-slate-900"></i>
        </button>
        <div>
          <button
            @click="handleGenerate"
            class="mr-3 bg-slate-950 rounded-md text-white px-5 py-3"
          >
            upload <i class="pi pi-upload text-gray-100 mx-1"></i>
          </button>
          <button
            @click="handleGenerate"
            class="bg-slate-950 rounded-md text-white px-5 py-3"
          >
            Generate
          </button>
        </div>
      </div>
    </n-form>
  </div>
  <div class="questions">
    <Questions
      @displayTotal="totalDisplay"
      v-if="questions.questions !== '' && clicked === true"
      :questions="questions.questions"
    />
    <BounceLoader v-if="loading == true" color="#42b983" :size="80" />
    <!-- <div v-if="loading === true">Loading Questions...</div> -->
  </div>
</template>

<script setup>
import Questions from "./Questions.vue";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { BounceLoader } from "vue3-spinner";
import { useMessage } from "naive-ui";
import { ref, reactive, onMounted } from "vue";

// Initialize with your api key
const genAI = new GoogleGenerativeAI("AIzaSyBrzmLZL7DeknkLUbDJelZmWMhdxuPz3mo");

// Schema for the question model
const schema = {
  description: "Quiz questions in a standard format",
  type: SchemaType.OBJECT,
  properties: {
    response_code: {
      type: SchemaType.NUMBER,
      description: "API response code, where 0 indicates success",
    },
    results: {
      type: SchemaType.ARRAY,
      description: "List of quiz questions",
      items: {
        type: SchemaType.OBJECT,
        properties: {
          type: {
            type: SchemaType.STRING,
            description: "Type of the question, e.g., boolean or multiple",
          },
          difficulty: {
            type: SchemaType.STRING,
            description: "Difficulty level of the question",
            enum: ["easy", "medium", "hard"],
          },
          category: {
            type: SchemaType.STRING,
            description: "Category of the quiz question",
          },
          question: {
            type: SchemaType.STRING,
            description: "The quiz question text",
          },
          correct_answer: {
            type: SchemaType.STRING,
            description: "The correct answer to the question",
          },
          options: {
            type: SchemaType.ARRAY,
            description: "List of options",
            items: {
              type: SchemaType.STRING,
            },
          },
        },
        required: [
          "type",
          "difficulty",
          "category",
          "question",
          "correct_answer",
          "options",
        ],
      },
    },
  },
  required: ["response_code", "results"],
};

// user question
const questionText = ref("");

const message = useMessage();

// loading state
const loading = ref(false);

const form = ref("");
const res = ref("");
const clicked = ref(false);
const score = ref(0);
const formData = ref({
  request: "",
});
const questions = reactive({
  questions: [],
});

const handleGenerate = async () => {
  if (questionText.value !== "") {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });
    clicked.value = true;
    console.log(questionText.value);

    // set loading to true
    loading.value = true;
    const result = await model.generateContent(
      `Create a 5 quiz question on  ${questionText.value}`
    );

    res.value = JSON.parse(result.response.text());
    if (res.value !== "") {
      loading.value = false;
      console.log(res.value);
      questions.questions = res.value.results;
    }

    questionText.value = "";
  } else {
    message.error("Type in the Question of your interest...")
  }
};

// Show total
const totalDisplay = function (total) {
  console.log(total);
  if (total === undefined) {
    score.value = 0;
  } else {
    score.value = (+total * 100) / +questions.questions.length;
  }
};

onMounted(() => {
  totalDisplay();
});
</script>
