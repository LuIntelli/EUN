<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Post
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Title" path="title">
        <n-input
          v-model:value="formData.title"
          class=" "
          placeholder="Post Title"
        />
      </n-form-item>
      <n-form-item label="Slug" path="slug">
        <n-input v-model:value="formData.slug" placeholder="Slug" />
      </n-form-item>
      <n-form-item label="Excerpt" path="excerpt">
        <n-input v-model:value="formData.excerpt" placeholder="Music" />
      </n-form-item>
      <n-form-item
        label="Blog Content (HTML)"
        path="content"
        class="md:col-span-2"
      >
        <div class="w-full bg-[#e5e5e5]">
          <QuillEditor
            v-model:content="formData.content"
            content-type="html"
            theme="snow"
            class="font-medium"
            style="height: 300px; background-color: white"
          />
        </div>
      </n-form-item>

      <n-form-item label="Author" path="author">
        <n-select
          v-model:value="formData.author"
          :options="authorsOption"
          placeholder="Select Author"
          :loading="loadingData"
          filterable
        />
      </n-form-item>
      <n-form-item label="Submitted By" path="submitted_by">
        <n-input
          v-model:value="formData.submitted_by"
          placeholder="Submitted By"
          class="w-full"
        />
      </n-form-item>
      <n-form-item label="Faculty" path="faculty">
        <n-select
          v-model:value="formData.faculty"
          :options="facultiesOption"
          placeholder="Select Faculty"
          :loading="loadingData"
          filterable
        />
      </n-form-item>
      <n-form-item label="Reading Time" path="reading_time">
        <n-input
          v-model:value="formData.reading_time"
          placeholder="Reading Time"
          class="w-full"
        />
      </n-form-item>
      <n-form-item label="Creation Date" path="created_at">
        <n-date-picker
          v-model:value="formData.created_at"
          type="datetime"
          placeholder="Pick creation date"
          class="w-full"
        />
      </n-form-item>

      <n-form-item label="Date updated" path="updated_at">
        <n-date-picker
          v-model:value="formData.updated_at"
          type="datetime"
          placeholder="Pick date updated"
          class="w-full"
        />
      </n-form-item>
      <n-form-item label="Date published" path="published_date">
        <n-date-picker
          v-model:value="formData.published_date"
          type="datetime"
          placeholder="Date published"
          class="w-full"
        />
      </n-form-item>

      <div class="flex items-center gap-2">
        <div class="flex items-center gap-5">
          <n-form-item label="Is Featured" path="is_featured">
            <n-switch v-model:value="formData.is_featured" />
          </n-form-item>
        </div>
        <div class="flex items-center gap-5">
          <n-form-item label="Is Published" path="is_published">
            <n-switch v-model:value="formData.is_published" />
          </n-form-item>
        </div>
        <div class="flex items-center gap-5">
          <n-form-item label="Meta Keywords" path="meta_keywords">
            <n-switch v-model:value="formData.meta_keywords" />
          </n-form-item>
        </div>
        <div class="flex items-center gap-5">
          <n-form-item label="Meta Description" path="meta_description">
            <n-switch v-model:value="formData.meta_description" />
          </n-form-item>
        </div>
        <div class="flex items-center gap-5">
          <n-form-item label="Is Active" path="is_active">
            <n-switch v-model:value="formData.is_active" />
          </n-form-item>
        </div>
      </div>
      <n-form-item
        label="Hero Image"
        path="hero_image"
        class="w-full border p-1"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange1"
        >
          <n-upload-dragger
            style="border-radius: 20px; padding: 20px; text-align: center"
          >
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon />
              </n-icon>
            </div>

            <n-text class="text-[rgba(71,84,103,1)]" style="font-size: 16px">
              <span class="text-[rgba(80,48,229,1)] font-[600]"
                >Click to upload
              </span>
              <span class="text-[rgba(71,84,103,1)] font-[400]">
                or drag to upload</span
              >
            </n-text>

            <n-p depth="3" style="margin: 8px 0 0 0; font-weight: 500">
              SVG, PNG, JPG or GIF (max. 1440x600px)
            </n-p>
          </n-upload-dragger>
        </n-upload>
        <span v-if="photoPreview1" class="block mt-2">
          <img :src="photoPreview1" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="Featured Image"
        path="featured_image"
        class="w-full border p-1"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange2"
        >
          <n-upload-dragger
            style="border-radius: 20px; padding: 20px; text-align: center"
          >
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon />
              </n-icon>
            </div>

            <n-text class="text-[rgba(71,84,103,1)]" style="font-size: 16px">
              <span class="text-[rgba(80,48,229,1)] font-[600]"
                >Click to upload
              </span>
              <span class="text-[rgba(71,84,103,1)] font-[400]">
                or drag to upload</span
              >
            </n-text>

            <n-p depth="3" style="margin: 8px 0 0 0; font-weight: 500">
              SVG, PNG, JPG or GIF (max. 1440x600px)
            </n-p>
          </n-upload-dragger>
        </n-upload>
        <span v-if="photoPreview2" class="block mt-2">
          <img :src="photoPreview2" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item label="Category" class="mt-4" path="category">
        <n-select
          v-model:value="formData.category"
          :options="categoriesOption"
          placeholder="Select Category"
          :loading="loadingData"
          filterable
        />
      </n-form-item>
      <n-form-item label="Tags" class="mt-4" path="tags">
        <n-select
          v-model:value="formData.tags"
          :options="listTagsOption"
          placeholder="Select Tag"
          :loading="loadingData"
          filterable
        />
      </n-form-item>
      <!-- <n-form-item label="Tags" path="tags">
        <n-dynamic-tags
          v-model:value="formData.tags"
          placeholder="Type and press Enter"
        />
      </n-form-item> -->

      <button
        type="submit"
        class="py-3 text-white bg-[rgba(43,54,116,1)] rounded-xl font-medium text-center block w-full"
        :loading="submitting"
        @click="handleSubmit"
      >
        Update Blog Post
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css"; //

