<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-4">
      List Admission Pages
    </h2>

    <n-data-table
      :columns="columns"
      :data="lists"
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
import { listAdmissionPages, deleteAdmissionPage } from "@/services/Admission";

const lists = ref([]);
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const next = ref(null);
const previous = ref(null);
const message = useMessage();

// Fetch all the Data
const fetchData = async () => {
  loading.value = true;
  try {
    const res = await listAdmissionPages(); // from your services
    lists.value = res.results.data;
    console.log(res.results.data);
  } catch (err) {
    console.error("Error fetching all the data:", err.message);
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
  router.push(`/admission-pages/${id}`);
};

onMounted(fetchData);

const handleDelete = async (id) => {
  try {
    await deleteAdmissionPage(id);
    message.success("Data deactivated successfully");
    fetchData();
  } catch (error) {
    console.error(error);
    message.error("Data not deactivated");
  }
};

// Define table columns
const columns = [
  { title: "ID", key: "id" },
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
    title: "Hero Title",
    key: "hero_title",
    render(row) {
      return h(
        "a",
        {
          class: "text-blue-600 hover:underline font-semibold cursor-pointer",
          onClick: () => router.push(`/admission-pages/${row.id}`),
        },
        row.hero_title
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
