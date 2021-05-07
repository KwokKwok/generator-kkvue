<template>
  <svg class="w-1 h-1 fill-current">
    <use
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :xlink:href="id"
    />
  </svg>
</template>

<script>
const svgs = import.meta.globEager("../assets/svgs/*.svg");
export default {
  name: "SvgIcon",
  computed: {
    id() {
      return `#${this.name}`;
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>