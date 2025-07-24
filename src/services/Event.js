import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;
console.log(UniversityAdmin.events.list);

export const listEvents = async () => {
  try {
    const { data } = await api.get(`${BaseUrl}${UniversityAdmin.events.list}`);

    return data;
  } catch (err) {
    throw err;
  }
};
export const eventDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.events.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createEvent = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.events.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editEvent = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.events.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteEvent = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.events.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// events:Catgory
export const editEventCategory = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.events.category.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const EventCategoryDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.events.category.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createEventCategory = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.events.category.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const listEventCategory = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.events.category.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteEventCategory = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.events.category.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
