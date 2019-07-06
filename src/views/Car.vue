<template lang="html">

  <div class="car">
    <!-- 是否删除商品的状态 -->
    <div class="delete_status" v-if="delete_status != 1"></div>
    <div class="bg_color" v-if="delete_status != 1">
      <div class="delete_good">是否将商品删除？</div>
      <div>
        <div style="width:50%;float:left;text-align:center;line-height:15vw;color:#D9B53D;font-size: 14px;" @click="cancel">取消</div>
        <div style="width:50%;float:left;text-align:center;line-height:15vw;font-size: 14px;color:#9C9C9C;" @click="submit">确认</div>
      </div>
    </div>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      购物车
    </el-header>
    <el-main class="addRow">
      <el-row style="text-align:right;margin-right:5vw;color:#313131;">
        <span @click="editt_status">{{edit}}</span>
      </el-row>
      <el-row v-if="IfPurchase===true">
        <el-col :span="22" :offset="1" class="bgCfff pdLR2TB1 positionR">
          <el-col v-for="(item, index) in cart_list" class="addInfo">
            <el-col class="pdT3 pdB1">
              <el-col :span="3" class="mgT4">
                <i class="el-icon-refresh-right"></i>
                <i class="el-icon-refresh-left"></i>
                <span @click="radio_click(index,item.id)">
                  <img :src="item.selected == 0?'/static/check@2x.png':'/static/checked@2x.png'" style="width:1.2rem;margin-top:1rem;"/>
                </span>
              </el-col>
              <el-col :span="6" class="carListImg">
                <router-link :to="{ name: '详情页', params: { id: item.goods_id} }">
                    <img :src="item.thumb">
                </router-link>
              </el-col>
              <el-col :span="14" :offset="1">
                <div @click="post_mask(item.goods_id,item.id)">
                  <el-col class="overHidden" style="border:none;">{{item.title}}</el-col>
                   <el-col class="selectBorder">
                    <span class="selectText">{{item.goods_name}}</span>
                  </el-col>
                <!-- <el-col class="selectBorder">
                   <span class="selectText"  :data-id = "item.goods_id">{{item.spec_key_name}}<i class="el-icon-arrow-down"></i></span>
                </el-col> -->
                <div class="pdT4">
                  <el-col :span="8" class="colorRed">￥{{item.goods_price}}</el-col>
                  <el-col :span="16" style="text-align:right">
                    x{{item.goods_num}}
                  </el-col>
                </div>
                </div>
              </el-col>
              <!-- <el-col :span="14" :offset="1">
                <div @click="post_mask(item.goods_id,item.id)">
                  <el-col class="overHidden" style="border:none;">{{item.title}}</el-col>
                   <el-col class="selectBorder">
                    <span class="selectText">{{item.goods_name}}</span>
                  </el-col>
                <el-col class="selectBorder">
                   <span class="selectText"  :data-id = "item.goods_id">{{item.spec_key_name}}<i class="el-icon-arrow-down"></i></span>
                </el-col>
                <div class="pdT4">
                  <el-col :span="8" class="colorRed">￥{{item.goods_price}}</el-col>
                  <el-col :span="16" style="text-align:right">
                    x{{item.goods_num}}
                  </el-col>
                </div>
                </div>
              </el-col> -->
            </el-col>
          </el-col>
        </el-col>
        <el-col class="carFooter brT1 bgCfff">
          <el-col :span="4" class="text-alignCenter pd2">
              <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
              <!-- <img :src="checkAll == true ?'/static/check@2x.png':'/static/checked@2x.png'" style="width:1.2rem;margin-top:1rem;"  @click="select_all"/> -->
          </el-col>
          <el-col :span="12" class="text-alignRight pd2" style="margin-top:2vw;">
            <div class="totalPrices">总计<span class="colorRed">￥{{price}}</span></div>
            <!-- <div class="freight colorGray">运费：<span>￥100</span></div> -->
          </el-col>
          <el-col :span="8" class="accountsBtn">
            <!-- @click="OnAccounts" -->
            <!-- <el-button class="fr baUndertintBlack colorWhite" @click="settlem_status">{{settlem}}</el-button> -->
            <!-- <router-link :to="{ name: '购物车详情' }">
                <el-button class="fr baUndertintBlack colorWhite" @click="settlem_status">{{settlem}}</el-button>
            </router-link > -->
             <el-button class="fr baUndertintBlack colorWhite" @click="settlem_status">{{settlem}}</el-button>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
 <el-row>
      <!-- <el-dialog title="商品规格信息" :visible.sync="dialogFormVisible" top="0" class="detailsDialog">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
           <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字" class="cart_input" style="width:50%;"></el-input-number>
          <el-row class="detailsRow-specification" v-for="(k,index,ids) in filter_spec">
           <el-col :span="24" style="padding-top:5vw;">
              <el-col :span="8" class="specificationProductImg">
                <img :src="img_data" v-if="ids == 0" style="width:100%;">
              </el-col>
               <el-col :span="16">
                <span class="colorRed specificationProductText" v-if="ids == 0 && prom =='' && filter_spec != ''">¥{{phone_price}}</span>
                <span class="colorRed specificationProductText" v-if="ids == 0 && filter_spec == ''">¥{{goods.shop_price}}</span>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="24">
                <div class="pd1">{{index}}</div>
                <el-form-item prop="resourceA">
                  <el-radio-group v-model="Name[ids]">
                    <el-radio class="radio mgTB2 width33-3 text-alignCenter" v-for="(f,index) in k" style="width:30%;" :label="f.item_id" :name="f.item_id"
                     @change="radio_clicks(f,index)">{{f.item}}</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
          <el-form-item>
            <div class="dialog-footer">
              <el-button type="primary" class="subBtn" @click="submitForm('ruleForm')">确 定</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-dialog> -->
    </el-row>
        </el-form>
      </el-dialog>
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
      dialogFormVisible: false,
      IfPurchase: true,
      checkedCities: [],
      isIndeterminate: true,
      checkAll: false,
      // 购物车列表
      cart_list: [],
      // 判断是不是全选状态
      checkAll: true,
      // 规格数组
      filter_spec: [],
      ruleForm: {
        resourceA: "",
        resourceB: ""
      },
      rules: {
        resourceA: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        resourceB: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ]
      },
      // 图片
      img_data: "",
      // 是否有活动
      prom: [],
      // 显示的价格
      phone_price: "",
      // 商品价格
      list_price: [],
      // 默认价格
      default_price: [],
      color_list: [],
      Name: [],
      Name_list: [],
      // 购物车id
      cart_id: "",
      num1: 1,
      // 输入的数量
      input_number: "1",
      // 点击属性实现的价格
      price_attr: [],
      // 传的序号
      input_cart: "",
      nmuber_status: "",
      click_status: 1,
      // 是否是编辑状态
      edit_status: "1",
      // 编辑
      edit: "编辑",
      // 结算
      settlem: "结算",
      delete_status: 1,
      // 总价
      price: 0,
      // 收集购物车id集合
      cart_id_list: []
    };
  },
  mounted() {
    // 获取页面数据
    this.getData();
  },
  methods: {
    getData() {
      var that = this;
      axios
        .get("/Api/Cart/cart_list")
        .then(function(res) {
          that.cart_list = res.data.data;
          for (var i = 0; i < that.cart_list.length; i++) {
            if (that.cart_list[i].selected == 1) {
              that.cart_id_list.push(that.cart_list[i].id);
              that.price +=
                parseFloat(that.cart_list[i].goods_price) *
                parseFloat(that.cart_list[i].goods_num);
            }
          }
        })
        .catch(function(error) {});
    },

    deleteInfo(index) {
      this.items.splice(index, 1);
    },
    // 点击按钮的单击事件{{结算}}
 radio_click: function(index, cart_id) {
      var that = this;
      var price_total = "";
      if (that.cart_list[index].selected == 1) {
      //  var s = that.cart_id_list.filter(item => item !== that.cart_id_list[index])
      //  console.log("这是什么")
      //  console.log(s)
      //  console.log(that.cart_id_list)
      //   console.log(that.cart_id_list);
      //   var arr = that.cart_id_list;
      //   var newArr = [];
      //   arr.forEach(function(val) {
      //     if (newArr.indexOf(val) == -1) {
      //       newArr.push(val);
      //     }
      //   });
      //   console.log("123456");
      //   console.log(newArr);
      //   newArr.splice(that.cart_id_list[index],1)
      //   console.log("截取成功了")
      //   console.log(newArr)
      //   // 去掉重复数据结束
      //   axios
      //     .get("/Api/Cart/cart_select?ids=" + s.join(","))
      //     .then(function(res) {
      //       console.log("走接口了");
      //     });
        //  that.getData()
        that.price =
          that.price -
          parseFloat(that.cart_list[index].goods_price) *
            parseFloat(that.cart_list[index].goods_num);
        that.cart_list[index].selected = 0;
        // that.cart_id_list.push(cart_id);
      } else {
        // var s = that.cart_id_list.filter(item => item !== that.cart_id_list[index])
        // var arr = that.cart_id_list;
        // var newArr = [];
        // arr.forEach(function(val) {
        //   if (newArr.indexOf(val) == -1) {
        //     newArr.push(val);
        //   }
        // });
        // console.log("123456");
        // console.log(newArr);
        // newArr.splice(that.cart_id_list[index],1)
        // console.log("成功了")
        // console.log(s)
        that.cart_list[index].selected = 1;
        that.price +=
          parseFloat(that.cart_list[index].goods_price) *
          parseFloat(that.cart_list[index].goods_num);
        // that.cart_id_list.push(cart_id);
        // axios
        //   .get("/Api/Cart/cart_select?ids=" + s.join(","))
        //   .then(function(res) {
        //     console.log("哈哈哈走接口了");
        //   });
      }
      that.select_radio();
    },
    // 监听全选按钮
    // select_all: function() {
    //   var that = this;
    //   if (that.checkAll == true) {
    //     for (var i = 0; i < that.cart_list.length; i++) {
    //       that.cart_list[i].selected = 1;
    //       that.checkAll = false;
    //       that.price +=
    //         parseFloat(that.cart_list[i].goods_price) *
    //         parseFloat(that.cart_list[i].goods_num);
    //     }
    //     consoel.log(that.price);
    //   } else {
    //     for (var i = 0; i < that.cart_list.length; i++) {
    //       that.cart_list[i].selected = 0;
    //       that.checkAll = true;
    //     }
    //     that.price = 0;
    //   }
    // },
    select_radio: function() {
      var that = this;
      for (var i = 0; i < that.cart_list.length; i++) {
        if (that.cart_list[i].selected == 0) {
          that.checkAll = true;
        } else {
          that.checkAll = false;
        }
      }
    },
    computed: {
      count() {
        return this.$store.state.detail.count;
      }
    },
    submitForm() {
      // this.dialogFormVisible = false;
      var that = this;
      that.Name_list = that.Name_list.slice(-3);
      that.Name_list.sort(function(a, b) {
        return a - b;
      });
      that.nmuber_status =
        that.click_status == 1 ? that.Name_list.join("_") : that.nmuber_status;
      axios
        .post("/Api/Cart/cart_edit", {
          id: that.cart_id,
          goods_num: that.input_number,
          goods_spec: that.nmuber_status
        })
        .then(function(res) {
          if (res.data.code == 1) {
            that.getData();
          }
        });
    },
    // 设置接口信息
    radio_clicks: function(name, index) {
      var that = this;
      that.click_status = 2;
      that.nmuber_status = this.Name.join("_");
    },
    // 循环规格
    post_mask: function(id, cart_id) {
      var goods_id = id;
      var that = this;
      that.cart_id = cart_id;
      // that.dialogFormVisible = true;
      axios
        .get("/Api/Goods/goods_detail?id=" + goods_id)
        .then(function(res) {
          that.filter_spec = res.data.data.filter_spec;
          that.prom = res.data.data.prom;
          that.spec_goods_price = res.data.data.spec_goods_price;
          that.list_price = Object.values(that.spec_goods_price);
          var monery = [];
          var monert_list = [];
          for (var i = 0; i < that.list_price.length; i++) {
            monery.push(that.list_price[i].key);
            monert_list.push(that.list_price[i]);
          }
          // 循环价格开始
          var filter_spec_attr = Object.values(that.filter_spec);
          var filter_item = [];
          var filter_img = [];
          for (var i = 0; i < filter_spec_attr.length; i++) {
            filter_item = filter_spec_attr[i];
            that.Name.push(filter_item[0].item_id);
            that.Name_list.push(filter_item[0].item_id);
            that.img_data = filter_item[0].item;
            filter_img.push(filter_item[0].src);
            that.default_price.push(filter_spec_attr[i][0].item_id);
          }
          // 循环价格结束
          that.img_data = filter_img[0];
          that.default_price = that.default_price.join("_");
          var monery_index = monery.indexOf(that.default_price);
          that.phone_price = monert_list[monery_index].price;
          that.ruleForm.resourceA = filter_item[0].item;
        })
        .catch(function(error) {});
    },
    // 获取规格的接口
    // 监听数量
    handleChange: function(e) {
      this.input_number = e;
    },
    // 是否点击编辑状态
    editt_status: function() {
      var that = this;
      if (that.edit_status == 1) {
        that.edit_status = 2;
        that.edit = "完成";
        that.settlem = "删除";
      } else {
        that.edit_status = 1;
        that.edit = "编辑";
        that.settlem = "结算";
      }
    },

    settlem_status: function() {
      var that = this;
      if (that.edit_status == 2) {
        // console.log("123456");
        // that.delete_status = 2;
        // that.$router.push("/UserCarRouterLink")
        var cart_list_id = [];
        for (var i = 0; i < that.cart_list.length; i++) {
          if (that.cart_list[i].selected == 1) {
            cart_list_id.push(that.cart_list[i].id);
          }
        }
        cart_list_id = cart_list_id.join(",");
        axios
          .get("/Api/Cart/cart_delete?ids=" + cart_list_id)
          .then(function(res) {
            if (res.data.code == 1) {
              that.$message({ message: "删除成功" });
              // that.delete_status = 1;
              that.getData();
            }
          });
      } else {
        // "/Api/Cart/cart_select?ids=" + s.join(",")
        // console.log("23569");
         var cart_list_id = [];
        for (var i = 0; i < that.cart_list.length; i++) {
          if (that.cart_list[i].selected == 1) {
            cart_list_id.push(that.cart_list[i].id);
          }
        }
        cart_list_id = cart_list_id.join(",");
        axios
          .get("/Api/Cart/cart_select?ids=" + cart_list_id)
          .then(function(res) {
            // console.log("删除成功了")
             that.$router.push({ name: "购物车详情" });
            if (res.data.code == 1) {
              that.$router.push({ name: "购物车详情" });
            }
          });
      }
    },

    // 确认删除
    submit: function() {
      var that = this;
      var cart_list_id = [];
      for (var i = 0; i < that.cart_list.length; i++) {
        if (that.cart_list[i].selected == 1) {
          cart_list_id.push(that.cart_list[i].id);
        }
      }
      cart_list_id = cart_list_id.join(",");
      axios
        .get("/Api/Cart/cart_delete?ids=" + cart_list_id)
        .then(function(res) {
          if (res.data.code == 1) {
            that.$message({ message: "删除成功" });
            that.delete_status = 1;
          }
        });
    },
    // 取消删除购物车
    cancel: function() {
      var that = this;
      that.delete_status = 2;
    }
  }
};
</script>

