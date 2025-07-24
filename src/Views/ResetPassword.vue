<template>
  <n-message-provider>
    
    <div class="py-10 px-5 md:w-[60%] mx-auto">
      <div class="border p-6 rounded-xl shadow-md bg-white">
        <div class="text-center mb-6">
          <h2 class="font-bold text-[20px] text-[rgba(61,58,121,1)]">
            Reset Password
          </h2>
          <p v-if="!isLoading" class="text-sm text-gray-600 mt-2">
            Enter your email to receive a reset link
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
          @submit.prevent="handleReset"
        >
          <n-form-item label="Email" path="email">
            <template #label>
              <label class="font-medium"> Email </label>
            </template>
            <n-input
              v-model:value="formData.email"
              placeholder="Enter your email address"
              clearable
              class="rounded-xl py-3 font-medium"
            >
              <template #prefix>
                <i class="pi pi-envelope mr-2 text-[rgba(61,58,121,1)]"></i>
              </template>
            </n-input>
          </n-form-item>

          <button
            type="submit"
            class="bg-[rgba(43,54,116,1)] w-full mt-3 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2"
          >
            <i class="pi pi-send"></i> Send Reset Link
          </button>
        </n-form>
      </div>
    </div>
  </n-message-provider>
</template>

<script setup>
import { ref, reactive, h } from "vue";
import { useMessage } from "naive-ui";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useRouter } from "vue-router";

import { resetPassword } from "@/services/auth"; // Define this API

const isLoading = ref(false);
const message = useMessage();
const form = ref(null);
const router = useRouter();

const formData = reactive({
  email: "",
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
};

const handleReset = () => {
  form.value?.validate(async (errors) => {
    if (!errors) {
      isLoading.value = true;
      try {
        const res = await resetPassword(formData);
        console.log(res.message);
        if (res.success) {
          isLoading.value = false;
          
        }
        message.success("Password reset link sent to your email", {
          icon: () => h("i", { class: "pi pi-check text-green-500" }),
        });
        formData.email = "";
        router.push("/confirm-reset-password/");

      } catch (error) {
        isLoading.value = false;

        message.error(
          error.response?.data?.message  || "Failed to send reset link"
        );
      }
    }
  });
};
</script>
