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
        TopBar
    }
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

body, textarea, select, input, button {
    font-size: 14px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
}

// 版心
.wrapper {
    width: 1100px;
    margin: 0 auto;
}

.m-subnav {
    height: 5px;
    background-color: #C20C0C;
}
</style>></style>
