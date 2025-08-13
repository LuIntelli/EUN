<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Event Category
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Name" path="name">
        <n-input v-model:value="formData.name" placeholder="Tech Conference" />
      </n-form-item>
      <n-form-item label="Slug" path="slug">
        <n-input v-model:value="formData.slug" placeholder="tech-conference" />
      </n-form-item>

      <n-form-item label="Color" path="color">
        <n-input v-model:value="formData.color" placeholder="eg. #28a745" />
      </n-form-item>
      <n-form-item label="Event Count" path="event_count">
        <n-input
          type="number"
          v-model:value="formData.event_count"
          placeholder="0"
        />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Technology workshops and hackathons"
        />
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
        Create
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

import { createEventCategory } from "@/services/Event";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const formData = reactive({
  color: "",
  event_count: "",
  name: "",
  slug: "",
  description: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);
    await createEventCategory(formData);
    message.success("Created successfully");
    router.push("/event/category");
  } catch (err) {
    console.error(err);
    message.error(err.message || "Data not created");
    for (const key in err.response?.data) {
      if (
        (err.response?.data)[key] &&
        Array.isArray((err.response?.data)[key])
      ) {
        err.response?.data[key].forEach((msg) => {
          message.error(`${key}: ${msg}`);
        });
      } else {
        message.error((err.response?.data).message || "An error occurred");
        break;
      }
    }
  } finally {
    submitting.value = false;
  }
};

// Rules
const rules = {
  description: [
    {
      required: true,
      message: "Description Text is required",
      trigger: "blur",
    },
  ],
  event_count: [
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
    {
      required: true,
      message: "Event count is required",
      trigger: "blur",
    },
  ],
  name: [
    {
      required: true,
      message: "Name is required",
      trigger: "blur",
    },
  ],
  slug: [
    {
      required: true,
      message: "Slug is required",
      trigger: "blur",
    },
  ],
  color: [
    {
      required: true,
      message: "Color is required",
      trigger: "blur",
    },
  ],

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
