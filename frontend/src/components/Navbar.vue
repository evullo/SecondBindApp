<script setup>
import NavItem from './items/NavItem.vue'
</script>

<template>
    <nav class="nav-container">
        <ul class="link-container">
            <NavItem link="/">Inventory</NavItem>
            <NavItem link="/add-book">Add book</NavItem>
        </ul>
    </nav>
</template>

<style scoped>
.nav-container {
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 100%;
    height: 10vh;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5px);
    border-bottom: 1px solid black;
}

.link-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
</style>