<template>
  <ul class="logs">
    <img class="logs__logo" src="~/assets/rgb124-loading.gif" alt="website loading logo">
    <li v-for="log in logs" :key="log" class="logs__log"> {{ log }} </li>
  </ul>
</template>

<script setup>

defineProps({
  logs: Array,
})

</script>

<style scoped>
.logs__logo {
  z-index: 1;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 100%;
  mix-blend-mode: multiply;
}

.logs {
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: gray;
  margin: 0;
}

.logs__log {
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style: none;
  font-family: 'Courier New', Courier, monospace;
  color: black;
}
</style>