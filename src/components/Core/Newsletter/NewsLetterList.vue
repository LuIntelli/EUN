<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      NewsLetter Listing
    </h2>

    <n-data-table
      :columns="columns"
      :data="newsLetterLists"
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
import { listNewsLetter } from "@/services/Core";

const newsLetterLists = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();

// Fetch all newsLetterLists
const fetchNewsLetterLists = async () => {
  loading.value = true;
  try {
    const res = await listNewsLetter(); // from your services
    newsLetterLists.value = res.results.data;
  } catch (err) {
    console.error("Error fetching newsletter Lists:", err.message);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loading.value = false;
  }
};

onMounted(fetchNewsLetterLists);

// Define table columns
const columns = [
  {
    title: "Title",
    key: "title",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/newsletters/${row.id}`),
        },
        row.title
      );
    },
  },
  { title: "Created At", key: "created_at" },
  { title: "Updated At", key: "updated_at" },
  { title: "Total Recipients", key: "total_recipients" },
  { title: "Scheduled Date", key: "scheduled_date" },

  {
    title: "Sent Date",
    key: "sent_date",
  },
];

const pagination = {
  // pageSize:10,
  showSizePicker: true,
  pageSizes: [5, 10, 20],
};
</script>
