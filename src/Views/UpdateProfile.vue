<template>
  <n-message-provider>
    <div class="py-10 px-5 mx-auto">
      <div class="p-6 rounded-xl">
        <div class="mb-6">
          <h2 class="font-bold text-[30px] text-[rgba(61,58,121,1)]">
            Update Profile
          </h2>
        </div>

        <n-form
          ref="form"
          :model="formData"
          :rules="rules"
          label-placement="top"
          @submit.prevent="handleUpdate"
        >
          <n-form-item label="First Name" path="first_name">
            <template #label>
              <label class="text-sm font-medium text-[rgba(61,58,121,1)] block">
                First Name
              </label>
            </template>
            <n-input
              class="py-2 font-medium"
              v-model:value="formData.first_name"
              placeholder="First name..."
            />
          </n-form-item>

          <n-form-item label="Last Name" path="last_name">
            <template #label>
              <label class="text-sm font-medium text-[rgba(61,58,121,1)] block">
                Last Name
              </label>
            </template>
            <n-input
              class="py-2 font-medium"
              v-model:value="formData.last_name"
              placeholder="Last name..."
            />
          </n-form-item>

          <n-form-item label="Email" path="email">
            <template #label>
              <label class="text-sm font-medium text-[rgba(61,58,121,1)] block">
                Email
              </label>
            </template>
            <n-input
              class="py-2 font-medium"
              v-model:value="formData.email"
              placeholder="Email..."
            />
          </n-form-item>

          <n-form-item label="Username" path="username">
            <template #label>
              <label class="text-sm font-medium text-[rgba(61,58,121,1)] block">
                User Name
              </label>
            </template>
            <n-input
              v-model:value="formData.username"
              class="py-2 font-medium"
              placeholder="Username..."
            />
          </n-form-item>

          <div class="mt-5">
            <button
              type="submit"
              class="bg-[rgba(43,54,116,1)] w-full text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <i class="pi pi-save"></i> Save Changes
            </button>
          </div>
        </n-form>
      </div>
    </div>
  </n-message-provider>
</template>

<script setup>
import { ref, reactive, onMounted, h } from "vue";
import { useMessage } from "naive-ui";
import { getCurrentUser, updateProfile } from "@/services/auth";
import { useRouter } from "vue-router";

const form = ref(null);
const message = useMessage();
const router = useRouter();

const formData = reactive({
  first_name: "",
  last_name: "",
  email: "",
  username: "",
});

onMounted(async () => {
  try {
    const user = await getCurrentUser();
    console.log(user);
    if (user) {
      Object.assign(formData, user.data);
    }
  } catch (err) {
    message.error("Profile data not loaded");
  }
});

const handleUpdate = () => {
  form.value?.validate(async (errors) => {
    if (!errors) {
      console.log(formData);
      try {
        const res = await updateProfile(formData);
        router.push("/");
        message.success("Profile updated successfully", {
          icon: () => h("i", { class: "pi pi-check-circle text-green-500" }),
        });
      } catch (err) {
        message.error("Profile not updated");
      }
    }
  });
};

const rules = {
  // username: [
  //   { required: true, message: "Username is required", trigger: "blur" },
  // ],
  // firstName: [
  //   { required: true, message: "First name is required", trigger: "blur" },
  // ],
  // lastName: [
  //   { required: true, message: "Last name is required", trigger: "blur" },
  // ],
  // email: [
  //   { required: true, message: "Email is required", trigger: "blur" },
  //   {
  //     type: "email",
  //     message: "Invalid email format",
  //     trigger: ["blur", "input"],
  //   },
  // ],
};
</script>
