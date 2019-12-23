//import User from './components/user/User.vue'
//const User = require('./components/user/User.vue')
//import UserStart from './components/user/UserStart.vue'
//import UserDetail from './components/user/UserDetail.vue'
//import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'

const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'))
  });
}
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'))
  }, 'user');
}
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  }, 'user');
}

const UserEdit = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    // Promise 的resolve
    resolve(require('./components/user/UserEdit.vue'))
  }, 'user');
}

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
