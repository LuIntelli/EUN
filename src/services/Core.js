import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;

export const listUniversities = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.core.University.list}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const universityDetals = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.core.University.details(id)}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const editUniversity = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.core.University.edit(id)}`,
      credentials,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
};

// News Letter
export const editNewsLetter = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.core.newsLetter.edit(id)}`,
      credentials
    );

    return data;
  } catch (error) {
    throw error;
  }
};
export const listNewsLetter = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.core.newsLetter.list}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};
export const newsLetterSubScription = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.core.newsLetter.subscription}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};
export const newsLetterDetalis = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.core.newsLetter.details(id)}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};
export const newsLetterSubscriptionDetalis = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.core.newsLetter.subscriptionDetails(id)}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};
export const newsLetterLogs = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.core.newsLetter.logs}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};
export const newsLetterLogDetail = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.core.newsLetter.logDetail(id)}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};
export const newsLetterEditSubscription = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.core.newsLetter.subscriptionEdit(id)}`,
      credentials
    );

    return data;
  } catch (error) {
    throw error;
  }
};
