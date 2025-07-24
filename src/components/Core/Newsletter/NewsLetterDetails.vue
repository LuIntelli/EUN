<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Edit Newsletter
    </h2>

    <n-form :model="formData" :rules="rules" ref="form" label-placement="top">
      <n-form-item label="Title" path="title">
        <n-input
          v-model:value="formData.title"
          placeholder="Newsletter Title"
        />
      </n-form-item>

      <n-form-item label="Is Active" path="is_active">
        <n-switch v-model:value="formData.is_active" />
      </n-form-item>

      <n-form-item label="Subject" path="subject">
        <n-input v-model:value="formData.subject" placeholder="Email Subject" />
      </n-form-item>

      <n-form-item label="Content" path="content">
        <n-input
          v-model:value="formData.content"
          placeholder="Plain content..."
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 8 }"
        />
      </n-form-item>

      <n-form-item label="HTML Content" path="html_content">
        <n-input
          v-model:value="formData.html_content"
          placeholder="HTML content here..."
          type="textarea"
          :autosize="{ minRows: 6, maxRows: 12 }"
        />
      </n-form-item>

      <n-form-item label="Scheduled Date" path="scheduled_date">
        <n-date-picker
          v-model:value="formData.scheduled_date"
          type="datetime"
          placeholder="Pick scheduled date"
          class="w-full"
        />
      </n-form-item>

      <n-form-item label="Sent Date" path="sent_date">
        <n-date-picker
          v-model:value="formData.sent_date"
          type="datetime"
          placeholder="Pick sent date"
          class="w-full"
        />
      </n-form-item>

      <n-form-item label="Total Recipients" path="total_recipients">
        <n-input v-model:value="formData.total_recipients" />
      </n-form-item>

      <button
        type="primary"
        class="mt-4 w-full rounded-xl text-white py-4 font-medium bg-[rgba(43,54,116,1)]"
        :loading="loading"
        @click="handleSubmit"
      >
        Update Newsletter
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import { newsLetterDetalis, editNewsLetter } from "@/services/Core";

const form = ref(null);
const message = useMessage();
const loading = ref(false);

const router = useRouter();
const route = useRoute();
const newsletterId = route.params.id;

const formData = reactive({
  title: "",
  is_active: true,
  subject: "",
  content: "",
  html_content: "",
  scheduled_date: null,
  sent_date: null,
  total_recipients: 0,
});

const rules = {
  title: [{ required: true, message: "Title is required", trigger: "blur" }],
  subject: [
    { required: true, message: "Subject is required", trigger: "blur" },
  ],
  content: [
    { required: true, message: "Content is required", trigger: "blur" },
  ],
  html_content: [
    { required: true, message: "HTML content is required", trigger: "blur" },
  ],
  scheduled_date: [
    {
      required: true,
      validator(_, value) {
        if (!value) return new Error("Scheduled date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],
  sent_date: [
    {
      required: true,
      validator(_, value) {
        if (!value) return new Error("Sent date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],
  // other rules...

  total_recipients: [
    {
      required: true,
      message: "Total recipients is required",
      trigger: "blur",
    },
  ],
};

const handleSubmit = async () => {
  await form.value?.validate(async (errors) => {
    if (!errors) {
      loading.value = true;
      try {
        const payload = {
          ...formData,
          scheduled_date: formData.scheduled_date,
          sent_date: formData.sent_date,
        };
        await editNewsLetter(newsletterId, payload);
        message.success("Newsletter updated successfully!");
        router.push("/newsletters");
      } catch (err) {
        message.error(err?.response?.data?.message || "Update failed");
        err?.error?.message?.forEach((msg) => {
          message.error(msg);
        });
      } finally {
        loading.value = false;
      }
    } else {
      message.error("Please fix form errors");
    }
  });
};

// Fetch existing data
onMounted(async () => {
  try {
    const data = await newsLetterDetalis(newsletterId);
    Object.assign(formData, data.data);
  } catch (err) {
    message.error("Failed to load newsletter");
  }
});
</script>
