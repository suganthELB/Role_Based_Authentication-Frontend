<script setup>
  //import login from "./components/login.vue";
  </script>
  <template>
    <!-- <login></login> -->
    
    <router-view></router-view>
  </template>
  <style scoped></style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

.form-wrapper {
  width: 500px;
  margin: 0 auto;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
