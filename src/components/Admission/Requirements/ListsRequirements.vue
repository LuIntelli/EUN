<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      List of Requirements
    </h2>

    <n-data-table
      :columns="columns"
      :data="requirements"
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
import {
  listAdmissionRequirements,
  deleteAdmissionRequirement,
} from "@/services/Admission";

const requirements = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const next = ref(null);
const previous = ref(null);
const message = useMessage();

// Fetch all the items requirements
const fetchRequirements = async () => {
  loading.value = true;
  try {
    const res = await listAdmissionRequirements(); // from your services
    requirements.value = res.results.data;
    console.log(res);
  } catch (err) {
    console.error("Error fetching All the requirements:", err.message);
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
  router.push(`/admission-requirements/${id}`);
};

onMounted(fetchRequirements);

const handleDelete = async (id) => {
  try {
    await deleteAdmissionRequirement(id);
    message.success("Items requirement deleted successfully");
    fetchRequirements();
  } catch (error) {
    console.error(error);
    message.error("Requirement not deleted");
  }
};

// Define table columns
const columns = [
  { title: "ID", key: "id" },
  { title: "Category", key: "category" },
  { title: "Items Count", key: "items_count" },
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
    title: "Category Display",
    key: "category_display",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/admission-requirements/${row.id}`),
        },
        row.category_display
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
