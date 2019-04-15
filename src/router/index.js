import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'], resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const TimeIimit = resolve => require(['@/components/timeIimit/timeIimit.vue'], resolve)
const HotShop = resolve => require(['@/components/hotShop/hotShop.vue'], resolve)
const CompanyRank = resolve => require(['@/components/companyRank/companyRank.vue'], resolve)
const Auction = resolve => require(['@/components/auction/auction.vue'], resolve)
const IntegralShop = resolve => require(['@/components/integralShop/integralShop.vue'], resolve)
const UndergraduateBusiness = resolve => require(['@/components/undergraduateBusiness/undergraduateBusiness.vue'], resolve)
const Rosewood = resolve => require(['@/components/menu/menu-one.vue'], resolve)
const Travel = resolve => require(['@/components/menu/menu-two.vue'], resolve)
const LectureRoom = resolve => require(['@/components/menu/menu-three.vue'], resolve)
const Tea = resolve => require(['@/components/menu/menu-four.vue'], resolve)
const Regimen = resolve => require(['@/components/menu/menu-five.vue'], resolve)
const ShunPrincess = resolve => require(['@/components/menu/menu-six.vue'], resolve)
const HaHundredYears = resolve => require(['@/components/menu/menu-seven.vue'], resolve)
const TransactionCenter = resolve => require(['@/components/menu/menu-eight.vue'], resolve)
const GreenFood = resolve => require(['@/components/menu/menu-nine.vue'], resolve)
const PaintingPhotography = resolve => require(['@/components/menu/menu-ten.vue'], resolve)

export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: Index
  }, {
    path: '/category',
    name: '分类页',
    redirect: '/category/all',
    component: Category,
    children: [{
      path: '/category/:tab',
      component: CategoryMain
    }]
  }, {
    path: '/car',
    name: '购物车页',
    component: Car
  }, {
    path: '/car/pay',
    name: '支付页',
    component: Pay
  },
  {
    path: '/user',
    name: '用户页',
    component: User,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
    },
  }, {
    path: '/detail/:id',
    name: '详情页',
    component: Detail
  }, {
    path: '/search',
    name: '搜索页',
    component: Search
  }, {
    path: '/login',
    name: '登录页',
    component: Login
  }, {
    path: '/timeIimit',
    name: '限时抢购页',
    component: TimeIimit
  }, {
    path: '/hotShop',
    name: '热卖商城页',
    component: HotShop
  }, {
    path: '/companyRank',
    name: '最具有影响力排名页',
    component: CompanyRank
  }, {
    path: '/auction',
    name: '拍卖会页',
    component: Auction
  }, {
    path: '/integralShop',
    name: '积分商城页',
    component: IntegralShop
  }, {
    path: '/undergraduateBusiness',
    name: '支持大学生创业页',
    component: UndergraduateBusiness
  }, {
    path: '/menu-one',
    name: '红山',
    component: Rosewood
  }, {
    path: '/menu-two',
    name: '旅游',
    component: Travel
  }, {
    path: '/menu-three',
    name: '讲堂',
    component: LectureRoom
  }, {
    path: '/menu-four',
    name: '茶饮',
    component: Tea
  }, {
    path: '/menu-five',
    name: '养生',
    component: Regimen
  }, {
    path: '/menu-six',
    name: '顺格格',
    component: ShunPrincess
  }, {
    path: '/menu-seven',
    name: '哈百年',
    component: HaHundredYears
  }, {
    path: '/menu-eight',
    name: '交易中心',
    component: TransactionCenter
  }, {
    path: '/menu-nine',
    name: '绿色食品',
    component: GreenFood
  }, {
    path: '/menu-ten',
    name: '书画摄影',
    component: PaintingPhotography
  }
  
  ]
})
