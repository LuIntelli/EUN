<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Admission Requirements Items
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Requirement" path="requirement">
        <n-select
          v-model:value="formData.requirement"
          :options="admissionRequirementsOptions"
          placeholder="2"
          :loading="loadingData"
          filterable
        />
      </n-form-item>

      <n-form-item label="Requirement Title" path="requirement_title">
        <n-input
          v-model:value="formData.requirement_title"
          placeholder="Requirement Title"
        />
      </n-form-item>
      <n-form-item label="Order" path="order">
        <n-input v-model:value="formData.order" placeholder="2" />
      </n-form-item>
      <n-form-item label="Text" path="text">
        <n-input v-model:value="formData.text" placeholder="Text" />
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
        Create Item Requirement
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
  createAdmissionRequirementsItem,
  listAdmissionRequirements,
} from "@/services/Admission";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const formData = reactive({
  order: "",
  requirement: "",
  requirement_title: "",
  text: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

// const faculties = ref([]);
const admissionRequirementsOptions = ref([]);
const loadingData = ref(false);
// const loadingDepartment = ref(false);

onMounted(async () => {
  loadingData.value = true;
  try {
    // faculties.value = await listFaculties();
    const data = await listAdmissionRequirements();
    console.log(data.results.data);

    admissionRequirementsOptions.value = data.results.data.map((res) => ({
      label: res.title || `Requirement ID ${res.id}`,
      value: Number(res.id),
      title: res.title,
    }));
  } catch (err) {
    console.error("Error loading data", err);
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
    loadingData.value = false;
  }
});

watch(
  () => formData.requirement,
  (newVal, oldVal) => {
    const selected = admissionRequirementsOptions.value.find(
      (data) => data.value == newVal
    );
    if (selected) {
      formData.requirement_title = selected.title;
      // formData.code = selected.courseCode;
    }
    console.log(selected);
  }
);

// Create Item Requirements
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    await createAdmissionRequirementsItem(formData);
    message.success("Important date created successfully");
    router.push("/admission-requirements-items");
  } catch (err) {
    console.error(err);
    message.error("Item requirements not created");
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

// Rules
const rules = {
  text: [{ required: true, message: "Text is required", trigger: "blur" }],
  requirement_title: [
    {
      required: true,
      message: "Requirement itle is required",
      trigger: "blur",
    },
  ],
  requirement: [
    {
      validator(rule, value) {
        const number = Number(value);
        if (!value || isNaN(number)) {
          return Promise.reject("Must be a valid number");
        }
        return Promise.resolve();
      },
      trigger: "blur",
    },
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
      required: false,
      type: "boolean",
      message: "Is active is required",
      trigger: "change",
    },
  ],
};
</script>
