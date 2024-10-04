<script setup>
import BookFilter from '../components/BookFilter.vue'
import BookList from '../components/BookList.vue'
import MainTitle from '../components/items/MainTitle.vue'
import SectionContainer from '../components/items/SectionContainer.vue'
</script>

<template>
    <MainTitle>Books inventory</MainTitle>

    <SectionContainer>
        <BookFilter></BookFilter>
        <BookList></BookList>
    </SectionContainer>
</template>

<style scoped></style>