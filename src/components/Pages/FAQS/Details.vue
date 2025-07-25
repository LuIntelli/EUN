<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update FAQS
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Question" path="question">
        <n-input
          v-model:value="formData.question"
          placeholder="What programs does EUN offer?"
        />
      </n-form-item>
      <n-form-item label="Answer" path="answer">
        <n-input
          v-model:value="formData.answer"
          placeholder="EUN offers a wide range of undergraduate and postgraduate programs in science, arts, business, and technology, designed to prepare students for global impact."
        />
      </n-form-item>
      <n-form-item label="Page" path="page">
        <n-input v-model:value="formData.page" placeholder="1" type="number" />
      </n-form-item>
      <n-form-item label="Page Display" path="page_display">
        <n-input
          v-model:value="formData.page_display"
          placeholder="1"
          type="number"
        />
      </n-form-item>
      <n-form-item label="Order" path="order">
        <n-input v-model:value="formData.order" placeholder="1" type="number" />
      </n-form-item>

      <n-form-item label="Creation Date" path="created_at">
        <n-date-picker
          v-model:value="formData.created_at"
          type="datetime"
          placeholder="Pick creation date"
          class="w-full"
        />
      </n-form-item>

      <n-form-item label="Date updated" path="updated_at">
        <n-date-picker
          v-model:value="formData.updated_at"
          type="datetime"
          placeholder="Pick date"
          class="w-full"
        />
      </n-form-item>

      <div class="flex items-center gap-2">
        <div class="flex items-center gap-5">
          <n-form-item label="Is Active" path="is_active">
            <n-switch v-model:value="formData.is_active" />
          </n-form-item>
        </div>
      </div>

      <button
        type="submit"
        class="py-3 text-white bg-[rgba(43,54,116,1)] rounded-xl font-medium text-center block w-full"
        :loading="submitting"
        @click="handleSubmit"
      >
        Update
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css"; //

import { editFAQS, faqsDetails } from "@/services/Pages";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const formData = reactive({
  question: "",
  answer: "",
  page: "",
  page_display: "",
  order: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

// Load Data by ID
const fetchData = async () => {
  try {
    const id = route.params.id;
    const data = await faqsDetails(id);
    Object.assign(formData, data.data);
  } catch (error) {
    message.error("Failed to load  data");
  }
};

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    if (photo.value) {
      formData["image"] = photo.value;
    }

    console.log("Start submitting...", formData);
    await editFAQS(route.params.id, formData);
    message.success("updated successfully");
    router.push("/page/faqs");
  } catch (err) {
    console.error(err);
    message.error("Data not updated");
    for (const key in err.response?.data) {
      if (
        (err.response?.data)[key] &&
        Array.isArray((err.response?.data)[key])
      ) {
        err.response?.data[key].forEach((msg) => {
          message.error(`${key}: ${msg}`);
        });
      } else {
        message.error((err.response?.data)[key]);
      }
    }
  } finally {
    submitting.value = false;
  }
};

onMounted(fetchData);

// Rules
const rules = {
  answer: [
    {
      required: false,
      message: "Answer is required",
      trigger: "blur",
    },
  ],
  question: [
    {
      required: false,
      message: "Question is required",
      trigger: "blur",
    },
  ],
  order: [
    {
      required: false,
      message: "Order is required",
      trigger: "blur",
    },
  ],
  page: [
    {
      required: false,
      message: "Page is required",
      trigger: "blur",
    },
  ],
  page_display: [
    {
      required: false,
      message: "Page Display is required",
      trigger: "blur",
    },
  ],

  created_at: [
    {
      required: false,
      validator(_, value) {
        if (!value) return new Error("Created date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],

  updated_at: [
    {
      required: false,
      validator(_, value) {
        if (!value) return new Error("Updated date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],

  is_active: [
    {
      required: false,
      type: "boolean",
      message: "Is active is required",
      trigger: "change",
    },
  ],
};
</script>
