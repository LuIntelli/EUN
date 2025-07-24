<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Core Values
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="About Page" path="about_page">
        <n-input v-model:value="formData.about_page" placeholder="2" />
      </n-form-item>
      <n-form-item label="About Page Title" path="about_page_title">
        <n-input
          v-model:value="formData.about_page_title"
          placeholder="Africa's STEM Leadership Hub"
        />
      </n-form-item>
      <n-form-item label="Title" path="title">
        <n-input
          v-model:value="formData.title"
          placeholder="Next-Gen Tech Education Hub"
        />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Developing world-class talent in AI, blockchain and cloud computing with industry partnerships"
        />
      </n-form-item>

      <n-form-item label="Order" path="order">
        <n-input v-model:value="formData.order" placeholder="1" type="number" />
      </n-form-item>

      <n-form-item
        label="Icon"
        path="icon"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange_"
        >
          <n-upload-dragger
            style="border-radius: 20px; padding: 20px; text-align: center"
          >
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon />
              </n-icon>
            </div>

            <n-text class="text-[rgba(71,84,103,1)]" style="font-size: 16px">
              <span class="text-[rgba(80,48,229,1)] font-[600]"
                >Click to upload
              </span>
              <span class="text-[rgba(71,84,103,1)] font-[400]">
                or drag to upload</span
              >
            </n-text>

            <n-p depth="3" style="margin: 8px 0 0 0; font-weight: 500">
              SVG, PNG, JPG or GIF (max. 1440x600px)
            </n-p>
          </n-upload-dragger>
        </n-upload>
        <span v-if="Preview" class="block mt-2">
          <img :src="Preview" class="h-24 w-24 object-cover rounded-lg" />
        </span>
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

import { editCoreValue, coreValueDetails } from "@/services/Pages";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photo = ref(null);
const Preview = ref(null);

const formData = reactive({
  about_page_title: "",
  about_page: "",
  title: "",
  description: "",
  order: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

// Load Data by ID
const fetchData = async () => {
  try {
    const id = route.params.id;
    const data = await coreValueDetails(id);
    Object.assign(formData, data.data);
    Preview.value = formData["icon"];
    delete formData.icon;
  } catch (error) {
    message.error("Failed to load  data");
  }
};

// Handle image select
const handlePhotoChange_ = (options) => {
  const file = options.file.file;
  photo.value = file;
  Preview.value = URL.createObjectURL(file);
};

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    // Build FormData manually (required for file upload)
    const payload = new FormData();

    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== "") {
        payload.append(key, formData[key]);
      }
    }
    if (photo.value) {
      payload.append("icon", photo.value);
    }

    console.log("Start submitting...", payload);
    await editCoreValue(route.params.id, payload);
    message.success("updated successfully");
    router.push("/page/core-values");
  } catch (err) {
    console.error(err);
    message.error("Data not updated");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    submitting.value = false;
  }
};

onMounted(fetchData);

// Rules
const rules = {};
</script>
