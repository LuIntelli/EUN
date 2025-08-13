<template>
  <n-message-provider>
    <div class="p-6 md:w-[60%] mx-auto">
      <n-card
        :title="`Update Admin User: ${formData.username}`"
        class="shadow-md"
      >
        <div v-if="loading" class="text-center py-10">
          <n-spin size="large" />
        </div>

        <n-form
          v-else
          ref="formRef"
          :model="formData"
          label-placement="top"
          @submit.prevent="handleSubmit"
        >
          <n-form-item label="Username">
            <n-input v-model:value="formData.username" disabled />
          </n-form-item>

          <n-form-item label="Email">
            <n-input
              v-model:value="formData.email"
              placeholder="Email address"
            />
          </n-form-item>

          <n-form-item label="Full Name">
            <n-input
              v-model:value="formData.full_name"
              placeholder="Full name"
            />
          </n-form-item>

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

          <n-button
            type="primary"
            class="mt-4"
            :loading="submitting"
            @click="handleSubmit"
          >
            Save Changes
          </n-button>
        </n-form>
      </n-card>
    </div>
  </n-message-provider>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { useMessage } from "naive-ui";
import { adminUserDetails, editAdminUser } from "@/services/adminUsers";

const route = useRoute();
const message = useMessage();
const username = route.params.username;

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
    const res = await adminUserDetails(username);
    Object.assign(formData, res);
  } catch (error) {
    message.error("User details not fetched");
  } finally {
    loading.value = false;
  }
};

const handleSubmit = async () => {
  submitting.value = true;
  try {
    await editAdminUser(username, formData);
    message.success("User updated successfully");
  } catch (error) {
    // message.error(error.response?.data?.message || "Failed to update user");
    for (const key in err.response?.data) {
      if (
        (err.response?.data)[key] &&
        Array.isArray((err.response?.data)[key])
      ) {
        err.response?.data[key].forEach((msg) => {
          message.error(`${key}: ${msg}`);
        });
      } else {
        message.error((err.response?.data).message || "An error occurred");
        break;
      }
    }
  } finally {
    submitting.value = false;
  }
};

onMounted(fetchUser);
</script>
