<script setup></script>

<template>
    <h1 class="header-one">
        <slot></slot>
    </h1>
</template>

<style scoped>
.header-one {
    font-size: 2.5rem;
    text-align: center;
    color: white;
    filter: drop-shadow(0px 0px 3px #000000);
    font-weight: 600;
}
</style>