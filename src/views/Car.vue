<template lang="html">
  <div class="car">
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      购物车
    </el-header>
    <el-main class="addRow">
      <el-row v-if="IfPurchase===true">
        <el-col :span="22" :offset="1" class="bgCfff pdLR2TB1 positionR">
          <el-col v-for="(item, index) in cart_list" class="addInfo">
            <el-col class="pdT3 pdB1">
              <el-col :span="3" class="mgT4">
                <i class="el-icon-refresh-right"></i>
                <i class="el-icon-refresh-left"></i>
                <span @click="radio_click(index)">
                  <img :src="item.selected == 0?'/static/check@2x.png':'/static/checked@2x.png'" style="width:1.2rem;margin-top:1rem;"/>
                </span>
              </el-col>
              <el-col :span="6" class="carListImg">
                <img :src="item.thumb">
              </el-col>
              <el-col :span="14" :offset="1">
                <el-col class="overHidden">{{item.title}}</el-col>
                <el-select v-model="item.optionsArrayvalue" placeholder="请选择" class="pdT2">
                  <el-option :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <div class="pdT4">
                  <el-col :span="8" class="colorRed">￥{{item.goods_price}}</el-col>
                  <el-col :span="16">
                    <el-input-number v-model="item.goods_num" :min="1" :max="99">{{item.goods_num}}</el-input-number>
                  </el-col>
                </div>
              </el-col>
            </el-col>
            
          </el-col>
        </el-col>
        <el-col class="carFooter brT1 bgCfff">
          <el-col :span="4" class="text-alignCenter pd2">
              <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
              <img :src="checkAll == true ?'/static/check@2x.png':'/static/checked@2x.png'" style="width:1.2rem;margin-top:1rem;"  @click="select_all"/>
          </el-col>
          <el-col :span="12" class="text-alignRight pd2">
            <div class="totalPrices">总计(不含运费): <span class="colorRed">￥1239</span></div>
            <div class="freight colorGray">运费：<span>￥100</span></div>
          </el-col>
          <el-col :span="8" class="accountsBtn">
            <!-- @click="OnAccounts" -->
            <router-link :to="{ name: '购物车详情' }">
                <el-button class="fr baUndertintBlack colorWhite">结账</el-button>
            </router-link >
          </el-col>
        </el-col>
      </el-row>
    </el-main>
    <!-- 根据购物车是否有商品加载不同的组件 -->
    <!-- <v-something v-if="IfPurchase===false" /> -->
    <v-nothing v-if="IfPurchase===false" />
    <!-- <v-footer /> -->
    <v-indexFooter/>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/common/_header.vue";
import Nothing from "@/components/car/nothing.vue";
import Something from "@/components/car/something.vue";
import Footer from "@/components/car/footer.vue";
import IndexFooter from "@/common/_footer.vue";
export default {
  components: {
    "v-header": Header,
    "v-nothing": Nothing,
    "v-something": Something,
    "v-footer": Footer,
    "v-indexFooter": IndexFooter
  },

  data() {
    return {
      IfPurchase: true,
      checkedCities: [],
      isIndeterminate: true,
      checkAll: false,
      // 购物车列表
      cart_list:[],
      // 判断是不是全选状态
      checkAll:true,
    };
  },
  mounted(){
    // 获取页面数据
    this.getData()
  },
  methods: {
     getData() {
      var that = this;
      axios
        .get("/Api/Cart/cart_list")
        .then(function(res) {
         console.log("12312")
         console.log(res)
         that.cart_list = res.data.data
        })
        .catch(function(error) {
          // console.log(error)
        });
    },

    deleteInfo(index) {
      this.items.splice(index, 1);
    },
    // 点击按钮的单击事件
    radio_click:function(index){
      console.log(index)
      var that = this
      console.log(123456)
      // that.cart_list[]
      console.log(that.cart_list[index].selected)
      if(that.cart_list[index].selected == 1){
        that.cart_list[index].selected = 0
      }else{
         that.cart_list[index].selected = 1
      }
       that.select_radio()
    },
    // 监听全选按钮
    select_all:function(){
      var that = this
      console.log("全选")
      if(that.checkAll == true){
         for(var i=0;i<that.cart_list.length;i++){
          that.cart_list[i].selected = 1
          that.checkAll = false
      }
      }else{
        console.log("取消反选")
          for(var i=0;i<that.cart_list.length;i++){
          that.cart_list[i].selected = 0
          that.checkAll = true
      }
    }
  },
  // 监听是否都选中的状态
  // select_radio:function(){
  //   console.log('监听')
  //   var that = this
  //    for(var i=0;i<that.cart_list.length;i++){
  //        if(that.cart_list[i].selected == 0){
  //         that.checkAll = true;
  //         break;
  //         return false;
  //        }else{
  //           that.checkAll = false
  //        }
  //     }
  // },
  select_radio:function(){
    var that = this
    for(var i=0;i<that.cart_list.length;i++){
      if(that.cart_list[i].selected== 0){
        that.checkAll = true;
      }else{
        that.checkAll = false;
      }
    }
  },
  computed: {
    count() {
      return this.$store.state.detail.count;
    }
  }
}
}
</script>

<style lang="less">
@import "../assets/index/style.less";
@import "../assets/header.less";
@import "../assets/user/user.less";
@import "../assets/car/car.less";

.el-main {
  padding: 0;
}

.addRow {
  width: 100%;
  height: 100%;
  .el-radio__label {
    display: none;
  }
  .el-input__inner {
    height: 20px;
    line-height: 1.2;
    border: none;
    background-color: #f6f6f6;
  }

  .el-input__icon {
    line-height: 1.2;
  }

  .el-input-number {
    width: 100%;
    line-height: 1.2;
  }
  .accountsBtn {
    button {
      border-radius: 0;
    }
  }
  .totalPrices {
    .fz(font-size, 28);
  }
  .freight {
    .fz(font-size, 20);
  }
  .el-radio:last-child {
    margin-right: 2px;
  }
  .el-checkbox__label {
    display: none;
  }
}

.car {
  width: 100%;
  padding-bottom: 14vw;
}

.carFooter {
  position: fixed;
  bottom: 48px;
  height: 60px;
  line-height: 1.2;
  z-index: 200;
}
</style>
