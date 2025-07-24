<template>
  <n-message-provider>
    <div
      class="md:mx-auto py-[10px] mx-10 md:w-[70%] flex flex-col justify-center items-center"
    >
      <div class="border p-5 w-[70%] rounded-xl">
        <div class="top text-center mb-5">
          <h2 class="font-bold text-[20px] text-[rgba(61,58,121,1)]">
            Create Admin User
          </h2>
          <div v-if="loading" class="relative my-10 flex justify-center">
            <PulseLoader v-if="loading" />
          </div>
        </div>
        <div class="form">
          <n-form
            :model="formData"
            :rules="rules"
            ref="form"
            label-placement="top"
            @submit.prevent="handleSubmit"
          >
            <n-form-item label="User Name" path="username" class="font-medium">
              <template #label>
                <label
                  class="text-sm font-medium text-[rgba(61,58,121,1)] block"
                >
                  User Name
                </label>
              </template>
              <n-input
                type="text"
                placeholder="User Name..."
                v-model:value="formData.username"
                clearable
                class="border rounded-xl border-slate-50 shadow-lg py-2 font-medium"
              >
                <template #prefix>
                  <i class="pi pi-user text-[rgba(61,58,121,1)]"></i>
                </template>
              </n-input>
            </n-form-item>

            <n-form-item
              label="First Name"
              path="firstName"
              class="font-medium"
            >
              <template #label>
                <label
                  class="text-sm font-medium text-[rgba(61,58,121,1)] block"
                >
                  First Name
                </label>
              </template>
              <n-input
                type="text"
                placeholder="First Name..."
                v-model:value="formData.firstName"
                clearable
                class="border rounded-xl border-slate-50 shadow-lg py-2 font-medium"
              >
                <template #prefix>
                  <i class="pi pi-user text-[rgba(61,58,121,1)]"></i>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item label="Last Name" path="lastName" class="font-medium">
              <template #label>
                <label
                  class="text-sm font-medium text-[rgba(61,58,121,1)] block"
                >
                  Last Name
                </label>
              </template>
              <n-input
                type="text"
                placeholder="Last Name..."
                v-model:value="formData.lastName"
                clearable
                class="border rounded-xl border-slate-50 shadow-lg py-2 font-medium"
              >
                <template #prefix>
                  <i class="pi pi-user text-[rgba(61,58,121,1)]"></i>
                </template>
              </n-input>
            </n-form-item>

            <n-form-item label="Email" path="email" class="font-medium">
              <template #label>
                <label
                  class="text-sm font-medium text-[rgba(61,58,121,1)] block"
                >
                  Email Address
                </label>
              </template>
              <n-input
                type="text"
                placeholder="Email Address..."
                v-model:value="formData.email"
                clearable
                class="border rounded-xl border-slate-50 shadow-lg py-2 font-medium"
              >
                <template #prefix>
                  <i class="pi pi-envelope text-[rgba(61,58,121,1)]"></i>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item label="Password" path="password" class="">
              <template #label>
                <label
                  class="text-sm font-medium text-[rgba(61,58,121,1)] block"
                >
                  Password
                </label>
              </template>
              <n-input
                placeholder="Enter Your Password"
                v-model:value="formData.password"
                clearable
                class="border rounded-xl border-slate-50 shadow-lg py-2 font-medium"
              >
                <template #prefix>
                  <i class="pi pi-lock text-[rgba(61,58,121,1)]"></i> </template
              ></n-input>
            </n-form-item>
            <n-form-item label="Confirm Password" path="cpassword" class="my-2">
              <template #label>
                <label
                  class="text-sm font-medium text-[rgba(61,58,121,1)] block"
                >
                  Confirm Password
                </label>
              </template>
              <n-input
                placeholder="Re-enter Password"
                v-model:value="formData.cpassword"
                clearable
                class="border rounded-xl border-slate-50 shadow-lg py-2 font-medium"
              >
                <template #prefix>
                  <i class="pi pi-lock text-[rgba(61,58,121,1)]"></i> </template
              ></n-input>
            </n-form-item>
            <div
              class="top mt-[-10px] mb-4 grid grid-cols-3 gap-4 items-center"
            >
              <div class="state text-end">
                <n-switch
                  v-model:value="formData.is_staff"
                  class="text-white h-full rounded-full p-2"
                >
                </n-switch>
                <span v-if="formData.is_staff" class="text-green-500 font-bold"
                  >Is Staff</span
                >

                <span v-else class="text-[rgba(61,58,121,1)] font-bold"
                  >Not a staff</span
                >
              </div>
              <div class="state text-end">
                <n-switch
                  v-model:value="formData.is_active"
                  class="text-white h-full rounded-full p-2"
                >
                </n-switch>
                <span v-if="formData.is_active" class="text-green-500 font-bold"
                  >Is Active</span
                >
                <span v-else class="text-[rgba(61,58,121,1)] font-bold"
                  >Not active</span
                >
              </div>
              <div class="state text-end">
                <n-switch
                  v-model:value="formData.is_superuser"
                  class="text-white h-full rounded-full p-2"
                >
                </n-switch>
                <span
                  v-if="formData.is_superuser"
                  class="text-green-500 font-bold"
                  >Is Superuser</span
                >
                <span v-else class="text-[rgba(61,58,121,1)] font-bold"
                  >Is Not Superuser</span
                >
              </div>
            </div>
            <button
              type="submit"
              class="bg-[rgba(43,54,116,1)] flex gap-2 items-center text-white font-bold px-10 py-3 w-full justify-center rounded-full"
            >
              <i class="pi pi-user"></i>Create User
            </button>
          </n-form>
          <div
            class="text-[rgba(61,58,121,1)] font-bold mt-5 flex flex-wrap md:flex-row flex-col gap-4 justify-between md:gap-3 items-center"
          >
            <p class="flex gap-2">
              Already have an account
              <RouterLink to="/login" class="text-blue-800 underline font-bold"
                >Login</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </n-message-provider>
