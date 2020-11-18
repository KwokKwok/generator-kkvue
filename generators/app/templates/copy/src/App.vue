<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Futura Light, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f2f5;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  a {
    text-decoration: none;
  }
}

@font-face {
  font-family: "Futura Light";
  src: url("./assets/Futura Light.ttf");
}
@font-face {
  font-family: "Futura";
  src: url("./assets/Futura.ttf");
}
</style>
