
<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
     交易中心栏目列表
    </el-header>
    <div class="listnav">
      <el-row>
        <img :src="list_goods_img" class="listimg">
        <el-col :span="22" :offset="1">
          <el-col :span="12" v-for="k in goods_list" class="listLi text-alignLeft">
            <router-link :to="{ name:'详情页',params: { id: k.goods_id }}">
              <img :src="k.original_img" class="pdB2">
              <div class="listTxt pd1">{{k.goods_name}}</div>
              <div class="colorRed price text-alignLeft">￥{{k.shop_price}}</div>
              <el-col :span="24">
                <el-button plain class="pdTRBL1">立即购买</el-button>
              </el-col>
            </router-link>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>
<script>
import axios from "axios";
  export default {
    data() {
      return {
        list_goods_img:'',
        goods_list:[],
      };
    },
    mounted(){
      var cart_id = this.$route.params.id
      this.getData()
    },
    methods:{
      getData:function(){
        var that = this
        var cart_id = that.$route.params.id
        axios.get('/Api/Goods/goods_list?id=' + cart_id).then(function(res){
          that.list_goods_img = res.data.data.cat_data.image,
          that.goods_list = res.data.data.goods_list
        })
      }
    }
  };
</script>
<style lang="less">
  @import "../../assets/index/style.less";
  @import "../../assets/header.less";
  @import "../../assets/list/list.less";
</style>