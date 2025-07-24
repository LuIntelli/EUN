<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Edit Newsletter Subscription
    </h2>

    <n-form :model="formData" :rules="rules" ref="form" label-placement="top">
      <n-form-item label="Full Name" path="full_name">
        <n-input v-model:value="formData.full_name" placeholder="Full Name" />
      </n-form-item>
      <n-form-item label="Confirmation Token" path="confirmation_token">
        <n-input
          v-model:value="formData.confirmation_token"
          placeholder="Confirmation Token"
        />
      </n-form-item>

      <div class="flex items-center gap-4">
        <n-form-item label="Is Active" path="is_active">
          <n-switch v-model:value="formData.is_active" />
        </n-form-item>
        <n-form-item label="Is Confirmed" path="is_confirmed">
          <n-switch v-model:value="formData.is_confirmed" />
        </n-form-item>
      </div>

      <n-form-item label="Unsubscribe Token" path="unsubscribe_token">
        <n-input
          v-model:value="formData.unsubscribe_token"
          placeholder="Unsubscribe Token"
        />
      </n-form-item>

      <n-form-item label="Subscribed Date" path="subscribed_at">
        <n-date-picker
          v-model:value="formData.subscribed_at"
          type="datetime"
          placeholder="Pick subscription date"
          class="w-full"
        />
      </n-form-item>
      <n-form-item label="Updated Date" path="updated_at">
        <n-date-picker
          v-model:value="formData.updated_at"
          type="datetime"
          placeholder="Pick updated date"
          class="w-full"
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

      <button
        type="primary"
        class="mt-4 w-full rounded-xl text-white py-4 font-medium bg-[rgba(43,54,116,1)]"
        :loading="loading"
        @click="handleSubmit"
      >
        Update Newsletter Subscription
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import {
  newsLetterSubscriptionDetalis,
  newsLetterEditSubscription,
} from "@/services/Core";

const form = ref(null);
const message = useMessage();
const loading = ref(false);

const route = useRoute();
const router = useRouter();
const newsletterSubscriptionId = route.params.id;

const formData = reactive({
  is_active: true,
  is_confirmed: true,
  confirmation_token: "",
  unsubscribe_token: "",
  full_name: "",
  created_at: null,
  updated_at: null,
  email: "",
  subscribed_at: null,
});

const rules = {
  confirmation_token: [
    {
      required: true,
      message: "confirmation token is required",
      trigger: "blur",
    },
  ],
  unsubscribe_token: [
    {
      required: true,
      message: "Unsubscribe token is required",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: "Input your email address",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Enter a valid email address",
      trigger: ["blur", "input"],
    },
  ],
  full_name: [
    { required: true, message: "Full Name is required", trigger: "blur" },
  ],

  subscribed_at: [
    {
      required: true,
      validator(_, value) {
        if (!value) return new Error("Subscribed date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
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
        await newsLetterEditSubscription(newsletterSubscriptionId, payload);
        message.success("Newsletter Subscription updated successfully!");
        router.push("/newsletters-subscription");
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
    const data = await newsLetterSubscriptionDetalis(newsletterSubscriptionId);
    Object.assign(formData, data.data);
  } catch (err) {
    message.error("Failed to load newsletter");
  }
});
</script>
