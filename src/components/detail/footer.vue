<template lang="html">
  <footer class="footer">
    <el-row style="width: 100%">
      <el-col :span="8">
        <el-col :span="8" class="detail-footer foot-left text-alignCenter pdT1">
            <div><i class="el-icon-star-off"></i></div>
            <span class="foot-text" @click="clickCollect">收藏</span>
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
            <span class="footer-addcar colorBlack" @click="add_cart"> 加入购物车</span>
        </el-col>
        <el-col :span="12" class="detail-footer foot-right text-alignCenter bgCOrange">
              <span class="footer-addcar colorWhite"> 立即购买</span>
        </el-col>
      </el-col>
    </el-row>
    <el-row>
    <el-dialog title="" class="detailsDialogRow" :visible.sync="shardRow" width="100%" top="0" :append-to-body='true'>
      <el-row slot="footer" class="dialog-footer pd4">
        <router-link :to="{ name: '分享二维码',params: { id: good_id,} }">
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
import axios from "axios";
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  props: ["price_list"],
  data() {
    return {
      shardRow: false,
      // id: "Id123456",
      menuLinkTitle: "二维码",
      posterQRcodeId: "posterQRcode122201120",
      // 商品id
      good_id:'',
      goods_list_price:[],
    };
  },
  mounted(){
    var  that = this
     that.good_id =  that.$route.params.id;
  },
  methods: {
    sharePosters() {
      console.log("分享海报");
    },
    shardFriend() {
      console.log("分享朋友");
    },
    clickCollect() {
      this.$message({
        message: "恭喜你，收藏成功",
        type: "success"
      });
    },
    // 加入购物车
    add_cart:function(){
      var that = this
      console.log("加入购物车")
      console.log(that.listJoin)
      if(that.goods_list_price.length == 0){
        that.$message({
          message:'请选择商品属性',
          type:'success'
        })
        return
      }else{
         that.$http.post('/Api/Cart/cart_add',{goods_id:that.good_id,goods_num:1,goods_spec:that.goods_list_price}).then(res =>{
           console.log(res)
           if(res.data.code == 1){
            //  购物车页
              this.$router.push({ name: '购物车页' })
            //  this.$router.push("/cart")
           }
         }).catch(error=>{})
      }
    }
  },
  mounted(){
    var that = this
    that.good_id =  that.$route.params.id
    console.log("价格列表")
    console.log(that.price_list)
  },
   watch:{
    price_list(val){
      console.log("哈哈哈")
      console.log(val)
      this.goods_list_price = val
    }
  },
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
