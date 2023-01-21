<template>

  <navBarLayout/>
  <router-view/>
</template>

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
  background: black;
}

nav a {
  font-weight: bold;
  color: #b4b5ba;
  transition: all .1s ease-in-out;
}

nav a:hover {
  color: white;
  transition: all .1s ease-in-out;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
<script>
import navBarLayout from "@/modules/shared/layouts/NavBarLayout";

export default {
  components: {navBarLayout}
}
</script>