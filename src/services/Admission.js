import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;
console.log(UniversityAdmin.admission.pages.list);

// Admission Pages
export const listAdmissionPages = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.pages.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const admissionPageDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.pages.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createAdmissionPage = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.admission.pages.create}`,
      credentials,
      {}
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editAdmissionPage = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.admission.pages.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteAdmissionPage = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.admission.pages.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// Admission Why Choose Features
export const listWhyChooseFeatures = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.whyChooseFeatures.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const whyChooseFeatureDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.whyChooseFeatures.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createWhyChooseFeature = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.admission.whyChooseFeatures.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editWhyChooseFeatures = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.admission.whyChooseFeatures.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteWhyChooseFeatures = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.admission.whyChooseFeatures.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// Admission Requirements
export const listAdmissionRequirements = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.requirements.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const admissionRequirementsDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.requirements.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createAdmissionRequirement = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.admission.requirements.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editAdmissionRequirement = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.admission.requirements.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteAdmissionRequirement = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.admission.requirements.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Admission Requirements Items
export const listAdmissionRequirementsItems = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.requirementsItems.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const admissionRequirementsItemsDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.requirementsItems.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createAdmissionRequirementsItem = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.admission.requirementsItems.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editAdmissionRequirementsItem = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.admission.requirementsItems.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteAdmissionRequirementsItem = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.admission.requirementsItems.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Admission Steps
export const listAdmissionSteps = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.steps.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const AdmissionStepsDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.steps.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createAdmissionSteps = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.admission.steps.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editAdmissionSteps = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.admission.steps.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteAdmissionSteps = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.admission.steps.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Admission Important And Date
export const listAdmissionImportantDates = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.importantDates.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const admissionImportantDatesDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.admission.importantDates.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createAdmissionImportantDates = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.admission.importantDates.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editAdmissionImportantDates = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.admission.importantDates.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteAdmissionImportantDate = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.admission.importantDates.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
