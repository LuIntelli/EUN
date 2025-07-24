import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;
console.log(UniversityAdmin.adminUsers);

// Authors
export const listAdminUsers = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.adminUsers.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const adminUserDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.adminUsers.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createAdminUser = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.adminUsers.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editAdminUser = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.adminUsers.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteAdminUser = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.adminUsers.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
