<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      University Setings
    </h2>

    <n-data-table
      :columns="columns"
      :data="universities"
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
import { listUniversities } from "@/services/Core";

const universities = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();

// Fetch all universities
const fetchUniversities = async () => {
  loading.value = true;
  try {
    const res = await listUniversities(); // from your services
    universities.value = res;
  } catch (err) {
    console.error("Error fetching universities:", err.message);
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

onMounted(fetchUniversities);

// Define table columns
const columns = [
  {
    title: "University",
    key: "university_info",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/universities-settings/${row.id}`),
        },
        row.university_info
      );
    },
  },
  { title: "Contact Info", key: "contact_info" },
  {
    title: "Accreditation Status",
    key: "accreditation_status",
    render(row) {
      return h(
        "span",
        {
          class:
            row.accreditation_status === "Accredited"
              ? "text-green-600 font-bold"
              : "text-red-500 font-bold",
        },
        row.accreditation_status
      );
    },
  },
  {
    title: "Status",
    key: "status_display",
    render(row) {
      return h(
        "span",
        {
          class:
            row.status_display === "Active"
              ? "text-green-600 font-medium"
              : "text-gray-400 font-medium",
        },
        row.status_display
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
