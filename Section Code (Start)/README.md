# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 简单的vue的component
第一个参数为html中的名字，第二个参数为json,哈希表, template标签一致，data变为了function，返回存储数据的哈希表；
这样做的目的是不干扰(interfering, disturb)data
```vue
Vue.component('html中的名字', {
  data: function() {
    return {'标签': '属性'}
  },
  template: '模板名字'
});
```
