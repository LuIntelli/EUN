<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Staff
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <!-- <n-form-item label="Full Name" path="full_name">
        <n-input
          v-model:value="formData.full_name"
          class=""
          placeholder="Dr. Amina Yusuf"
        />
      </n-form-item> -->
      <n-form-item label="First Name" path="first_name">
        <n-input
          class=""
          v-model:value="formData.first_name"
          placeholder="Amina"
        />
      </n-form-item>
      <n-form-item label="Last Name" path="last_name">
        <n-input
          class=""
          v-model:value="formData.last_name"
          placeholder="Yusuf"
        />
      </n-form-item>
      <n-form-item label="Middle Name" path="middle_name">
        <n-input class="" v-model:value="formData.middle_name" placeholder="" />
      </n-form-item>
      <n-form-item label="Slug" path="slug">
        <n-input
          class=""
          v-model:value="formData.slug"
          placeholder="amina-yusuf"
        />
      </n-form-item>
      <n-form-item label="Title" path="title">
        <n-input class="" v-model:value="formData.title" placeholder="Dr." />
      </n-form-item>

      <n-form-item label="Position" path="position">
        <n-select
          v-model:value="formData.position"
          :options="positionOptions"
          placeholder="Faculty of Engineering"
          :loading="loadingData"
          filterable
        />
      </n-form-item>
      <n-form-item label="Position Title" path="position_title">
        <n-input
          class=""
          v-model:value="formData.position_title"
          placeholder="Dean of Faculty"
        />
      </n-form-item>
      <n-form-item label="Faculty" path="faculty">
        <n-input class="" v-model:value="formData.faculty" placeholder="2" />
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
      <!-- <n-form-item label="Department" path="department">
        <n-input
          class=""
          v-model:value="formData.department"
          placeholder="2"
        />
      </n-form-item> -->
      <n-form-item label="Faculty Name" path="faculty_name">
        <n-input
          class=""
          v-model:value="formData.faculty_name"
          placeholder="Placeholder Faculty"
        />
      </n-form-item>
      <n-form-item label="Department Name" path="department_name">
        <n-input
          class=""
          v-model:value="formData.department_name"
          placeholder="Department of Computer Science"
        />
      </n-form-item>
      <n-form-item label="Staff Type" path="staff_type">
        <n-input
          class=""
          v-model:value="formData.staff_type"
          placeholder="leadership"
        />
      </n-form-item>
      <n-form-item label="Email" path="email">
        <n-input
          class=""
          v-model:value="formData.email"
          placeholder="amina.yusuf@eun.edu.ng"
        />
      </n-form-item>
      <n-form-item label="Phone" path="phone">
        <n-input
          class=""
          v-model:value="formData.phone"
          placeholder="08012345678"
        />
      </n-form-item>
      <n-form-item label="Office Location" path="office_location">
        <n-input
          class=""
          v-model:value="formData.office_location"
          placeholder="Science Block, Room 204"
        />
      </n-form-item>

      <n-form-item label="Bio" path="bio">
        <n-input
          class=""
          v-model:value="formData.bio"
          placeholder="A visionary academic with over 15 years of experience in AI and robotics."
        />
      </n-form-item>
      <n-form-item label="Qualifications" path="qualifications">
        <n-input
          class=""
          v-model:value="formData.qualifications"
          placeholder="PhD in Artificial Intelligence, MSc in Computer Science, BSc in Mathematics."
        />
      </n-form-item>
      <n-form-item label="Research Interests" path="research_interests">
        <n-input
          class=""
          v-model:value="formData.research_interests"
          placeholder="Artificial Intelligence, Machine Learning, Robotics"
        />
      </n-form-item>
      <n-form-item label="Publications" path="publications">
        <n-input
          class=""
          v-model:value="formData.publications"
          placeholder="Published over 30 research papers in international journals on AI and robotics."
        />
      </n-form-item>
      <n-form-item
        label="Photo"
        path="photo"
        class="w-full border p-3 rounded-xl my-5"
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
        <n-form-item label="Is Featured" path="is_featured">
          <n-switch v-model:value="formData.is_featured" />
        </n-form-item>
        <n-form-item label="Is Leadership" path="is_leadership">
          <n-switch v-model:value="formData.is_leadership" />
        </n-form-item>
      </div>

      <button
        type="submit"
        class="py-3 text-white bg-[rgba(43,54,116,1)] rounded-xl font-medium text-center block w-full"
        :loading="submitting"
        @click="handleSubmit"
      >
        Create Staff
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { createStaff, listStaffPosition } from "@/services/Staff";
import {
  listDepartments,
  listFaculties,
} from "@/services/facultiesAndDepartment";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photoFile2 = ref(null);
const photoPreview2 = ref(null);

