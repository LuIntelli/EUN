import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;
console.log(UniversityAdmin.facultiesAndDepartments.faculties.list);

// Faculties
export const listFaculties = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.faculties.list}`
    );

    return await data;
  } catch (err) {}
};
export const facultyDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.faculties.details(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createFaculty = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.faculties.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editFaculties = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.faculties.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteFaculties = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.faculties.delete(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Faculty Leadership Roles
export const listFacultyLeadershipRoles = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyLeadershipRoles.list}`
    );

    return await data;
  } catch (err) {}
};
export const facultyLeadershipRolesDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyLeadershipRoles.details(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createFacultyLeadershipRoles = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyLeadershipRoles.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editFacultyLeadershipRoles = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyLeadershipRoles.edit(
        id
      )}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteFacultyLeadershipRoles = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyLeadershipRoles.delete(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Departments
export const listDepartments = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.departments.list}`
    );

    return await data;
  } catch (err) {}
};
export const departmentsDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.departments.details(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createDepartments = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.departments.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editDepartments = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.departments.edit(
        id
      )}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteDepartments = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.departments.delete(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Faculties Academic Staff Roles
export const listAcademicStaffRoles = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.academicStaffRoles.list}`
    );

    return await data;
  } catch (err) {}
};
export const academicStaffRolesDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.academicStaffRoles.details(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createAcademicStaffRoles = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.academicStaffRoles.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editAcademicStaffRoles = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.academicStaffRoles.edit(
        id
      )}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteAcademicStaffRoles = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.academicStaffRoles.delete(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Faculty News Slide
export const listFacultyNewSlides = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyNewSlides.list}`
    );

    return await data;
  } catch (err) {}
};
export const facultyNewsSlideDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyNewSlides.details(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createFacultyNewSlides = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyNewSlides.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editFacultyNewSlides = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyNewSlides.edit(
        id
      )}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteFacultyNewSlides = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyNewSlides.delete(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Faculty News
export const listFacultyNews = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyNews.list}`
    );

    return await data;
  } catch (err) {}
};
export const facultyNewsDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyNews.details(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createFacultyNews = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyNews.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editFacultyNews = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyNews.edit(
        id
      )}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteFacultyNews = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyNews.delete(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Faculty Highlights
export const listFacultyHighlights = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyHighlights.list}`
    );

    return await data;
  } catch (err) {}
};
export const facultyHighlightDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyHighlights.details(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createFacultyHighlight = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyHighlights.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editFacultyHighlights = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyHighlights.edit(
        id
      )}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteFacultyHighlights = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.facultiesAndDepartments.facultyHighlights.delete(
        id
      )}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
