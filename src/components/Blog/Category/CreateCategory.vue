<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Category
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
          class=""
          placeholder="First Name"
        />
      </n-form-item>
      <n-form-item label="Slug" path="slug">
        <n-input
          v-model:value="formData.slug"
          placeholder="Example 'medicals'"
        />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Example 'medicals'"
        />
      </n-form-item>
      <n-form-item label="Color" path="color">
        <n-input
          v-model:value="formData.color"
          placeholder="Example '#fffffa'"
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
        Create Category
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { createCategory } from "@/services/Blog";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const formData = reactive({
  name: "",
  color: "",
  slug: "",
  created_at: null,
  is_active: false,
  id: "",
});

// Submit Create Category
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();

    await createCategory(formData);
    console.log(formData);
    console.log(route.params.id);

    message.success("Category added successfully");
    router.push("/blog/category");
  } catch (err) {
    console.error(err);
    message.error("Category not created...");
    // console.error("Error loading data", err.response?.data || err);

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
  name: [
    { required: true, message: "First Name is required", trigger: "blur" },
  ],
  bio: [{ required: true, message: "Bio is required", trigger: "blur" }],
  slug: [{ required: true, message: "Slug is required", trigger: "blur" }],

  description: [
    { required: true, message: "Department is required", trigger: "blur" },
  ],

  color: [{ required: true, message: "Position is required", trigger: "blur" }],

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

  is_active: [
    { required: true, type: "boolean", message: "Required", trigger: "change" },
  ],
  photo: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile.value) {
          return new Error("photo image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
