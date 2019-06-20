import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'], resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
const UserAntiqueAppraisal = resolve => require(['@/components/user/userAntiqueAppraisal.vue'], resolve)
const UserExperienceExchange = resolve => require(['@/components/user/userExperienceExchange.vue'], resolve)
const UserShipments = resolve => require(['@/components/user/userShipments.vue'], resolve)
const UserLectureRoom = resolve => require(['@/components/user/userLectureRoom.vue'], resolve)
const UserPaintingPhotography = resolve => require(['@/components/user/userPaintingPhotography.vue'], resolve)
const UserMenuAll = resolve => require(['@/components/user/userMenuAll.vue'], resolve)
const UserForCollection = resolve => require(['@/components/user/userForCollection.vue'], resolve)
const UserTake = resolve => require(['@/components/user/userTake.vue'], resolve)
const UserAfter = resolve => require(['@/components/user/userAfter.vue'], resolve)
const UserShippingAddress = resolve => require(['@/components/user/userShippingAddress.vue'], resolve)
const UserAddressDetails = resolve => require(['@/components/user/userOrderFormDetail/userAddressDetails.vue'], resolve)
const UserEditAddressDetails = resolve => require(['@/components/user/userOrderFormDetail/userEditAddressDetails.vue'], resolve)
const UserPromotionCenter = resolve => require(['@/components/user/userPromotionCenter.vue'], resolve)
const UserSignIn = resolve => require(['@/components/user/userSignIn.vue'], resolve)
const UserCoupon = resolve => require(['@/components/user/userCoupon.vue'], resolve)
const UserCouponDetails = resolve => require(['@/components/user/userOrderFormDetail/userCouponDetails.vue'], resolve)
const UserOrderFormDetail = resolve => require(['@/components/user/userOrderFormDetail/userOrderFormDetails.vue'], resolve)
const UserLogisticsDetailsList = resolve => require(['@/components/user/userOrderFormDetail/userLogisticsDetailsList.vue'], resolve)
const UserPromotionCenterDetails = resolve => require(['@/components/user/userOrderFormDetail/userPromotionCenterDetails.vue'], resolve)
const UserExtensionAgentLevelOne = resolve => require(['@/components/user/userOrderFormDetail/userExtensionAgentLevelOne.vue'], resolve)
const UserExtensionAgentLevelTwo = resolve => require(['@/components/user/userOrderFormDetail/userExtensionAgentLevelTwo.vue'], resolve)
const UserWithdrawDeposit = resolve => require(['@/components/user/userOrderFormDetail/userWithdrawDeposit.vue'], resolve)
const UserNewAddress = resolve => require(['@/components/user/userOrderFormDetail/userNewAddress.vue'], resolve)
const Vip = resolve => require(['@/components/user/userVip.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const Collect = resolve => require(['@/views/Collect.vue'], resolve)
const TimeIimit = resolve => require(['@/components/timeIimit/timeIimit.vue'], resolve)
const HotShop = resolve => require(['@/components/hotShop/hotShop.vue'], resolve)
const CompanyRank = resolve => require(['@/components/companyRank/companyRank.vue'], resolve)
const CompanyDetails = resolve => require(['@/components/companyRank/companyDetails.vue'], resolve)
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
const TradingCenter = resolve => require(['@/components/menuList/tradingCenter.vue'], resolve)
const MoreList = resolve => require(['@/components/menuList/moreList.vue'], resolve)
const GreenFood = resolve => require(['@/components/menu/menu-nine.vue'], resolve)
const PaintingPhotography = resolve => require(['@/components/menu/menu-ten.vue'], resolve)
const MenuhongshanOneDetails = resolve => require(['@/components/menu/menuDetails/menuhongshanOneDetails.vue'], resolve)
const MenuhongshanTwoDetails = resolve => require(['@/components/menu/menuDetails/menuhongshanTwoDetails.vue'], resolve)
const MenuLectureOneDetails = resolve => require(['@/components/menu/menuDetails/menuLectureOneDetails.vue'], resolve)
const MenuBookOneDetails = resolve => require(['@/components/menu/menuDetails/menuBookOneDetails.vue'], resolve)
const MenuReleaseShareOneDetails = resolve => require(['@/components/menu/menuDetails/menuReleaseShareOneDetails.vue'], resolve)
const MenuReleaseTipsTwoDetails = resolve => require(['@/components/menu/menuDetails/menuReleaseTipsTwoDetails.vue'], resolve)
const MenuUploadOneDetails = resolve => require(['@/components/menu/menuDetails/menuUploadOneDetails.vue'], resolve)
const MenuhongshanThreeDetails = resolve => require(['@/components/menu/menuDetails/menuhongshanThreeDetails.vue'], resolve)
const MenuReleaseParentDetails = resolve => require(['@/components/menu/menuDetails/menuReleaseParentDetails.vue'], resolve)
const MenuReleaseTipsTwoClassRoomDetails = resolve => require(['@/components/menu/menuDetails/menuReleaseTipsTwoClassRoomDetails.vue'], resolve)
const PosterQRcode = resolve => require(['@/components/detail/posterQRcode.vue'], resolve)
const MenuTabLists = resolve => require(['@/components/menu/menuDetails/MenuTabLists.vue'], resolve)
const MenuIdentificationDetails = resolve => require(['@/components/menu/menuDetails/menuIdentificationDetails.vue'], resolve)
const MenuThroughIdentificationDetails = resolve => require(['@/components/menu/menuDetails/menuThroughIdentificationDetails.vue'], resolve)
const MenuTheEditor = resolve => require(['@/components/menu/menuDetails/menuTheEditor.vue'], resolve)
const UserTipsdetailsone = resolve => require(['@/components/user/userOrderFormDetail/userTipsdetailsone.vue'], resolve)
const UserDetailsthelecturehall = resolve => require(['@/components/user/userOrderFormDetail/userDetailsthelecturehall.vue'], resolve)
const UserDetailscalligraphy = resolve => require(['@/components/user/userOrderFormDetail/userDetailscalligraphy.vue'], resolve)
const MenuDetailslecture = resolve => require(['@/components/menu/menuDetails/menuDetailslecture.vue'], resolve)
const Userlecturehalltedit = resolve => require(['@/components/user/userOrderFormDetail/userlecturehalltedit.vue'], resolve)
const Usercalligraphypainting = resolve => require(['@/components/user/userOrderFormDetail/usercalligraphypainting.vue'], resolve)
const UserVipDetail = resolve => require(['@/components/user/userVipDetail.vue'], resolve)
const UserIntegral = resolve => require(['@/components/user/userIntegral.vue'], resolve)
const UserCarRouterLink = resolve => require(['@/components/user/userOrderFormDetail/userCarRouterLink.vue'], resolve)
export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: Index,
    meta: {
      title: '首页'
    }
  }, {
    path: '/category',
    name: '分类页',
    redirect: '/category/all',
    component: Category,
    meta: {
      title: '分类页'
    },
    // children: [{
    //   path: '/category/:tab',
    //   component: CategoryMain
    // }]
  }, {
    path: '/car',
    name: '购物车页',
    component: Car,
    meta: {
      title: '购物车页'
    }
  }, {
    path: '/car/pay',
    name: '支付页',
    component: Pay,
    meta: {
      title: '支付页'
    }
  },
  {
    path: '/user',
    name: '用户页',
    component: User,
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录才能进入的
      title: '用户页'
    },
  }, {
    path: '/detail/:id',
    name: '详情页',
    component: Detail,
    meta: {
      title: '详情页'
    }
  }, {
    path: '/search',
    name: '搜索页',
    component: Search,
    meta: {
      title: '搜索页'
    }
  }, {
    path: '/login',
    name: '登录页',
    component: Login,
    meta: {
      title: '登录页'
    }
  }, {
    path: '/collect',
    name: '收藏页',
    component: Collect,
    meta: {
      title: '收藏页'
    }
  }, {
    path: '/timeIimit',
    name: '限时抢购页',
    component: TimeIimit,
    meta: {
      title: '限时抢购页'
    }
  }, {
    path: '/hotShop/:id/:value',
    name: '热卖商城页',
    component: HotShop,
    meta: {
      title: '热卖商城页'
    }
  }, {
    path: '/companyRank',
    name: '最具有影响力排名页',
    component: CompanyRank,
    meta: {
      title: '最具有影响力排名页'
    }
  }, {
    path: '/companyRank/companyDetails/:id',
    name: '公司排名详情',
    component: CompanyDetails,
    meta: {
      title: '公司排名详情'
    }
  }, {
    path: '/auction',
    name: '拍卖会页',
    component: Auction,
    meta: {
      title: '拍卖会页'
    }
  }, {
    path: '/integralShop',
    name: '更多积分商品',
    component: IntegralShop,
    meta: {
      title: '更多积分商品'
    }
  }, {
    path: '/undergraduateBusiness',
    name: '支持大学生创业页',
    component: UndergraduateBusiness,
    meta: {
      title: '支持大学生创业页'
    }
  }, {
    path: '/menu-one',
    name: '红山',
    component: Rosewood,
    meta: {
      title: '红山'
    }
  }, {
    path: '/menu-two',
    name: '旅游',
    component: Travel,
    meta: {
      title: '旅游'
    }
  }, {
    path: '/menu-three',
    name: '讲堂',
    component: LectureRoom,
    meta: {
      title: '讲堂'
    }
  }, {
    path: '/menu-four',
    name: '茶饮',
    component: Tea,
    meta: {
      title: '茶饮'
    }
  }, {
    path: '/menu-five',
    name: '养生',
    component: Regimen,
    meta: {
      title: '养生'
    }
  }, {
    path: '/menu-six',
    name: '顺格格',
    component: ShunPrincess,
    meta: {
      title: '顺格格'
    }
  }, {
    path: '/menu-seven',
    name: '哈百年',
    component: HaHundredYears,
    meta: {
      title: '哈百年'
    }
  }, {
    path: '/menu-eight',
    name: '交易中心',
    component: TransactionCenter,
    meta: {
      title: '交易中心'
    }
  }, {
    path: '/tradingCenter/:id',
    name: '交易中心列表',
    component: TradingCenter,
    meta: {
      title: '交易中心列表'
    }
  },{
    path: '/moreList/:title/:id',
    name: '更多列表',
    component: MoreList,
    meta: {
      title: '更多'
    }
  }, {
    path: '/menu-nine',
    name: '绿色食品',
    component: GreenFood,
    meta: {
      title: '绿色食品'
    }
  }, {
    path: '/menu-ten',
    name: '书画摄影',
    component: PaintingPhotography,
    meta: {
      title: '书画摄影'
    }
  }, {
    path: '/menuhongshanOneDetails/:title/:id',
    name: '旅游攻略',
    component: MenuhongshanOneDetails,
    meta: {
      title: '旅游攻略'
    }
  }, {
    path: '/menuhongshanTwoDetails/:title/:id',
    name: '种草详情',
    component: MenuhongshanTwoDetails,
    meta: {
      title: '种草详情'
    }
  }, {
    path: '/menuhongshanThreeDetails/:title/:id',
    name: '种草详情视频',
    component: MenuhongshanThreeDetails,
    meta: {
      title: '种草详情视频'
    }
  }, {
    path: '/menuLectureOneDetails',
    name: '故事分类',
    component: MenuLectureOneDetails,
    meta: {
      title: '故事分类'
    }
  }, {
    path: '/menuDetailslecture/:title/:id',
    name: '讲堂详情',
    component: MenuDetailslecture,
    meta: {
      title: '讲堂详情'
    }
  },{
    path: '/menuReleaseParentDetails',
    name: '发布',
    component: MenuReleaseParentDetails,
    meta: {
      title: '发布'
    }
  },{
    path: '/menuReleaseTipsTwoClassRoomDetails',
    name: '发布讲堂',
    component: MenuReleaseTipsTwoClassRoomDetails,
    meta: {
      title: '发布讲堂'
    }
  }, {
    path: '/menuBookOneDetails/:title/:id',
    name: '书画详情',
    component: MenuBookOneDetails,
    meta: {
      title: '书画详情'
    }
  }, {
    path: '/userVip',
    name: 'Vip',
    component: Vip,
    meta: {
      title: '我的会员'
    }
  }, {
    path: '/userAntiqueAppraisal',
    name: 'userAntiqueAppraisal',
    component: UserAntiqueAppraisal,
    meta: {
      title: '用户古董鉴定'
    }
  }, {
    path: '/userExperienceExchange',
    name: 'userExperienceExchange',
    component: UserExperienceExchange,
    meta: {
      title: '用户心得'
    }
  }, {
    path: '/userLectureRoom',
    name: 'userLectureRoom',
    component: UserLectureRoom,
    meta: {
      title: '用户讲堂'
    }
  }, {
    path: '/userPaintingPhotography',
    name: 'userPaintingPhotography',
    component: UserPaintingPhotography,
    meta: {
      title: '用户书画摄影'
    }
  }, {
    path: '/userTipsdetailsone',
    name: '心得详情',
    component: UserTipsdetailsone,
    meta: {
      title: '心得详情'
    }
  },{
    path: '/userDetailsthelecturehall',
    name: '我的讲堂详情',
    component: UserDetailsthelecturehall,
    meta: {
      title: '我的讲堂详情'
    }
  },{
    path: '/userVipDetail/:article_id',
    name: 'vip详情',
    component: UserVipDetail,
    meta: {
      title: 'vip详情'
    }
  },{
    path: '/userIntegral/:id',
    name: '积分明细',
    component: UserIntegral,
    meta: {
      title: '积分明细'
    }
  },
  {
    path: '/userDetailscalligraphy/:title/:id',
    name: '我的书画详情',
    component: UserDetailscalligraphy,
    meta: {
      title: '我的书画详情'
    }
  },{
    path: '/userlecturehalltedit/:title/:id',
    name: '讲堂编辑详情',
    component: Userlecturehalltedit,
    meta: {
      title: '讲堂编辑详情'
    }
  },{
    path: '/usercalligraphypainting/:title/:id',
    name: '书画编辑详情',
    component: Usercalligraphypainting,
    meta: {
      title: '书画编辑详情'
    }
  },
  {
    path: '/userMenuAll',
    name: '全部',
    component: UserMenuAll,
    meta: {
      title: '订单全部'
    }
  }, {
    path: '/userForCollection',
    name: '待付款',
    component: UserForCollection,
    meta: {
      title: '订单待付款'
    }
  }, {
    path: '/userShipments',
    name: '待发货',
    component: UserShipments,
    meta: {
      title: '订单待发货'
    }
  }, {
    path: '/userTake',
    name: '待收货',
    component: UserTake,
    meta: {
      title: '订单待收货'
    }
  }, {
    path: '/userAfter',
    name: '退款/售后',
    component: UserAfter,
    meta: {
      title: '订单退款/售后'
    }
  }, {
    path: '/user/userOrderFormDetails/:id',
    name: '订单详情',
    component: UserOrderFormDetail,
    meta: {
      title: '订单详情'
    }
  }, {
    path: '/user/userLogisticsDetailsList/:id/:order_id/:state/:shipping_name/:order_sn',
    name: '物流跟踪详情',
    component: UserLogisticsDetailsList,
    meta: {
      title: '物流跟踪详情'
    }
  }, {
    path: '/userPromotionCenter',
    name: '推广中心',
    component: UserPromotionCenter,
    meta: {
      title: '用户推广中心'
    }
  }, {
    path: '/userPromotionCenter/userPromotionCenterDetails',
    name: '账户明细',
    component: UserPromotionCenterDetails,
    meta: {
      title: '账户明细'
    }
  }, {
    path: '/userPromotionCenter/userWithdrawDeposit',
    name: '推荐提现',
    component: UserWithdrawDeposit,
    meta: {
      title: '推荐提现'
    }
  }, {
    path: '/userPromotionCenter/userExtensionAgentLevelone',
    name: '一级推广',
    component: UserExtensionAgentLevelOne,
    meta: {
      title: '一级推广'
    }
  }, {
    path: '/userPromotionCenter/userExtensionAgentLevelTwo',
    name: '二级推广',
    component: UserExtensionAgentLevelTwo,
    meta: {
      title: '二级推广'
    }
  }, {
    path: '/userShippingAddress',
    name: '收货地址',
    component: UserShippingAddress,
    meta: {
      title: '用户收货地址'
    }
  }, {
    path: '/userShippingAddress/userAddressDetails/:id',
    name: '收货地址详情',
    component: UserAddressDetails,
    meta: {
      title: '收货地址详情'
    }
  }, {
    path: '/userShippingAddress/userEditAddressDetails/:id',
    name: '编辑地址',
    component: UserEditAddressDetails,
    meta: {
      title: '编辑地址'
    }
  }, {
    path: '/userShippingAddress/userNewAddress',
    name: '新增地址',
    component: UserNewAddress,
    meta: {
      title: '新增地址'
    }
  }, {
    path: '/userSignIn',
    name: '签到',
    component: UserSignIn,
    meta: {
      title: '签到'
    }
  }, {
    path: '/userCoupon/:is_vip',
    name: 'vip专区',
    component: UserCoupon,
    meta: {
      title: 'vip专区'
    }
  }, {
    path: '/userCoupon/userCouponDetails/:id',
    name: '卡券详情',
    component: UserCouponDetails,
    meta: {
      title: '卡券详情'
    }
  }, {
    path: '/menuReleaseShareOneDetails',
    name: '发布分享',
    component: MenuReleaseShareOneDetails,
    meta: {
      title: '发布分享'
    }
  }, {
    path: '/menuReleaseTipsTwoDetails/:id',
    name: '发布心得',
    component: MenuReleaseTipsTwoDetails,
    meta: {
      title: '发布心得'
    }
  }, {
    path: '/menuUploadOneDetails',
    name: '上传',
    component: MenuUploadOneDetails,
    meta: {
      title: '上传'
    }
  }, {
    path: '/details/posterQRcode/:posterQRcodeId/:titleName/:id',
    name: '分享二维码',
    component: PosterQRcode,
    meta: {
      title: '分享二维码'
    }
  }, {
    path: '/menu/menuTab/tabIdmenuTabLists/:id/:name',
    name: 'tab栏目分类',
    component: MenuTabLists,
    meta: {
      title: '栏目分类'
    }
  }, {
    path: '/menuIdentificationDetails',
    name: '鉴定',
    component: MenuIdentificationDetails,
    meta: {
      title: '鉴定'
    }
  },{
    path: '/menuThroughIdentificationDetails',
    name: '已发布-鉴定',
    component: MenuThroughIdentificationDetails,
    meta: {
      title: '已发布-鉴定'
    }
  },
  {
    path: '/menuTheEditor/:title/:id',
    name: '编辑详情',
    component: MenuTheEditor,
    meta: {
      title: '编辑详情'
    }
  },
  {
    path: '/UserCarRouterLink',
    name: '购物车详情',
    component: UserCarRouterLink,
    meta: {
      title: '购物车详情'
    }
  }
  ]
})
