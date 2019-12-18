import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'

export {routes}

const routes = [
  {path: '', components: {
    default: Home,
    'app-header': Header
  }},
  {path: '/user', components: {
    default: User,
    'app-bottom': Header
  },
    children: [
    {path: '', component:UserStart},
    {path: ':id', component:UserDetail,
      beforeEnter: (to, from, next) => {
        console.log("inside route setup");
        next();
      }
    },
    {path: ':id/edit', component: UserEdit, name: 'userEdit'}
  ]},
  {path: '/redirect-me', redirect: '/user'},
  {path: '/redirect-me-2', redirect: {name: 'userEdit',
    params: {id: 3},
    query: {locale: 'cn', q: 100}
  }},
  {path: '*', redirect: '/'}
]
