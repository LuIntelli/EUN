<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      Why Choose Us Lists
    </h2>

    <n-data-table
      :columns="columns"
      :data="lists"
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
  listWhyChooseFeatures,
  deleteWhyChooseFeatures,
} from "@/services/Admission";

const lists = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const next = ref(null);
const previous = ref(null);
const message = useMessage();

// Fetch all the Data
const fetchLists = async () => {
  loading.value = true;
  try {
    const res = await listWhyChooseFeatures(); // from your services
    lists.value = res.results.data;
  } catch (err) {
    console.error("Error fetching all the data:", err.message);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loading.value = false;
  }
};

const goToDetails = (id) => {
  router.push(`/why-us/${id}`);
};

onMounted(fetchLists);

const handleDelete = async (id) => {
  try {
    await deleteWhyChooseFeatures(id);
    message.success("Data deactivated successfully");
    fetchLists();
  } catch (error) {
    console.error(error);
    message.error("Failed to deactivate data");
  }
};

// Define table columns
const columns = [
  { title: "ID", key: "id" },
  {},
  { title: "Homepage Title", key: "homepage_title" },
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
    title: "Title",
    key: "title",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/why-us/${row.id}`),
        },
        row.title
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
