<template>
  <div>
      <Nuxt v-if="isIndex" />
      <template v-else>
      <Menu />
      <Nuxt/>
      </template>

  </div>
</template>

<script>
export default {
  computed: {
    isIndex() {
      return this.$route.name === "index";
    },
  }
};
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", sans-serif !important;

  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 214, 171, 1) 0%,
    rgba(255, 182, 182, 1) 90%
  );
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.center.examplex img {
  width: 90px;
}
.vs-navbar-content {
  border-radius: 0px;
}

.nav__dentro {
  background: #ddd;
}
</style>
