<script setup>
import { useBookStore } from '../stores/bookStore'

const bookStore = useBookStore()
</script>

<template>
    <div class="filter-form">
        <h2 class="second-title">Filter Books</h2>
        <input class="filter-input" v-model="bookStore.searchCriteria.title" type="text" placeholder="Search by title" />
        <input class="filter-input" v-model="bookStore.searchCriteria.author" type="text" placeholder="Search by author" />
        <input class="filter-input" v-model="bookStore.searchCriteria.genre" type="text" placeholder="Search by genre" />
    </div>
</template>


<style scoped>
.second-title {
    color: white;
    filter: drop-shadow(0px 0px 3px #000000);
    font-size: 1.5rem;
    text-align: center;
}

.filter-input {
    padding: 0.25rem 0.5rem;
    border: 2px solid black;
    box-shadow: 6px 4px;
    border-radius: 0.25rem;
}

.filter-form {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-bottom: 1rem;
}
</style>
  