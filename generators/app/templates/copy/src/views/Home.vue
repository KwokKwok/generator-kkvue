<template>
  <div class="home">
    <img
      class="logo"
      alt="KwokStudio logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {
    console.log(this.$repo.greet);
  },
};
</script>

<style lang="scss" scoped>
.logo {
  user-select: none;
  width: 300px;
  margin: 130px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 12px 5px rgba($color: #000000, $alpha: 0.05);
}
</style>