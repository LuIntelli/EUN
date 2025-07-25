<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      Admin Users
    </h2>

    <n-data-table
      :columns="columns"
      :data="users"
      :bordered="true"
      :pagination="pagination"
      :loading="loading"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, h } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { listAdminUsers, deleteAdminUser } from "@/services/adminUsers";
import { useMessage, NPopconfirm, NButton } from "naive-ui";

const users = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const message = useMessage();

const fetchUsers = async () => {
  loading.value = true;
  try {
    const res = await listAdminUsers();
    users.value = res.results.data;
    console.log(res.results.data);
  } catch (err) {
    console.error("Failed to fetch users:", err.message);
    for (const key in err.response?.data) {
      if (
        (err.response?.data)[key] &&
        Array.isArray((err.response?.data)[key])
      ) {
        err.response?.data[key].forEach((msg) => {
          message.error(`${key}: ${msg}`);
        });
      } else {
        message.error((err.response?.data)[key]);
      }
    }
  } finally {
    loading.value = false;
  }
};

onMounted(fetchUsers);

const handleDelete = async (id) => {
  try {
    await deleteAdminUser(id);
    message.success("Admin user deleted");
    fetchUsers();
    loading.value = false;
  } catch (error) {
    console.error(error);
    message.error("Failed to delete user");
  }
};

// Columns
const columns = [
  {
    title: "Username",
    key: "username",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline cursor-pointer",
          onClick: () => router.push(`/admin-users/edit/${row.id}`),
        },
        row.username
      );
    },
  },
  { title: "Email", key: "email" },
  { title: "Full Name", key: "full_name" },
  {
    title: "Staff",
    key: "is_staff",
    render(row) {
      return row.is_staff
        ? h("span", { class: "text-green-600 font-bold" }, "Yes")
        : h("span", { class: "text-red-500" }, "No");
    },
  },
  {
    title: "Superuser",
    key: "is_superuser",
    render(row) {
      return row.is_superuser
        ? h("span", { class: "text-green-600 font-bold" }, "Yes")
        : h("span", { class: "text-red-500" }, "No");
    },
  },
  {
    title: "Active",
    key: "is_active",
    render(row) {
      return row.is_active
        ? h("span", { class: "text-green-600 font-bold" }, "Active")
        : h("span", { class: "text-red-500 font-bold" }, "Inactive");
    },
  },
  {
    title: "Action",
    key: "actions",
    render(row) {
      return h(
        NPopconfirm,
        {
          onPositiveClick: () => handleDelete(row.id),
          positiveText: "Yes",
          negativeText: "No",
        },
        {
          trigger: () =>
            h(
              NButton,
              {
                type: "error",
                disabled: !row.is_active,
                size: "small",
                ghost: true,
              },
              { default: () => "Deactivate" }
            ),
          default: () => "Are you sure you want to deactivate this user?",
        }
      );
    },
  },
];

const pagination = {
  // pageSize:10,
  showSizePicker: true,
  pageSizes: [5, 10, 20],
};
</script>
