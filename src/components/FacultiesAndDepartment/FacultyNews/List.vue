<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      Faculty News
    </h2>

    <n-data-table
      :columns="columns"
      :data="data"
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
import {
  listFacultyNews,
  deleteFacultyNews,
} from "@/services/facultiesAndDepartment";

const data = ref([]);
const loading = ref(false);
const router = useRouter();
const message = useMessage();

// Fetch all data
const fetchData = async () => {
  loading.value = true;
  try {
    const res = await listFacultyNews(); // from your services
    data.value = res.results.data;
    console.log(data.value);
    loading.value = false;
  } catch (err) {
    console.error("Error fetching data:", err.message);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loading.value = false;
  }
};

onMounted(fetchData);
const handleDelete = async (id) => {
  try {
    await deleteFacultyNews(id);
    message.success("Data deactivated successfully");
    fetchData();
  } catch (error) {
    console.error(error);
    message.error("Failed to deactivate data");
  }
};

// Define table columns
const columns = [
  {
    title: "ID",
    key: "id",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/faculty-news/edit/${row.id}`),
        },
        row.id
      );
    },
  },
  { title: "Hero Title", key: "hero_title" },
  { title: "Faculty Name", key: "faculty_name" },
  { title: "Faculty Slug", key: "faculty_slug" },
  { title: "Slides Count", key: "slides_count" },
  { title: "Highlights Count", key: "highlights_count" },
  { title: "Created At", key: "created_at" },

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
          default: () => "Are you sure you want to deactivate this data?",
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
