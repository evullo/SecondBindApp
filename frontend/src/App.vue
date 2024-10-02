<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterView } from 'vue-router'
import NavbarMobile from './components/NavbarMobile.vue'
import Navbar from './components/Navbar.vue'

const isMobile = ref(window.innerWidth <= 768)

const checkIfMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches
}

onMounted(() => {
  checkIfMobile()
  window.addEventListener('resize', checkIfMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIfMobile)
})
</script>

<template>
    <component :is="isMobile ? NavbarMobile : Navbar"></component>

    <div class="container_div">
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
.container_div {
  margin-top: 15vh;
}

@media screen and (max-width: 768px) {
  .container_div {
      margin-top: 10vh;
  }
}
</style>
