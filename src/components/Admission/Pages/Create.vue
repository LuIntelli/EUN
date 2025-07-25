<template>
  <div v-if="submitting" class="relative my-10 flex justify-center">
    <PulseLoader v-if="submitting" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Admission Page
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Hero Title" path="hero_title">
        <n-input v-model:value="formData.hero_title" placeholder="Hero Title" />
      </n-form-item>
      <n-form-item label="Hero Sub Title" path="hero_subtitle">
        <n-input
          v-model:value="formData.hero_subtitle"
          placeholder="Hero Sub Title"
        />
      </n-form-item>
      <n-form-item
        label="Get Started Description"
        path="get_started_description"
      >
        <n-input
          v-model:value="formData.get_started_description"
          placeholder="Get Started Description"
        />
      </n-form-item>
      <n-form-item label="Process Title" path="process_title">
        <n-input
          v-model:value="formData.process_title"
          placeholder="Process Title"
        />
      </n-form-item>
      <n-form-item label="Why Choose Description" path="why_choose_description">
        <n-input
          v-model:value="formData.why_choose_description"
          placeholder="Why Choose Description"
        />
      </n-form-item>
      <n-form-item label="Why Choose Quote" path="why_choose_quote">
        <n-input
          v-model:value="formData.why_choose_quote"
          placeholder="Why Choose Quote"
        />
      </n-form-item>
      <n-form-item label="Why Choose Title" path="why_choose_title">
        <n-input
          v-model:value="formData.why_choose_title"
          placeholder="Why Choose Title"
        />
      </n-form-item>
      <n-form-item label="Get Started Title" path="get_started_title">
        <n-input
          v-model:value="formData.get_started_title"
          placeholder="Get Started Title"
        />
      </n-form-item>
      <n-form-item
        label="Hero Background"
        path="hero_background"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange1"
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
        <span v-if="photoPreview1" class="block mt-2">
          <img :src="photoPreview1" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="Why Choose Image 1"
        path="why_choose_image1"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange2"
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
        <span v-if="photoPreview2" class="block mt-2">
          <img :src="photoPreview2" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="Why Choose Image 2"
        path="why_choose_image2"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange3"
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
        <span v-if="photoPreview3" class="block mt-2">
          <img :src="photoPreview3" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="Get Started Background"
        path="get_started_background"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange4"
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
        <span v-if="photoPreview4" class="block mt-2">
          <img :src="photoPreview4" class="h-24 w-24 object-cover rounded-lg" />
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

import { createAdmissionPage } from "@/services/Admission";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photoFile1 = ref(null);
const photoPreview1 = ref(null);
const photoFile2 = ref(null);
const photoPreview2 = ref(null);
const photoFile3 = ref(null);
const photoPreview3 = ref(null);
const photoFile4 = ref(null);
const photoPreview4 = ref(null);

const formData = reactive({
  get_started_description: "",
  get_started_title: "",
  why_choose_quote: "",
  process_title: "",
  why_choose_description: "",
  why_choose_title: "",
  hero_subtitle: "",
  hero_title: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

// Handle image select
const handlePhotoChange1 = (options) => {
  const file = options.file.file;
  photoFile1.value = file;
  photoPreview1.value = URL.createObjectURL(file);
};
const handlePhotoChange2 = (options) => {
  const file = options.file.file;
  photoFile2.value = file;
  photoPreview2.value = URL.createObjectURL(file);
};
const handlePhotoChange3 = (options) => {
  const file = options.file.file;
  photoFile3.value = file;
  photoPreview3.value = URL.createObjectURL(file);
};
const handlePhotoChange4 = (options) => {
  const file = options.file.file;
  photoFile4.value = file;
  photoPreview4.value = URL.createObjectURL(file);
};

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    if (photoFile1.value) {
      formData["hero_background"] = photoFile1.value;
    }
    if (photoFile2.value) {
      formData["why_choose_image1"] = photoFile2.value;
    }
    if (photoFile3.value) {
      formData["why_choose_image2"] = photoFile3.value;
    }
    if (photoFile4.value) {
      formData["get_started_background"] = photoFile4.value;
    }

    console.log("Start submitting...", formData);
    await createAdmissionPage(formData);
    message.success("Updated successfully");
    router.push("/admission-page");
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

// Rules
const rules = {
  hero_title: [
    { required: true, message: "Hero title is required", trigger: "blur" },
  ],
  hero_subtitle: [
    {
      required: true,
      message: "Hero Sub Title is required",
      trigger: "blur",
    },
  ],
  why_choose_quote: [
    {
      required: true,
      message: "Why Choose Quote is required",
      trigger: "blur",
    },
  ],
  why_choose_title: [
    {
      required: true,
      message: "Why Choose Title is required",
      trigger: "blur",
    },
  ],
  why_choose_description: [
    {
      required: true,
      message: "Why Choose Description is required",
      trigger: "blur",
    },
  ],
  process_title: [
    {
      required: true,
      message: "Process Title is required",
      trigger: "blur",
    },
  ],
  get_started_title: [
    {
      required: true,
      message: "Get Started Title is required",
      trigger: "blur",
    },
  ],

  get_started_description: [
    {
      required: true,
      message: "Get Started Description is required",
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
  hero_background: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("Hero Background is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  why_choose_image1: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("Why Choose Image 1 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  why_choose_image2: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("Why Choose Image 2 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  get_started_background: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("Get started background image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
