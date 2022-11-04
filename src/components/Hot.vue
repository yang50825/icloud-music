<template>
  <div>
    <div class="main">
      <!-- 标题 -->
      <div class="main_top">
        <div class="left"></div>
        <a href="#" class="title"><slot name="title"></slot></a>
        <div class="top_nav">
          <slot name="t_nav"></slot>
        </div>
        <div class="more">
          <a href="#">更多</a>
        </div>
      </div>

      <!-- 内容 -->
      <div class="main_body">
        <div class="main_dv" v-for="obj in list" :key="obj.id">
          <div class="main_dv_img">
            <img :src="obj.imgUrl" />
            <div class="main_dv_bottom">{{ obj.num }}</div>
            <a href="#">{{ obj.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hot',
  data() {
    return {
      list: [
        {
          id: 100,
          title: '高能燃脂•假期健身跑步必备BGM',
          imgUrl:
            'http://p2.music.126.net/-4Ygb5Z9XfLOQFeldQlY2A==/1389782698058443.jpg?param=140y140',
          num: '2584万',
        },
        {
          id: 101,
          title: '高能燃脂•假期健身跑步必备BGM',
          imgUrl:
            'http://p2.music.126.net/-4Ygb5Z9XfLOQFeldQlY2A==/1389782698058443.jpg?param=140y140',
          num: '2584万',
        },
        {
          id: 102,
          title: '高能燃脂•假期健身跑步必备BGM',
          imgUrl:
            'http://p2.music.126.net/-4Ygb5Z9XfLOQFeldQlY2A==/1389782698058443.jpg?param=140y140',
          num: '2584万',
        },
        {
          id: 103,
          title: '高能燃脂•假期健身跑步必备BGM',
          imgUrl:
            'http://p2.music.126.net/-4Ygb5Z9XfLOQFeldQlY2A==/1389782698058443.jpg?param=140y140',
          num: '2584万',
        },
        {
          id: 104,
          title: '高能燃脂•假期健身跑步必备BGM',
          imgUrl:
            'http://p2.music.126.net/-4Ygb5Z9XfLOQFeldQlY2A==/1389782698058443.jpg?param=140y140',
          num: '2584万',
        },
        {
          id: 105,
          title: '高能燃脂•假期健身跑步必备BGM',
          imgUrl:
            'http://p2.music.126.net/-4Ygb5Z9XfLOQFeldQlY2A==/1389782698058443.jpg?param=140y140',
          num: '2584万',
        },
        {
          id: 106,
          title: '高能燃脂•假期健身跑步必备BGM',
          imgUrl:
            'http://p2.music.126.net/-4Ygb5Z9XfLOQFeldQlY2A==/1389782698058443.jpg?param=140y140',
          num: '2584万',
        },
        {
          id: 107,
          title: '高能燃脂•假期健身跑步必备BGM',
          imgUrl:
            'http://p2.music.126.net/-4Ygb5Z9XfLOQFeldQlY2A==/1389782698058443.jpg?param=140y140',
          num: '2584万',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.main {
  padding: 20px 20px 40px;
  width: 730px;
  // 标题部分
  .main_top {
    height: 33px;
    padding: 0 10px 0 34px;
    line-height: 33px;
    background: url(https://s2.music.126.net/style/web2/img/index/index.png?88c70550eb5317ddeabbb7a14b2e96c6)
      no-repeat -225px -156px;
    border-bottom: 3px solid #c10d0c;
    font-size: 20px;
    .title {
      display: inline-block;
      font-size: 20px;
      font-weight: normal;
    }
    .top_nav {
      display: inline-block;
      height: 100%;
      font-size: 12px;
      color: darkgrey;
      margin-left: 20px;
      font-family: '黑体';
      font-weight: bold;
    }
    .more {
      float: right;
      font-size: 12px;
      a {
        color: #666;
      }
    }
  }

  // 主体部分
  .main_body {
    width: 689px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0 0 0;
    height: 40px;
    .main_dv {
      position: relative;
      width: 140px;
      height: 200px;
      /* background: #000; */
      margin-top: 10px;
      float: left;
      font-size: 14px;
      img {
        width: 140px;
      }
      .main_dv_bottom {
        position: absolute;
        left: 0;
        bottom: 60px;
        width: 100%;
        height: 27px;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        line-height: 27px;
        font-size: 12px;
        padding-left: 10px;
        color: #ccc;
      }
    }
  }
}
</style>
