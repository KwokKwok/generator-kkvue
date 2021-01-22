<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Created by KwokStudio.</h2>
  </div>
</template>


<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
}
</style>
