<template lang="html">
  <section class="details">
    <el-row class="auctionDetails auctionBgPink pd2" v-if="promsw!=''">
      <el-col :span="22" :offset="1" class="mgT3" style="font-size:14px;">
        <el-col :span="6">
          <div class="colorWhite text-alignLeft">限时秒杀</div>
        </el-col>
        <el-col :span="16" :offset="2" class="colorWhite text-alignRight">
          活动截止日期
          <!-- <count-down :currentTime="timestamp" :startTime="promsw.start_time" :endTime="promsw.end_time" :end-text="'活动结束'" :dayTxt="'天'" :hourTxt="':'"
                    :minutesTxt="''"></count-down> -->
           <!-- {{promsw.end_time}} - {{timestamp}} -->
           {{promsw.end_time|formatDate}}
        </el-col>
      </el-col>
    </el-row>
    <el-row class="brB10 mgB2">
      <el-col :span="22" :offset="1" class="details-explainRow">
        <el-col :span="24" class="explainRowPrice colorRed pdB2" v-if="promsw!=''">¥{{promsw.prom_price}}元</el-col>
        <el-col :span="24" class="explainRowPrice colorRed pdB2" v-if="promsw.length===0">¥{{goods.shop_price}}元</el-col>
        <el-col :span="24" class="explainRowFreightExplain pdB2 lh1-2">运输费用仅限于目的地至大陆的运送。 对于包括岛屿和海外领土在内的非大陆目的地。</el-col>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
         <el-col class="specificationRow colorRed" v-if="goods.exchange_integral!=0">
          <el-col :span="10">
            积分兑换
          </el-col>
          <el-col :span="14" class="text-alignRight">可用{{goods.exchange_integral}}积分兑换{{goods.exchange_integral/10}}元</el-col>
        </el-col>
        <el-col class="specificationRow brB1"  v-if="filter_spec_attr_list.length != 0">
          <el-col :span="18">
            <span v-if="Name == 0">未选</span>
             <span v-else>{{attrate_name}}</span>
          </el-col>
          <el-col :span="6" class="text-alignRight">
            <el-button type="text" @click="dialogFormVisible = true">请选择</el-button>
            <i class="el-icon-arrow-right"></i>
          </el-col>
        </el-col>
        <el-col class="specificationRow brB1" v-else>
          此商品没有属性
        </el-col>
        <el-col class="specificationRow">
          <el-col :span="18">
            库存
          </el-col>
          <el-col :span="6" class="text-alignRight">{{goods.store_count}}</el-col>
        </el-col>
      </el-col>
    </el-row>

    <el-row>
      <el-dialog title="商品规格信息" :visible.sync="dialogFormVisible" top="0" class="detailsDialog" style="position:fixed;width:100%;">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
          <!-- <el-row class="fr inputNumber"><el-input-number :min="1" :max="99"></el-input-number></el-row> -->
          <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="数量" style="left:35%;"></el-input-number>
          <el-row class="detailsRow-specification" v-for="(k,index,ids) in filter_spec">
            <el-col :span="24" style="padding-top:5vw;">
              <el-col :span="8" class="specificationProductImg">
                <img :src="img_data" v-if="ids == 0">
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
                    <el-radio class="radio mgTB2 width33-3 text-alignCenter" v-for="(f,index) in k" style="width:30%;" :label="f.item_id" :name="f.item_id" @change="radio_click(f,index)"
                    >{{f.item}}</el-radio>
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
      </el-dialog>
    </el-row>
  </section>
</template>

