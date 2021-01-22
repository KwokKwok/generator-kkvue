<template>
  <svg class="svg-icon">
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

<style lang="scss">
.svg-icon {
  height: 1em;
  width: 1em;
  fill: currentColor;
}
</style>