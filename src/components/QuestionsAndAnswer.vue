<template>
  <div
    class="top fixed w-full left-0 mx-auto z-[10px] py-1 rounded top-[-5px] flex items-center justify-between"
  >
    <h2
      class="text-green-500 bg-white hidden relative z-[1000px] flex gap-2 items-center font-medium border-blue-950 shadow-md shadow-gray-200 px-5 py-4 rounded-md"
    >
      <span class="text-green-700">Total Score </span>{{ score.toFixed(2) }}%
    </h2>
    <h2
      class="flex gap-4 items-center bg-gray-900 w-full justify-center relative z-[1000px] border-blue-950 cursor-pointer shadow-lg shadow-gray-300 px-4 py-4 text-green-500 font-medium"
    >
      {{ formData.time }} mins : {{ time.secs }} secs
    </h2>
  </div>
  <div
    v-if="!clicked"
    class="h-[230px] mx-auto md:w-[85%] w-[95%] flex flex-col justify-center items-center rounded-lg"
  >
    <h2
      class="text-slate-400 font-medium text-[20px] md:text-[25px] text-center"
    >
      <i
        class="pi pi-pencil shadow-2xl border p-4 shadow-slate-800 rounded-full text-blue-400 font-medium"
      ></i
      ><i
        class="pi pi-book mx-2 shadow-2xl border p-4 shadow-slate-800 rounded-full text-green-300 font-medium"
      ></i
      ><i
        class="pi pi-file shadow-2xl border p-4 shadow-slate-800 rounded-full text-yellow-300 font-medium"
      ></i>
      <i
        class="pi pi-list mx-2 shadow-2xl border p-4 shadow-slate-800 rounded-full text-blue-300 font-medium"
      ></i>
      <br />
      <br />
      GENERATE <br />
      QUESTIONS <br />
      FROM ANY FIELD
    </h2>
  </div>

  <div class="main top-[320px] md:w-[85%] w-[95%] mx-auto md:my-10">
    <n-form ref="form" v-if="!clicked" :modal="formData" label-placement="top">
      <n-form-item class="mb-[-40px]">
        <n-input
          style="outline: none; "
          v-model:value="formData.total"
          type="text"
          size="large"
          
          :bordered="false"
          class="border rounded text-[13px] border-slate-200  align-middle text-white"
          placeholder="Total number of questions"
          clearable
        />
      </n-form-item>
      <n-form-item label="" class="mb-[-45px]">
        <n-input
          style="outline: none;"
          size="large"
          v-model:value="formData.subject"
          :bordered="false"
          class="h-[40px] rounded-sm text-[13px] border-slate-200 border align-middle text-white"
          placeholder="What subject"
          clearable
        />
      </n-form-item>
      <div class="my-5">
        <n-select
          v-model:value="formData.time"
          size="large"
          :bordered="false"
          class="h-[40px] text-sm rounded-lg py-3 border-0 align-middle text-white"
          :options="schedules"
          clearable
          placeholder="Please Select time"
        />
      </div>
      <div label="" class="text-white">
        <n-select
          size="large"
          v-model:value="formData.category"
          class="h-[30px] border-0 align-middle text-white"
          :bordered="false"
          :options="category"
          clearable
          placeholder="Select Question category"
        />
      </div>
      <n-form-item>
        <n-input
          v-model:value="questionText"
          class="border focus:bg-red-100 text-gray-800 border-slate-200 pt-1 px-0 rounded"
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
          class="px-3 flex bg-slate-900 text-slate-100 gap-2 items-center shadow-lg py-3 border border-slate-300 rounded-lg"
        >
          <i class="pi pi-microphone text-slate-100"></i> Use voice note
        </button>
        <div>
          <!-- <button
            @click="handleGenerate"
            class="mr-3 bg-slate-950 rounded-md text-white px-5 py-3"
          >
            upload <i class="pi pi-upload text-gray-100 mx-1"></i>
          </button> -->
          <button
            @click="
              handleGenerate(
                formData.total,
                formData.subject,
                formData.category
              )
            "
            class="bg-slate-900 rounded-lg border-slate-300 text-white px-5 shadow-lg py-3 border"
          >
            Generate <i class="pi pi-question text-slate-100"></i>
          </button>
        </div>
      </div>
    </n-form>
  </div>
  <div class="questions">
    <Questions
      @displayTotal="totalDisplay"
      v-if="questions.questions.length !== 0 && clicked === true"
      :questions="questions.questions"
      :time="time"
      :mins="formData.time"
      :loading="loading"
    />

    <div v-if="loading === true" class="relative top-[300px]">
      <PulseLoader v-if="loading == true" />
    </div>
  </div>
</template>

<script setup>
import Questions from "./Questions.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { BounceLoader } from "vue3-spinner";
import { useMessage } from "naive-ui";
import { ref, reactive, onMounted } from "vue";

const formData = ref({
  request: "",
  time: undefined,
  total: undefined,
  category: undefined,
  subject: undefined,
});

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
          id: {
            type: SchemaType.STRING,
            description: "Unique identifier for the question",
          },
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

// schedules
const schedules = [
  {
    label: "30 minutes",
    value: 30,
  },
  {
    label: "20 minutes",
    value: 20,
  },
  {
    label: "10 minutes",
    value: 10,
  },
  {
    label: "5 minutes",
    value: 5,
  },
];
// category
const category = [
  {
    label: "medium",
    value: "medium",
  },
  {
    label: "hard",
    value: "hard",
  },
  {
    label: "easy",
    value: "easy",
  },
];

// user question
const questionText = ref("");

const time = ref({
  mins: 30,
  secs: 0,
});

const message = useMessage();

// loading state
const loading = ref(false);

const form = ref("");

const err_msg = ref([
  "Input cannot be empty.",
  "Please provide an information in the input field.",
  "Oops! You need to write something.",
  "The input field is required.",
  "You must enter a value to continue.",
]);
const res = ref("");
const clicked = ref(false);
const score = ref(0);

const questions = reactive({
  questions: [],
});

const handleGenerate = async (total, subject, category) => {
  if (questionText.value !== "") {
    clicked.value = true;
    // set loading to true
    loading.value = true;
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });
    console.log(questionText.value);

    const result = await model.generateContent(
      `Generate ${formData.total} unique questions on  ${questionText.value}.
      difficulty:${category}.
      subject: ${subject}
      Total number of questions: ${total}`
    );

    res.value = JSON.parse(result.response.text());
    if (res.value !== "") {
      console.log(res.value);
      questions.questions = res.value.results;
      loading.value = false;
    }

    questionText.value = "";
  } else {
    message.error(
      err_msg.value[Math.floor(Math.random() * err_msg.value.length)]
    );
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
