<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      List Important Dates
    </h2>

    <n-data-table
      :columns="columns"
      :data="dates"
      :loading="loading"
      :bordered="true"
      :pagination="pagination"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, h, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { NPopconfirm, NButton, useMessage } from "naive-ui";
import {
  listAdmissionImportantDates,
  deleteAdmissionImportantDate,
} from "@/services/Admission";

const dates = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const next = ref(null);
const previous = ref(null);
const message = useMessage();

// Fetch all the date
const fetchDates = async () => {
  loading.value = true;
  try {
    const res = await listAdmissionImportantDates(); // from your services
    dates.value = res.results.data;
  } catch (err) {
    console.error("Error fetching All the Important dates:", err.message);
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
  router.push(`/important-dates/${id}`);
};

onMounted(fetchDates);

const handleDelete = async (id) => {
  try {
    await deleteAdmissionImportantDate(id);
    message.success("Date deleted successfully");
    fetchDates();
  } catch (error) {
    console.error(error);
    message.error("Date not deleted");
  }
};

// Define table columns
const columns = [
  { title: "ID", key: "id" },
  { title: "Order", key: "order" },
  { title: "Date", key: "date" },
  {
    title: "Title",
    key: "title",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/important-dates/${row.id}`),
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
