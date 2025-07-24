<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Tags
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
          placeholder="Tag Name"
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
        Update Tag
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
import { detailsTag, editTag } from "@/services/Blog";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);
const photoFile = ref(null);
const photoPreview = ref(null);

const formData = reactive({
  name: "",
  created_at: null,
  updated_at: null,
  slug: "",
  is_active: false,
  id: "",
});

// Load Tag by ID
const fetchTag = async () => {
  try {
    const id = route.params.id;
    const data = await detailsTag(id);
    Object.assign(formData, data);
    console.log(data);
  } catch (error) {
    message.error("Failed to load tag data");
  }
};

// Update Tag
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();

    await editTag(route.params.id, formData);
    message.success("Tag updated successfully");
    router.push("/blog-tags");
  } catch (err) {
    console.error(err);
    message.error("Tag not updated");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    submitting.value = false;
  }
};

onMounted(fetchTag);

// Rules
const rules = {};

/*

{
  name: [{ required: true, message: "Tag Name is required", trigger: "blur" }],

  slug: [{ required: true, message: "Slug is required", trigger: "blur" }],

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
*/
</script>
