<template lang="html">
  <section class="details">
    <el-row class="auctionDetails auctionBgPink pd2" v-if="data.state===!''">
      <el-col :span="22" :offset="1">
        <el-col :span="4" class="">
          <div class="colorWhite text-alignCenter">拍卖</div>
          <div class="colorWhite text-alignCenter mgT1">主场会</div>
        </el-col>
        <el-col :span="12" :offset="8" v-if="data.auctionIng.state==='已拍卖'">
          <div class="colorWhite text-alignRight">距离结束还剩 {{data.auctionIng.unknownTime}}</div>
          <div class="colorWhite text-alignRight mgT1">库存剩余：{{data.auctionIng.inventory}}件</div>
        </el-col>
      </el-col>
    </el-row>
    <el-row class="brB10 mgB2">
      <el-col :span="22" :offset="1" class="details-explainRow">
        <el-col :span="24" class="explainRowPrice colorRed pdB2">¥{{goods.shop_price}}元</el-col>
        <el-col :span="24" class="explainRowTitle pdB2 lh1-2">{{goods.goods_name}}</el-col>
        <el-col :span="24" class="explainRowFreightExplain pdB2 lh1-2">运输费用仅限于目的地至大陆的运送。 对于包括岛屿和海外领土在内的非大陆目的地。</el-col>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-col class="specificationRow brB1">
          <el-col :span="18">
            <span>已选</span>
            <span>未选</span>
          </el-col>
          <el-col :span="6" class="text-alignRight">
            <el-button type="text" @click="dialogFormVisible = true">请选择</el-button>
            <i class="el-icon-arrow-right"></i>
          </el-col>
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
      <el-dialog title="商品规格信息" :visible.sync="dialogFormVisible" top="0" class="detailsDialog">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
          <el-row class="detailsRow-specification" v-for="(k,index,ids) in filter_spec">
            <el-col :span="24" style="padding-top:5vw;">
              <el-col :span="8" class="specificationProductImg">
                <img :src="k[0].src">
              </el-col>
              <el-col :span="16">
                <span class="colorRed specificationProductText">¥{{data.specification.price}}123</span>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="24">
                <div class="pd1">{{index}}</div>
                <el-form-item prop="resourceA">
                  <el-radio-group v-model="Name[ids]">
                    <el-radio class="radio mgTB2 width33-3 text-alignCenter" v-for="(f,index) in k" style="width:30%;" :label="f.item" @change="radio_click(value)"
                    ></el-radio>
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
import { MessageBox } from "mint-ui";
import { mapState } from "vuex";

export default {
  props: ["goods", "filter_spec"],
  data() {
    return {
      dialogFormVisible: false,
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
      data: {
        state: "拍卖",
        unknowAuction: {
          state: "未拍卖",
          unknownDate: "3月28日",
          unknownTime: "0:00",
          inventoryMax: 800
        },
        auctionIng: {
          state: "已拍卖",
          unknownTime: "23:20",
          inventory: 563
        },
        title: "【夢工房】龍文堂 造 岩口 道安形 鉄瓶 身縦銘　ZZ-3 ",
        price: "2.4w",
        freightPrice: "150",
        inventory: 120,
        specification: {
          url: "static/testImg/product-details01.jpg",
          price: "254w",
          specificationUnit: "尺寸",
          specificationData: [
            {
              label: "50cm*80cm",
              btnId: 0,
              checked: false
            },
            {
              label: "30cm*60cm",
              btnId: 1,
              checked: false
            }
          ],
          typeUnit: "样式",
          typeData: [
            {
              label: "鹰雕像",
              btnId: 0,
              checked: false
            }
          ]
        }
      },
      // 汉字
      fellow: [],
      // 商品页面
      goods: {},
      // filter_spec:[],
      // 默认设置成显示状态
      index_biao: 1,
      Name:[],
      // 图片
      img_data:'',
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.dialogFormVisible = false;
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    radio_click: function(value) {
      console.log("123456");
    }
    // 选择属性
    // radio_click:function(){
    //   var that = this
    //   console.log("123456")
    // }
  },
  mounted() {
    var that = this;
    console.log("对象变成数组");
    console.log(that.filter_spec);
  },
  watch: {
    // 使用监听的方式，监听数据的变化
    goods(val) {
      var that = this;
      that.goods = val;
    },
    filter_spec(val) {
      var that = this;
      that.filter_spec = val;
      console.log("重新编辑")
      var filter_spec_attr = Object.values(that.filter_spec)
      console.log(filter_spec_attr.length)
      var filter_item = [];
      var filter_img = [];
      for(var i=0;i<filter_spec_attr.length;i++){
        console.log("哈哈哈")
        console.log(filter_spec_attr[i])
        filter_item = filter_spec_attr[i]
        console.log(666)
        console.log(filter_item)
        this.Name.push(filter_item[0].item)
        console.log("222")
        console.log(this.Name)
        this.img_data = filter_item[0].item;
        console.log("图片")
        console.log(filter_item[0].src)
        console.log(this.img_data)
        filter_img.push(filter_item[0].src)
        console.log(filter_img)
      }
      console.log("这是")
      this.img_data = filter_img[0]
      console.log(this.img_data)
      console.log(filter_item)
      console.log(filter_item[0].item)
       that.ruleForm.resourceA = filter_item[0].item
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
}
</style>
