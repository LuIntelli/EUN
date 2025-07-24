<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Academic Roles
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Title" path="title">
        <n-input
          v-model:value="formData.title"
          placeholder="Dean of Students"
        />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Oversees student welfare, extracurricular activities, and campus life programs to enhance the overall student experience."
        />
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

import {
  editAcademicStaffRoles,
  academicStaffRolesDetails,
} from "@/services/facultiesAndDepartment";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const formData = reactive({
  order: "",
  title: "",
  description: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

// Load Data by ID
const fetchData = async () => {
  try {
    const id = route.params.id;
    const data = await academicStaffRolesDetails(id);
    Object.assign(formData, data.data);
  } catch (error) {
    message.error("Failed to load  data");
  }
};

// Update data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);
    await editAcademicStaffRoles(route.params.id, formData);
    message.success("Updated successfully");
    router.push("/academic/staff-roles");
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
