import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;
console.log(UniversityAdmin.scholarship.listPages.list);

// Scholarships Pages
export const listScholarshipsListPage = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.scholarship.listPages.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const scholarshipListsPageDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.scholarship.listPages.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createScholarshipListPage = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.scholarship.listPages.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editScholarshipListPage = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.scholarship.listPages.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteScholarshipListPage = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.scholarship.listPages.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// Scholarship
export const listScholarship = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.scholarship.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const scholarshipDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.scholarship.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createScholarship = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.scholarship.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editScholarship = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.scholarship.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteScholarship = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.scholarship.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
