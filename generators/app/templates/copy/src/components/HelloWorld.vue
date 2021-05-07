<template>
  <div>
    <h1 class="text-3xl">
      {{ msg }}</h1>
    <h2 class="text-xl m-2">Created by KwokStudio.</h2>
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
