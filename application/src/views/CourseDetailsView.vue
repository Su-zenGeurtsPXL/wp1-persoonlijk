<template>
  <div class="courseDetails" style="padding:16px">
    <h1>{{$store.state.course.title}}</h1>
    <p>Credits: {{$store.state.course.credits}} SP<br>
      Year: {{$store.state.course.year}}<br>
      Semester: {{$store.state.course.semester}}</p>
    <button v-on:click="editCourse()">Edit</button>
  </div>
</template>

<script>
export default {
  props: ['courseId'],
  data() {
    return {
      id: this.courseId,
    }
  },
  mounted() {
    this.getCourseDetails();
  },
  methods: {
    getCourseDetails() {
      this.$store.dispatch('fetchCourseId', {courseId: this.courseId});
    },
    editCourse() {

    }
  }
}
</script>

<style>
button {
  background-image: url("../assets/banner.jpg");
  border: none;
  box-shadow: 1px 1px #f900ff;
  border-radius: 12px;
  color: #ffffff;
  font-size: 20px;
  height: 40px;
  width: 60px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

button:hover{
  color: #f900ff;
}

</style>