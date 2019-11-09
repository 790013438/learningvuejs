# vue-cli

> 

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

使用render() 代替加载template
```js
new Vue({
  el: '#app',
  render: h => h(App)
})
```

使用ES6 Spread运算符（为此，您需要将babel-preset-stage-2作为依赖项添加到您的.babelrc文件中）：
npm install --save-dev babel-preset-stage-2
