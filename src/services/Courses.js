import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;
console.log(UniversityAdmin.courses.Modules.list);

// Module
export const listModules = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.courses.Modules.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const modulesDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.courses.Modules.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createModule = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.courses.Modules.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editModule = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.courses.Modules.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteModule = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.courses.Modules.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// Courses
export const listCourse = async () => {
  try {
    const { data } = await api.get(`${BaseUrl}${UniversityAdmin.courses.list}`);

    return data;
  } catch (err) {
    throw err;
  }
};
export const courseDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.courses.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createCourse = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.courses.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editCourse = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.courses.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteCourse = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.courses.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