</template>

<script setup>
import { ref, reactive, h } from "vue";
import { RouterLink } from "vue-router";
import { useMessage } from "naive-ui";
import { createAdminUser } from "@/services/adminUsers";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const message = useMessage();
const form = ref("");

const formData = reactive({
  email: "",
  password: "",
  cpassword: "",
  lastName: "",
  firstName: "",
  fullName: "",
  is_staff: true,
  is_superuser: true,
  is_active: true,
});

// Handle Submit
const handleSubmit = async () => {
  try {
    form.value?.validate((errors) => {
      if (!errors) {
        formData.fullName = formData.firstName + " " + formData.lastName;
        console.log(formData);

        message.success("Message Submitted", {
          closable: true,
          icon: () =>
            h("i", { class: "pi pi-thumbs-up text-green-600 text-lg mr-2" }),
        });
      }
    });
    const res = await createAdminUser(formData);
    // Redirect to Admin
    console.log(res);
  } catch (error) {
    message.error(error.message);
  }
};

// rules for validation
const rules = {
  username: [
    {
      required: true,
      message: "Input your user name",
      trigger: "blur",
    },
  ],
  firstName: [
    {
      required: true,
      message: "Input your first name",
      trigger: "blur",
    },
  ],
  lastName: [
    {
      required: true,
      message: "Input your last name",
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
  password: [
    {
      required: true,
      message: "Password is required",
      trigger: "blur",
    },
    {
      validator: (rule, value) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!regex.test(value)) {
          return new Error(
            "Password must be at least 8 characters with letters, numbers, and symbols"
          );
        }
        return true;
      },
      trigger: "blur",
    },
  ],
  cpassword: [
    {
      required: true,
      message: "Confirm password is required",
      trigger: "blur",
    },
    {
      validator(rule, value) {
        if (value !== formData.password) {
          return new Error("Passwords do not match");
        }
        return true;
      },
      trigger: "blur",
    },
  ],
};
</script>
