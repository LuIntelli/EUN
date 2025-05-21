<template>
    <n-message-provider>
      <div class="md:mx-auto mx-10 md:w-[50%] mt-[100px]">
        <div class="top text-center mb-5">
          <h2 class="font-bold text-[20px] text-green-700">
            Login to LuI Quiz Application
          </h2>
        </div>
        <div class="form">
          <n-form
            :model="formData"
            :rules="rules"
            ref="form"
            label-placement="top"
            @submit.prevent="handleSubmit"
          >
            <n-form-item label="Email" path="email" class="font-medium">
              <template #label>
                <label
                  class="text-sm font-medium text-green-700 block "
                >
                  Email Address
                </label>
              </template>
              <n-input
                type="text"
                round
                placeholder="Email Address..."
                v-model:value="formData.email"
                clearable
                class="border border-slate-50 shadow-lg py-2 font-medium"
              >
                <template #prefix>
                  <i class="pi pi-envelope text-green-800"></i>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item label="Password" path="password" class="my-6">
              <template #label>
                <label class="text-sm font-medium text-green-700 ">
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
                  <i class="pi pi-lock text-green-700"></i> </template
              ></n-input>
            </n-form-item>
            <n-form-item label="Confirm Password" path="cpassword" class="my-2">
              <template #label>
                <label class="text-sm font-medium text-green-700 ">
                  Confirm Password
                </label>
              </template>
              <n-input
                placeholder="Re-enter Password"
                v-model:value="formData.cpassword"
                clearable
                round
                class="border border-slate-50 shadow-lg py-2 font-medium"
              >
                <template #prefix>
                  <i class="pi pi-lock text-green-700"></i> </template
              ></n-input>
            </n-form-item>
            <button
              type="submit"
              class="bg-green-700 flex gap-2 items-center text-white font-bold px-10 py-3 rounded-full"
            >
              <i class="pi pi-user"></i>Register
            </button>
          </n-form>
          <div class="text-white mt-5 flex flex-wrap md:flex-row flex-col gap-4 justify-between md:gap-3 items-center">
            <p class="flex gap-2">Already have an account <RouterLink to="/login" class="text-blue-500 font-bold">Login</RouterLink></p>
            <p class="flex gap-2 items-center">Sign in with  <RouterLink to="/login" class="text-orange-500 border border-green-950 px-3 py-2 text-[12px] rounded-md font-bold">Google <i class="fab fa-google text-orange-600"></i></RouterLink></p>
          </div>
        </div>
      </div>
    </n-message-provider>
  </template>
  
  <script setup>
  import { ref, reactive, h } from "vue";
  import { RouterLink } from "vue-router";
  import { useMessage } from "naive-ui";
  
  const message = useMessage();
  const form = ref("");
  
  const formData = reactive({
    email: "",
    password: "",
    cpassword:""
  });
  
  // Functions
  
  // Handle Submit
  const handleSubmit = () => {
    form.value?.validate((errors) => {
      if (!errors) {
          
        message.success("Message Submitted", {
          closable: true,
          icon: () =>
            h("i", { class: "pi pi-thumbs-up text-green-600 text-lg mr-2" }),
        });
      } else {
          message.error("Provide correct information")
      }
    });
  };
  
  // rules for validation
  const rules = {
    email: [
      {
        required: true,
        message: "Input your email address",
        trigger: "blur",
      },
      {
        type: 'email',
        message: 'Enter a valid email address',
        trigger: ['blur', 'input']
      }
    ],
    password: [
      {
        required: true,
        message: "Input your password",
        trigger: ["input", "blur"],
      },
      {
        min: 6,
        message: 'Password must be at least 6 characters',
        trigger: 'input'
      }
    ],
    cpassword: [
      {
        required: true,
        message: "Confirm password is required",
        trigger: "blur"
      },
      {
      validator(rule, value) {
        if (value !== formData.password) {
          return new Error('Passwords do not match')
        }
        return true
      },
      trigger: 'blur'
    }
    ],
    
  };
  </script>
  