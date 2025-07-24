import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;
console.log(UniversityAdmin.blog.authors.list);

// Authors
export const listAuthors = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.blog.authors.list}`
    );
    console.log(data)

    return data;
  } catch (err) {
    throw err;
  }
};
export const authDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.blog.authors.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createAuthor = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.blog.authors.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editAuthor = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.blog.authors.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// Blog:Catgory
export const editCategory = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.blog.category.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const categoryDetail = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.blog.category.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createCategory = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.blog.category.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const listCategory = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.blog.category.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// Blog:Tags
export const listTags = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.blog.tags.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editTag = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.blog.tags.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteTag = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.blog.tags.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const detailsTag = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.blog.tags.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createTag = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.blog.tags.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Blog:Post
export const listPosts = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.blog.posts.list}`
    );

    return await data;
  } catch (err) {
    throw err;
  }
};
export const editPost = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.blog.posts.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deletePost = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.blog.posts.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const detailsPost = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.blog.posts.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createPost = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.blog.posts.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
