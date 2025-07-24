<template>
  <n-message-provider>
    <div
      class="md:mx-auto py-[10px] mx-10 md:w-[70%] flex flex-col justify-center items-center"
    >
      <div class="border p-5 w-[70%] rounded-xl">
        <div class="top text-center mb-5">
          <h2 class="font-bold text-[20px] text-[rgba(61,58,121,1)]">
            Update Admin User
          </h2>
        </div>
        <div v-if="loading" class="relative my-10 flex justify-center">
          <PulseLoader v-if="loading" />
        </div>

        <n-form
          :model="formData"
          :rules="rules"
          ref="form"
          @submit.prevent="handleUpdate"
          label-placement="top"
        >
          <!-- Username -->
          <n-form-item path="username">
            <template #label>
              <label class="text-sm font-medium text-[rgba(61,58,121,1)] block">
                User Name
              </label>
            </template>
            <n-input
              v-model:value="formData.username"
              class="border rounded-xl border-slate-50 shadow-lg py-2 font-medium"
              placeholder="Username..."
            />
          </n-form-item>

          <!-- First Name -->
          <n-form-item path="firstName">
            <template #label>
              <label class="text-sm font-medium text-[rgba(61,58,121,1)] block">
                First Name
              </label>
            </template>

            <n-input
              v-model:value="formData.firstName"
              class="border rounded-xl border-slate-50 shadow-lg py-2 font-medium"
              placeholder="First name..."
            />
          </n-form-item>

          <!-- Last Name -->
          <n-form-item path="lastName">
            <template #label>
              <label class="text-sm font-medium text-[rgba(61,58,121,1)] block">
                Last Name
              </label>
            </template>
            <n-input
              v-model:value="formData.lastName"
              class="border rounded-xl border-slate-50 shadow-lg py-2 font-medium"
              placeholder="Last name..."
            />
          </n-form-item>

          <!-- Email -->
          <n-form-item path="email">
            <template #label>
              <label class="text-sm font-medium text-[rgba(61,58,121,1)] block">
                Email Address
              </label>
            </template>
            <n-input
              v-model:value="formData.email"
              class="border rounded-xl border-slate-50 shadow-lg py-2 font-medium"
              placeholder="Email..."
            />
          </n-form-item>
          <n-form-item label="Password" path="password" class="">
            <template #label>
              <label class="text-sm font-medium text-[rgba(61,58,121,1)] block">
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
              <label class="text-sm font-medium text-[rgba(61,58,121,1)] block">
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
          <!-- Switches -->
          <div class="grid grid-cols-3 gap-4 items-center mb-4">
            <div class="state flex items-center">
              <n-switch v-model:value="formData.is_staff" />
              <span class="ml-2">{{
                formData.is_staff ? "Is Staff" : "Not Staff"
              }}</span>
            </div>
            <div class="state flex items-center">
              <n-switch v-model:value="formData.is_active" />
              <span class="ml-2">{{
                formData.is_active ? "Active" : "Inactive"
              }}</span>
            </div>
            <div class="state flex items-center">
              <n-switch v-model:value="formData.is_superuser" />
              <span class="ml-2">{{
                formData.is_superuser ? "Superuser" : "User"
              }}</span>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="bg-[rgba(43,54,116,1)] flex gap-2 items-center text-white font-bold px-10 py-3 w-full justify-center rounded-full"
          >
            <i class="pi pi-save"></i>Update User
          </button>
        </n-form>
      </div>
    </div>
  </n-message-provider>
</template>

<script setup>
import { ref, reactive, onMounted, h } from "vue";
import { useRoute } from "vue-router";
import { useMessage } from "naive-ui";
import { editAdminUser, adminUserDetails } from "@/services/adminUsers";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const message = useMessage();
const route = useRoute();
const loading = ref(false);
const form = ref(null);

const userId = route.params.id;
// console.log(userId)

const formData = reactive({
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  cpassword: "",
  is_staff: false,
  is_active: false,
  is_superuser: false,
});

onMounted(async () => {
  try {
    const user = await adminUserDetails(userId);
    formData.username = user.username;
    formData.email = user.email;
    formData.firstName = user.firstName;
    formData.lastName = user.lastName;
    formData.is_staff = user.is_staff;
    formData.password = user.password;
    formData.is_active = user.is_active;
    formData.is_superuser = user.is_superuser;
  } catch (err) {
    message.error("Failed to load user");
  }
});

const handleUpdate = () => {
  form.value?.validate(async (errors) => {
    if (!errors) {
      try {
        const payload = { ...formData };
        const res = await editAdminUser(userId, payload);
        message.success("User updated successfully", {
          closable: true,
          icon: () =>
            h("i", { class: "pi pi-check-circle text-green-500 text-lg" }),
        });
      } catch (err) {
        message.error(
          "Update failed: " + (err.response?.data?.message || err.message)
        );
      }
    }
  });
};

const rules = {
  username: [
    { required: true, message: "Username is required", trigger: "blur" },
  ],
  firstName: [
    { required: true, message: "First name is required", trigger: "blur" },
  ],
  lastName: [
    { required: true, message: "Last name is required", trigger: "blur" },
  ],
  email: [
    { required: true, message: "Email is required", trigger: "blur" },
    {
      type: "email",
      message: "Invalid email format",
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
