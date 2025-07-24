<template>
    <UniversitySetting />
    <UniversitySettingDetails />
    <NewsletterList />
    <NewsletterDetails />
    <NewsLetterSubscriptionDetails />
    <ListTags />
    <ListPosts />
    <EditPost />
    <EditWhyUs />
    <EditPage />
    <createStaff />
    <HomePage />
    <AboutPage />
</template>

<script setup>
    import UniversitySetting from "@/components/Core/UniversitySettings/UniversitySetting.vue";
    import UniversitySettingDetails from "@/components/Core/UniversitySettings/UniversitySettingDetails.vue";
    import NewsletterList from "@/components/Core/Newsletter/NewsLetterList.vue";
    import NewsletterDetails from "@/components/Core/Newsletter/NewsLetterDetails.vue";
    import ListTags from "@/components/Blog/Tags/ListTags.vue";
    import ListPosts from "@/components/Blog/Posts/ListPosts.vue";
    import EditPost from "@/components/Blog/Posts/ListSpecificPost.vue";
    import EditWhyUs from "@/components/Admission/WhyChooseUsFeatures/details.vue";
    import EditPage from "@/components/Admission/Pages/details.vue";
    import createStaff from "@/components/Staff/Create.vue";
    import HomePage from "@/components/Pages/HomePage/Create.vue";
    import AboutPage from "@/components/Pages/AboutPage/Details.vue";

</script>