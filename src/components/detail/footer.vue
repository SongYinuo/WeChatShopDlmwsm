<template lang="html">
  <footer class="footer">
    <!-- <router-link :to="{name:'首页'}" class="footer-index">
      <i class="icon-index"></i>
    </router-link>
    <router-link  :to="{name:'购物车页'}" class="footer-gocar">
      <i class="icon-car"></i>
      <span v-if="count">{{count}}</span>
    </router-link>
    <router-link  :to="{name:'购物车页'}" class="footer-gocar">
      <i class="icon-car"></i>
      <span v-if="count">{{count}}</span>
    </router-link>
    <span class="footer-addcar" @click="addIntoCar">
      加入购物车
    </span> -->
    <el-row style="width: 100%">
      <el-col :span="8">
        <el-col :span="8" class="detail-footer foot-left text-alignCenter pdT1">
          <router-link :to="{name:'收藏'}">
            <div><i class="el-icon-star-off"></i></div>
            <span class="foot-text">收藏</span>
          </router-link>
        </el-col>
        <el-col :span="8" class="detail-footer foot-left text-alignCenter pdT1">
            <div @click="shardRow = true"><i class="el-icon-share"></i></div>
            <span class="foot-text">分享</span>
        </el-col>
        <el-col :span="8" class="detail-footer foot-left text-alignCenter pdT1">
          <router-link :to="{name:'购物车页'}" class="footer-index">
            <div class="footerCar">
              <i class="icon-index"></i>
              <!-- <span class="badge bgRed colorWhite text-alignCenter">1</span> -->
            </div>
            <span class="foot-text">购物车</span>
          </router-link>
        </el-col>
      </el-col>
      <el-col :span="16">
        <el-col :span="12" class="detail-footer foot-right text-alignCenter bgCF2">
            <span class="footer-addcar colorBlack"> 加入购物车</span>
        </el-col>
        <el-col :span="12" class="detail-footer foot-right text-alignCenter bgCOrange">
              <span class="footer-addcar colorWhite"> 立即购买</span>
        </el-col>
      </el-col>
    </el-row>
    <el-row>
    <el-dialog title="" class="detailsDialogRow" :visible.sync="shardRow" width="100%" top="0" :append-to-body='true'>
      <el-row slot="footer" class="dialog-footer pd4">
        <router-link :to="{ name: '分享二维码', params: { id: id, titleName: menuLinkTitle, posterQRcodeId: posterQRcodeId } }">
          <el-col :span="12" class="text-alignCenter">
            <el-col class="shardImg"><img src="../../../static/testImg/sharePosters.png"></el-col>
            <div class="shardText pd2" @click="sharePosters">生成分享海报</div>
          </el-col>
        </router-link>
        <el-col :span="12" class="text-alignCenter">
          <el-col class="shardImg"><img src="../../../static/testImg/shardFriend.png"></el-col>
          <div class="shardText pd2" @click="shardFriend">分享给好友</div>
        </el-col>
      </el-row>
    </el-dialog>
    </el-row>
  </footer>
</template>

<script>
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      shardRow: false,
      id: 'Id123456',
      menuLinkTitle: '二维码',
      posterQRcodeId: 'posterQRcode122201120'
    };
  },
  methods: {
    sharePosters() {
      console.log('分享海报')
    },
    shardFriend() {
      console.log('分享朋友')
    }
  }
  // methods: {
  //   showToggle: function() {
  //     this.isShow = !this.isShow;
  //   }
  // }
  // computed: {
  //   count () {
  //     //页面刷新后 数据会消失,解决:加判断
  //     if (this.$store.state.detail.count == '') {
  //       this.$store.commit('CHANGE_COUNT');
  //     }
  //     return this.$store.state.detail.count
  //   },
  //   productDatasView () {
  //     return this.$store.state.detail.productDatas.view
  //   },
  //   colSelected () {
  //     return this.$store.state.detail.colSelected
  //   },
  //   sizeSelected () {
  //     return this.$store.state.detail.sizeSelected
  //   }
  // },
  // methods: {
  //   addIntoCar () {
  //     //  mint-ui的弹出式提示框
  //     const product = [{
  //       title: this.productDatasView.title,
  //       price: this.productDatasView.price,
  //       size: this.productDatasView.chose[this.sizeSelected].size,
  //       col: this.productDatasView.chose[this.colSelected].col,
  //       id: this.productDatasView.id,
  //       imgPath: this.$store.state.detail.productDatas.swiper[0].imgSrc,
  //       choseBool: false
  //     }];
  //     MessageBox
  //       .confirm
  //       (
  //       `商品名称:${product[0].title}</br>` +
  //       `价格:${product[0].price}</br>` +
  //       `规格:${product[0].size}</br>` +
  //       `颜色:${product[0].col}</br>` +
  //       `商品ID:${product[0].id}</br>`
  //       )
  //       .then(action => {      //点击成功执行这里的函数
  //         this.$store.dispatch('setLocalCount', true);
  //         this.$store.dispatch('addCarList', product);
  //         Toast({
  //           message: '添加成功',
  //           duration: 1000
  //         });
  //       }, function (err) {
  //       });
  //   }
  // }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
@import "../../assets/detail/details.less";

.footer {
  width: 100%;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  height: 14vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  .footerCar {
    position: relative;
    .badge {
      padding: 2px 6px;
      border-radius: 8px;
      .fz(font-size, 18);
      position: absolute;
      line-height: 1;
      left: 12px;
    }
  }
}
</style>
