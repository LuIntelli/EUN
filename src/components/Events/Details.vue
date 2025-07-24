<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Event
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
          placeholder="Tech Innovation Summit"
        />
      </n-form-item>
      <n-form-item label="Slug" path="slug">
        <n-input
          v-model:value="formData.slug"
          placeholder="tech-innovation-summit"
        />
      </n-form-item>

      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Annual technology conference featuring..."
        />
      </n-form-item>
      <n-form-item label="Short Description" path="short_description">
        <n-input
          v-model:value="formData.short_description"
          placeholder="Where Ideas Meet Technology"
        />
      </n-form-item>

      <n-form-item label="Category" path="category">
        <n-input
          type="number"
          v-model:value="formData.category"
          placeholder="2"
        />
      </n-form-item>
      <n-form-item label="category Name" path="category_name">
        <n-input
          v-model:value="formData.category_name"
          placeholder="Tech Conferences"
        />
      </n-form-item>
      <n-form-item label="Created By Name" path="created_by_name">
        <n-input v-model:value="formData.created_by_name" placeholder="" />
      </n-form-item>
      <n-form-item label="Created By" path="created_by">
        <n-input v-model:value="formData.created_by" placeholder="" />
      </n-form-item>
      <n-form-item label="Location" path="location">
        <n-input v-model:value="formData.location" placeholder="Lagos" />
      </n-form-item>

      <n-form-item label="Venue Details" path="venue_details">
        <n-input
          v-model:value="formData.venue_details"
          placeholder="Main Auditorium"
        />
      </n-form-item>
      <n-form-item label="Organizer" path="organizer">
        <n-input
          v-model:value="formData.organizer"
          placeholder="Tech Community NG"
        />
      </n-form-item>
      <n-form-item label="contact Email" path="contact_email">
        <n-input
          type="email"
          v-model:value="formData.contact_email"
          placeholder="info@techcommunity.ng"
        />
      </n-form-item>
      <n-form-item label="Contact Phone" path="contact_phone">
        <n-input
          type="number"
          v-model:value="formData.contact_phone"
          placeholder="08012345678"
        />
      </n-form-item>
      <n-form-item label="Contact Phone" path="contact_phone">
        <n-input
          type="number"
          v-model:value="formData.contact_phone"
          placeholder="08012345678"
        />
      </n-form-item>
      <n-form-item label="Registration Url" path="registration_url">
        <n-input
          type="text"
          v-model:value="formData.registration_url"
          placeholder="https://example.com/register-tech"
        />
      </n-form-item>
      <n-form-item label="Max Participants" path="max_participants">
        <n-input
          type="number"
          v-model:value="formData.max_participants"
          placeholder="200"
        />
      </n-form-item>
      <n-form-item label="Max Participants" path="max_participants">
        <n-input
          type="number"
          v-model:value="formData.max_participants"
          placeholder="200"
        />
      </n-form-item>

      <n-form-item
        label="Hero Image"
        path="hero_image"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange"
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
        <span v-if="photoPreview" class="block mt-2">
          <img :src="photoPreview" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="Featured Image"
        path="featured_image"
        class="w-full border p-3 my-5 rounded-xl"
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

      <n-form-item label="Status Display" path="status_display">
        <n-input
          v-model:value="formData.status_display"
          placeholder="Upcoming"
        />
      </n-form-item>

      <n-form-item label="Start Date" path="start_date">
        <n-date-picker
          v-model:value="formData.start_date"
          type="datetime"
          placeholder="Pick Start date"
          class="w-full"
        />
      </n-form-item>
      <n-form-item label="Registration Deadline" path="registration_deadline">
        <n-date-picker
          v-model:value="formData.registration_deadline"
          type="datetime"
          placeholder="Pick Registration Deadline"
          class="w-full"
        />
      </n-form-item>
      <n-form-item label="End Date" path="end_date">
        <n-date-picker
          v-model:value="formData.end_date"
          type="datetime"
          placeholder="Pick End date"
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
          placeholder="Pick date"
          class="w-full"
        />
      </n-form-item>

      <div class="flex items-center gap-2">
        <n-form-item
          label="Is Registration Required"
          path="registration_required"
        >
          <n-switch v-model:value="formData.registration_required" />
        </n-form-item>
        <n-form-item label="Is Featured" path="is_featured">
          <n-switch v-model:value="formData.is_featured" />
        </n-form-item>
        <n-form-item label="Is Published" path="is_published">
          <n-switch v-model:value="formData.is_published" />
        </n-form-item>
        <n-form-item label="Is Upcoming" path="is_upcoming">
          <n-switch v-model:value="formData.is_upcoming" />
        </n-form-item>
        <n-form-item label="Is Ongoing" path="is_ongoing">
          <n-switch v-model:value="formData.is_ongoing" />
        </n-form-item>
      </div>

      <button
        type="submit"
        class="py-3 text-white bg-[rgba(43,54,116,1)] rounded-xl font-medium text-center block w-full"
        :loading="submitting"
        @click="handleSubmit"
      >
        Update
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css"; //

import { eventDetails, editEvent } from "@/services/Event";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photoFile = ref(null);
const photoPreview = ref(null);
const photoFile1 = ref(null);
const photoPreview1 = ref(null);

