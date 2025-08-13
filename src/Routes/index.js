import { createRouter, createWebHistory } from "vue-router";
import CreateHomePage from "../components/Pages/HomePage/Create.vue";
import EditHomePage from "../components/Pages/HomePage/Details.vue";
import ListHomePage from "../components/Pages/HomePage/List.vue";
import CreateAboutPage from "../components/Pages/AboutPage/Create.vue";
import ListAboutPage from "../components/Pages/AboutPage/List.vue";
import EditAboutPage from "../components/Pages/AboutPage/Details.vue";
import CreateAboutSlide from "../components/Pages/AboutHeroSlide/Create.vue";
import ListAboutSlide from "../components/Pages/AboutHeroSlide/List.vue";
import EditAboutSlide from "../components/Pages/AboutHeroSlide/Details.vue";
import ListCampusFacilities from "../components/Pages/CampusFacilities/List.vue";
import CreateCampusFacilities from "../components/Pages/CampusFacilities/Create.vue";
import EditCampusFacilities from "../components/Pages/CampusFacilities/Details.vue";
import ListCoreValues from "../components/Pages/CoreValues/List.vue";
import CreateCoreValues from "../components/Pages/CoreValues/Create.vue";
import EditCoreValues from "../components/Pages/CoreValues/Details.vue";
import ListFAQS from "../components/Pages/FAQS/List.vue";
import CreateFAQS from "../components/Pages/FAQS/Create.vue";
import EditFAQS from "../components/Pages/CoreValues/Details.vue";
import ListHeroSlide from "../components/Pages/HeroSlides/List.vue";
import CreateHeroSlide from "../components/Pages/HeroSlides/Create.vue";
import EditHeroSlide from "../components/Pages/HeroSlides/Details.vue";
import ListTestimonial from "../components/Pages/Testimonials/List.vue";
import CreateTestimonial from "../components/Pages/Testimonials/Create.vue";
import EditTestimonial from "../components/Pages/Testimonials/Details.vue";
import ListUpcomingEvent from "../components/Pages/UpcomingEvents/List.vue";
import CreateUpcomingEvent from "../components/Pages/UpcomingEvents/Create.vue";
import EditUpcomingEvent from "../components/Pages/UpcomingEvents/Details.vue";
import ListWhyChooseFeature from "../components/Pages/WhyChooseFeatures/List.vue";
import CreateWhyChooseFeature from "../components/Pages/WhyChooseFeatures/Create.vue";
import EditWhyChooseFeature from "../components/Pages/WhyChooseFeatures/Details.vue";

// BLOG
import Blog from "../Views/Blog.vue";

import Register from "../Views/Register.vue";
import Login from "../Views/Login.vue";

import Pages from "../Views/Pages.vue";

