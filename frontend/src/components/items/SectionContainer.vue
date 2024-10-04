<script setup></script>

<template>
    <section class="container">
        <slot></slot>
    </section>
</template>

<style scoped>
.container {
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5px);
    border-radius: 1.5rem;
    padding: 1.5rem 2rem;
    margin: 5vh auto;
    width: 50vw;
}

@media screen and (max-width: 768px) {
    .container {
        width: 90vw;
    }
}

@media screen and (min-width: 1280px) {
    .container {
        width: 40vw;
    }
}

@media screen and (min-width: 1536px) {
    .container {
        width: 30vw;
    }
}
</style>