<template>
  <div>
    <!-- 轮播图部分 -->
    <div class="banner">
      <div class="banner_main">
        <!-- 轮播图 -->
        <div class="banner_img">
          <!-- <el-carousel arrow="always">
            <el-carousel-item v-for="(val, index) in list" :key="index">
              <img :src="val" />
            </el-carousel-item>
          </el-carousel> -->
          <el-carousel arrow="always">
            <el-carousel-item v-for="(val, index) in list" :key="index">
              <img :src="val" />
            </el-carousel-item>
          </el-carousel>
        </div>

        <!-- 下载 -->
        <div class="download">
          <a href="#" class="btn">下载客户端</a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
    </div>

    <!-- 主体部分 -->
    <div class="findMusicMain">
      <div class="fm_main wrapper">
        <div class="fm_left">
          <Hot>
            <template #title>热门推荐</template>
            <template #t_nav>
              <pre>华语  |  流行  |  摇滚  |  民谣  |  电子</pre>
            </template>
          </Hot>
        </div>
        <div class="fm_right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Hot from '../../components/Hot'
export default {
  name: 'Recommend',
  data() {
    return {
      list: [
        'http://p1.music.126.net/wfUhirLsTT2HB7EYv8kkJA==/109951168026999557.jpg?imageView&quality=89',
        'http://p1.music.126.net/yedklKzyvF5qa3aVOe0gXA==/109951168027664127.jpg?imageView&quality=89',
        'http://p1.music.126.net/hXwM_L69GpZVV2vLc5b1BQ==/109951168026968250.jpg?imageView&quality=89',
        'http://p1.music.126.net/KzcBPsYE45yMQumuQm-khw==/109951168027012626.jpg?imageView&quality=89',
        'http://p1.music.126.net/8B3y8vF6j9gsQ4zZuGSXZg==/109951168027025103.jpg?imageView&quality=89',
        'http://p1.music.126.net/IaOoM3uWKTDhvsIylFczkQ==/109951168029614273.jpg?imageView&quality=89',
        'http://p1.music.126.net/uzO815Y3fUOSrLiTBc-daQ==/109951168026987115.jpg?imageView&quality=89',
        'http://p1.music.126.net/oCm9dE-R7A50grIg9TOvVQ==/109951168027680671.jpg?imageView&quality=89',
      ],
    }
  },
  components: {
    Hot,
  },
}
</script>

<style lang="less" scoped>
.banner {
  height: 285px;
  background-color: #95908a;
  .banner_main {
    position: relative;
    width: 945px;
    margin: 0 auto;

    // 轮播图
    .banner_img {
      box-sizing: border-box;
      margin-left: -40px;
      width: 730px;
      img {
        width: 100%;
        height: 285px;
      }
      .el-carousel__arrow--left {
        position: absolute;
        left: -200px;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }

    // 下载
    .download {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 20;
      width: 254px;
      height: 285px;
      background: url(https://s2.music.126.net/style/web2/img/index/download.png?5a1a8555a5ed4cc3f268392ace664ea8)
        no-repeat 0 0;
      .btn {
        display: block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
        background-position: 0 9999px;
        text-indent: -9999px;
      }
      p {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
        font-size: 12px;
      }
    }
  }
}

.findMusicMain {
  .fm_main {
    width: 945px;
    .fm_left {
      margin-left: -40px;
    }
  }
}
</style>
