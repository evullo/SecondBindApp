import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { fetchBooks } from '../services/BookService'

export const useBookStore = defineStore('bookStore', () => {
  const books = ref([])
  const searchCriteria = ref({
    title: '',
    author: '',
    genre: ''
  })

  const loadBooks = async () => {
    books.value = await fetchBooks()
  }

  const filteredBooks = computed(() => {
    return books.value.filter((book) => {
      const matchesTitle = searchCriteria.value.title === '' || book.title.toLowerCase().includes(searchCriteria.value.title.toLowerCase())
      const matchesAuthor = searchCriteria.value.author === '' || book.author.toLowerCase().includes(searchCriteria.value.author.toLowerCase())
      const matchesGenre = searchCriteria.value.genre === '' || book.genre.toLowerCase().includes(searchCriteria.value.genre.toLowerCase())

      return matchesTitle && matchesAuthor && matchesGenre
    })
  })

  loadBooks()

  return {
    books,
    searchCriteria,
    filteredBooks,
    loadBooks
  }
})
