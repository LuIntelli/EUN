<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Important Date
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Title" path="title">
        <n-input v-model:value="formData.title" class=" " placeholder="Title" />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Description"
        />
      </n-form-item>
      <n-form-item label="Order" path="order">
        <n-input v-model:value="formData.order" placeholder="Order" />
      </n-form-item>

      <n-form-item label="Creation Date" path="created_at">
        <n-date-picker
          v-model:value="formData.created_at"
          type="datetime"
          placeholder="Pick creation date"
          class="w-full"
        />
      </n-form-item>
      <n-form-item label="Date" path="date">
        <n-date-picker
          v-model:value="formData.date"
          type="datetime"
          placeholder="Choose Date"
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
        Update Important Date
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css"; //

import {
  admissionImportantDatesDetails,
  editAdmissionImportantDates,
} from "@/services/Admission";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const formData = reactive({
  title: "",
  order: "",
  description: "",
  created_at: null,
  date: null,
  updated_at: null,
  is_active: "false",
});

watch(
  () => formData.date,
  (newVal) => {
    if (newVal) {
      formData.date = new Date(newVal).toISOString().split("T")[0];
      console.log(formData.date);
    } else {
      formData.date = null;
    }
  }
);

// Load Important Date by ID
const fetchImportantDate = async () => {
  try {
    const id = route.params.id;
    const data = await admissionImportantDatesDetails(id);
    Object.assign(formData, data.data);

    console.log(data.data);
  } catch (error) {
    message.error("Failed to load Important Date data");
  }
};

// Update Important Date
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    await editAdmissionImportantDates(route.params.id, formData);
    message.success("Important date updated successfully");
    router.push("/important-dates");
  } catch (err) {
    console.error(err);
    message.error("Important date not updated");
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

onMounted(fetchImportantDate);

// Rules
const rules = {};
</script>
