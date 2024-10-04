<script setup>
import { ref, computed } from 'vue'

const title = ref('')
const author = ref('')
const genre = ref('')
const date = ref('')
const isbn = ref('')
const success = ref('')
const error = ref('')

const validateTitle = computed(() => {
  if (title.value && title.value.length < 3) return 'Title must be at least 3 characters long'
  return ''
})

const validateAuthor = computed(() => {
  if (!author.value) return 'Author is required'
  return ''
})

const validateGenre = computed(() => {
  if (!genre.value) return 'Genre is required'
  return ''
})

const validateDate = computed(() => {
  if (date.value && new Date(date.value) > new Date()) return 'Publication date should not be in the future'
  return ''
})

const validateIsbn = computed(() => {
  const regex = /^(([0-9]-[0-9]{3}-[0-9]{5}-[0-9])|([0-9]{3}-[0-9]-[0-9]{2}-[0-9]{6}-[0-9])|([0-9]{13})|([0-9]{10}))$/
  if (isbn.value && !regex.test(isbn.value)) return 'ISBN must be 10 or 13 digits long'
  return ''
})

const isFormValid = computed(() => {
  return (
    title.value && date.value && isbn.value &&
    !validateTitle.value &&
    !validateAuthor.value &&
    !validateGenre.value &&
    !validateDate.value &&
    !validateIsbn.value
  )
})

const submitForm = async () => {
  if (!isFormValid.value) {
    return
  }

  const formData = {
    title: title.value,
    author: author.value,
    genre: genre.value,
    publicationDate: new Date(date.value),
    isbn: isbn.value
  }

  await fetch('http://localhost:8000/inventory/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        error.value = `${errorData.message}`;
        setTimeout(() => {error.value= ''}, 5000);
        return;
    }

    const result = await response.json();
    success.value = 'Book added successfully!';
    setTimeout(() => {success.value= ''}, 5000);
    
    title.value = ''
    author.value = ''
    genre.value = ''
    date.value = ''
    isbn.value = ''
  })
  .catch((error) => {
    error.value= `Error: ${error.message}`
    setTimeout(() => {error.value= ''}, 5000)
  })
}
</script>

<template>
    <form class="add-form" @submit.prevent="submitForm">
        <span class="info" style="color: red;" v-if="error">{{ error }}</span>
        <span class="info" style="color: #00FF00;" v-if="success">{{ success }}</span>
        <div class="input-container">
            <label class="add-label" for="title">Title</label>
            <input v-model="title" class="add-input" name="title" id="title" type="text" placeholder="book title">
            <span class="validator">{{ validateTitle }}</span>
        </div>

        <div class="input-container">
            <label class="add-label" for="author">Author</label>
            <input v-model="author" class="add-input" :class="validateAuthor ? 'error' : ''" name="author" id="author" type="text" placeholder="book author">
        </div>

        <div class="input-container">
            <label class="add-label" for="genre">Genre</label>
            <input v-model="genre" class="add-input" name="genre" id="genre" type="text" placeholder="book genre">
        </div>

        <div class="input-container">
            <label class="add-label" for="date">Publication date</label>
            <input v-model="date" class="add-input" name="date" id="date" type="date">
            <span class="validator">{{ validateDate }}</span>
        </div>

        <div class="input-container">
            <label class="add-label" for="isbn">ISBN</label>
            <input v-model="isbn" class="add-input" name="isbn" id="isbn" type="text" placeholder="book ISBN number">
            <span class="validator">{{ validateIsbn }}</span>
        </div>

        <button class="submit-button" :disabled="!isFormValid" type="submit">Add your book</button>
    </form>
</template>

<style scoped>
.validator {
    margin-top: 0.5rem;
    color: red;
    font-weight: 500;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
}

.add-label {
    margin: 0.25rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
    filter: drop-shadow(0px 0px 3px #000000);
}

.add-label::after {
    content: '*';
    color: red;
}

.add-input {
    outline: none;
    border-radius: 0.25rem;
    padding: 0.5rem;
    border: 2px solid black;
    box-shadow: 6px 4px;
}

.add-input:focus {
    border: 2px solid orange;
}

.submit-button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    font-weight: 600;
    font-size: 1.25rem;
    width: 100%;
    border: none;
    border-radius: 0.25rem;
    background-color: white;
    filter: drop-shadow(5px 5px 10px #000000);
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}

.submit-button:disabled {
    background-color: rgba(255, 0, 0, 0.5);
    color: black;
    cursor: not-allowed;
    filter: none;
}

.submit-button:enabled:hover {
    background-color: black;
    color: white;
}

.error:focus {
    border: 2px solid red;
}

.info {
    font-size: 1rem;
    font-weight: 600;
}
</style>