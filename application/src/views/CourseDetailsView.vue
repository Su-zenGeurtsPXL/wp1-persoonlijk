<template>
  <div class="courseDetails" style="padding:16px">
    <h1>Course: 1 {{courseId}}</h1>
  </div>
</template>

<script>
export default {
  props: ['courseId'],
  data() {
    return {
      id: this.courseId,
      title: "",
      credits: null,
      lecturerId: null,
      year: null,
      semester: null,
    }
  },
  mounted() {
    this.getCourseDetails();
  },
  methods: {
    getCourseDetails() {
      this.$store.dispatch('fetchCourses', {courseId: this.id});
    },
  }
}
</script>