<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">Logs</h2>

    <n-data-table
      :columns="columns"
      :data="logs"
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
import { newsLetterLogs } from "@/services/Core";

const logs = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();

// Fetch all newsLetterLists
const fetchLogs = async () => {
  loading.value = true;
  try {
    const res = await newsLetterLogs(); // from your services
    logs.value = res.results.data;
  } catch (err) {
    console.error("Error fetching newsletter Lists:", err.message);
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

onMounted(fetchLogs);

// Define table columns
const columns = [
  {
    title: "Recipient Email",
    key: "recipient_email",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/logs/${row.id}`),
        },
        row.title
      );
    },
  },
  { title: "Created Date", key: "created_at" },
  { title: "Updated Date", key: "updated_at" },
  { title: "Sent Date", key: "sent_at" },
];

const pagination = {
  // pageSize:10,
  showSizePicker: true,
  pageSizes: [5, 10, 20],
};
</script>