import NotFound from "../Views/NotFound.vue";
import NotAuthorized from "../Views/NotAuthorized.vue";
// import EditStaff from "../Views/FacultyPages/EditStaff.vue";
import EditAdminUser from "../Views/UpdateAdminUsers.vue";
import UpdateProfile from "../Views/UpdateProfile.vue";
import ResetPassword from "../Views/ResetPassword.vue";
import PasswordResetConfirm from "../Views/PasswordResetConfirm.vue";
import AdminUsers from "../Views/AdminUsers.vue";
import AdminUser from "../Views/AdminUser.vue";
// import ViewPages from "../Views/ViewPages.vue";
import Main from "@/layout/Main.vue";
import AddAuthor from "../components/Blog/Author/AddAuthor.vue";
import ListSpecificAuthor from "../components/Blog/Author/ListSpecificAuthor.vue";
import ListAuthor from "../components/Blog/Author/ListAuthor.vue";
import CreateCategory from "../components/Blog/Category/CreateCategory.vue";
import ListSpecificCategory from "../components/Blog/Category/ListSpecificCategory.vue";
import ListCategory from "../components/Blog/Category/ListCategory.vue";
import CreatePost from "../components/Blog/Posts/CreatePost.vue";
import ListSpecificPost from "../components/Blog/Posts/ListSpecificPost.vue";
import ListPost from "../components/Blog/Posts/ListPosts.vue";
import CreateTag from "../components/Blog/Tags/CreateTag.vue";
import ListSpecificTag from "../components/Blog/Tags/ListSpecificTag.vue";
import ListTags from "../components/Blog/Tags/ListTags.vue";
import Admission from "../Views/Admission.vue";
import CreateImportantDates from "../components/Admission/ImportantDates/CreateImportantDates.vue";
import EditImportantDate from "../components/Admission/ImportantDates/ListSpecificImportantDate.vue";
import ListImportantDates from "../components/Admission/ImportantDates/ListImportantDates.vue";
import CreateAdmissionPage from "../components/Admission/Pages/Create.vue";
import EditAdmissionPage from "../components/Admission/Pages/details.vue";
import ListAdmissionPages from "../components/Admission/Pages/Lists.vue";
import CreateAdmissionRequirement from "../components/Admission/Requirements/CreateRequirement.vue";
import EditAdmissionRequirement from "../components/Admission/Requirements/ListSpecificRequirement.vue";
import ListAdmissionRequirements from "../components/Admission/Requirements/ListsRequirements.vue";
import CreateAdmissionRequirementItem from "../components/Admission/RequirementsItems/CreateItemRequirement.vue";
import EditAdmissionRequirementItem from "../components/Admission/RequirementsItems/ListSingleItemRequirement.vue";
import ListAdmissionRequirementsItems from "../components/Admission/RequirementsItems/ListItemsRequirements.vue";
import CreateSteps from "../components/Admission/Steps/CreateSteps.vue";
import EditSpecificStep from "../components/Admission/Steps/ListSpecificStep.vue";
import ListSteps from "../components/Admission/Steps/ListSteps.vue";

import CreateWhyUsFeatures from "../components/Admission/WhyChooseUsFeatures/Create.vue";
import EditWhyChooseUsFeature from "../components/Admission/WhyChooseUsFeatures/details.vue";
import ListWhyChooseUsFeatures from "../components/Admission/WhyChooseUsFeatures/Lists.vue";

// Core
import Core from "../Views/Core.vue";
import ListNewsLetter from "../components/Core/Newsletter/NewsLetterList.vue";
import EditNewsLetter from "../components/Core/Newsletter/NewsLetterDetails.vue";
import EditNewsLetterSubScription from "../components/Core/Newsletter/NewsLetterSubscriptionDetails.vue";
import ListNewsLetterSubScription from "../components/Core/Newsletter/NewsLetterSubscription.vue";
import EditLogs from "../components/Core/Newsletter/LogDetails.vue";
import ListsLogs from "../components/Core/Newsletter/Logs.vue";
import UniversitySetting from "../components/Core/UniversitySettings/UniversitySetting.vue";
import UniversitySettingDetails from "../components/Core/UniversitySettings/UniversitySettingDetails.vue";

// STAFF
import Staffs from "../Views/Staffs.vue";
import EditStaff from "../components/Staff/Details.vue";
import CreateStaff from "../components/Staff/Create.vue";
import ListStaff from "../components/Staff/Lists.vue";

// STAFF POSITION
import EditStaffPosition from "../components/Staff/Position/details.vue";
import CreateStaffPosition from "../components/Staff/Position/create.vue";
import ListStaffPosition from "../components/Staff/Position/lists.vue";

// STAFF CATEGORY
import EditStaffCategory from "../components/Staff/Category/ListSpecificCategory.vue";
import CreateStaffCategory from "../components/Staff/Category/CreateCategory.vue";
import ListStaffCategory from "../components/Staff/Category/ListCategory.vue";

// SCHOLARSHIP
import Scholarship from "../Views/Scholarship.vue";
import EditScholarship from "../components/Scholarship/details.vue";
import CreateScholarship from "../components/Scholarship/create.vue";
import ListScholarship from "../components/Scholarship/lists.vue";

// STAFF POSITION
import EditScholarshipListPages from "../components/Scholarship/ListPages/Details.vue";
import CreateScholarshipListPages from "../components/Scholarship/ListPages/Create.vue";
import ListScholarshipListPages from "../components/Scholarship/ListPages/List.vue";

// FACULTIES AND DEPARTMENT
import FacultiesAndDepartment from "../Views/FacultiesAndDepartment.vue";

