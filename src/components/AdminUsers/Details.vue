<template>
  <n-message-provider>
    <div class="p-6 mx-auto">
      <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
        Update Admin User
      </h2>
      <div v-if="loading" class="text-center py-10">
        <n-spin size="large" />
      </div>

      <n-form
        ref="formRef"
        :model="formData"
        label-placement="top"
        @submit.prevent="handleSubmit"
      >
        <n-form-item label="Username">
          <n-input v-model:value="formData.username" />
        </n-form-item>

        <n-form-item label="Email">
          <n-input v-model:value="formData.email" placeholder="Email address" />
        </n-form-item>

        <n-form-item label="Full Name">
          <n-input v-model:value="formData.full_name" placeholder="Full name" />
        </n-form-item>

        <div class="flex gap-5">
          <n-form-item label="Is Staff">
            <n-switch v-model:value="formData.is_staff" />
            <span class="ml-2 font-semibold">
              {{ formData.is_staff ? "Yes" : "No" }}
            </span>
          </n-form-item>

          <n-form-item label="Is Superuser">
            <n-switch v-model:value="formData.is_superuser" />
            <span class="ml-2 font-semibold">
              {{ formData.is_superuser ? "Yes" : "No" }}
            </span>
          </n-form-item>

          <n-form-item label="Is Active">
            <n-switch v-model:value="formData.is_active" />
            <span class="ml-2 font-semibold">
              {{ formData.is_active ? "Active" : "Inactive" }}
            </span>
          </n-form-item>
        </div>

        <button
          type="submit"
          class="py-3 text-white bg-[rgba(43,54,116,1)] rounded-xl font-medium text-center block w-full"
          :loading="submitting"
          @click="handleSubmit"
        >
          Update
        </button>
      </n-form>
    </div>
  </n-message-provider>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import { adminUserDetails, editAdminUser } from "@/services/adminUsers";

const route = useRoute();
const router = useRouter();
const message = useMessage();
// const username = route.params.username

const formRef = ref(null);
const loading = ref(true);
const submitting = ref(false);

const formData = reactive({
  username: "",
  email: "",
  full_name: "",
  is_staff: false,
  is_superuser: false,
  is_active: false,
});

const fetchUser = async () => {
  try {
    const id = route.params.id;
    const res = await adminUserDetails(id);
    Object.assign(formData, res.data);
    console.log(formData);
  } catch (error) {
    message.error("Failed to fetch user details");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loading.value = false;
  }
};

const handleSubmit = async () => {
  submitting.value = true;
  try {
    await editAdminUser(route.params.id, formData);
    message.success("User updated successfully");
    router.push("/admin-users");
  } catch (error) {
    message.error(error.response?.data?.message || "Failed to update user");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    submitting.value = false;
  }
};

onMounted(fetchUser);
</script>