const formData = reactive({
  venue_details: "",
  location: "",
  organizer: "",
  contact_email: "",
  contact_phone: "",
  registration_url: "",
  max_participants: "",
  slug: "",
  title: "",
  short_description: "",
  description: "",
  category: "",
  category_name: "",
  created_by_name: "",
  created_by: "",
  status_display: "",
  created_at: null,
  updated_at: null,
  start_date: null,
  end_date: null,
  registration_deadline: null,
  is_ongoing: "false",
  is_upcoming: "false",
  is_published: "false",
  is_featured: "false",
  registration_required: "false",
});

const fetchData = async () => {
  try {
    const res = await eventDetails(route.params.id);
    Object.assign(formData, res);
    photoPreview.value = formData["hero_image"];
    photoPreview1.value = formData["featured_image"];
    delete formData["featured_image"];
    delete formData["hero_image"];
  } catch (error) {
    message.error("Failed to load  data");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loading.value = false;
  }
};

const handlePhotoChange = (options) => {
  const file = options.file.file;
  photoFile.value = file;
  photoPreview.value = URL.createObjectURL(file);
};
const handlePhotoChange1 = (options) => {
  const file = options.file.file;
  photoFile1.value = file;
  photoPreview1.value = URL.createObjectURL(file);
};

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    if (photoFile.value) {
      formData["hero_image"] = photoFile.value;
    }
    if (photoFile1.value) {
      formData["featured_image"] = photoFile1.value;
    }

    formData["start_date"] = new Date(formData.start_date).toISOString();
    formData["registration_deadline"] = new Date(
      formData.registration_deadline
    ).toISOString();
    formData["end_date"] = new Date(formData.end_date).toISOString();
    console.log("Start submitting...", formData);
    await editEvent(route.params.id, formData);
    message.success("Updated successfully");
    router.push("/events");
  } catch (err) {
    console.error(err);
    message.error("Data not updated");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    submitting.value = false;
  }
};

onMounted(fetchData);
// Rules
const rules = {};

/*

{
  slug: [
    {
      required: true,
      message: "Slug is required",
      trigger: "blur",
    },
  ],

  description: [
    {
      required: true,
      message: "Description is required",
      trigger: "blur",
    },
  ],
  short_description: [
    {
      required: true,
      message: "Short description Text is required",
      trigger: "blur",
    },
  ],
  created_by_name: [
    {
      required: true,
      message: "Created by name is required",
      trigger: "blur",
    },
  ],
  created_by: [
    {
      required: true,
      message: "Created by is required",
      trigger: "blur",
    },
  ],
  category: [
    {
      required: true,
      message: "Category is required",
      trigger: "blur",
    },
  ],
  category_name: [
    {
      required: true,
      message: "Category name is required",
      trigger: "blur",
    },
  ],
  title: [
    {
      required: true,
      message: "Title is required",
      trigger: "blur",
    },
  ],
  location: [
    {
      required: true,
      message: "Location is required",
      trigger: "blur",
    },
  ],

  venue_details: [
    {
      required: true,
      message: "Venue details is required",
      trigger: "blur",
    },
  ],

  organizer: [
    {
      required: true,
      message: "Organizer is required",
      trigger: "blur",
    },
  ],
  contact_email: [
    {
      required: true,
      message: "Contact email is required",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Please enter a valid email address",
      trigger: ["blur", "input"],
    },
  ],
  contact_phone: [
    {
      required: true,
      message: "Contact phone number is required",
      trigger: "blur",
    },
    {
      validator(rule, value) {
        // Accepts formats like 08012345678 or +2348012345678
        const phoneRegex = /^(?:\+234|0)[789][01]\d{8}$/;
        if (!value || phoneRegex.test(value)) {
          return Promise.resolve();
        } else {
          return Promise.reject("Enter a valid Nigerian phone number");
        }
      },
      trigger: ["blur", "input"],
    },
  ],
  max_participants: [
    {
      required: true,
      message: "Max participants is required",
      trigger: "blur",
    },
  ],
  status_display: [
    {
      required: true,
      message: "Status display is required",
      trigger: "blur",
    },
  ],
  registration_url: [
    {
      type: "url",
      message: "Enter a valid URL (e.g., https://example.com)",
      trigger: ["blur", "input"],
    },
    {
      required: true,
      message: "Registration url is required",
      trigger: "blur",
    },
    {
      type: "url",
      message: "Enter a valid URL (e.g., https://example.com)",
      trigger: ["blur", "input"],
    },
  ],

  start_date: [
    {
      required: true,
      validator(_, value) {
        if (!value) return new Error("Start date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],
  end_date: [
    {
      required: true,
      validator(_, value) {
        if (!value) return new Error("End date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],
  registration_deadline: [
    {
      required: true,
      validator(_, value) {
        if (!value) return new Error("Registration deadline is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
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
      message: "Is published is required",
      trigger: "change",
    },
  ],
  is_upcoming: [
    {
      required: true,
      type: "boolean",
      message: "Is upcoming is required",
      trigger: "change",
    },
  ],

  is_ongoing: [
    {
      required: true,
      type: "boolean",
      message: "Is ongoing is required",
      trigger: "change",
    },
  ],

  hero_image: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile.value) {
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
        if (!photoFile1.value) {
          return new Error("Featured image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
 */
</script>
