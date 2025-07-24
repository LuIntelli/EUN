import endpoints from "./endpoints";
import api, { BaseUrl } from "../utils/api";

const { UniversityAdmin } = endpoints;
console.log(UniversityAdmin.pages);

// Home Page
export const listHomePages = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.homePage.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const homePageDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.homePage.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createHomePage = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.pages.homePage.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editHomePage = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.pages.homePage.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteHomePage = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.pages.homePage.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// About Page
export const editAboutPage = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.pages.aboutPage.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const aboutPageDetail = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.aboutPage.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createAboutPage = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.pages.aboutPage.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const listAboutPage = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.aboutPage.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteAboutPage = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.pages.aboutPage.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// Hero Slides
export const listHeroSlides = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.heroSlides.list}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const editHeroSlides = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.pages.heroSlides.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteHeroSlide = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.pages.heroSlides.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const heroSlideDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.heroSlides.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createHeroSlide = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.pages.heroSlides.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// About Hero Slides
export const listAboutHeroSlide = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.aboutHeroSlides.list}`
    );

    return await data;
  } catch (err) {
    throw err;
  }
};
export const editAboutHeroSlide = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.pages.aboutHeroSlides.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteAboutHeroSlide = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.pages.aboutHeroSlides.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const aboutHeroSlideDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.aboutHeroSlides.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createAboutHeroSlide = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.pages.aboutHeroSlides.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};

// Upcoming Events
export const listUpcomingEvents = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.upcomingEvents.list}`
    );

    return await data;
  } catch (err) {
    throw err;
  }
};
export const editUpcomingEvents = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.pages.upcomingEvents.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteUpcomingEvents = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.pages.upcomingEvents.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const upcomingEventsDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.upcomingEvents.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createUpcomingEvents = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.pages.upcomingEvents.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// FAQS
export const listFAQS = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.faqs.list}`
    );

    return await data;
  } catch (err) {
    throw err;
  }
};
export const editFAQS = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.pages.faqs.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteFAQS = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.pages.faqs.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const faqsDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.faqs.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createFAQS = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.pages.faqs.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Campus Facilities
export const listCampusFacilities = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.campusFacilities.list}`
    );

    return await data;
  } catch (err) {
    throw err;
  }
};
export const editCampusFacilities = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.pages.campusFacilities.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteCampusFacilities = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.pages.campusFacilities.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const campusFacilitiesDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.campusFacilities.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createCampusFacilities = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.pages.campusFacilities.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Testimonials
export const listTestimonials = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.testimonials.list}`
    );

    return await data;
  } catch (err) {
    throw err;
  }
};
export const editTestimonials = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.pages.testimonials.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteTestimonials = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.pages.testimonials.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const testimonialsDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.testimonials.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createTestimonials = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.pages.testimonials.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Core Values
export const listCoreValue = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.coreValues.list}`
    );

    return await data;
  } catch (err) {
    throw err;
  }
};
export const editCoreValue = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.pages.coreValues.edit(id)}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const deleteCoreValue = async (id) => {
  try {
    const { data } = await api.delete(
      `${BaseUrl}${UniversityAdmin.pages.coreValues.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const coreValueDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.coreValues.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createCoreValue = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.pages.coreValues.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
// Why Choose Features
export const listWhyChooseFeatures = async () => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.whyChooseFeatures.list}`
    );

    return await data;
  } catch (err) {
    throw err;
  }
};
export const editWhyChooseFeatures = async (id, credentials) => {
  try {
    const { data } = await api.patchForm(
      `${BaseUrl}${UniversityAdmin.pages.whyChooseFeatures.edit(id)}`,
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
      `${BaseUrl}${UniversityAdmin.pages.whyChooseFeatures.delete(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const whyChooseFeaturesDetails = async (id) => {
  try {
    const { data } = await api.get(
      `${BaseUrl}${UniversityAdmin.pages.whyChooseFeatures.details(id)}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
export const createWhyChooseFeatures = async (credentials) => {
  try {
    const { data } = await api.postForm(
      `${BaseUrl}${UniversityAdmin.pages.whyChooseFeatures.create}`,
      credentials
    );

    return data;
  } catch (err) {
    throw err;
  }
};