<style lang="less">
@import "../assets/index/style.less";
@import "../assets/header.less";
@import "../assets/user/user.less";
@import "../assets/car/car.less";
@import "../assets/fz.less";
@import "../assets/detail/details.less";
.el-main {
  padding: 0;
}
.addRow {
  padding-bottom: 60px;
  width: 100%;
  height: 100%;
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
  .selectBorder {
    margin-bottom: 8px;
    .selectText {
      font-size: 12px;
      padding: 2px;
      border: 1px solid #eee;
    }
  }
  .el-dialog {
    width: 100%;
    margin: 0;
    bottom: 0;
    position: initial;
    z-index: 1000;
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
.el-dialog__header {
  border-bottom: 1px solid #e9e9e9;
}
.price {
  color: #da4e44;
}
.size {
  margin-top: 20px;
  margin-bottom: 10px;
}
.dialog-footer {
  margin-top: 23px;
}
.subBtn {
  width: 100%;
}
.el-dialog {
  width: 100%;
  margin: 0;
  bottom: 0;
  position: initial;
  z-index: 1000;
  .inputNumber {
    position: absolute;
    right: 62px;
    top: 120px;
    .el-input-number {
      line-height: 1.2;
    }
    .el-input-number .el-input__inner {
      line-height: 1.2;
      height: 18px;
    }
  }
}
.el-radio-button__inner {
  padding: 12px;
  margin-right: 4px;
}
.el-dialog__footer {
  padding: 0;
  .el-button {
    width: 100%;
  }
}
.el-button--text {
  color: #666;
}
.detailsRow-specification {
  .el-radio__inner {
    display: none;
  }
  .el-radio__inner::after {
    display: none;
    border: none;
  }
  .el-radio-group {
    width: 100%;
  }
  .color_border {
    color: #dab62e;
    border: 1px solid #dab62e;
  }
  .color_black {
    color: #000;
  }
  .input_style {
    margin-left: 32%;
    top: 50px;
  }
}
.cart_input {
  display: inline-block;
  position: relative;
  top: 25vw;
  left: 30%;
  text-align: center;
}
.delete_status {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.39;
  z-index: 300;
}
.bg_color {
  width: 70%;
  height: 25vw;
  background: #fff;
  position: fixed;
  top: 40%;
  left: 15%;
  z-index: 500;
}
.delete_good {
  text-align: center;
  margin-top: 4vw;
  padding-bottom: 2vw;
  border-bottom: 1px solid #ededed;
  font-size: 14px;
}
.car .el-dialog {
  position: fixed;
}
.car .cart_input {
  left: 50%;
  width: 20%;
  top:10px;
  border:1px solid #eee;
  .el-input-number__decrease  {
    width: 20px;
  }
  .el-input-number__increase {
    width: 20px;
  }
  .el-input-number .el-input__inner {
    padding-left: 30px;
    padding-right: 0;
  }
}
</style>
