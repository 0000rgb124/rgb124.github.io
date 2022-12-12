<template>
  <NuxtLink v-show="path === '/'" class="link link--about" to="/about">about</NuxtLink>
  <NuxtLink v-show="path === '/'" class="link link--insta" to="/insta">insta</NuxtLink>
  <NuxtLink v-show="path !== '/'" class="link link--home" to="/">x</NuxtLink>
  <div class="content">
    <slot />
  </div>
  <!-- <Babylon /> -->
</template>

<script setup>

const route = useRoute();
const path = ref(route.path)

watch(route, (r) => {
  path.value = r.path
})
</script>

<style lang="scss">
$padding-inline: 25%;
$padding-block: 10%;

body {
  margin: 0;
}

.content {
  background: rgba(1, 0, 0, 0.8);
  color: white;
  position: absolute;
  left: $padding-inline;
  right: $padding-inline;
  top: $padding-block;
  bottom: $padding-block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  overflow: scroll;
  max-height: 100%;
  pointer-events: all;
}

.link {
  height: fit-content;
  background: white;
  position: absolute;

  &--about {
    top: $padding-block;
    left: $padding-inline;
  }

  &--insta {
    top: $padding-block;
    right: $padding-inline;
  }

  &--home {
    top: $padding-block;
    right: $padding-inline;
    z-index: 1;
  }
}
</style>