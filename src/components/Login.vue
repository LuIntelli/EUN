<template>
  <n-message-provider>
    <div
      class="md:mx-auto py-[100px] mx-10 md:w-[70%] flex flex-col justify-center items-center"
    >
      <div class="border p-5 w-[50%] rounded-xl">
        <div class="top text-center mb-5">
          <h2 class="font-bold text-[20px] text-[rgba(61,58,121,1)]">
            Login to Admin Dashboard
          </h2>
        </div>
        <div v-if="loading" class="relative my-10 flex justify-center">
          <PulseLoader v-if="loading" />
        </div>
        <div class="form">
          <n-form
            :model="formData"
            :rules="rules"
            ref="form"
            label-placement="top"
            @submit.prevent="handleLogin"
          >
            <n-form-item label="Username" path="username" class="font-medium">
              <template #label>
                <label
                  class="text-sm font-medium text-[rgba(61,58,121,1)] block"
                >
                  User name
                </label>
              </template>
              <n-input
                type="text"
                round
                placeholder="username"
                v-model:value="formData.username"
                clearable
                class="border border-slate-50 shadow-lg py-2 font-medium"
              >
                <template #prefix>
                  <i class="pi pi-user text-[rgba(61,58,121,1)]"></i>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item label="Password" path="password" class="my-3">
              <template #label>
                <label class="text-sm font-medium text-[rgba(61,58,121,1)]">
                  Password
                </label>
              </template>
              <n-input
                placeholder="Enter Your Password"
                v-model:value="formData.password"
                clearable
                round
                class="border border-slate-50 shadow-lg py-2 font-medium"
              >
                <template #prefix>
                  <i class="pi pi-lock text-[rgba(61,58,121,1)]"></i> </template
              ></n-input>
            </n-form-item>
            <button
              type="submit"
              class="bg-[rgba(43,54,116,1)] w-full justify-center flex gap-2 items-center text-white font-bold px-10 py-3 rounded-full"
            >
              <i class="pi pi-user"></i>Login
            </button>
          </n-form>
          
          <div
            class="text-[rgba(61,58,121,1)] font-bold mt-5 flex flex-wrap md:flex-row flex-col gap-4 justify-between md:gap-3 items-center"
          >
            <p class="flex gap-2 items-center">
              Forgot your password?
              <RouterLink
                to="/reset-password/"
                class="bg-blue-100 rounded text-[rgba(61,58,121,1)] p-2 font-bold"
                >Reset Password</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </n-message-provider>
</template>

<script setup>
import { ref, reactive, h, onMounted } from "vue";
import { useMessage } from "naive-ui";
import { useAuthStore } from "@/stores/auth";
import api, { BaseUrl } from "@/utils/api";
import { useRouter, useRoute } from "vue-router";
import { loginApi } from "@/services/auth";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
// import { listAuthors } from "@/services/Blog";

onMounted(async () => {
  // pageSize:try {// pageSize:  console.log("working")
  //   const response = await listAuthors()
  //   console.log(response)
  // } catch (error) {// pageSize:  console.error('Failed to load authors:', error)
  // }
});

const router = useRouter();
const route = useRoute();
const auth = useAuthStore();
const message = useMessage();
const form = ref("");
const loading = ref(false);

const formData = reactive({
  username: "",
  password: "",
});

// Handle Login
const handleLogin = async () => {
  if (!formData.username || !formData.password) {
    message.warning("Email and password are required");
    return;
  }

  loading.value = true;
  console.log("Working...");

  try {
    const res = await loginApi({
      login: formData.username,
      password: formData.password,
    });
    // console.log(res.data.user, res.data);

    if (res.data.user) {
      console.log(res.data.user, res.data);
    }
    const token = res.data.access;

    const user = res.data.user;

    auth.login(token, user);
    console.log(auth);
    loading.value = false;
    message.success("Login successful");
    router.push("/");
  } catch (err) {
    message.error(err.message);
    loading.value = false;
  }
};

// Functions

// Handle Submit
// const handleSubmit = () => {
//   form.value?.validate((errors) => {
//     if (!errors) {
//       message.success("Message Submitted", {
//         closable: true,
//         icon: () =>
//           h("i", { class: "pi pi-thumbs-up text-green-600 text-lg mr-2" }),
//       });
//     } else {
//       message.error("Provide correct information");
//     }
//   });
// };

// rules for validation
const rules = {
  username: [
    {
      required: true,
      message: "Input your user name",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Input your password",
      trigger: ["input", "blur"],
    },
    {
      message: "Password must be at least 6 characters",
      trigger: "input",
    },
  ],
};
</script>
