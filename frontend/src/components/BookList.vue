<script setup>
import { useBookStore } from '../stores/bookStore'

const bookStore = useBookStore()
</script>

<template>
    <div>
        <h2 class="second-title">Available Books</h2>
        <ul v-if="bookStore.filteredBooks.length > 0">
            <li v-for="book in bookStore.filteredBooks" :key="book.id" class="book">
                <p><strong>{{ book.title }}</strong> by {{ book.author }} </p>
                <p>{{ book.genre }}, {{ book.publicationDate }}</p>
            </li>
        </ul>
        <p v-else class="not-found">No books found.</p>
    </div>
</template>

<style scoped>
.second-title {
    color: white;
    filter: drop-shadow(0px 0px 3px #000000);
    font-size: 1.5rem;
    text-align: center;
}

.book {
    background: white;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    margin: 0.5rem 0;
    border: 2px solid black;
    box-shadow: 6px 4px;
}

.not-found {
    margin: 1.5rem 0;
    font-weight: 500;
    font-size: 1.25rem;
    color: white;
    filter: drop-shadow(0px 0px 3px #000000);
    text-align: center;
}
</style>