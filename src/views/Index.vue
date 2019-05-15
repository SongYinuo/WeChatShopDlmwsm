<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <v-header/>
    <v-search/>
    <v-swiper/>
    <!-- <v-swiper :swiperData="datas.swiper"/> -->
    <v-menuTitle/>
    <v-linkMean/>
    <v-timeIimit/>
    <!-- <v-section2 :list="datas.section2.list" :banner='datas.section2.banner'/> -->
    <v-hotShop/>
    <!-- <v-section3/> -->
    <v-companyRank/>
    <v-auction/>
    <v-integralShop/>
    <v-undergraduateBusiness/>
    <v-baseline/>
    <v-footer/>
  </div>
</template>

<script>
import Header from '@/components/index/header.vue'
import Search from '@/components/index/search.vue'
import Swiper from '@/components/index/swiper.vue'
import LinkMean from '@/components/index/linkMean.vue'
import MenuTitle from '@/components/index/menuTitle.vue'
import TimeIimit from '@/components/index/timeIimit.vue'
// import Section2 from '@/components/index/section2.vue'
import HotShop from '@/components/index/hotShop.vue'
// import Section3 from '@/components/index/section3.vue'
import CompanyRank from '@/components/index/companyRank.vue'
import Auction from '@/components/index/auction.vue'
import IntegralShop from '@/components/index/integralShop.vue'
import UndergraduateBusiness from '@/components/index/undergraduateBusiness.vue'
import Baseline from '@/common/_baseline.vue'
import Footer from '@/common/_footer.vue'
// import index from '@/http/mock.js' //模拟数据
export default {
  components: {
    'v-header': Header,
    'v-search': Search,
    'v-swiper': Swiper,
    'v-linkMean': LinkMean,
    'v-menuTitle': MenuTitle,
    'v-timeIimit': TimeIimit,
    // 'v-section2': Section2,
    'v-hotShop': HotShop,
    // 'v-section21': Section21,
    // 'v-section3': Section3,
    'v-companyRank': CompanyRank,
    'v-auction': Auction,
    'v-integralShop': IntegralShop,
    'v-undergraduateBusiness': UndergraduateBusiness,
    'v-baseline': Baseline,
    'v-footer': Footer
  },
  data() {
    return {
      datas: {
        timeIimit:{},
        // section2:{},
        // section21:{},
        hotShop:{},
        // section3:{},
        companyRank:{},
        auction:{},
        undergraduateBusiness:{},
        swiper:[],
        linkMean: {},
        integralShop:{},
      },
      loading: true
    }
  },
 
  beforeCreate() {
    this.$api({
      method: 'post',
      url: '/index'
    }).then((response) => {
      this.datas = response.data;
    }).catch(function(error) {
      alert(error)
    })
  }
}
</script>



<style lang="less" scoped>
.index {
    width: 100%;
    padding-bottom: 14vw;
    background-color: #F8FCFF;
}
.swiper-container {
        width: 500px;
        height: 300px;
        margin: 20px auto;
    }
</style>
