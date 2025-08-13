<template>
  <n-message-provider>
    <div class="py-10 px-5 md:w-[60%] mx-auto">
      <div class="border p-6 rounded-xl shadow-md bg-white">
        <div class="text-center mb-6">
          <h2 class="font-bold text-[20px] text-[rgba(61,58,121,1)]">
            Change Password
          </h2>
          
          <div v-if="isLoading" class="relative my-10 flex justify-center">
            <PulseLoader v-if="isLoading" />
          </div>
        </div>

        <n-form
          ref="form"
          :model="formData"
          :rules="rules"
          label-placement="top"
          @submit.prevent="handleChangePassword"
        >
          <n-form-item label="Current Password" path="current_password">
            <template #label>
              <label class="font-medium">Current Password</label>
            </template>
            <n-input
              v-model:value="formData.current_password"
              placeholder="Your Current Password"
              class=" rounded-sm py-1"
              clearable
            />
          </n-form-item>

          <n-form-item label="New Password" path="new_password">
            <template #label>
              <label class="font-medium">New Password</label>
            </template>
            <n-input
              v-model:value="formData.new_password"
              placeholder="Enter New Password"
              class=" rounded-sm py-1"
              clearable
            />
          </n-form-item>

          

          <n-form-item label="Confirm Password" path="confirm_password">
            <template #label>
              <label class="font-medium">Confirm Password</label>
            </template>
            <n-input
              v-model:value="formData.confirm_password"
              class=" rounded-sm py-1"
              type="password"
              placeholder="Confirm new password"
              clearable
            />
          </n-form-item>

          <button
            type="submit"
            class="bg-[rgba(43,54,116,1)] w-full text-white font-bold py-3 rounded-md flex items-center justify-center gap-2"
          >
            <i class="pi pi-lock"></i> Change Password
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
import { changePassword } from "@/services/auth";

const isLoading = ref(false);
const form = ref(null);
const message = useMessage();
const router = useRouter();
const route = useRoute();

const formData = reactive({
  current_password: "",
  new_password: "",
  confirm_password: "",
});

const rules = {
 
  current_password: [
    {
      required: true,
      message: "Enter Current password",
      trigger: ["blur", "input"],
    },
    { min: 6, message: "Minimum 6 characters", trigger: "blur" },
  ],
  new_password: [
    {
      required: true,
      message: "Enter new password",
      trigger: ["blur", "input"],
    },
    { min: 6, message: "Minimum 6 characters", trigger: "blur" },
  ],
  confirm_password: [
    {
      required: true,
      message: "Please confirm your password",
      trigger: "blur",
    },
    {
      validator(_, value) {
        if (value !== formData.new_password) {
          return new Error("Passwords do not match");
        }
        return true;
      },
      trigger: "blur",
    },
  ],
};

const handleChangePassword = () => {
  form.value?.validate(async (errors) => {
    if (!errors) {
      isLoading.value = true;
      try {
        await changePassword(formData).then((res) => {
          if (res) {
            isLoading.value = false;
          }
        });
        message.success("Password changed successful!", {
          icon: () => h("i", { class: "pi pi-check-circle text-green-500" }),
        });

        setTimeout(() => router.push("/login"), 1500);
      } catch (error) {
        isLoading.value = false;
        message.error(
          error.response?.data?.message ||
            "Reset not successful. Check the code and try again."
        );
      }
    }
  });
};
</script>
