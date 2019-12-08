import User from './components/user/User.vue'
import Home from './components/Home.vue'

export {routes}

const routes = [
  {path: '', component: Home},
  {path: '/user', component: User}
]
