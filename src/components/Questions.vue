<template>
  <div class="questions mx-auto md:w-[73%]">
    <n-form @onsubmit="submitExam">
      <div
        class="question my-3"
        v-for="(question, index) in questions"
        :key="question.id"
      >
        <n-item-form>
          <div class="question text-slate-950 flex gap-5 items-center">
            <span
              class="px-2 py-1 border-blue-900 text-[10px] font-bold rounded-full"
              >{{ index + 1 }}.</span
            >
            <span>{{ question.question }}</span>
          </div>
          <div
            class="mx-10 px-2 border-slate-200 bg-white bg-opacity-[0.001] rounded-lg shadow-xl shadow-slate-200 py-2 my-5 border text-slate-950 flex flex-col gap-4"
          >
            <div
              class="flex items-center gap-1"
              v-for="(option, i) in question.options"
              :key="option"
            >
              <input
                type="radio"
                class="cursor-pointer inline-block align-middle mx-1"
                :name="question.question"
                :id="option + question.id"
                @change="handleChange(question.question, index)"
                :value="option"
              />
              <label :for="option + question.id" class="block cursor-pointer">
                {{ option }}
              </label>
            </div>
          </div>
        </n-item-form>
      </div>
      <div class="flex w-full md:w-[75%] justify-between fixed bottom-[20px]">
        <!-- <button
          type="submit"
          class="bg-blue-500  flex items-center gap-1 px-5 text-white rounded-md py-3"
        >
          Pause <i class="pi pi-pause align-middle text-[11px]"></i>
        </button> -->
        <button
          type="submit"
          @click="submitExam"
          class="bg-gray-900 px-5 right-10 flex items-center gap-2 absolute top-[-50px] text-green-500 font-bold rounded-md py-3"
        >
          Submit
          <i
            class="pi pi-circle font-bold align-middle relative top-[0.5px] text-green-500 text-[14px]"
          ></i>
        </button>
      </div>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps, computed, watch } from "vue";

const emit = defineEmits(["displayTotal"]);
const props = defineProps({
  questions: {
    required: true,
    type: Array,
  },
  time: {
    required: true,
    type: Object,
  },
  mins: {
    required: true,
    type: Number,
  },
});
const formData = reactive({});
const correctAnswer = ref([]);
const total = ref(0);
console.log(props.mins, 11);
const startExam = setInterval(() => {
  props.time.secs++;

  if (props.time.secs == 60) {
    
    console.log(props.mins, 11);

    props.time.secs = 0;
  }
  if (props.mins <= 0) {
    clearInterval(startExam);
  }
}, 1000);

// Submit Exam
const submitExam = () => {
  clearInterval(startExam);
  console.log("Working...");
};

watch(
  props.questions,
  () => {
    (formData.checkedValue = ""),
      (formData.answers = props.questions.map(
        (question) => question.correct_answer
      )),
      (formData.usersChoice = props.questions.map((question) => {
        return {
          question: question.question,
          selected: "",
        };
      }));
  },
  { immediate: true, deep: true }
);

const handleChange = (q, i) => {
  if (props.questions.length !== 0) {
    console.log(
      window.event.target.value,
      formData.usersChoice[0],
      formData.answers[i],
      i
    );
    formData.checkedValue = formData.usersChoice.find((data, index) => {
      if (i === index) {
        formData.usersChoice[index].selected = window.event.target.value;
      }
    });
    correctAnswer.value = formData.usersChoice.map((ans, im) => {
      return ans.selected === formData.answers[im];
    });
    total.value = correctAnswer.value.filter((correct, i) => {
      return correct == true;
    }).length;

    emit("displayTotal", total.value);
  }
};

console.log(props.questions, formData.answers, formData.usersChoice);
</script>
