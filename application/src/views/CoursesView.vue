<template>
  <div class="courses" style="padding:16px">
    <h1>Courses</h1>
    <div class="courses">
      <input type="text" id="myInput" v-on:keyup="search()" v-model="message" placeholder="Search for names..">
      <table id="myTable">
        <tr class="header">
          <th style="width:60%;">Title</th>
          <th style="width:40%;">credits</th>
        </tr>
        <tr class="row" v-for="course in $store.state.courses" v-bind:key="course" v-on:click="getCourse(course)">
          <td>{{course.title}}</td>
          <td>{{course.credits}} SP</td>
        </tr>
      </table>
    </div>
    <div>
      {{ $store.state.error }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
      rows:[],
      message: "",
    }
  },
  mounted() {
    this.getCourses();
  },
  methods: {
    getCourses() {
      this.$store.dispatch('fetchCourses');
    },
    getCourse(course) {
      this.$router.push({name: 'courseDetails', params: {courseId: course.id}});
    },
    search() {
      // input = document.getElementById("myInput");
      let filter = this.message.toUpperCase();
      let table = document.getElementById("myTable");
      let tr = table.getElementsByTagName("tr");

      // Loop through all table rows, and hide those who don't match the search query
      for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          let txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
}
</script>

<style>
#myInput {
  background-image: url('../assets/searchIcon.png');
  background-position: 12px 12px;
  background-repeat: no-repeat;
  background-size: 20px;
  width: fit-content;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
}

#myTable {
  border-collapse: collapse; /* Collapse borders */
  width: 100%; /* Full-width */
  border: 1px solid #5306b9;
  font-size: 18px; /* Increase font-size */
}

#myTable th, #myTable td {
  text-align: left; /* Left-align text */
  padding: 12px; /* Add padding */
}

#myTable tr {

  /* Add a bottom border to all table rows */
  border-bottom: 1px solid #5306b9;
}

#myTable tr.header {
  /* Add a grey background color to the table header and on hover */
  background-color: #5306b9;
  color: #ffffff;
}

#myTable tr.row:hover {
  background-color: #ddd;
  color: #5306b9;
}
</style>