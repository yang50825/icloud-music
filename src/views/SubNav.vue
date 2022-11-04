<template>
  <div>
    <div class="findMusicTop">
      <div class="wrapper">
        <ul>
          <li v-for="(obj, index) in list" :key="index">
            <router-link :to="obj.url">{{ obj.text }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: '推荐',
          url: '/subNav/Recommend',
        },
        {
          text: '排行榜',
          url: '/subNav/RankingList',
        },
        {
          text: '歌单',
          url: '/subNav/SongList',
        },
        {
          text: '主播电台',
          url: '/subNav/NewRadio',
        },
        {
          text: '歌手',
          url: '/subNav/Singer',
        },
        {
          text: '新碟上架',
          url: '/subNav/NewDisc',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.findMusicTop {
  height: 35px;
  background: #c20c0c;
  ul {
    display: flex;
    margin-left: 180px;
    li {
      a {
        display: inline-block;
        padding: 0 13px;
        margin: 7px 17px 0;
        border-radius: 20px;
        color: #fff;
        border-radius: 20px;
        line-height: 21px;
        font-size: 12px;
      }

      & a.router-link-exact-active {
        background-color: #9b0909;
      }
    }
  }
}

.main {
  width: 100%;
}
</style>