// FACULTY NEWS SLIDES
import EditFacultyNewsSlides from "../components/FacultiesAndDepartment/FacultyNewsSlide/Details.vue";
import CreateFacultyNewsSlides from "../components/FacultiesAndDepartment/FacultyNewsSlide/Create.vue";
import ListFacultyNewsSlides from "../components/FacultiesAndDepartment/FacultyNewsSlide/List.vue";

// FACULTY NEWS
import EditFacultyNews from "../components/FacultiesAndDepartment/FacultyNews/Details.vue";
import CreateFacultyNews from "../components/FacultiesAndDepartment/FacultyNews/Create.vue";
import ListFacultyNews from "../components/FacultiesAndDepartment/FacultyNews/List.vue";

// FACULTY HIGHLIGHTS
import EditFacultyHighlights from "../components/FacultiesAndDepartment/FacultyHighlights/Details.vue";
import CreateFacultyHighlights from "../components/FacultiesAndDepartment/FacultyHighlights/Create.vue";
import ListFacultyHighlights from "../components/FacultiesAndDepartment/FacultyHighlights/List.vue";

// DEPARTMENTS
import EditDepartments from "../components/FacultiesAndDepartment/Departments/Details.vue";
import CreateDepartments from "../components/FacultiesAndDepartment/Departments/Create.vue";
import ListDepartments from "../components/FacultiesAndDepartment/Departments/List.vue";

// FACULTIES
import EditFaculties from "../components/FacultiesAndDepartment/Faculties/Details.vue";
import CreateFaculties from "../components/FacultiesAndDepartment/Faculties/Create.vue";
import ListFaculties from "../components/FacultiesAndDepartment/Faculties/List.vue";

// FACULTY LEADERSHIP ROLES
import EditFacultyLeadershipRoles from "../components/FacultiesAndDepartment/FacultyLeadershipRoles/Details.vue";
import CreateFacultyLeadershipRoles from "../components/FacultiesAndDepartment/FacultyLeadershipRoles/Create.vue";
import ListFacultyLeadershipRoles from "../components/FacultiesAndDepartment/FacultyLeadershipRoles/List.vue";

// ACADEMIC STAFF ROLES
import EditAcademicStaffRoles from "../components/FacultiesAndDepartment/AcademicStaffRoles/Details.vue";
import CreateAcademicStaffRoles from "../components/FacultiesAndDepartment/AcademicStaffRoles/Create.vue";
import ListAcademicStaffRoles from "../components/FacultiesAndDepartment/AcademicStaffRoles/List.vue";

// ADMIN USERS
import EditAdminUsers from "../components/AdminUsers/Details.vue";
import CreateAdminUsers from "../components/AdminUsers/Create.vue";
import ListAdminUsers from "../components/AdminUsers/Lists.vue";

// EVENTS
import Events from "../Views/Events.vue";

// EVENT
import CreateEvent from "../components/Events/Create.vue";
import EditEvent from "../components/Events/Details.vue";
import ListEvent from "../components/Events/List.vue";

// EVENT CATEGORY
import CreateEventCategory from "../components/Events/Category/Create.vue";
import EditEventCategory from "../components/Events/Category/Details.vue";
import ListEventCategory from "../components/Events/Category/List.vue";

// COURSES
import Courses from "../Views/Courses.vue";

// COURSE
import CreateCourse from "../components/Courses/Course/Create.vue";
import EditCourse from "../components/Courses/Course/Details.vue";
import ListCourse from "../components/Courses/Course/List.vue";

