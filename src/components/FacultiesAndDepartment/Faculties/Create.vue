<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Faculty
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Name" path="name">
        <n-input
          v-model:value="formData.name"
          placeholder="Faculty of Computing"
        />
      </n-form-item>
      <n-form-item label="Slug" path="slug">
        <n-input
          v-model:value="formData.slug"
          placeholder="faculty-of-computing"
        />
      </n-form-item>
      <n-form-item label="Short Description" path="short_description">
        <n-input
          v-model:value="formData.short_description"
          placeholder="Innovation through technology"
        />
      </n-form-item>
      <n-form-item label="Full Description" path="full_description">
        <n-input
          v-model:value="formData.full_description"
          placeholder="Our computing faculty prepares students for the digital economy with cutting-edge programs in AI, cybersecurity, and software engineering."
        />
      </n-form-item>
      <n-form-item label="Vision" path="vision">
        <n-input
          v-model:value="formData.vision"
          placeholder="To be Africa's leading tech education hub"
        />
      </n-form-item>
      <n-form-item label="Mission" path="mission">
        <n-input
          v-model:value="formData.mission"
          placeholder="Deliver world-class computing education through hands-on learning"
        />
      </n-form-item>
      <n-form-item label="Dean1's Name" path="dean_name">
        <n-input
          v-model:value="formData.dean_name"
          placeholder="Dr. Ada Lovelace"
        />
      </n-form-item>

      <n-form-item label="Dean's title" path="dean_title">
        <n-input
          v-model:value="formData.dean_title"
          placeholder="Professor of Computer Science"
        />
      </n-form-item>
      <n-form-item label="Dean's Message" path="dean_message">
        <n-input
          v-model:value="formData.dean_message"
          placeholder="We empower students to solve real-world problems through technology"
        />
      </n-form-item>

      <n-form-item label="Hand Book" path="handbook">
        <n-upload @change="handleHandBookChange_" accept=".pdf">
          <n-button>Upload Handbook</n-button>
        </n-upload>
        <!-- <n-input
          type="file"
          @change="handleHandBookChange_"
          v-model:value="formData.handbook"
          placeholder=""
        /> -->
      </n-form-item>
      <n-form-item label="Department Count" path="department_count">
        <n-input v-model:value="formData.department_count" placeholder="5" />
      </n-form-item>

      <n-form-item
        label="Icon Image"
        path="icon_image"
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
      <n-form-item
        label="Hero Background Image"
        path="hero_background"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange"
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
        <span v-if="photoPreview" class="block mt-2">
          <img :src="photoPreview" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="About Image 1"
        path="about_image1"
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
        label="About Image 2"
        path="about_image2"
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
        label="Dean's Photo"
        path="dean_photo"
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

import { createFaculty } from "@/services/facultiesAndDepartment";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photo = ref(null);
const Preview = ref(null);
const photoFile = ref(null);
const photoPreview = ref(null);
const photoFile1 = ref(null);
const photoPreview1 = ref(null);
const photoFile2 = ref(null);
const photoPreview2 = ref(null);
const photoFile3 = ref(null);
const photoPreview3 = ref(null);
const handBook = ref(null);
const handBookPreview = ref(null);

const formData = reactive({
  order: "",
  dean_message: "",
  department_count: "",
  dean_title: "",
  slug: "",
  name: "",
  short_description: "",
  full_description: "",
  vision: "",
  mission: "",
  dean_name: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

formData.handook;

// Handle image select
const handleHandBookChange_ = (options) => {
  const file = options.file.file;
  handBook.value = file;
  console.log(handBook.value);
  handBookPreview.value = URL.createObjectURL(file);
};
const handlePhotoChange_ = (options) => {
  const file = options.file.file;
  photo.value = file;
  Preview.value = URL.createObjectURL(file);
};
const handlePhotoChange = (options) => {
  const file = options.file.file;
  photoFile.value = file;
  photoPreview.value = URL.createObjectURL(file);
};
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

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    if (photo.value) {
      formData["icon_image"] = photo.value;
    }
    if (photoFile.value) {
      formData["hero_background"] = photoFile.value;
    }
    if (photoFile1.value) {
      formData["about_image1"] = photoFile1.value;
    }
    if (photoFile2.value) {
      formData["about_image2"] = photoFile2.value;
    }
    if (photoFile3.value) {
      formData["dean_photo"] = photoFile3.value;
    }
    if (handBook.value) {
      formData["handbook"] = handBook.value;
    }

    console.log("Start submitting...", formData);
    await createFaculty(formData);
    message.success("Created successfully");
    router.push("/faculties");
  } catch (err) {
    console.error(err);
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
  name: [{ required: true, message: "Name is required", trigger: "blur" }],
  slug: [
    {
      required: true,
      message: "Slug is required",
      trigger: "blur",
    },
  ],

  full_description: [
    {
      required: true,
      message: "Full description is required",
      trigger: "blur",
    },
  ],
  short_description: [
    {
      required: true,
      message: "Short description Text is required",
      trigger: "blur",
    },
  ],
  mission: [
    {
      required: true,
      message: "Mission is required",
      trigger: "blur",
    },
  ],
  vision: [
    {
      required: true,
      message: "Vision is required",
      trigger: "blur",
    },
  ],
  dean_name: [
    {
      required: true,
      message: "Dean's name is required",
      trigger: "blur",
    },
  ],
  dean_message: [
    {
      required: true,
      message: "Dean's message is required",
      trigger: "blur",
    },
  ],
  handbook: [
    {
      required: true,
      validator(_, value) {
        if (!handBook.value) {
          return new Error("Handbook is required");
        }
        if (handBook.value.type !== "application/pdf") {
          return new Error("Only PDF files are allowed");
        }
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],
  dean_title: [
    {
      required: true,
      message: "Dean's title is required",
      trigger: "blur",
    },
  ],

  department_count: [
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
      message: "Department count is required",
      trigger: "blur",
    },
  ],

  order: [
    {
      required: true,
      message: "Order is required",
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

  icon_image: [
    {
      required: true,
      validator(rule, value) {
        if (!photo.value) {
          return new Error("Icon image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  hero_background: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile.value) {
          return new Error("Hero background image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  about_image2: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile2.value) {
          return new Error("About Image 2 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  dean_photo: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile3.value) {
          return new Error("Deans photo is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  about_image1: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("About image 1 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
