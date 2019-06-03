<template lang="html">
  <el-container>
    <el-header class="tittle">
        <div class="back" @click="$router.go(-1)">
           <i class="el-icon-arrow-left"></i>
        </div>
        搜索
    </el-header>
    <el-main class="search">
      <el-row>
         <el-col>
            <el-form ref="form" :model="form">
                <el-form-item v-if="hidden">
                    <el-autocomplete v-model="form.state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
                </el-form-item>
                <el-form-item>
                <el-input placeholder="请输入内容" v-model="form.input" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" @click="serachBtn"></el-button>
                 </el-input>
                </el-form-item>
            </el-form>
         </el-col>
         <!-- 后加的内容开始 -->
         <el-main class="hotShop">
            <el-row>
                <el-col :span="12" v-for="item in goods_list" class="hotShopRow pdTRBL2">
                    <router-link :to="{ name: '详情页', params: { id: item.goods_id } }">
                      <img :src="item.original_img">
                      <div class="pd2">{{item.goods_name}}</div>
                      <div class="pd1">¥{{item.shop_price}}</div>
                    </router-link>
                </el-col>
            </el-row>
        </el-main>
         <!-- 后加的内容结束 -->
      </el-row>
    </el-main>
</el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      hidden: false,
      form: {
        restaurants: [],
        state: "",
        timeout: null,
        input: ""
      },
      // 商品列表
      goods_list:[],
    };
  },
  methods: {
    // loadAll() {
    //   return [
    //     { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
    //     {
    //       value: "Hot honey 首尔炸鸡（仙霞路）",
    //       address: "上海市长宁区淞虹路661号"
    //     }
    //   ];
    // },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item, item.value, item.address);
    },
    serachBtn() {
       let that = this
      if (this.form.input === "") {
        this.$message({
          message: "请输入当前要搜索的文字",
          type: "warning"
        });
      }else{
      axios
        .get("/Api/Goods/goods_list" + "?keywords=" + that.form.input)
        .then(function(res){
          // console.log(res)
          console.log(res)
          console.log("1111")
          that.goods_list = res.data.data.goods_list
        })
        .catch(function(error){
          // console.log(error)
        });   
      }
      console.log(this.form.input);
    },
    back() {
      window.history.go(-1);
    }
  },
  mounted() {
    // this.restaurants = this.loadAll();
  }
};
</script>

<style lang="less" scoped>
@import "../assets/header.less";
@import "../assets/index/style.less";
@import "../assets/search/search.less";
@import "../assets/hotShop/hotShop.less";
</style>