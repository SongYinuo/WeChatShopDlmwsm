<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <v-header/>
    <v-swiper :swiperData="datas.swiper"/>
    <v-service/>
    <v-linkMean/>
    <v-section1 :list="datas.section1.list" :banner='datas.section1.banner'/>
    <v-section2 :list="datas.section2.list" :banner='datas.section2.banner'/>
    <v-section21/>
    <v-section3/>
    <v-section31/>
    <v-auction/>
    <v-integralShop/>
    <v-section4 :list="datas.section4.list" :banner='datas.section4.banner'/>
    <v-baseline/>
    <v-footer/>
  </div>
</template>

<script>
import Header from '@/components/index/header.vue'
import Swiper from '@/components/index/swiper.vue'
import linkMean from '@/components/index/linkMean.vue'
import Service from '@/components/index/service.vue'
import Section1 from '@/components/index/section1.vue'
import Section2 from '@/components/index/section2.vue'
import Section21 from '@/components/index/section21.vue'
import Section3 from '@/components/index/section3.vue'
import Section31 from '@/components/index/section31.vue'
import Auction from '@/components/index/auction.vue'
import IntegralShop from '@/components/index/integralShop.vue'
import Section4 from '@/components/index/section4.vue'
import Baseline from '@/common/_baseline.vue'
import Footer from '@/common/_footer.vue'
import index from '@/http/mock.js' //模拟数据
export default {
  components: {
    'v-header': Header,
    'v-swiper': Swiper,
    'v-linkMean': linkMean,
    'v-service': Service,
    'v-section1': Section1,
    'v-section2': Section2,
    'v-section21': Section21,
    'v-section3': Section3,
    'v-section31': Section31,
    'v-auction': Auction,
    'v-integralShop': IntegralShop,
    'v-section4': Section4,
    'v-baseline': Baseline,
    'v-footer': Footer
  },
  data() {
    return {
      datas: {
        section1:{},
        section2:{},
        section21:{},
        section3:{},
        section31:{},
        auction:{},
        section4:{},
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
