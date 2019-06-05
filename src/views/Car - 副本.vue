<template lang="html">
  <div class="car">
    <!-- slot分发内容 让子组件混合父组件的内容 -->
    <!-- <v-header>
        <h1 slot="title">购物车</h1>
      </v-header> -->
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
                <span>
                  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange(cart_list)">
                    <el-checkbox :label="item.spec_key_name" :key="item.spec_key_name">{{item.spec_key_name}}</el-checkbox>
                  </el-checkbox-group>
                  <!-- <el-radio v-model="radio" :label="item.label"></el-radio> -->
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
                    <el-input-number v-model="item.num" @change="handleChange" :min="1" :max="99"></el-input-number>
                  </el-col>
                </div>
              </el-col>
            </el-col>
          </el-col>
        </el-col>
        <!-- <template>
  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</template> -->
        <el-col class="carFooter brT1 bgCfff">
          <el-col :span="4" class="text-alignCenter pd2">
              <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          </el-col>
          <el-col :span="12" class="text-alignRight pd2">
            <div class="totalPrices">总计(不含运费): <span class="colorRed">￥1239</span></div>
            <div class="freight colorGray">运费：<span>￥100</span></div>
          </el-col>
          <el-col :span="8" class="accountsBtn">
            <el-button @click="OnAccounts" class="fr baUndertintBlack colorWhite">结账</el-button>
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
      radio: "0",
      IfPurchase: true,
      checkedCities: [],
      isIndeterminate: true,
      checkAll: false,
      // 购物车列表
      cart_list:[],
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
    handleChange(value) {
      console.log(value);
    },
    OnAccounts() {
      console.log(111);
    },
    handleCheckAllChange(val) {
      console.log("333")
      console.log(val)
      this.checkedCities = val ? this.cart_list : [];
      console.log(this.checkedCities)
      this.isIndeterminate = true;
    },
    handleCheckedCitiesChange(value) {
      console.log(value)
      let checkedCount = value.length;
      console.log(checkedCount)
      this.checkAll = checkedCount === this.cart_list.length;
      console.log(this.checkAll)
      console.log(checkedCount)
      console.log(this.cart_list.length)
      this.isIndeterminate =this.cart_list.length;
        checkedCount > 0 && checkedCount < this.cart_list.length;
    }
  },
  computed: {
    count() {
      return this.$store.state.detail.count;
    }
  },

};
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
}
</style>
