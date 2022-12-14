<template>
  <button @click="handleNavVisibility" class="button button--nav">
    <img v-if="!isNavOpen" class="button__icon button__icon--nav" src="~/assets/bar-icon.png" alt="open menu icon">
    <img v-else class="button__icon button__icon--nav" src="~/assets/return-icon.png" alt="close menu icon">
  </button>
  <Transition name="translateX">
    <NavPhone v-show="isNavOpen" />
  </Transition>
  <slot />

  <canvas ref="canvas">
  </canvas>
  <Transition>
    <Log v-show="getIsLoading" :logs="log.slice().reverse()" />
  </Transition>
  <Transition>
    <Progress v-show="getIsLoading" :progress=getProgress />
  </Transition>
</template>

<script setup>

const canvas = ref(null);

const isNavOpen = ref(false)

const route = useRoute();
const currentPage = ref(route.path);

const handleNavVisibility = () => {
  isNavOpen.value = !isNavOpen.value;
}

watch(route, (r) => {
  isNavOpen.value = false;
  currentPage.value = r.path;
})

const state = useStateStore();

const { getProgress, log, getIsLoading } = storeToRefs(state);

onMounted(() => {

  state.setCanvas(canvas.value);
  state.setEngine();
  state.loadAssets();

  document.getElementById('babylonjsLoadingDiv').style.display = 'none';
})

</script>

<style>
body {
  margin: 0;
}

span {
  font-family: 'Courier New', Courier, monospace;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transition: all 0.125s ease-in-out;
}

.translateX-enter-from,
.translateX-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

#babylonjsLoadingDiv {
  display: none;
}

canvas {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

main {
  padding-block: 50px;
  padding-inline: 15px;
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  z-index: 1;
  backdrop-filter: blur(10px);
}

.button {
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 0;

  background: transparent;
  cursor: pointer;
  text-align: center;
  max-height: 50px;
}

.button--nav {
  z-index: 3;
  background-color: black;
  position: fixed;
  right: 0;
}

.button__icon {
  max-height: inherit;
  max-width: 100%;

}

.button__icon--nav {
  filter: invert(1.0);
  max-width: 25px;
}
</style>