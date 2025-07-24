<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Course
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
          placeholder="Advanced Computer Science"
        />
      </n-form-item>
      <n-form-item label="Code" path="code">
        <n-input v-model:value="formData.code" placeholder="CS401" />
      </n-form-item>
      <n-form-item label="Short Description" path="short_description">
        <n-input
          v-model:value="formData.short_description"
          placeholder="Master cutting-edge computing technologie"
        />
      </n-form-item>
      <n-form-item label="Full Description" path="full_description">
        <n-input
          v-model:value="formData.full_description"
          placeholder="This program covers AI, blockchain, and cloud computing with hands-on projects. Students graduate with industry certifications and portfolio-ready work."
        />
      </n-form-item>
      <n-form-item label="faculty" path="faculty">
        <n-input
          v-model:value="formData.faculty"
          placeholder="1"
          type="number"
        />
      </n-form-item>
      <n-form-item label="Department" path="department">
        <n-select
          v-model:value="formData.department"
          :options="departmentOptions"
          placeholder="2"
          :loading="loadingData"
          filterable
        />
      </n-form-item>
      <n-form-item label="Degree Type" path="degree_type">
        <n-input v-model:value="formData.degree_type" placeholder="BSc" />
      </n-form-item>
      <n-form-item label="Duration Years" path="duration_years">
        <n-input v-model:value="formData.duration_years" placeholder="4" />
      </n-form-item>
      <n-form-item label="Entry Level" path="entry_level">
        <n-input
          v-model:value="formData.entry_level"
          placeholder="undergraduate"
        />
      </n-form-item>
      <n-form-item label="Mode Of Study" path="mode_of_study">
        <n-input
          v-model:value="formData.mode_of_study"
          placeholder="full_time"
        />
      </n-form-item>
      <n-form-item label="Career Prospects" path="career_prospects">
        <n-input
          v-model:value="formData.career_prospects"
          placeholder="Software Engineer, Data Scientist, Cybersecurity Analyst"
        />
      </n-form-item>
      <n-form-item label="Admission Requirements" path="admission_requirements">
        <n-input
          v-model:value="formData.admission_requirements"
          placeholder="WAEC Result with credits in Math and Physics"
        />
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
        label="Hero Image"
        path="hero_image"
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
        label="Curriculum Pdf"
        path="curriculum_pdf"
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

      <div class="flex items-center gap-2">
        <n-form-item label="Is Nuc_Accredited" path="is_nuc_accredited">
          <n-switch v-model:value="formData.is_nuc_accredited" />
        </n-form-item>
        <n-form-item label="Is Featured" path="is_featured">
          <n-switch v-model:value="formData.is_featured" />
        </n-form-item>
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
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css"; //

import { createCourse } from "@/services/Courses";
import {
  listDepartments,
  listFaculties,
} from "@/services/facultiesAndDepartment";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photoFile = ref(null);
const photoPreview = ref(null);
const photoFile1 = ref(null);
const photoPreview1 = ref(null);
const photoFile2 = ref(null);
const photoPreview2 = ref(null);

const formData = reactive({
  short_description: "",
  full_description: "",
  faculty: "",
  name: "",
  code: "",
  degree_type: "",
  duration_years: "",
  entry_level: "",
  mode_of_study: "",
  career_prospects: "",
  admission_requirements: "",
  department: "",
  is_featured: "false",
  is_nuc_accredited: false,
});

const faculties = ref([]);
const departmentOptions = ref([]);
const loadingData = ref(false);
// const loadingDepartment = ref(false);

onMounted(async () => {
  loadingData.value = true;
  try {
    faculties.value = await listFaculties();
    const departmentData = await listDepartments();
    // console.log(departmentData.results.data)

    departmentOptions.value = departmentData.results.data.map((department) => ({
      label: department.name || `Department ID ${department.id}`,
      value: Number(department.id),
      faculty: department.faculty_name,
    }));
  } catch (err) {
    console.error("Error loading data", err);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loadingData.value = false;
  }
});

watch(
  () => formData.department,
  (newVal, oldVal) => {
    const selected = departmentOptions.value.find(
      (department) => department.value === newVal
    );
    if (selected) {
      //  formData.department_name = selected.label;
      formData.faculty_name = selected.faculty;
      faculties.value.results.data.forEach((data) => {
        if (data.name === formData.faculty_name)
          formData.faculty = Number(data.id);
      });
      console.log(selected);
    }
  }
);

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

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    if (photoFile.value) {
      formData["icon_image"] = photoFile.value;
    }
    if (photoFile1.value) {
      formData["hero_image"] = photoFile1.value;
    }
    if (photoFile2.value) {
      formData["curriculum_pdf"] = photoFile2.value;
    }

    console.log("Start submitting...", formData);
    await createCourse(formData);
    message.success("Created successfully");
    router.push("/courses/lists");
  } catch (err) {
    console.error(err);
    message.error("Data not created");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    submitting.value = false;
  }
};

// Rules
const rules = {
  department: [
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
  faculty: [
    {
      required: true,
      message: "faculty is required",
      trigger: "blur",
    },
  ],
  entry_level: [
    {
      required: true,
      message: "Entry level is required",
      trigger: "blur",
    },
  ],
  degree_type: [
    {
      required: true,
      message: "Degree type is required",
      trigger: "blur",
    },
  ],
  duration_years: [
    {
      required: true,
      message: "Duration years is required",
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
  code: [
    {
      required: true,
      message: "code is required",
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
  mode_of_study: [
    {
      required: true,
      message: "Mode of study is required",
      trigger: "blur",
    },
  ],
  short_description: [
    {
      required: true,
      message: "Short description is required",
      trigger: "blur",
    },
  ],
  admission_requirements: [
    {
      required: true,
      message: "Admission requirements is required",
      trigger: "blur",
    },
  ],
  career_prospects: [
    {
      required: true,
      message: "Career prospects is required",
      trigger: "blur",
    },
  ],

  is_featured: [
    {
      required: false,
      type: "boolean",
      message: "Is Featured is required",
      trigger: "change",
    },
  ],
  is_nuc_accredited: [
    {
      required: false,
      type: "boolean",
      message: "Is Nuc accredited is required",
      trigger: "change",
    },
  ],

  icon_image: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile.value) {
          return new Error("Icon image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  hero_image: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("Hero image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  curriculum_pdf: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile2.value) {
          return new Error("Curriculum pdf is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
