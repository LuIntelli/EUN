<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      University Details
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="University Name" path="name">
        <n-input v-model:value="formData.name" placeholder="University Name" />
      </n-form-item>

      <n-form-item label="Email" path="email">
        <n-input v-model:value="formData.email" placeholder="Email address" />
      </n-form-item>

      <n-form-item label="Phone Number" path="phone_number">
        <n-input
          v-model:value="formData.phone_number"
          placeholder="Phone Number"
        />
      </n-form-item>

      <n-form-item label="Logo" path="logo" class="w-full border p-1">
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handleLogoChange"
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
        <span v-if="logoPreview" class="block mt-2">
          <img :src="logoPreview" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>

      <n-form-item label="Address" path="address">
        <n-input v-model:value="formData.address" placeholder="Address" />
      </n-form-item>

      <n-form-item label="Facebook URL" path="facebook_url">
        <n-input
          v-model:value="formData.facebook_url"
          placeholder="Facebook URL"
        />
      </n-form-item>

      <n-form-item label="Twitter URL" path="twitter_url">
        <n-input
          v-model:value="formData.twitter_url"
          placeholder="Twitter URL"
        />
      </n-form-item>

      <n-form-item label="Instagram URL" path="instagram_url">
        <n-input
          v-model:value="formData.instagram_url"
          placeholder="Instagram URL"
        />
      </n-form-item>

      <n-form-item label="Footer Description" path="footer_description">
        <n-input
          v-model:value="formData.footer_description"
          type="textarea"
          placeholder="Footer Description"
        />
      </n-form-item>

      <div class="flex items-center gap-5">
        <n-form-item label="NUC Accredited" path="nuc_accredited">
          <n-switch v-model:value="formData.nuc_accredited" />
        </n-form-item>

        <n-form-item
          label="Legal Media Accredited"
          path="legal_media_accredited"
        >
          <n-switch v-model:value="formData.legal_media_accredited" />
        </n-form-item>

        <n-form-item
          label="Science & Tech Approved"
          path="science_tech_approved"
        >
          <n-switch v-model:value="formData.science_tech_approved" />
        </n-form-item>

        <n-form-item label="Is Active" path="is_active">
          <n-switch v-model:value="formData.is_active" />
        </n-form-item>
      </div>

      <button
        type="submit"
        class="py-3 text-white bg-[rgba(43,54,116,1)] rounded-xl font-medium text-center block w-full"
        :loading="submitting"
        @click="handleSubmit"
      >
        Update University
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { universityDetals, editUniversity } from "@/services/Core";

const route = useRoute();
const router = useRouter();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);
const logoFile = ref(null);
const logoPreview = ref(null);

const formData = reactive({
  name: "",
  email: "",
  phone_number: "",
  address: "",
  facebook_url: "",
  twitter_url: "",
  instagram_url: "",
  footer_description: "",
  is_active: false,
  nuc_accredited: false,
  legal_media_accredited: false,
  science_tech_approved: false,
});

// Load university by ID
const fetchUniversity = async () => {
  try {
    const id = route.params.id;
    const data = await universityDetals(id);
    Object.assign(formData, data.data);

    if (data.logo_url) {
      logoPreview.value = data.logo_url;
    }
  } catch (error) {
    message.error("Failed to load university data");
  }
};

// Handle image select
const handleLogoChange = (options) => {
  const file = options.file.file;
  logoFile.value = file;
  logoPreview.value = URL.createObjectURL(file);
};

// Submit update
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();

    const payload = new FormData();
    for (const key in formData) {
      payload.append(key, formData[key]);
    }

    if (logoFile.value) {
      payload.append("logo", logoFile.value);
    }

    await editUniversity(route.params.id, payload);
    message.success("University updated successfully");
    router.push("/universities-settings");
  } catch (err) {
    console.error(err);
    message.error("Update failed");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    submitting.value = false;
  }
};

onMounted(fetchUniversity);

// Rules
const rules = {
  name: [
    { required: true, message: "University name is required", trigger: "blur" },
  ],
  email: [
    { required: true, message: "Email is required", trigger: "blur" },
    { type: "email", message: "Enter a valid email", trigger: "blur" },
  ],
  phone_number: [
    { required: true, message: "Phone number is required", trigger: "blur" },
    {
      pattern: /^(\+234|0)[789][01]\d{8}$/,
      message: "Enter a valid phone number",
      trigger: "blur",
    },
  ],
  address: [
    { required: true, message: "Address is required", trigger: "blur" },
  ],
  facebook_url: [
    {
      type: "url",
      message: "Enter a valid URL (e.g., https://example.com)",
      trigger: ["blur", "input"],
    },
    { required: true, message: "Facebook URL is required", trigger: "blur" },
    { type: "url", message: "Enter a valid URL", trigger: "blur" },
  ],
  twitter_url: [
    {
      type: "url",
      message: "Enter a valid URL (e.g., https://example.com)",
      trigger: ["blur", "input"],
    },
    { required: true, message: "Twitter URL is required", trigger: "blur" },
    { type: "url", message: "Enter a valid URL", trigger: "blur" },
  ],
  instagram_url: [
    {
      type: "url",
      message: "Enter a valid URL (e.g., https://example.com)",
      trigger: ["blur", "input"],
    },
    { required: true, message: "Instagram URL is required", trigger: "blur" },
    { type: "url", message: "Enter a valid URL", trigger: "blur" },
  ],
  footer_description: [
    { required: true, message: "Description is required", trigger: "blur" },
    { min: 10, message: "Minimum 10 characters", trigger: "blur" },
  ],
  nuc_accredited: [
    { required: true, type: "boolean", message: "Required", trigger: "change" },
  ],
  legal_media_accredited: [
    { required: true, type: "boolean", message: "Required", trigger: "change" },
  ],
  science_tech_approved: [
    { required: true, type: "boolean", message: "Required", trigger: "change" },
  ],
  is_active: [
    { required: true, type: "boolean", message: "Required", trigger: "change" },
  ],
  logo: [
    {
      required: true,
      validator(rule, value) {
        if (!logoFile.value) {
          return new Error("Logo image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
