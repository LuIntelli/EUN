<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      List Blog Posts
    </h2>

    <n-data-table
      :columns="columns"
      :data="posts"
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
import { listPosts, deletePost } from "@/services/Blog";

const posts = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const next = ref(null);
const previous = ref(null);

// Fetch all the Posts
const fetchPosts = async () => {
  loading.value = true;
  try {
    const res = await listPosts(); // from your services
    posts.value = res.results;
  } catch (err) {
    console.error("Error fetching All the Posts:", err.message);
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
    loading.value = false;
  }
};

const goToDetails = (id) => {
  router.push(`/blog-posts/${id}`);
};

onMounted(fetchPosts);

const handleDelete = async (id) => {
  try {
    await deletePost(id);
    message.success("Blog Post deleted successfully");
    fetchPosts();
  } catch (error) {
    console.error(error);
    message.error("Blog post not deleted");
  }
};

// Define table columns
const columns = [
  { title: "ID", key: "id" },
  { title: "Published Date", key: "published_date" },
  { title: "Created Date", key: "created_at" },
  {
    title: "Category Name",
    key: "category_name",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/blog-post/${row.id}`),
        },
        row.category_name
      );
    },
  },
  { title: "Status Display", key: "status_display" },
  { title: "Is Featured", key: "is_featured" },

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
