import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;
console.log(UniversityAdmin);

export const loginApi = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}/${UniversityAdmin.auth.login}`,
      credentials
    );
    console.log();
    return await data;
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  try {
    await api.postForm(`${BaseUrl}${UniversityAdmin.auth.logout}`);
  } catch (error) {
    throw error;
  }
};

// get current user
export const getCurrentUser = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.auth.currentUser}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};
// Update Profile
export const updateProfile = async (credentials) => {
  try {
    const { data } = await api.putForm(
      `${BaseUrl}${UniversityAdmin.auth.updateProfile}`,
      credentials
    );

    return data;
  } catch (error) {
    throw error;
  }
};
// change Password
export const changePassword = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.auth.changePassword}`,
      credentials
    );

    return data;
  } catch (error) {
    throw error;
  }
};
// Reset Password
export const resetPassword = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.auth.resetPassword}`,
      credentials
    );

    return data;
  } catch (error) {
    throw error;
  }
};
// Reset Confirm Password
export const confirmResetPassword = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.auth.resetComfirmPassword}`,
      credentials
    );

    return data;
  } catch (error) {
    throw error;
  }
};
