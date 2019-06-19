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
      <el-dialog title="商品规格信息" :visible.sync="dialogFormVisible" top="0" class="detailsDialog">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
          <!-- <el-row class="fr inputNumber"><el-input-number :min="1" :max="99"></el-input-number></el-row> -->
           <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字" style="left:35%;top:100px;"></el-input-number>
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
import Axios from 'axios';
export default {
  props: ["goods", "filter_spec","spec_goods_price","prom"],
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
      // 商品价格
      list_price:[],
      // 默认价格
      default_price:[],
      // 默认价格数组
      price_deta:[],
      // 显示的价格
      phone_price:'',
      // 点击属性实现的价格
      price_attr:[],
      // 下标
      indexJoin:'',
      // 是否有活动
      prom:[],
      // 默认传值
      color_list:[],
      // 显示价格的字符串
      font_zi:[],
      zong_han:'未选',
      listJoin:[],
      Name_list:[],
      num1: 1,
      // 属性名字
      attrate_name:'未选',
      // 是否有属性列表
      filter_spec_attr_list:[],
    };
  },
  methods: {
    submitForm(formName) {
      var that = this
      console.log("序号")
      console.log(that.Name)
      that.Name.slice(Object.values(that.filter_spec).length)
     that.Name.sort(function(a,b){
          return a - b
        })
      var nameSlice = that.Name.join('_')
      console.log(nameSlice)
      console.log(that.Name)
       axios.get("/Api/Goods/get_goods_spec_name?goods_spec=" + nameSlice)
        .then(function(res) {
          console.log("进入函数")
          console.log(res)
          that.attrate_name = res.data.data
        //  if(res.data.code == 1){
        //    this.$message('删除成功');
        //  }
        });
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogFormVisible = false;
          console.log(that.default_price)
          that.$emit('lithToFather',that.Name,that.default_price)
          for(var i=0;i<that.Name.length;i++){
            that.font_zi.push(that.Name[i])
            console.log("添加")
            console.log(that.font_zi.join(','))
          }
        that.zong_han = that.font_zi.join('_')
        that.zong_han.sort(function(a,b){
          return a-b;
        })
         console.log("123456")
        } else {
          return false;
        }
      });
    },
    radio_click: function(name,index) {
      console.log(this.Name)
      var that = this
      var monery = [];
      var monert_list = [];
      var monery_id = [];
      var objAttr = Object.values(that.filter_spec)
        that.price_attr.push(name.item_id)
        // Object.values(that.filter_spec).length
        const sliceArr = that.price_attr.slice(-Object.values(that.filter_spec).length)
        console.log(sliceArr)
        sliceArr.sort(function(a,b){
          return a - b
        })
        var listJoin = sliceArr.join('_');
        that.Name_list = listJoin
        console.log("序列")
      for(var i=0;i<that.list_price.length;i++){
        monery.push(that.list_price[i].key)
        monert_list.push(that.list_price[i])   
      }
       that.indexJoin = monery.indexOf(listJoin)
        that.phone_price = monert_list[that.indexJoin].price
      if(name.src == ""){
        return
      }else{
        that.img_data = name.src
      }
    }
  },
  mounted() {
    var that = this;
    console.log("对象变成数组");
    console.log(that.filter_spec);
  },
  watch: {
    // 使用监听的方式，监听数据的变化
    goods(val) {
      console.log("商品")
      console.log(val)
      var that = this;
      that.goods = val;
    },
    filter_spec(val) {
      var that = this;
      that.filter_spec = val;
      var filter_spec_attr = Object.values(that.filter_spec)
      console.log("属性")
      console.log(filter_spec_attr)
      that.filter_spec_attr_list = filter_spec_attr
      var filter_item = [];
      var filter_img = [];
      // 默认价钱数组
      var price_list = [];
      for(var i=0;i<filter_spec_attr.length;i++){
        console.log(filter_spec_attr[i])
        filter_item = filter_spec_attr[i]
        this.Name.push(filter_item[0].item_id)
        this.Name_list.push(filter_item[0].item_id)
        this.img_data = filter_item[0].item;
        filter_img.push(filter_item[0].src)
        that.default_price.push(filter_spec_attr[i][0].item_id)
        that.color_list.push(filter_spec_attr[i].item)
      }
      console.log(that.color_list)
      that.default_price = that.default_price.join("_");
      this.img_data = filter_img[0]
       that.ruleForm.resourceA = filter_item[0].item
    },
    // 价格
    spec_goods_price(val){
      var that = this
      that.list_price = Object.values(val)
      var monery = [];
      var monert_list = [];
      for(var i=0;i<that.list_price.length;i++){
        monery.push(that.list_price[i].key)
        monert_list.push(that.list_price[i])
      }
      var monery_index = monery.indexOf(that.default_price)
      that.phone_price = monert_list[monery_index].price
    },
    // 是否有活动价格
    prom(val){
      console.log("活动")
      console.log(val)
      this.prom = val
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
  .input_style{
    margin-left: 32%;
    top:50px;
  }
}
</style>