import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../../views/HomeView.vue'
import AddBookView from '../../views/AddBookView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/add-book', component: AddBookView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router