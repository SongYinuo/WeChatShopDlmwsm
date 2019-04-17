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
        <el-col :span="8" class="detail-footer foot-left text-alignCenter">
          <router-link :to="{name:'收藏'}">
            <div><i class="el-icon-star-off"></i></div>
            <span class="foot-text">收藏</span>
          </router-link>
        </el-col>
        <el-col :span="8" class="detail-footer foot-left text-alignCenter">
          <router-link :to="{name:'分享'}" class="footer-index">
            <div><i class="el-icon-share"></i></div>
            <span class="foot-text">分享</span>
          </router-link>
        </el-col>
        <el-col :span="8" class="detail-footer foot-left text-alignCenter">
          <router-link :to="{name:'购物车页'}" class="footer-index">
            <div><i class="icon-index"></i></div>
            <span class="foot-text">购物车</span>
          </router-link>
        </el-col>
      </el-col>
      <el-col :span="16">
        <el-col :span="12" class="detail-footer foot-right text-alignCenter bgCF2">
            <span class="footer-addcar colorBlack" @click="addIntoCar"> 加入购物车</span>
        </el-col>
        <el-col :span="12" class="detail-footer foot-right text-alignCenter bgCOrange">
              <span class="footer-addcar colorWhite" @click="addIntoCar"> 立即购买</span>
        </el-col>
      </el-col>
    </el-row>
  </footer>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  computed: {

    count () {
      //页面刷新后 数据会消失,解决:加判断
      if (this.$store.state.detail.count == '') {
        this.$store.commit('CHANGE_COUNT');
      }
      return this.$store.state.detail.count
    },
    productDatasView () {
      return this.$store.state.detail.productDatas.view
    },
    colSelected () {
      return this.$store.state.detail.colSelected
    },
    sizeSelected () {
      return this.$store.state.detail.sizeSelected
    }
  },

  methods: {
    addIntoCar () {
      //  mint-ui的弹出式提示框
      const product = [{
        title: this.productDatasView.title,
        price: this.productDatasView.price,
        size: this.productDatasView.chose[this.sizeSelected].size,
        col: this.productDatasView.chose[this.colSelected].col,
        id: this.productDatasView.id,
        imgPath: this.$store.state.detail.productDatas.swiper[0].imgSrc,
        choseBool: false
      }];


      MessageBox
        .confirm
        (
        `商品名称:${product[0].title}</br>` +
        `价格:${product[0].price}</br>` +
        `规格:${product[0].size}</br>` +
        `颜色:${product[0].col}</br>` +
        `商品ID:${product[0].id}</br>`
        )
        .then(action => {      //点击成功执行这里的函数
          this.$store.dispatch('setLocalCount', true);
          this.$store.dispatch('addCarList', product);

          Toast({
            message: '添加成功',
            duration: 1000
          });
        }, function (err) {
        });
    }
  }
}
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
}
</style>
