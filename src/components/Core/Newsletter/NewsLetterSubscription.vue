<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      NewsLetter Subscription
    </h2>

    <n-data-table
      :columns="columns"
      :data="subscription"
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
import { newsLetterSubScription } from "@/services/Core";

const subscription = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();

// Fetch all universities
const fetchSubscription = async () => {
  loading.value = true;
  try {
    const res = await newsLetterSubScription(); // from your services
    subscription.value = res.results.data;
  } catch (err) {
    console.error("Error fetching subscription:", err.message);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loading.value = false;
  }
};

onMounted(fetchSubscription);

// Define table columns
const columns = [
  {
    title: "Email",
    key: "email",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/subscription/${row.id}`),
        },
        row.email
      );
    },
  },
  { title: "Subscribed At", key: "subscribed_at" },
  { title: "Subscription Status", key: "subscription_status" },
];

const pagination = {
  // pageSize:10,
  showSizePicker: true,
  pageSizes: [5, 10, 20],
};
</script>
