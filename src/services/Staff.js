import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;
console.log(UniversityAdmin.staff.category.list);

// Staff Category
export const listStaffCategory = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.staff.category.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const staffCategoryDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.staff.category.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createStaffCategory = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.staff.category.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editStaffCategory = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.staff.category.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteStaffCategory = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.staff.category.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// Staff Position
export const listStaffPosition = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.staff.position.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const staffPositionDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.staff.position.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createStaffPosition = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.staff.position.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editStaffPosition = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.staff.position.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteStaffPosition = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.staff.position.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// Staff
export const listStaff = async () => {
  try {
    const { data } = await api.get(`${BaseUrl}${UniversityAdmin.staff.list}`);

    return data;
  } catch (err) {
    throw err;
  }
};
export const staffDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.staff.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createStaff = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.staff.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editStaff = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.staff.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteStaff = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.staff.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
