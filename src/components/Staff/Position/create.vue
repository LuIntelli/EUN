<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Staff Position
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <!-- <n-form-item label="Category" path="category">
        <n-input
        type="number"
          v-model:value="formData.category"
          class=""
          placeholder="2"
        />
      </n-form-item> -->
      <n-form-item label="Category" path="category">
        <n-select
          v-model:value="formData.category"
          :options="categoriesOption"
          placeholder="Faculty of Category"
          :loading="loadingCategoryData"
          filterable
        />
      </n-form-item>
      <n-form-item label="Category Name" path="category_name">
        <n-input
          v-model:value="formData.category_name"
          placeholder="Faculty of Engineering"
        />
      </n-form-item>
      <n-form-item label="Title" path="title">
        <n-input v-model:value="formData.title" placeholder="Dean of Faculty" />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Responsible for overseeing all academic and administrative operations within the Faculty of Engineering."
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
        Create Staff Position
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { createStaffPosition, listStaffCategory } from "@/services/Staff";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const formData = reactive({
  category_name: "",
  order: "",
  category: null,
  title: "",
  description: "",
  created_at: null,
  is_active: false,
  created_at: null,
  updated_at: null,
});

const categoriesOption = ref([]);
const loadingCategoryData = ref(false);

onMounted(async () => {
  loadingCategoryData.value = true;
  try {
    const res = await listStaffCategory();
    categoriesOption.value = res.results.data.map((page) => ({
      label: page.name || `Faculty ${page.id}`,
      value: Number(page.id),
    }));
  } catch (err) {
    console.error("Error loading home pages", err);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loadingCategoryData.value = false;
  }
});

watch(
  () => formData.category,
  (newVal, oldVal) => {
    const selected = categoriesOption.value.find(
      (category) => category.value === newVal
    );
    formData.category_name = selected.label;
    console.log(selected);
  }
);

// Submit
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();

    await createStaffPosition(formData);
    message.success("data added successfully");
    router.push("/staff/position/lists");
  } catch (err) {
    console.error(err);
    message.error("data not created...");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    submitting.value = false;
  }
};

// Rules
const rules = {
  category: [
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
      type: "number",
      message: "Category is required",
      trigger: "blur",
    },
  ],
  category_name: [
    { required: true, message: "Category name is required", trigger: "blur" },
  ],
  title: [{ required: true, message: "Title is required", trigger: "blur" }],

  description: [
    { required: true, message: "Department is required", trigger: "blur" },
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

  is_active: [
    { required: true, type: "boolean", message: "Required", trigger: "change" },
  ],
};
</script>
