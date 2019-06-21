<template lang="html">
  <div class="detail">
    <v-swiper v-bind:goods_images_list="goods_images_list"/>
    <v-chose :goods="goods" :filter_spec="filter_spec" :spec_goods_price="spec_goods_price" :prom="prom" @lithToFather="lithToFather"/>
    <v-content v-bind:content="content"/>
    <!-- <v-baseline/> -->
    <v-footer :price_list="price_list" :filter_spec="filter_spec"/>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from '@/components/detail/swiper.vue'
import Chose from '@/components/detail/chose.vue'
import Content from '@/components/detail/content.vue'
import Footer from '@/components/detail/footer.vue'
import Baseline from '@/common/_baseline.vue'
export default {
  components:{
    'v-swiper':Swiper,
    'v-chose':Chose,
    'v-content':Content,
    'v-footer':Footer,
    'v-baseline':Baseline
  },
  data:function(){
    return{
      good_list:[],
      // 图片轮播
      goods_images_list:[],
      goods:{},
      filter_spec:[],
      // 价格规格
      spec_goods_price:[],
      // 是否有活动
      prom:[],
      price_list:[],
      content: {},
    }
  },
  methods:{
    // 监听子组件传过来的参数
    lithToFather:function(argument,data){
      this.price_list = argument.join("_")
      if(data.length != 0){
        for(var i=0;i<data.length;i++){
        }
      }
    }
  },
  beforeCreate(){
    this.$store.dispatch('setDatas');
  },
  mounted(){
    var that = this
    var goods_id = this.$route.params.id
     axios
        .get("/Api/Goods/goods_detail" + "?id=" + goods_id)
        .then(function(res) {
          that.good_list = res.data.data,
          that.goods_images_list = res.data.data.goods_images_list
         that.goods = res.data.data.goods
         that.filter_spec = res.data.data.filter_spec
         that.spec_goods_price = res.data.data.spec_goods_price
         that.prom = res.data.data.prom
         that.content = res.data.data.goods.goods_content
        })
        .catch(function(error) {
        });
  }
}
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  padding-bottom: 14vw;
}
</style>