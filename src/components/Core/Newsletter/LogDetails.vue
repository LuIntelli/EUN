<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      NewsLetter Listing
    </h2>

    <n-data-table
      :columns="columns"
      :data="logDetails"
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
import { newsLetterLogDetail } from "@/services/Core";

const logDetails = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const logId = route.params.id;

// Fetch all logDetails
const fetchLogDetails = async () => {
  loading.value = true;
  try {
    const res = await newsLetterLogDetail(logId); // from your services
    logDetails.value = res;
  } catch (err) {
    console.error("Error fetching newsletter:", err.message);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loading.value = false;
  }
};

onMounted(fetchLogDetails);

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
  { title: "Newsletter", key: "newsletter" },
];

const pagination = {
  // pageSize:10,
  showSizePicker: true,
  pageSizes: [5, 10, 20],
};
</script>
