<template>
  <div class="courseDetails" style="padding:16px">
    <h1>{{$store.state.course.title}}</h1>
    <p>Credits: {{$store.state.course.credits}} SP<br>
      Year: {{$store.state.course.year}}<br>
      Semester: {{$store.state.course.semester}}</p>
    <button v-on:click="editCourse()">Edit</button>
  </div>
  <div class="form" v-if="edit==true">
    <UpdatableCourse></UpdatableCourse>
  </div>
</template>

<script>
import UpdatableCourse from '../components/UpdatableCourse.vue';
export default {
  components: {
    UpdatableCourse
  },
  props: ['courseId'],
  data() {
    return {
      edit: false,
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
      this.edit = true;
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