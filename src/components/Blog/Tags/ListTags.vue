<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">List Tags</h2>

    <n-data-table
      :columns="columns"
      :data="tags"
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
import { listTags, deleteTag } from "@/services/Blog";

const tags = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const next = ref(null);
const previous = ref(null);
const message = useMessage();

// Fetch all the Tags
const fetchTags = async () => {
  loading.value = true;
  try {
    const res = await listTags(); // from your services
    tags.value = res.results;
    console.log(res.results);
  } catch (err) {
    console.error("Error fetching All the Tags:", err.message);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loading.value = false;
  }
};

const handleDelete = async (id) => {
  try {
    await deleteTag(id);
    message.success("Data deactivated successfully");
    fetchData();
  } catch (error) {
    console.error(error);
    message.error("Failed to deactivate data");
  }
};

const goToDetails = (id) => {
  router.push(`/blog-tags/${id}`);
};

onMounted(fetchTags);

// Define table columns
const columns = [
  { title: "ID", key: "id" },
  {
    title: "Name",
    key: "name",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/blog-tags/${row.id}`),
        },
        row.name
      );
    },
  },

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
              { default: () => "Delete" }
            ),
          default: () => "Are you sure you want to delete this data?",
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
