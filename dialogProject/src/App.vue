<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
//import Dialog from './components/Dialog.vue'
import {ref} from 'vue'
let showDialog = ref(false);
let success = ref('success')
let small = ref('small')
let danger = ref('danger')
let large = ref('large')
</script>

<template>
  <button @click="showDialog = true">click to open the dialog</button>
  <Dialog v-if="showDialog">xxx
    <!-- <button @click="showDialog = false">关闭</button> -->
    <ElButton :type="success" :size="large" @click="showDialog = false">关闭</ElButton>
  </Dialog>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
