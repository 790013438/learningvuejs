import header from './components/header.vue'
import Home from './components/home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
  {path:'/', component: Home},
  {path: '/portfolio', component: Portfolio},
  {path: '/stocks', component: Stocks}
]
