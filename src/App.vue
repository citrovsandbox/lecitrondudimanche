<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo">
    <Multiselect :options="users"></Multiselect>
  </div>
</template>


<script>
import Multiselect from './components/Multiselect/Multiselect.vue';

export default {
  name: 'app',
  components: {
    Multiselect,
  },
  computed: {
    users() {
      return this.$store.state.users.users;
    },
  },
  mounted() {
    this.$store.dispatch('get:users');
  },
};
</script>



<style lang="scss">
#app {
  // width:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:auto;
  // display:flex;
  // flex-direction:column;
  // align-items:center;justify-content:center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.logo {
  width:150px; margin-bottom:50px;
  margin-top:50px;
}
</style>
