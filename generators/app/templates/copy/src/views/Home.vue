<template>
  <div class="text-center overflow-hidden select-none">
    <img
      class="w-80 m-36 overflow-hidden inline-block shadow-xl rounded-md"
      alt="KwokStudio logo"
      src="../assets/logo.png"
    >

    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>Change from $repo: {{$repo.greet}}</p>
    <svg-icon name="dog" />
    <svg-icon name="cat" />
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {
    let i = 1;
    setInterval(() => {
      this.$repo.greet = i++;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
svg {
  @apply inline-block w-28 h-28 mt-16;
}
</style>