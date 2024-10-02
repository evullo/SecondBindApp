<script setup>
import { RouterLink } from 'vue-router'

defineProps({link: String})
</script>

<template>
    <li class="link-container">
        <RouterLink class="link" :to="link">
            <slot></slot>
        </RouterLink>
    </li>
</template>

<style scoped>
.link {
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  display: inline-block;
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transition: transform 0.25s ease-out;
  transform-origin: bottom left;
}

.link:hover::after {
  transform: scaleX(1);
}

@media screen and (max-width: 768px) {
  .link {
    font-size: 2em;
    transition: all 0.5s ease;
  }

  .link:hover:focus {
    font-size: 2.5em;
  }

  .link-container {
    margin-bottom: 1rem;
  }
}
</style>