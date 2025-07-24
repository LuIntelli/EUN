<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      List Authors
    </h2>

    <n-data-table
      :columns="columns"
      :data="listOfAuthors"
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
import { listAuthors } from "@/services/Blog";

const listOfAuthors = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();

// Fetch all newsLetterLists
const fetchListsOfAuthor = async () => {
  loading.value = true;
  try {
    const res = await listAuthors(); // from your services
    console.log(res);
    listOfAuthors.value = res.results;
  } catch (err) {
    console.error("Error fetching newsletter Lists:", err.message);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loading.value = false;
  }
};

onMounted(fetchListsOfAuthor);

// Define table columns
const columns = [
  {
    title: "Author ID",
    key: "id",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/blog/author/${row.id}`),
        },
        row.first_name
      );
    },
  },
  { title: "Last Name", key: "last_name" },
  { title: "Email", key: "email" },
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
