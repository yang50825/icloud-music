// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
// 一级路由
import FindMusic from '../views/FindMusic.vue'
import Attention from '../views/Attention.vue'
import Download from '../views/Download.vue'
import SubNav from '../views/SubNav.vue'
import MyMusic from '../views/MyMusic.vue'
import Musician from '../views/Musician.vue'
import Store from '../views/Store.vue'

// 二级路由
import Recommend from '../views/Second/Recommend.vue'
import RankingList from '../views/Second/RankingList.vue'
import SongList from '../views/Second/SongList.vue'
import NewRadio from '../views/Second/NewsRadio.vue'
import Singer from '../views/Second/Singer.vue'
import NewDisc from '../views/Second/NewDisc.vue'

// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/subNav/Recommend',
    },
    {
      path: '/subNav',
      name: 'SubNav',
      component: SubNav,
      children: [
        {
          path: 'recommend',
          name: 'Recommend',
          component: Recommend,
        },
        {
          path: 'rankingList',
          name: 'RankingList',
          component: RankingList,
        },
        {
          path: 'songList',
          name: 'SongList',
          component: SongList,
        },
        {
          path: 'newRadio',
          name: 'NewRadio',
          component: NewRadio,
        },
        {
          path: 'singer',
          name: 'Singer',
          component: Singer,
        },
        {
          path: 'newDisc',
          name: 'NewDisc',
          component: NewDisc,
        },
      ],
    },
    {
      path: '/myMusic',
      name: 'MyMusic',
      component: MyMusic,
    },
    {
      path: '/attention',
      name: 'Attention',
      component: Attention,
    },
    {
      path: '/store',
      name: 'Store',
      component: Store,
    },
    {
      path: '/musician',
      name: 'Musician',
      component: Musician,
    },
    {
      path: '/download',
      name: 'Download',
      component: Download,
    },
  ],
})
