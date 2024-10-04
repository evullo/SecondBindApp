<script setup>
import { ref } from 'vue'
import MenuIcon from './icons/MenuIcon.vue'
import XMarkIcon from './icons/XMarkIcon.vue'
import NavItem from './items/NavItem.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <div class="icon_container" @click="toggleMenu">
      <XMarkIcon v-if="isMenuOpen" class="icon"></XMarkIcon>
      <MenuIcon v-else class="icon"></MenuIcon>
    </div>
    <div class="menu-icon" :class="{ 'menu-open': isMenuOpen }"></div>

    <Transition>
        <nav v-if="isMenuOpen" class="mobile-menu">
          <ul>
            <NavItem @click="toggleMenu" link="/">Inventory</NavItem>
            <NavItem @click="toggleMenu" link="/add-book">Add Book</NavItem>
          </ul>
        </nav>
    </Transition>
</template>

<style scoped>
.menu-icon {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 13;
  cursor: pointer;
  background-color: black;
  height: 17vw;
  width: 17vw;
  padding: 0.25rem;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
}

.menu-icon.menu-open {
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
}

.mobile-menu {
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 14;
}

.icon {
  color: white;
  width: 15vw;
}

.icon_container {
    position: fixed;
    top: 1.25rem;
    left: 1.25rem;
    z-index: 15;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
