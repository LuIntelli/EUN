<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      List Staff Category
    </h2>

    <n-data-table
      :columns="columns"
      :data="categories"
      :loading="loading"
      :bordered="true"
      :pagination="pagination"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, h } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { NPopconfirm, NButton, useMessage } from "naive-ui";
import { listStaffCategory, deleteStaffCategory } from "@/services/Staff";

const categories = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();

// Fetch all the Categories
const fetchCategories = async () => {
  loading.value = true;
  try {
    const res = await listStaffCategory(); // from your services
    categories.value = res.results.data;
  } catch (err) {
    console.error("Error fetching All the Categories:", err.message);
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

onMounted(fetchCategories);
const handleDelete = async (id) => {
  try {
    await deleteStaff(id);
    message.success("Data deactivated successfully");
    fetchCategories();
  } catch (error) {
    console.error(error);
    message.error("Failed to deactivate data");
  }
};

// Define table columns
const columns = [
  {
    title: "Name",
    key: "name",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/staff/category/edit/${row.id}`),
        },
        row.name
      );
    },
  },
  { title: "Staff Count", key: "staff_count" },
  {
    title: "Is Active",
    key: "is_active",
    render(row) {
      return h(
        "span",
        {
          style: {
            color: row.is_active ? "green" : "red",
            fontWeight: "500",
          },
        },
        row.is_active ? "Active" : "Not Active"
      );
    },
  },
];

const pagination = {
  // pageSize:20,
  showSizePicker: true,
  pageSizes: [5, 10, 20],
};
</script>
