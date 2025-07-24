<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      List Category
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
import { listCategory } from "@/services/Blog";

const categories = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();

// Fetch all the Categories
const fetchCategories = async () => {
  loading.value = true;
  try {
    const res = await listCategory(); // from your services
    categories.value = res.results;
    console.log(res.results);
  } catch (err) {
    console.error("Error fetching All the Categories:", err.message);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loading.value = false;
  }
};

onMounted(fetchCategories);

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
          onClick: () => router.push(`/blog/category/${row.id}`),
        },
        row.name
      );
    },
  },
  { title: "Color", key: "color" },
  { title: "Post count", key: "post_count" },
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
  // pageSize:10,
  showSizePicker: true,
  pageSizes: [5, 10, 20],
};
</script>
