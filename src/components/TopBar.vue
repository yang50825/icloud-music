<template>
  <div>
    <div class="g-topbar">
      <div class="wrapper">
        <!-- logo -->
        <h1 class="logo">
          <a href="#/">网易云音乐</a>
        </h1>

        <!-- 导航栏 -->
        <ul class="m-nav">
          <li class="fst" v-for="(obj, index) in nav" :key="index">
            <router-link :to="obj.url">{{ obj.title }}</router-link>
          </li>
        </ul>

        <!-- 搜索栏 -->
        <div class="m-search">
          <input type="text" placeholder="音乐/视频/电台/用户" />
        </div>

        <!-- 创作者中心 -->
        <a href="#" class="bilog">创作者中心</a>

        <!-- 用户头像 -->
        <div class="m-headimg">
          <img
            src="http://p1.music.126.net/K2a2sCt_yZNEZVAg6EK4Dg==/109951164552413570.jpg?param=30y30"
          />
        </div>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      nav: [
        { title: '发现音乐', url: '/subNav' },
        { title: '我的音乐', url: '/myMusic' },
        { title: '关注', url: '/attention' },
        { title: '商城', url: '/store' },
        { title: '音乐人', url: '/musician' },
        { title: '下载客户端', url: '/download' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
// 头部导航栏
.g-topbar {
  height: 70px;
  background-color: #242424;
  .wrapper {
    display: flex;
    // logo
    .logo {
      width: 176px;
      height: 70px;
      background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?c0bd96d28b0d3371d59b049a3bbb020d)
        no-repeat 0 0;
      font-size: 0;
      cursor: pointer;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }

    // 导航栏
    ul {
      display: flex;
      margin-right: 80px;
      text-align: center;
      line-height: 70px;
      li {
        position: relative;
        a {
          padding: 0 19px;
          display: inline-block;
          color: #ccc;
        }
      }
      & li a.router-link-exact-active {
        background-color: #000;
        color: #fff;
      }

      // 选中的标签显示三角形
      & li a.router-link-active::after {
        position: absolute;
        content: '';
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?c0bd96d28b0d3371d59b049a3bbb020d)
          no-repeat -226px 0;
      }

      & li:hover {
        background-color: #000;
      }
      & li a:hover {
        color: #fff;
      }
      // 给最后一个li设置伪元素
      & li:last-child::after {
        content: '';
        position: absolute;
        top: 21px;
        left: 100px;
        width: 28px;
        height: 19px;
        background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?c0bd96d28b0d3371d59b049a3bbb020d)
          no-repeat -190px 0;
      }
    }

    // 搜索栏
    .m-search {
      margin-top: 19px;
      width: 158px;
      height: 32px;
      background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?c0bd96d28b0d3371d59b049a3bbb020d)
        no-repeat 0 -99px;
      background-color: #fff;
      border-radius: 32px;
      input {
        margin: 8px 0 0 30px;
        width: 80%;
        line-height: 16px;
        border: 0;
        outline: none;
        font-size: 12px;
      }
      & input::placeholder {
        color: #9b9b9b;
      }
    }

    // 创作者中心
    .bilog {
      display: inline-block;
      width: 90px;
      height: 32px;
      margin: 19px 0 0 12px;
      border: 1px solid #4f4f4f;
      background-position: 0 -140px;
      line-height: 33px;
      color: #ccc;
      border-radius: 20px;
      text-align: center;
      font-size: 12px;
    }
    & .bilog:hover {
      border: 1px solid #ccc;
    }

    // 头像
    .m-headimg {
      height: 45px;
      margin: 19px 0 0 20px;
      padding: 0 22px 0 0;
      img {
        border-radius: 50%;
      }
    }
  }
}

.main {
  width: 100%;
}
</style>