import {
  detailsPost,
  editPost,
  listAuthors,
  listCategory,
  listTags,
} from "@/services/Blog";
import { listFaculties } from "@/services/facultiesAndDepartment";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);
const photoFile1 = ref(null);
const photoPreview1 = ref(null);
const photoFile2 = ref(null);
const photoPreview2 = ref(null);

const formData = reactive({
  title: "",
  author: "",
  category: "",
  content: "",
  excerpt: "",
  tags: null,
  faculty: "",
  meta_description: "",
  meta_keywords: "",
  reading_time: "",
  slug: "",
  created_at: null,
  published_date: null,
  updated_at: null,
  submitted_by: "",
  is_published: null,
  is_active: "false",
  is_featured: "false",
  id: "",
});

const facultiesOption = ref([]);
const listTagsOption = ref([]);
const categoriesOption = ref([]);
const authorsOption = ref([]);
const loadingData = ref(false);

onMounted(async () => {
  loadingData.value = true;
  try {
    const tags = await listTags();
    listTagsOption.value = tags.results.map((tag) => ({
      label: tag.name || `Tag ${tag.id}`,
      value: Number(tag.id),
    }));
    const res = await listFaculties();
    const authors = await listAuthors();
    const categories = await listCategory();
    authorsOption.value = authors.results.map((author) => ({
      label: author.last_name || `Author ID ${author.id}`,
      value: Number(author.id),
    }));
    categoriesOption.value = categories.results.map((category) => ({
      label: category.name || `Category ${category.id}`,
      value: Number(category.id),
    }));
    facultiesOption.value = res.results.data.map((page) => ({
      label: page.name || `Faculty ${page.id}`,
      value: Number(page.id),
    }));
  } catch (err) {
    console.error("Error loading data", err);
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
    loadingData.value = false;
  }
});

watch(
  () => formData.reading_time,
  (newVal) => {
    if (newVal) {
      formData.reading_time = new Date(newVal).toISOString().split("T")[0];
      console.log(formData.reading_time);
    } else {
      formData.reading_time = null;
    }
  }
);
watch(
  () => formData.created_at,
  (newVal) => {
    if (newVal) {
      formData.created_at = new Date(newVal).toISOString().split("T")[0];
      console.log(formData.created_at);
    } else {
      formData.created_at = null;
    }
  }
);
watch(
  () => formData.published_date,
  (newVal) => {
    if (newVal) {
      formData.published_date = new Date(newVal).toISOString().split("T")[0];
      console.log(formData.published_date);
    } else {
      formData.published_date = null;
    }
  }
);

