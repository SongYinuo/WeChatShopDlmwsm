<template lang="html">
  <section class="details">
    <el-row class="auctionDetails auctionBgPink pd2" v-if="data.state===!''">
      <el-col :span="22" :offset="1">
        <el-col :span="4" class="">
            <div class="colorWhite text-alignCenter">拍卖</div>
            <div class="colorWhite text-alignCenter mgT1">主场会</div>
        </el-col>
         <!-- <el-col :span="8" :offset="12" v-if="data.unknowAuction.state==='未拍卖'">
           <div class="colorWhite text-alignRight">{{data.unknowAuction.unknownDate}}{{data.unknowAuction.unknownTime}}开抢</div>
           <div class="colorWhite text-alignRight mgT1">{{data.unknowAuction.inventoryMax}}限件</div>
         </el-col> -->
         <el-col :span="12" :offset="8" v-if="data.auctionIng.state==='已拍卖'">
           <div class="colorWhite text-alignRight">距离结束还剩 {{data.auctionIng.unknownTime}}</div>
           <div class="colorWhite text-alignRight mgT1">库存剩余：{{data.auctionIng.inventory}}件</div>
         </el-col>
      </el-col>
    </el-row>
    <el-row class="brB10 mgB2">
        <el-col :span="22" :offset="1" class="details-explainRow">
              <el-col :span="24" class="explainRowPrice colorRed pdB2">¥{{data.price}}元</el-col>
              <el-col :span="24" class="explainRowTitle pdB2 lh1-2">{{data.title}}</el-col>
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
        <el-col class="specificationRow brB1">
          <el-col :span="18">
            运费
          </el-col>
          <el-col :span="6" class="text-alignRight">¥{{data.freightPrice}}</el-col>
        </el-col>
        <el-col class="specificationRow">
          <el-col :span="18">
            库存
          </el-col>
          <el-col :span="6" class="text-alignRight">{{data.inventory}}</el-col>
        </el-col>
      </el-col>
    </el-row>
  
    <el-row>
      <el-dialog title="商品规格信息" :visible.sync="dialogFormVisible" top="0">
        <el-row class="detailsRow-specification">
            <el-col :span="24">
                <el-col :span="8" class="specificationProductImg">
                  <img :src="data.specification.url">
                </el-col>
                <el-col :span="16">
                    <span class="colorRed specificationProductText">¥{{data.specification.price}}</span>
                </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="24">
                <div class="pd1">{{data.specification.specificationUnit}}</div>
                <el-radio-group v-for="k in data.specification.specificationData">
                    <el-col :span="23" :offset="1">
                      <el-radio-button label="k.checked" class="radio mgTB2">{{k.text}}</el-radio-button>
                    </el-col>
                </el-radio-group>
              </el-col>
              <el-col :span="24">
                <div class="pd1">{{data.specification.typeUnit}}</div>
                <el-radio-group v-for="k in data.specification.typeData">
                    <el-col :span="23" :offset="1">
                        <el-radio-button label="k.checked" class="mgTB2">{{k.text}}</el-radio-button>
                      </el-col>
                </el-radio-group>
              </el-col>
            </el-col>

        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
  </section>
</template>

<script>
import { MessageBox } from "mint-ui";
import { mapState } from "vuex";

export default {
  data() {
    return {
      radio3: "1",
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
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
            { text: "50cm*80cm", btnId: 0, checked: false },
            { text: "30cm*60cm", btnId: 1, checked: false },
            { text: "10cm*40cm", btnId: 2, checked: false },
            { text: "50cm*80cm", btnId: 0, checked: false },
            { text: "30cm*60cm", btnId: 1, checked: false },
            { text: "10cm*40cm", btnId: 2, checked: false }
          ],
          typeUnit: "样式",
          typeData: [
            { text: "鹰雕像", btnId: 0, checked: false },
            { text: "虎雕像", btnId: 1, checked: false },
            { text: "象雕像", btnId: 2, checked: false },
            { text: "50cm*80cm", btnId: 0, checked: false },
            { text: "30cm*60cm", btnId: 1, checked: false },
            { text: "10cm*40cm", btnId: 2, checked: false }
          ]
        }
      }
    };
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
  position: fixed;
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
</style>