const formData = reactive({
  slug: "",
  title: "",
  phone: "",
  staff_type: "",
  department_name: "",
  department: null,
  faculty_name: "",
  faculty: "",
  position_title: "",
  position: null,
  middle_name: "",
  last_name: "",
  first_name: "",
  full_name: "",
  email: "",
  office_location: "",
  bio: "",
  description: "",
  publications: "",
  qualifications: "",
  research_interests: "",
  is_active: false,
  is_featured: false,
  is_leadership: false,
  created_at: null,
  updated_at: null,
});

const faculties = ref([]);
const positionOptions = ref([]);
const departmentOptions = ref([]);
const loadingData = ref(false);
// const loadingDepartment = ref(false);

onMounted(async () => {
  loadingData.value = true;
  try {
    faculties.value = await listFaculties();
    const res = await listStaffPosition();
    const departmentData = await listDepartments();
    // console.log(departmentData.results.data)

    departmentOptions.value = departmentData.results.data.map((department) => ({
      label: department.name || `Department ID ${department.id}`,
      value: Number(department.id),
      faculty: department.faculty_name,
    }));
    positionOptions.value = res.results.data.map((positon) => ({
      label: positon.title || `Position ID ${positon.id}`,
      value: Number(positon.id),
    }));
  } catch (err) {
    console.error("Error loading staff data", err);
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
    loadingData.value = false;
  }
});

watch(
  () => formData.position,
  (newVal, oldVal) => {
    const selected = positionOptions.value.find(
      (position) => position.value === newVal
    );
    formData.position_title = selected.label;
    console.log(selected);
  }
);
watch(
  () => formData.department,
  (newVal, oldVal) => {
    const selected = departmentOptions.value.find(
      (department) => department.value === newVal
    );
    formData.department_name = selected.label;
    formData.faculty_name = selected.faculty;
    faculties.value.results.data.forEach((data) => {
      if (data.name === formData.faculty_name)
        formData.faculty = Number(data.id);
    });
    console.log(selected);
  }
);

// Photo
const handlePhotoChange2 = (options) => {
  const file = options.file.file;
  photoFile2.value = file;
  photoPreview2.value = URL.createObjectURL(file);
};
// Submit
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();
    if (photoFile2.value) {
      formData["photo"] = photoFile2.value;
    }
    formData.full_name = `${formData.title} ${formData.first_name} ${formData.last_name} `;
    await createStaff(formData);
    message.success("data added successfully");
    router.push("/staff/lists");
  } catch (err) {
    console.error(err.error.msg);
    // err?.error?.message?.forEach((msg) => {
    //   message.error(msg);
    // });
    message.error("data not created...");
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
  bio: [{ required: true, message: "Bio is required", trigger: "blur" }],
  full_name: [
    { required: true, message: "Full Name is required", trigger: "blur" },
  ],
  email: [
    { required: true, message: "Email is required", trigger: "blur" },
    { type: "email", message: "Enter a valid email", trigger: "blur" },
  ],
  phone: [
    { required: true, message: "Phone number is required", trigger: "blur" },
    {
      pattern: /^(\+234|0)[789][01]\d{8}$/,
      message: "Enter a valid phone number",
      trigger: "blur",
    },
  ],
  slug: [{ required: true, message: "Slug is required", trigger: "blur" }],
  position: [
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
  position_title: [
    { required: true, message: "Position title is required", trigger: "blur" },
  ],
  faculty: [
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
  department_name: [
    { required: true, message: "Department name is required", trigger: "blur" },
  ],
  faculty_name: [
    { required: true, message: "Faculty name is required", trigger: "blur" },
  ],
  office_location: [
    { required: true, message: "Office Location is required", trigger: "blur" },
  ],
  staff_type: [
    { required: true, message: "Staff type is required", trigger: "blur" },
  ],
  qualifications: [
    {
      required: true,
      message: "Qualifications type is required",
      trigger: "blur",
    },
  ],
  research_interests: [
    {
      required: true,
      message: "Research interests type is required",
      trigger: "blur",
    },
  ],
  publications: [
    {
      required: true,
      message: "Publications interests type is required",
      trigger: "blur",
    },
  ],
  first_name: [
    { required: true, message: "First name is required", trigger: "blur" },
  ],
  last_name: [
    { required: true, message: "Last name is required", trigger: "blur" },
  ],
  middle_name: [
    { required: true, message: "Middle name is required", trigger: "blur" },
  ],
  title: [{ required: true, message: "Title is required", trigger: "blur" }],

  description: [
    { required: true, message: "Description is required", trigger: "blur" },
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
  is_featured: [
    {
      required: false,
      type: "boolean",
      message: "Is featured is required",
      trigger: "change",
    },
  ],
  is_leadership: [
    {
      required: false,
      type: "boolean",
      message: "Is leadership is required",
      trigger: "change",
    },
  ],
  photo: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile2.value) {
          return new Error("Photo is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  is_active: [
    {
      required: false,
      type: "boolean",
      message: "Required",
      trigger: "change",
    },
  ],
};
</script>
