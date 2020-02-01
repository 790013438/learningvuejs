import header from './components/header.vue'
import Home from './components/home.vue'

export const routes = [{
  path:'',
  components: {
    default: Home,
    name: Home
  }
}]
