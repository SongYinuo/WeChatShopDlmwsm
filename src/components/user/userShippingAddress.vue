<template lang="html">
    <el-container style="background-color:#F5F5F4; height: 100%">
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
          收货地址
        </el-header>
        <el-main class="addRow">
          <el-row>
              <el-col :span="22" :offset="1" class="bgCfff pdLR2TB1 positionR">
                <el-col v-for="(item, index) in items" class="addInfo">
                  <el-col :span="22" :offset="1" class="pd2">
                    <el-col :span="6" class="name">{{item.consignee}}</el-col>
                    <el-col :span="18" class="phone text-alignRight">{{item.mobile}}</el-col>
                  </el-col>
                  <el-col class="addressTxt">
                    <el-col :span="3" v-if="item.is_default=== 1">
                      <div class="bgUndertintYellow defaultIcon colorWhite addRowTxt text-alignCenter">默认</div>
                    </el-col>
                     <el-col :span="3" v-if="item.is_default=== 0" style="display:none">
                      <div class="bgUndertintYellow defaultIcon colorWhite addRowTxt text-alignCenter">默认</div>
                    </el-col>
                    <el-col :span="20" :offset="1" class="site pd2">
                          {{item.province_name}}{{item.city_name}}{{item.district_name}}
                    </el-col>
                  </el-col>
                  <el-col class="pdT3 pdB1">
                    <el-col :span="8"  >
                      <i class="el-icon-refresh-right"></i>
                      <i class="el-icon-refresh-left"></i>
                      <div >
                        <!-- <span @change="default_click(index)">
                          <el-radio v-model="radio" :label="3" v-if="item.is_default=== 1" >默认地址</el-radio>
                          <el-radio v-model="radio" :label="6" v-if="item.is_default=== 0" ><div style="color:#fff">地址</div></el-radio>
                        </span> -->
                          <el-radio-group v-model="radio" @change="default_click(index)" >
                            <el-radio :label="item.address_id" v-if="item.is_default=== 1" >
                              默认地址
                            </el-radio>
                            <el-radio :label="item.address_id" v-if="item.is_default=== 0" >默认地址</el-radio>
                             
                          </el-radio-group>
                      </div>
                    </el-col>
                    
                    <el-col :span="2" :offset="13">
                      <i class="el-icon-delete" @click="deleteInfo"></i>
                    </el-col>
                  </el-col>
                </el-col>
              </el-col>
              <el-col class="newBtn" :span="22" :offset="1">
                <router-link :to="{ name: '新增地址' }">
                <el-button type="primary" class="bgUndertintYellow brRNone">新增收货地址</el-button>
                </router-link >
              </el-col>
          </el-row>
        </el-main>
    </el-container>
</template>

<script>
import axios from "axios";
export default {
  inject: ['reload'],
  data() {
    return {
      radio: 1,

      items: []
    };
  },
  mounted() {
    this.getImg();
   
  },
  methods: {
    getDta() {},
    deleteInfo(index) {
      this.items.splice(index, 1);
    },
    getImg() {
      const that = this;
      axios.get("/Api/User/address_list").then(function(res) {
        // console.log(res.data.data);
        that.items = res.data.data;
       
      });
    },
    // 点击事件
    default_click: function(index) {
      var that = this;
      // console.log("点击");
      // console.log(index);
      var address_id = that.items[index].address_id;
      
      axios
        .get("/Api/User/set_default_address?id=" + address_id)
        .then(function(res) {
          // that.radio = address_id;
          console.log(radio);
        });
        // this.reload();
        this.$router.go(0)
    }
  },
  computed: {
    resultCategoryId() {
      return this.categoryId;
    }
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/user/user.less";
.el-main {
  padding: 0;
}

.addRow {
  width: 100%;
  height: 100%;
}
.el-radio__label {
  // color: #FFF;
}
</style>