<!--TODO: Alt-tags fixen-->
<template>
  <div id="app">
    <div class="navBar" id="myNavBar">
      <router-link to="/">Home</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/lecturers">Lecturers</router-link>
      <a href="javascript:void(0);" class="icon" v-on:click="openMenu()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <router-view/>
  </div>
  <footer class="footnote">
    Author: Su-zen Geurts
  </footer>
</template>

<script>
export default {
  name: 'navAndFooter',
  methods: {
    openMenu: function () {
      var x = document.getElementById("myNavBar");
      if (x.className === "navBar") {
        x.className += " responsive";
      } else {
        x.className = "navBar";
      }
    }
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

body, button {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

h1, .footnote, .navBar {
  font-family: "Copperplate", Fantasy;
}

h1 {
  background: url("assets/banner.jpg");
  background-size: 300px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 50px;
}

.navBar {
  overflow: hidden;
  background-image: url(./assets/banner.jpg);
  background-size: cover;
}

.navBar a {
  float: left;
  display: block;
  padding: 14px 16px;
  color: #ffffff;
  text-shadow: 1px 1px #f900ff;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
}

.navBar a:hover {
  background-color: #5306b9;
}

.navBar .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .navBar a:not(:first-child) {
    display: none;
  }

  .navBar a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .navBar.responsive {
    position: relative;
  }

  .navBar.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  .navBar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

.footnote {
  padding: 3px;
  background-image: url("assets/banner.jpg");
  background-repeat: no-repeat;
  text-align: center;
  color: #ffffff;
  font-size: 10px;
}
</style>



