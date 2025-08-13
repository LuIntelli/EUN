<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Staff Category
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Name" path="name">
        <n-input v-model:value="formData.name" class="" placeholder="Name" />
      </n-form-item>
      <n-form-item label="Slug" path="slug">
        <n-input
          v-model:value="formData.slug"
          placeholder="faculty-of-engineering"
        />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Example 'medicals'"
        />
      </n-form-item>
      <n-form-item label="Order" path="order">
        <n-input
          v-model:value="formData.order"
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
        Update Staff Category
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
import { staffCategoryDetails, editStaffCategory } from "@/services/Staff";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);
const photoFile = ref(null);
const photoPreview = ref(null);

const formData = reactive({
  name: "",
  order: "",
  slug: "",
  description: "",
  created_at: null,
  is_active: false,
  created_at: null,
  updated_at: null,
});

// Load Category by ID
const fetchCategory = async () => {
  try {
    const id = route.params.id;
    const data = await staffCategoryDetails(id);
    Object.assign(formData, data.data);
    // console.log(data.data);
  } catch (error) {
    message.error("Failed to load category data");
  }
};

// Update Category
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();
    await editStaffCategory(route.params.id, formData);
    message.success("Staff Category updated successfully");
    router.push("/staff/category/lists");
  } catch (err) {
    console.error(err);
    message.error("Category not updated");
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

onMounted(fetchCategory);

// Rules
const rules = {};
</script>
