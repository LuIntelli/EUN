<template>
  <div class="questions mx-auto md:w-[73%]">
    <n-form>
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
                :id="option"
                @change="handleChange(question.question, index)"
                :value="option"
              />
              <label :for="option" class="block cursor-pointer">
                {{ option }}
              </label>
            </div>
          </div>
        </n-item-form>
      </div>
      <div class="flex w-full md:w-[75%] justify-between fixed bottom-[20px]">
        <button
          type="submit"
          class="bg-blue-500 flex items-center gap-1 px-5 text-white rounded-md py-3"
        >
          Pause <i class="pi pi-pause align-middle text-[11px]"></i>
        </button>
        <button
          type="submit"
          class="bg-red-500 px-5 flex items-center gap-2 text-white rounded-md py-3 relative right-[20px]"
        >
          Submit
          <i
            class="pi pi-stop align-middle relative top-[0.5px] text-red-800 text-[14px]"
          ></i>
        </button>
      </div>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps, computed } from "vue";

const emit = defineEmits(["displayTotal"]);
const props = defineProps({
  questions: {
    required: true,
    type: Array,
  },
});

const correctAnswer = ref([]);
const total = ref(0);

const formData = reactive({
  checkedValue: "",
  answers: props.questions.map((question) => question.correct_answer),
  usersChoice: props.questions.map((question) => {
    return {
      question: question.question,
      selected: "",
    };
  }),
});
const handleChange = (q, i) => {
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
  correctAnswer.value = formData.usersChoice.map((ans, i) => {
    return ans.selected === formData.answers[i];
  });
  total.value = correctAnswer.value.filter((correct, i) => {
    return correct == true;
  }).length;

  emit("displayTotal", total.value);
};

console.log(props.questions, formData.answers, formData.usersChoice);
</script>