// Handle image select
const handlePhotoChange1 = (options) => {
  const file = options.file.file;
  photoFile1.value = file;
  photoPreview1.value = URL.createObjectURL(file);
};
// Handle image select
const handlePhotoChange2 = (options) => {
  const file = options.file.file;
  photoFile2.value = file;
  photoPreview2.value = URL.createObjectURL(file);
};
// Load Category by ID
const fetchBlogPosts = async () => {
  try {
    const id = route.params.id;
    const data = await detailsPost(id);
    Object.assign(formData, data);
    formData.tags = data.tags[0];
    console.log(data.tags);

    if (data.hero_image) {
      photoPreview1.value = data.hero_image;
    }
    if (data.featured_image) {
      photoPreview2.value = data.featured_image;
    }
    delete formData.hero_image;
    delete formData.featured_image;
  } catch (error) {
    message.error("Failed to load blog posts data");
  }
};

// Update Blog Post
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    if (photoFile1.value) {
      formData.hero_image = photoFile1.value;
    }
    if (photoFile2.value) {
      formData["featured_image"] = photoFile2.value;
    }
    console.log("Start submitting...", formData);

    await editPost(route.params.id, formData);
    message.success("Blog post updated successfully");
    router.push("/blog-post");
  } catch (err) {
    console.error(err);
    message.error("Blog post not updated");
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
    submitting.value = false;
  }
};

onMounted(fetchBlogPosts);

// Rules
const rules = {};
/*
{
  title: [{ required: true, message: "Title is required", trigger: "blur" }],
  content: [
    { required: true, message: "Content is required", trigger: "blur" },
  ],
  slug: [{ required: true, message: "Slug is required", trigger: "blur" }],
  faculty: [
    { required: true, message: "Faculty is required", trigger: "blur" },
  ],

  excerpt: [
    { required: true, message: "Excerpt is required", trigger: "blur" },
  ],

  author: [{ required: true, message: "Author is required", trigger: "blur" }],
  category: [
    { required: true, message: "Category is required", trigger: "blur" },
  ],
  submitted_by: [
    { required: true, message: "Submitted by is required", trigger: "blur" },
  ],
  reading_time: [
    { required: true, message: "Reading time by is required", trigger: "blur" },
  ],
  submitted_by: [
    { required: true, message: "Submitted by is required", trigger: "blur" },
  ],

  created_at: [
    {
      required: true,
      validator(_, value) {
        if (!value) return new Error("Created date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],
  updated_at: [
    {
      required: true,
      validator(_, value) {
        if (!value) return new Error("Updated date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],
  published_date: [
    {
      required: true,
      validator(_, value) {
        if (!value) return new Error("Updated date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],

  is_featured: [
    {
      required: true,
      type: "boolean",
      message: "Is featured is required",
      trigger: "change",
    },
  ],
  is_published: [
    {
      required: true,
      type: "boolean",
      message: "Publised date is required",
      trigger: "change",
    },
  ],
  meta_description: [
    {
      required: true,
      type: "boolean",
      message: "Meta description required",
      trigger: "change",
    },
  ],
  meta_keywords: [
    {
      required: true,
      type: "boolean",
      message: "Meta keywords is required",
      trigger: "change",
    },
  ],
  hero_image: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("Hero image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  featured_image: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile2.value) {
          return new Error("Featured image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  tags: [
    {
      required: true,
      type: "array",
      message: "Please enter at least one tag",
      trigger: "change",
    },
    {
      validator: (_, value) => {
        if (!Array.isArray(value) || value.length === 0) {
          return new Error("Please enter at least one tag");
        }
        if (value.some((tag) => !tag || tag.trim() === "")) {
          return new Error("Empty tags are not allowed");
        }
        return true;
      },
      trigger: "blur",
    },
  ],
};
*/
</script>
