<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Admission Steps
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

      <n-form-item label="Date updated" path="updated_at">
        <n-date-picker
          v-model:value="formData.updated_at"
          type="datetime"
          placeholder="Pick date updated"
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
        Update Admisson Step
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

import {
  AdmissionStepsDetails,
  editAdmissionSteps,
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
  updated_at: null,
  is_active: "false",
});

// Load Admission Step by ID
const fetchAdmissionStep = async () => {
  try {
    const id = route.params.id;
    const data = await AdmissionStepsDetails(id);
    Object.assign(formData, data.data);
  } catch (error) {
    message.error("Failed to load Admission step data");
  }
};

// Update Admission Step
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    await editAdmissionSteps(route.params.id, formData);
    message.success("Admission step updated successfully");
    router.push("/admission-steps");
  } catch (err) {
    console.error(err);
    message.error("Admission step not updated");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    submitting.value = false;
  }
};

onMounted(fetchAdmissionStep);

// Rules
const rules = {};

/*
{
  title: [{ required: true, message: "Title is required", trigger: "blur" }],
  description: [
    { required: true, message: "Content is required", trigger: "blur" },
  ],

  order: [{ required: true, message: "Order is required", trigger: "blur" }],

  created_at: [
    {
      required: true,
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
      required: true,
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
      required: true,
      type: "boolean",
      message: "Is featured is required",
      trigger: "change",
    },
  ],
};
*/
</script>
