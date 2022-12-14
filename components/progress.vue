<template>
  <div class="progress">
    <div class="progress__bar"></div>
  </div>
</template>

<script setup>

const { progress } = defineProps({
  progress: Number,
})

</script>

<style scoped>
.progress {
  width: 100%;
  background: transparent;
  border-radius: 5px;
  border: solid 1px gray;
  min-height: 7px;
  position: fixed;
  top: 0;
}

.progress__bar {
  width: v-bind(progress + '%');
  background: black;
  min-height: 7px;
}
</style>