<script>
import axios from "axios";
import { MessageBox } from "mint-ui";
import { mapState } from "vuex";
import Axios from "axios";
import countDowns from "vue2-countdown";
export default {
  props: ["goods", "filter_spec", "spec_goods_price", "prom"],
  filters: {
    formatDate: function(value) {
      let date = new Date(value * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;//多种时间格式的拼接
      return y + "-" + MM + "-" + d + " " + h + ":" + m;
    }
  },
  data() {
    return {
      timestamp: Date.parse(new Date()),
      dialogFormVisible: false,
      promsw: {},
      times: "",
      ruleForm: {
        resourceA: ""
      },
      rules: {
        resourceA: []
      },
      data: {},
      // 汉字
      fellow: [],
      // 商品页面
      goods: {},
      // filter_spec:[],
      // 默认设置成显示状态
      index_biao: 1,
      Name: [],
      // 图片
      img_data: "",
      // 商品价格
      list_price: [],
      // 默认价格
      default_price: [],
      // 默认价格数组
      price_deta: [],
      // 显示的价格
      phone_price: "",
      // 点击属性实现的价格
      price_attr: [],
      // 下标
      indexJoin: "",
      // 是否有活动
      prom: [],
      // 默认传值
      color_list: [],
      // 显示价格的字符串
      font_zi: [],
      zong_han: "未选",
      listJoin: [],
      Name_list: [],
      num1: 1,
      // 属性名字
      attrate_name: "未选",
      // 是否有属性列表
      filter_spec_attr_list: []
    };
  },
  components: {
    "count-down": countDowns
  },
  methods: {
    submitForm(formName) {
      var that = this;
      that.Name.slice(Object.values(that.filter_spec).length);
      that.Name.sort(function(a, b) {
        return a - b;
      });
      var nameSlice = that.Name.join("_");
      axios
        .get("/Api/Goods/get_goods_spec_name?goods_spec=" + nameSlice)
        .then(function(res) {
          that.attrate_name = res.data.data;
        });
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogFormVisible = false;
          that.$emit("lithToFather", that.Name, that.default_price);
          for (var i = 0; i < that.Name.length; i++) {
            that.font_zi.push(that.Name[i]);
          }
          that.zong_han = that.font_zi.join("_");
          that.zong_han.sort(function(a, b) {
            return a - b;
          });
        } else {
          return false;
        }
      });
    },
    radio_click: function(name, index) {
      var that = this;
      var monery = [];
      var monert_list = [];
      var monery_id = [];
      var objAttr = Object.values(that.filter_spec);
      that.price_attr.push(name.item_id);
      const sliceArr = that.price_attr.slice(
        -Object.values(that.filter_spec).length
      );
      sliceArr.sort(function(a, b) {
        return a - b;
      });
      var listJoin = sliceArr.join("_");
      that.Name_list = listJoin;
      for (var i = 0; i < that.list_price.length; i++) {
        monery.push(that.list_price[i].key);
        monert_list.push(that.list_price[i]);
      }
      that.indexJoin = monery.indexOf(listJoin);
      that.phone_price = monert_list[that.indexJoin].price;
      if (name.src == "") {
        return;
      } else {
        that.img_data = name.src;
      }
    },
    getDataProm() {
      const thit = this;
      const goods_id = this.$route.params.id;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Goods/goods_detail?id=" + goods_id
      })
        .then(function(res) {
          console.log(res);
          thit.promsw = res.data.data.prom;
          thit.times = thit.promsw.end_time - thit.timestamp;
        })
        .catch(function(error) {});
    },
    handleChange() {}
  },
  mounted() {
    var that = this;
    window.scrollTo(0, 0);
    that.getDataProm();
  },
  watch: {
    goods(val) {
      var that = this;
      that.goods = val;
    },
    filter_spec(val) {
      var that = this;
      that.filter_spec = val;
      var filter_spec_attr = Object.values(that.filter_spec);
      that.filter_spec_attr_list = filter_spec_attr;
      var filter_item = [];
      var filter_img = [];
      // 默认价钱数组
      var price_list = [];
      for (var i = 0; i < filter_spec_attr.length; i++) {
        filter_item = filter_spec_attr[i];
        this.Name.push(filter_item[0].item_id);
        this.Name_list.push(filter_item[0].item_id);
        this.img_data = filter_item[0].item;
        filter_img.push(filter_item[0].src);
        that.default_price.push(filter_spec_attr[i][0].item_id);
        that.color_list.push(filter_spec_attr[i].item);
      }
      that.default_price = that.default_price.join("_");
      this.img_data = filter_img[0];
      that.ruleForm.resourceA = filter_item[0].item;
    },
    // 价格
    spec_goods_price(val) {
      var that = this;
      that.list_price = Object.values(val);
      var monery = [];
      var monert_list = [];
      for (var i = 0; i < that.list_price.length; i++) {
        monery.push(that.list_price[i].key);
        monert_list.push(that.list_price[i]);
      }
      var monery_index = monery.indexOf(that.default_price);
      that.phone_price = monert_list[monery_index].price;
    },
    // 是否有活动价格
    prom(val) {
      this.prom = val;
    }
  }
};
</script>

<style lang="less">
@import "../../assets/fz.less";
@import "../../assets/detail/details.less";
@import "../../assets/index/style.less";
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
  .demo-ruleForm {
    .el-input-number__increase {
      margin-right: 78px;
    }
    .el-input-number__decrease,
    .el-input-number__increase {
      width: 20px;
      line-height: 20px;
      height: 20px;
      // border-top: 1px solid #DCDFE6;
      // border-bottom: 1px solid #DCDFE6;
    }
    .el-input-number .el-input {
      line-height: 20px;
    }
    .el-input__inner {
      height: 24px;
      line-height: 20px;
      width: 60%;
    }
    .el-input-number .el-input__inner {
      padding-right: 20px;
      padding-left: 20px;
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
.countDown div span {
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  background-color: #333;
  border-radius: 100%;
  display: block;
  float: left;
  .fz(font-size, 24);
  text-align: center;
}

.countDown div span span {
  .fz(font-size, 24);
  float: left;
}

.countDown div i {
  float: left;
  padding: 0 4px;
  color: #333333;
}

.countDown div span i {
  float: left;
  padding: 0 4px;
  color: #333333;
}

.detailsDialog .el-dialog {
  position: fixed;
}
</style>