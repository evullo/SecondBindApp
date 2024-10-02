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
    top: 0;
    width: 100%;
    height: 10vh;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
}

.link-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
</style>