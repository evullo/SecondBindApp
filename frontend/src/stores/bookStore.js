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

  const addBook = (newBook) => {
    books.value.push(newBook)
  }

  const filteredBooks = computed(() => {
    return books.value.filter((book) => {
      const matchesTitle = searchCriteria.value.title === '' || book.title.toLowerCase().includes(searchCriteria.value.title.toLowerCase())
      const matchesAuthor = searchCriteria.value.author === '' || book.author.toLowerCase().includes(searchCriteria.value.author.toLowerCase())
      const matchesGenre = searchCriteria.value.genre === '' || book.genre.toLowerCase().includes(searchCriteria.value.genre.toLowerCase())

      return matchesTitle && matchesAuthor && matchesGenre
    })
  })

  const saveNewBook = async (bookData) => {
    try {
      const response = await fetch('http://localhost:8000/inventory/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout du livre')
      }

      const newBook = await response.json()
      addBook(newBook)

    } catch (error) {
      console.error('Erreur :', error.message)
    }
  }

  loadBooks()

  return {
    books,
    searchCriteria,
    filteredBooks,
    loadBooks,
    saveNewBook
  }
})