// COURSE Modules
import CreateCourseModule from "../components/Courses/Modules/Create.vue";
import EditCourseModule from "../components/Courses/Modules/Details.vue";
import ListCourseModule from "../components/Courses/Modules/List.vue";
import ChangePassword from "../Views/ChangePassword.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",

      component: Main,
      children: [
        { path: "/", name: "home", component: Pages },

        {
          path: "/pages",
          name: "pages",
          component: Pages,
        },
        // Home page

        {
          path: "/home/create",
          name: "create-home",
          component: CreateHomePage,
        },
        {
          path: "/home/edit/:id",
          name: "edit-home",
          component: EditHomePage,
          props: true,
        },
        {
          path: "/home/",
          name: "list-home",
          component: ListHomePage,
        },
        // About Page
        {
          path: "/about/create",
          name: "create-about",
          component: CreateAboutPage,
        },
        {
          path: "/about/edit/:id",
          name: "edit-about",
          component: EditAboutPage,
        },
        {
          path: "/about/",
          name: "list-about",
          component: ListAboutPage,
        },

        // About Slide
        {
          path: "/about-slide/create",
          name: "create-about-slide",
          component: CreateAboutSlide,
        },
        {
          path: "/about-slide/edit/:id",
          name: "edit-about-slide",
          component: EditAboutSlide,
        },
        {
          path: "/about-slide/",
          name: "list-about-slide",
          component: ListAboutSlide,
        },

        // Campus Facilities
        {
          path: "/campus-facilities/create",
          name: "create-/campus-facilities",
          component: CreateCampusFacilities,
        },
        {
          path: "/campus-facilities/edit/:id",
          name: "edit-/campus-facilities",
          component: EditCampusFacilities,
        },
        {
          path: "/campus-facilities",
          name: "list-/campus-facilities",
          component: ListCampusFacilities,
        },

        // Core Values
        {
          path: "/page/core-values/create",
          name: "create-page-core-values",
          component: CreateCoreValues,
        },
        {
          path: "/page/core-values/:id",
          name: "edit-page-core-values",
          component: EditCoreValues,
        },
        {
          path: "/page/core-values",
          name: "list-page-core-values",
          component: ListCoreValues,
        },

        // FAQS
        {
          path: "/page/faqs/create",
          name: "create-faqs",
          component: CreateFAQS,
        },
        {
          path: "/page/faqs/:id",
          name: "edit-faqs",
          component: EditFAQS,
        },
        {
          path: "/page/faqs",
          name: "list-faqs",
          component: ListFAQS,
        },

        // HERO SLIDES
        {
          path: "/page/hero-slides/create",
          name: "create-hero-slides",
          component: CreateHeroSlide,
        },
        {
          path: "/page/hero-slides/:id",
          name: "edit-hero-slides",
          component: EditHeroSlide,
        },
        {
          path: "/page/hero-slides",
          name: "list-hero-slides",
          component: ListHeroSlide,
        },
        // TESTIMONIALS
        {
          path: "/page/testimonials/create",
          name: "create-testimonials",
          component: CreateTestimonial,
        },
        {
          path: "/page/testimonials/:id",
          name: "edit-testimonials",
          component: EditTestimonial,
        },
        {
          path: "/page/testimonials",
          name: "list-testimonials",
          component: ListTestimonial,
        },
        // UPCOMING EVENTS
        {
          path: "/page/upcoming-events/create",
          name: "create-upcoming-events",
          component: CreateUpcomingEvent,
        },
        {
          path: "/page/upcoming-events/:id",
          name: "edit-upcoming-events",
          component: EditUpcomingEvent,
        },
        {
          path: "/page/upcoming-events",
          name: "list-upcoming-events",
          component: ListUpcomingEvent,
        },
        // WHY CHOOSE FEATURES
        {
          path: "/page/why-choose-features/create",
          name: "create-why-choose-features",
          component: CreateWhyChooseFeature,
        },
        {
          path: "/page/why-choose-features/:id",
          name: "edit-why-choose-features",
          component: EditWhyChooseFeature,
        },
        {
          path: "/page/why-choose-features",
          name: "list-why-choose-features",
          component: ListWhyChooseFeature,
        },

        // BLOG
        {
          path: "/blog",
          name: "blog",
          component: Blog,
        },
        // BLOG: AUTHOR
        {
          path: "/list-authors/create",
          name: "list-authors-create",
          component: AddAuthor,
        },
        {
          path: "/blog/author/:id",
          name: "edit-authors",
          component: ListSpecificAuthor,
        },
        {
          path: "/list-authors",
          name: "list-authors",
          component: ListAuthor,
        },
        // BLOG: CATEGORY
        {
          path: "/blog/category/create",
          name: "create-category",
          component: CreateCategory,
        },
        {
          path: "/blog/category/:id",
          name: "edit-category",
          component: ListSpecificCategory,
        },
        {
          path: "/blog/category",
          name: "list-category",
          component: ListCategory,
        },

        // BLOG: POSTS
        {
          path: "/blog-post/create",
          name: "create-post",
          component: CreatePost,
        },
        {
          path: "/blog-post/:id",
          name: "edit-post",
          component: ListSpecificPost,
        },
        {
          path: "/blog-post",
          name: "list-post",
          component: ListPost,
        },
        // BLOG: TAGS
        {
          path: "/blog-tags/create",
          name: "create-tag",
          component: CreateTag,
        },
        {
          path: "/blog-tags/:id",
          name: "edit-tag",
          component: ListSpecificTag,
        },
        {
          path: "/blog-tags",
          name: "list-tag",
          component: ListTags,
        },

        // ADMISSION
        {
          path: "/admission",
          name: "admission",
          component: Admission,
        },

        // ADMISSION: IMPORTANT DATES
        {
          path: "/important-dates/create",
          name: "create-important-dates",
          component: CreateImportantDates,
        },
        {
          path: "/important-dates/:id",
          name: "edit-important-date",
          component: EditImportantDate,
        },
        {
          path: "/important-dates",
          name: "list-important-dates",
          component: ListImportantDates,
        },
        // ADMISSION: Pages
        {
          path: "/admission-page/create",
          name: "create-admission-page",
          component: CreateAdmissionPage,
        },
        {
          path: "/admission-pages/:id",
          name: "edit-admission-page",
          component: EditAdmissionPage,
        },
        {
          path: "/admission-page",
          name: "list-admission-pages",
          component: ListAdmissionPages,
        },

        // ADMISSION: Requirements
        {
          path: "/admission-requirements/create",
          name: "create-admission-requirement",
          component: CreateAdmissionRequirement,
        },
        {
          path: "/admission-requirements/:id",
          name: "edit-admission-requirement",
          component: EditAdmissionRequirement,
        },
        {
          path: "/admission-requirements",
          name: "list-admission-requirements",
          component: ListAdmissionRequirements,
        },

        // ADMISSION: Requirements Items
        {
          path: "/admission-requirements-items/create",
          name: "create-admission-requirement-item",
          component: CreateAdmissionRequirementItem,
        },
        {
          path: "/admission-requirements-items/:id",
          name: "edit-admission-requirement-item",
          component: EditAdmissionRequirementItem,
        },
        {
          path: "/admission-requirements-items",
          name: "list-admission-requirements-items",
          component: ListAdmissionRequirementsItems,
        },

        // ADMISSION: WHY CHOOSE US FEATURES
        {
          path: "/why-us/create",
          name: "create-why-us-features",
          component: CreateWhyUsFeatures,
        },
        {
          path: "/why-us/:id",
          name: "edit-why-us-features",
          component: EditWhyChooseUsFeature,
        },
        {
          path: "/why-us",
          name: "list-why-us-features",
          component: ListWhyChooseUsFeatures,
        },

        // ADMISSION: ADMISSION STEPS
        {
          path: "/admission-steps/create",
          name: "create-admission-steps",
          component: CreateSteps,
        },
        {
          path: "/admission-steps/:id",
          name: "edit-admission-steps",
          component: EditSpecificStep,
        },
        {
          path: "/admission-steps",
          name: "list-admission-steps",
          component: ListSteps,
        },

        // CORE
        {
          path: "/core",
          name: "core",
          component: Core,
        },
        // CORE:

        {
          path: "/newsletters/:id",
          name: "edit-newsletter",
          component: EditNewsLetter,
        },
        {
          path: "/newsletters",
          name: "newsletters",
          component: ListNewsLetter,
        },

        {
          path: "/logs/:id",
          name: "edit-log",
          component: EditLogs,
        },
        {
          path: "/logs",
          name: "logs",
          component: ListsLogs,
        },

        {
          path: "/subscription/:id",
          name: "edit-subscription",
          component: EditNewsLetterSubScription,
        },
        {
          path: "/subscription",
          name: "list-subscription",
          component: ListNewsLetterSubScription,
        },

        {
          path: "/universities-settings/:id",
          name: "edit-universities-settings",
          component: UniversitySettingDetails,
        },
        {
          path: "/universities-settings",
          name: "list-universities-settings",
          component: UniversitySetting,
        },

        // STAFFS
        {
          path: "/staffs",
          name: "staffs",
          component: Staffs,
        },

        // STAFF CATEGORY
        {
          path: "/staff/category/create",
          name: "create-staff-category",
          component: CreateStaffCategory,
        },
        {
          path: "/staff/category/edit/:id",
          name: "edit-staff-category",
          component: EditStaffCategory,
        },
        {
          path: "/staff/category/lists",
          name: "list-staff-category",
          component: ListStaffCategory,
        },

        // STAFF POSITION
        {
          path: "/staff/position/create",
          name: "create-staff-position",
          component: CreateStaffPosition,
        },
        {
          path: "/staff/position/edit/:id",
          name: "edit-staff-position",
          component: EditStaffPosition,
        },
        {
          path: "/staff/position/lists",
          name: "list-staff-position",
          component: ListStaffPosition,
        },

        // STAFF
        {
          path: "/staff/create",
          name: "create-staff",
          component: CreateStaff,
        },
        {
          path: "/staff/edit/:id",
          name: "edit-staff",
          component: EditStaff,
        },
        {
          path: "/staff/lists",
          name: "list-staff",
          component: ListStaff,
        },

        // SCHOLARSHIP
        {
          path: "/scholarship",
          name: "scholarship",
          component: Scholarship,
        },
        // SCHOLARSHIP
        {
          path: "/scholarship/create",
          name: "create-scholarship",
          component: CreateScholarship,
        },
        {
          path: "/scholarship/edit/:id",
          name: "edit-scholarship",
          component: EditScholarship,
        },
        {
          path: "/scholarship/lists",
          name: "list-scholarship",
          component: ListScholarship,
        },

        // SCHOLARSHIP LIST PAGES
        {
          path: "/scholarship/list-page/create",
          name: "create-scholarship-listPages",
          component: CreateScholarshipListPages,
        },
        {
          path: "/scholarship/list-page/:id",
          name: "edit-scholarship-listPages",
          component: EditScholarshipListPages,
        },
        {
          path: "/scholarship/list-page",
          name: "list-scholarship-listPages",
          component: ListScholarshipListPages,
        },

        // Faculties And Department
        {
          path: "/faculties-department",
          name: "faculties-department",
          component: FacultiesAndDepartment,
        },

        // ACADEMIC STAFF ROLES
        {
          path: "/academic/staff-roles/create",
          name: "create-academic-staff-roles",
          component: CreateAcademicStaffRoles,
        },
        {
          path: "/academic/staff-roles/:id",
          name: "edit-academic-staff-roles",
          component: EditAcademicStaffRoles,
        },
        {
          path: "/academic/staff-roles",
          name: "list-academic-staff-roles",
          component: ListAcademicStaffRoles,
        },

        // DEPARTMENT
        {
          path: "/departments/create",
          name: "create-departments",
          component: CreateDepartments,
        },
        {
          path: "/departments/edit/:id",
          name: "edit-departments",
          component: EditDepartments,
        },
        {
          path: "/departments",
          name: "list-departments",
          component: ListDepartments,
        },

        // FACULTIES
        {
          path: "/faculties/create",
          name: "create-faculties",
          component: CreateFaculties,
        },
        {
          path: "/faculties/edit/:id",
          name: "edit-faculties",
          component: EditFaculties,
        },
        {
          path: "/faculties",
          name: "list-faculties",
          component: ListFaculties,
        },

        // FACULTY NEWS
        {
          path: "/faculty-news/create",
          name: "create-faculty-news",
          component: CreateFacultyNews,
        },
        {
          path: "/faculty-news/edit/:id",
          name: "edit-faculty-news",
          component: EditFacultyNews,
        },
        {
          path: "/faculty-news",
          name: "list-faculty-news",
          component: ListFacultyNews,
        },
        // FACULTY HIGLIGHTS
        {
          path: "/faculty-highlights/create",
          name: "create-faculty-highlights",
          component: CreateFacultyHighlights,
        },
        {
          path: "/faculty-highlights/edit/:id",
          name: "edit-faculty-highlights",
          component: EditFacultyHighlights,
        },
        {
          path: "/faculty-highlights",
          name: "list-faculty-highlights",
          component: ListFacultyHighlights,
        },

        // FACULTY LEADERSHIP ROLES
        {
          path: "/faculty-leadership-roles/create",
          name: "create-faculty-leadership-roles",
          component: CreateFacultyLeadershipRoles,
        },
        {
          path: "/faculty-leadership-roles/edit/:id",
          name: "edit-faculty-leadership-roles",
          component: EditFacultyLeadershipRoles,
        },
        {
          path: "/faculty-leadership-roles",
          name: "list-faculty-leadership-roles",
          component: ListFacultyLeadershipRoles,
        },

        // FACULTY NEWS SLIDES
        {
          path: "/faculty-news-slides/create",
          name: "create-faculty-news-slides",
          component: CreateFacultyNewsSlides,
        },
        {
          path: "/faculty-news-slides/edit/:id",
          name: "edit-faculty-news-slides",
          component: EditFacultyNewsSlides,
        },
        {
          path: "/faculty-news-slides",
          name: "list-faculty-news-slides",
          component: ListFacultyNewsSlides,
        },

        // ADMIN USERS
        {
          path: "/adminusers/",
          name: "admin-users",
          component: AdminUsers,
        },

        {
          path: "/admin-users/create",
          name: "create-admin-users",
          component: CreateAdminUsers,
        },
        {
          path: "/admin-users/edit/:id",
          name: "edit-admin-users",
          component: EditAdminUsers,
        },
        {
          path: "/admin-users",
          name: "list-admin-users",
          component: ListAdminUsers,
        },

        // EVENT
        {
          path: "/event/",
          name: "event",
          component: Events,
        },

        {
          path: "/events/create",
          name: "create-events",
          component: CreateEvent,
        },
        {
          path: "/events/edit/:id",
          name: "edit-events",
          component: EditEvent,
        },
        {
          path: "/events",
          name: "list-events",
          component: ListEvent,
        },

        // EVENT CATEGORY
        {
          path: "/event/category/create",
          name: "create-event-category",
          component: CreateEventCategory,
        },
        {
          path: "/event/category/edit/:id",
          name: "edit-event-category",
          component: EditEventCategory,
        },
        {
          path: "/event/category",
          name: "list-event-category",
          component: ListEventCategory,
        },

        // COURSES
        {
          path: "/courses",
          name: "courses",
          component: Courses,
        },

        {
          path: "/courses/create",
          name: "create-courses",
          component: CreateCourse,
        },
        {
          path: "/courses/edit/:id",
          name: "edit-courses",
          component: EditCourse,
        },
        {
          path: "/courses/lists",
          name: "list-courses",
          component: ListCourse,
        },

        // COURSE MODULES
        {
          path: "/courses/modules/create",
          name: "create-courses-modules",
          component: CreateCourseModule,
        },
        {
          path: "/courses/modules/edit/:id",
          name: "edit-courses-modules",
          component: EditCourseModule,
        },
        {
          path: "/courses/modules",
          name: "list-courses-modules",
          component: ListCourseModule,
        },

        // Change Password
        {
          path: "/change-password/",
          name: "change-password",
          component: ChangePassword,
        },
        // {
        //   path: "/update-admin/:id",
        //   name: "edit-admin-users",
        //   component: EditAdminUser,
        // },
        {
          path: "/update-profile/",
          name: "update-profile",
          component: UpdateProfile,
        },

        {
          path: "/adminusers/:id",
          name: "admin-user-details",
          component: AdminUser,
        },
        // {
        //   path: "/viewpages/",
        //   name: "view-pages",
        //   component: ViewPages,
        // },
        {
          path: "/:catchAll(.*)",
          name: "not-found",
          component: NotFound,
        },
        {
          path: "/not-authorized",
          name: "not-authorized",
          component: NotAuthorized,
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/create-admin-user",
      name: "create-admin-user",
      component: Register,
    },
    {
      path: "/reset-password/",
      name: "reset-password",
      component: ResetPassword,
    },
    {
      path: "/confirm-reset-password/",
      name: "confirm-reset-password",
      component: PasswordResetConfirm,
    },
  ],
});

export default router;
