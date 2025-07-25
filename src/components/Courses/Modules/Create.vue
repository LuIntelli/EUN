<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Course Module
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Course" path="course">
        <n-select
          v-model:value="formData.course"
          :options="courseOptions"
          placeholder="2"
          :loading="loadingData"
          filterable
        />
      </n-form-item>

      <n-form-item label="Course Name" path="course_name">
        <n-input
          v-model:value="formData.course_name"
          placeholder="Entrepreneurship Management"
        />
      </n-form-item>

      <n-form-item label="Description" path="description">
        <n-input v-model:value="formData.description" placeholder="" />
      </n-form-item>
      <n-form-item label="Name" path="name">
        <n-input
          v-model:value="formData.name"
          placeholder="Intro to Programming"
        />
      </n-form-item>

      <n-form-item label="Code" path="code">
        <n-input v-model:value="formData.code" placeholder="CS 101" />
      </n-form-item>
      <n-form-item label="Credit Units" path="credit_units">
        <n-input v-model:value="formData.credit_units" placeholder="2" />
      </n-form-item>
      <n-form-item label="Semester" path="semester">
        <n-input v-model:value="formData.semester" placeholder="1st" />
      </n-form-item>
      <n-form-item label="level" path="level">
        <n-input
          type="number"
          v-model:value="formData.level"
          placeholder="100"
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
      <n-form-item label="Is Active" path="is_active">
        <n-switch v-model:value="formData.is_active" />
      </n-form-item>

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

import { createModule, listCourse } from "@/services/Courses";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const formData = reactive({
  level: "",
  course_name: "",
  course: null,
  name: "",
  code: "",
  description: "",
  credit_units: "",
  semester: "",
  created_at: null,
  updated_at: null,
  is_active: false,
});

// const faculties = ref([]);
const courseOptions = ref([]);
const loadingData = ref(false);
// const loadingDepartment = ref(false);

onMounted(async () => {
  loadingData.value = true;
  try {
    // faculties.value = await listFaculties();
    const courseData = await listCourse();
    // console.log(courseData.results.data)

    courseOptions.value = courseData.results.map((course) => ({
      label: course.name || `courset ID ${course.id}`,
      value: Number(course.id),
      courseName: course.name,
      courseCode: course.code,
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
  () => formData.course,
  (newVal, oldVal) => {
    const selected = courseOptions.value.find((data) => data.value == newVal);
    if (selected) {
      formData.course_name = selected.courseName;
      // formData.code = selected.courseCode;
    }
    console.log(selected);
  }
);

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);
    await createModule(formData);
    message.success("Created successfully");
    router.push("/courses/modules");
  } catch (err) {
    console.error(err);
    message.error("Data not created");
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
  course_name: [
    {
      required: true,
      message: "Course name is required",
      trigger: "blur",
    },
  ],

  description: [
    {
      required: true,
      message: "Description is required",
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
  semester: [
    {
      required: true,
      message: "Semester is required",
      trigger: "blur",
    },
  ],

  code: [
    {
      required: true,
      message: "Code is required",
      trigger: "blur",
    },
  ],
  credit_units: [
    {
      required: true,
      message: "Category name is required",
      trigger: "blur",
    },
  ],
  course: [
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
  level: [
    {
      required: true,
      message: "level is required",
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
};
</script>
