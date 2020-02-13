import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recommend from '../views/Recommend.vue'
import Life from '../views/Life.vue'
import Hot from '../views/Hot.vue'
import Discount from '../views/Discount.vue'
import About from '../views/About.vue'
import shoubiao from '../components/shoubiao.vue'
import xijiejing from '../components/xijiejing.vue'
import jierouzhijin from '../components/jierouzhijin.vue'
import qingyangxifashui from '../components/qingyangxifashui.vue'
import xiangshuimuyulu from '../components/xiangshuimuyulu'
import shentimoshagao from '../components/shentimoshagao'
import fangtuofaxifashui from '../components/fangtuofaxifashui'
import shuixingzhijiayou from '../components/shuixingzhijiayou'
import maoyanjiao from '../components/maoyanjiao'
import mantianxingshoubiao from '../components/mantianxingshoubiao'
import huazhuangshua from '../components/huazhuangshua'
import dwshoubiao from '../components/dwshoubiao'
import dwshouzhuo from '../components/dwshouzhuo'
import tangbobaiqibao from '../components/tangbobaiqibao'
import kouchi from '../components/kouchi'
import yuganyou from '../components/yuganyou'
import feilekuzi from '../components/feilekuzi'
import theroxizhuang from '../components/theroxizhuang'
import liweisiniuzaiyi from '../components/liweisiniuzaiyi'
import xierdunzhentou from '../components/xierdunzhentou'
import sijiantao from '../components/sijiantao'
import shukoushui from '../components/shukoushui'
import shuanglirendaoju from '../components/shuanglirendaoju'
import niuzaiwaitaonv from '../components/niuzaiwaitaonv'
import lianyiqun from '../components/lianyiqun'
import fengyi from '../components/fengyi'
import chenshannv from '../components/chenshannv'
import guanjunduanxiu from '../components/guanjunduanxiu'
import pikunv from '../components/pikunv'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/life',
    name: 'life',
    component: Life
  },
  {
    path: '/hot',
    name: 'hot',
    component: Hot
  },
  {
    path: '/discount',
    name: 'discount',
    component: Discount
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/shoubiao',
    name: 'shoubiao',
    component: shoubiao
  },
  {
    path: '/xijiejing',
    name: 'xijiejing',
    component: xijiejing
  },
  {
    path: '/jierouzhijin',
    name: 'jierouzhijin',
    component: jierouzhijin
  },
  {
    path: '/qingyangxifashui',
    name: 'qingyangxifashui',
    component: qingyangxifashui
  },
  {
    path: '/xiangshuimuyulu',
    name: 'xiangshuimuyulu',
    component: xiangshuimuyulu
  },
  {
    path: '/shentimoshagao',
    name: 'shentimoshagao',
    component: shentimoshagao
  },
  {
    path: '/fangtuofaxifashui',
    name: 'fangtuofaxifashui',
    component: fangtuofaxifashui
  },
  {
    path: '/shuixingzhijiayou',
    name: 'shuixingzhijiayou',
    component: shuixingzhijiayou
  },
  {
    path: '/maoyanjiao',
    name: 'maoyanjiao',
    component: maoyanjiao
  },
  {
    path: '/mantianxingshoubiao',
    name: 'mantianxingshoubiao',
    component: mantianxingshoubiao
  },
  {
    path: '/huazhuangshua',
    name: 'huazhuangshua',
    component: huazhuangshua
  },
  {
    path: '/dwshoubiao',
    name: 'dwshoubiao',
    component: dwshoubiao
  },
  {
    path: '/dwshouzhuo',
    name: 'dwshouzhuo',
    component: dwshouzhuo
  },
  {
    path: '/tangbobaiqibao',
    name: 'tangbobaiqibao',
    component: tangbobaiqibao
  },
  {
    path: '/kouchi',
    name: 'kouchi',
    component: kouchi
  },
  {
    path: '/yuganyou',
    name: 'yuganyou',
    component: yuganyou
  },
  {
    path: '/feilekuzi',
    name: 'feilekuzi',
    component: feilekuzi
  },
  {
    path: '/theroxizhuang',
    name: 'theroxizhuang',
    component: theroxizhuang
  },
  {
    path: '/liweisiniuzaiyi',
    name: 'liweisiniuzaiyi',
    component: liweisiniuzaiyi
  },
  {
    path: '/xierdunzhentou',
    name: 'xierdunzhentou',
    component: xierdunzhentou
  },
  {
    path: '/sijiantao',
    name: 'sijiantao',
    component: sijiantao
  },
  {
    path: '/shukoushui',
    name: 'shukoushui',
    component: shukoushui
  },
  {
    path: '/shuanglirendaoju',
    name: 'shuanglirendaoju',
    component: shuanglirendaoju
  },
  {
    path: '/niuzaiwaitaonv',
    name: 'niuzaiwaitaonv',
    component: niuzaiwaitaonv
  },
  {
    path: '/lianyiqun',
    name: 'lianyiqun',
    component: lianyiqun
  },
  {
    path: '/fengyi',
    name: 'fengyi',
    component: fengyi
  },
  {
    path: '/chenshannv',
    name: 'chenshannv',
    component: chenshannv
  },
  {
    path: '/guanjunduanxiu',
    name: 'guanjunduanxiu',
    component: guanjunduanxiu
  },
  {
    path: '/pikunv',
    name: 'pikunv',
    component: pikunv
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})
// router.beforeEach((to, from, next) => {
  // if (to.path === '/login') return next()
  // const tokenStr = window.sessionStorage.getItem('token')
  // if (!tokenStr) return next('/login')
  // next()
// })
export default router
