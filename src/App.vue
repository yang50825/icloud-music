<template>
  <div>
    <TopBar></TopBar>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
export default {
  name: 'App',
  components: {
    TopBar,
  },
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

body,
textarea,
select,
input,
button {
  font-size: 14px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background-color: #f5f5f5;
}

// 版心
.wrapper {
  width: 1100px;
  margin: 0 auto;
}

.m-subnav {
  height: 5px;
  background-color: #c20c0c;
}

// 清除浮动
.clearfix::before,
.clearfix::after {
  content: '';
  display: table;
}

/* 真正清除浮动的标签 */
.clearfix::after {
  /* content: '';
            display: table; */
  clear: both;
}
</style>
