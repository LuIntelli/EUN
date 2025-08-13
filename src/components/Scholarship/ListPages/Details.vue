<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Scholarship List Page
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Hero Title" path="hero_title">
        <n-input
          v-model:value="formData.hero_title"
          class=""
          placeholder="Unlock Your Potential"
        />
      </n-form-item>
      <n-form-item label="Hero Sub Title" path="hero_subtitle">
        <n-input
          v-model:value="formData.hero_subtitle"
          class=""
          placeholder="Join a vibrant academic community where innovation meets opportunity."
        />
      </n-form-item>

      <n-form-item
        label="Hero Background"
        path="hero_background"
        class="w-full border p-3 rounded-xl my-5"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handleImageChange"
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
        <span v-if="imagePreview2" class="block mt-2">
          <img :src="imagePreview2" class="h-24 w-24 object-cover rounded-lg" />
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
      <n-form-item label="Updated Date" path="updated_at">
        <n-date-picker
          v-model:value="formData.updated_at"
          type="datetime"
          placeholder="Pick date updated"
          class="w-full"
        />
      </n-form-item>

      <div class="flex items-center gap-5">
        <n-form-item label="Is Active" path="is_active">
          <n-switch v-model:value="formData.is_active" />
        </n-form-item>
      </div>

      <button
        type="submit"
        class="py-3 text-white bg-[rgba(43,54,116,1)] rounded-xl font-medium text-center block w-full"
        :loading="submitting"
        @click="handleSubmit"
      >
        Update Scholarship List Page
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import {
  editScholarshipListPage,
  scholarshipListsPageDetails,
} from "@/services/Scholarship";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const imageFile2 = ref(null);
const imagePreview2 = ref(null);

const formData = reactive({
  hero_title: "",
  hero_subtitle: "",
  is_active: false,
  created_at: null,
  updated_at: null,
});
// hero_background
const handleImageChange = (options) => {
  const file = options.file.file;
  imageFile2.value = file;
  imagePreview2.value = URL.createObjectURL(file);
};

// Load Data by ID
const fetchData = async () => {
  try {
    const id = route.params.id;
    const data = await scholarshipListsPageDetails(id);
    Object.assign(formData, data.data);
    imagePreview2.value = formData["hero_background"];
    delete formData["hero_background"];
  } catch (error) {
    message.error("Failed to load  data");
  }
};
// Submit
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();
    if (imageFile2.value) {
      formData["hero_background"] = imageFile2.value;
    }
    await editScholarshipListPage(route.params.id, formData);
    message.success("data updated successfully");
    router.push("/scholarship/list-page");
  } catch (err) {
    console.error(err);
    message.error("data not updated...");
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

onMounted(fetchData);

// Rules
const rules = {};
</script>
