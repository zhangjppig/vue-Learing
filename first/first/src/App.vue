<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <login></login>
  </div>
</template>

<script>
// 导入Login.vue
import Login from "./components/Login.vue";
export default {
  name: "App",
  // 挂载组件
  components: {
    login: Login,
  },
};

// 组件的创建
// 1.创建一个组件(.vue后缀的文件)
// 2.导入组件 import 自定义组件的名字 from "组件的路径"
// 3.挂载组件 components
// 4.使用组件 像使用普通的HTML标签一样去使用
// 注意：不能使用html已经占用的标签
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
