<template>
  <n-message-provider>
    <div class="py-10 px-5 md:w-[60%] mx-auto">
      <div class="border p-6 rounded-xl shadow-md">
        <router-link
          to="/login"
          class="text-[rgba(61,58,121,1)] p-2 px-5 rounded-sm bg-[rgba(61,58,121,0.1)]"
          >Login</router-link
        >
        <div class="text-center mb-6">
          <h2 class="font-bold text-[20px] text-[rgba(61,58,121,1)]">
            Confirm Password Reset
          </h2>
          <p v-if="!isLoading" class="text-sm text-gray-600 mt-2">
            Enter the reset code sent to your email and choose a new password.
          </p>
          <div v-if="isLoading" class="relative my-10 flex justify-center">
            <PulseLoader v-if="isLoading" />
          </div>
        </div>

        <n-form
          ref="form"
          :model="formData"
          :rules="rules"
          label-placement="top"
          @submit.prevent="handleConfirmReset"
        >
          <n-form-item label="Email" path="email">
            <template #label>
              <label class="font-medium">Email</label>
            </template>
            <n-input
              v-model:value="formData.email"
              placeholder="Your email"
              class="rounded-sm py-1"
              clearable
            />
          </n-form-item>

          <n-form-item label="Reset Code" path="resetCode">
            <template #label>
              <label class="font-medium">Reset Code</label>
            </template>
            <n-input
              v-model:value="formData.resetCode"
              placeholder="Enter reset code"
              class="rounded-sm py-1"
              clearable
            />
          </n-form-item>

          <n-form-item label="New Password" path="newPassword">
            <template #label>
              <label class="font-medium">New Password</label>
            </template>
            <n-input
              v-model:value="formData.newPassword"
              class="rounded-sm py-1"
              type="password"
              placeholder="New password"
              clearable
            />
          </n-form-item>

          <n-form-item label="Confirm Password" path="confirmPassword">
            <template #label>
              <label class="font-medium">Confirm Password</label>
            </template>
            <n-input
              v-model:value="formData.confirmPassword"
              class="rounded-sm py-1"
              type="password"
              placeholder="Confirm new password"
              clearable
            />
          </n-form-item>

          <button
            type="submit"
            class="bg-[rgba(43,54,116,1)] w-full text-white font-bold py-3 rounded-md flex items-center justify-center gap-2"
          >
            <i class="pi pi-lock"></i> Reset Password
          </button>
        </n-form>
      </div>
    </div>
  </n-message-provider>
</template>

<script setup>
import { ref, reactive, h } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { confirmResetPassword } from "@/services/auth";

const isLoading = ref(false);
const form = ref(null);
const message = useMessage();
const router = useRouter();
const route = useRoute();

const formData = reactive({
  email: "",
  resetCode: "",
  newPassword: "",
  confirmPassword: "",
});

const rules = {
  email: [
    { required: true, message: "Email is required", trigger: "blur" },
    {
      type: "email",
      message: "Enter a valid email",
      trigger: ["blur", "input"],
    },
  ],
  resetCode: [
    { required: true, message: "Reset code is required", trigger: "blur" },
  ],
  newPassword: [
    {
      required: true,
      message: "Enter new password",
      trigger: ["blur", "input"],
    },
    { min: 6, message: "Minimum 6 characters", trigger: "blur" },
  ],
  confirmPassword: [
    {
      required: true,
      message: "Please confirm your password",
      trigger: "blur",
    },
    {
      validator(_, value) {
        if (value !== formData.newPassword) {
          return new Error("Passwords do not match");
        }
        return true;
      },
      trigger: "blur",
    },
  ],
};

const handleConfirmReset = () => {
  form.value?.validate(async (errors) => {
    if (!errors) {
      isLoading.value = true;
      try {
        await confirmResetPassword({
          email: formData.email,
          reset_code: formData.resetCode,
          new_password: formData.newPassword,
          confirm_password: formData.confirmPassword,
        }).then((res) => {
          if (res) {
            isLoading.value = false;
            message.success("Password reset successful!", {
              icon: () =>
                h("i", { class: "pi pi-check-circle text-green-500" }),
            });
            setTimeout(() => router.push("/login"), 1500);
          }
        });
      } catch (error) {
        isLoading.value = false;
        message.error(
          error.response?.data?.message || "Reset failed. Try again."
        );
      }
    }
  });
};
</script>
