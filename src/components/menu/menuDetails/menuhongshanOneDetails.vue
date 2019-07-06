<template lang="html">
  <el-container>
    <el-header class="tittle" v-model="i.title" v-for="i in name">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{i.title}}
    </el-header>
    <div class="strategy">
      <el-row class="pd2">
        <div id="admire">
           <img v-if="itemtxts.is_collect===0" src="static/testImg/Focus1.png" id="likeimage" @click="change()">
           <img src="static/testImg/Focus2.png" id="likeimage" v-else @click="change()">
        </div>
        <el-col :span="22" :offset="1">
          <div>
            <div class="Period2 pd2">{{itemtxts.title}}</div>
            <div class="Period1 pd2" v-html="itemtxts.content" style="width:100%">{{itemtxts.content}}</div>
          </div>
        </el-col>
        <el-col :span="22" :offset="1" class=" list pdT12">
          <div v-for="list in lists">
            <router-link :to="{ name:'详情页',params: { id: list.goods_id }}">
              <el-row>
                <el-col :span="8" class="pdT4">
                  <img :src="list.original_img" class="Periodimg">
                </el-col>
                <el-col :span="16">
                  <div class="listTittle pdT6 lh1-6">{{list.goods_name}}</div>
                  <div class="colorRed  pdT6 price">{{list.shop_price}}</div>
                  <div class="buy" v-if="list.goods_name!=''">立即购买</div>
                </el-col>
              </el-row>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>
<script type="text/javascript">
import axios from "axios";
export default {
  inject: ["reload"],
  data() {
    return {
      name: [
        {
          title: "攻略"
        }
      ],
      itemtxts: [],
      lists: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var newId = this.$route.params.id;
      const that = this;
      axios
        .get("/Api/Article/article_detail" + "?article_id=" + newId)
        .then(function(res) {
          that.itemtxts = res.data.data;
          that.lists = res.data.data.goods_data;
        })
        .catch(error => {});
    },
    change: function() {
      var newId = this.$route.params.id;
      const that = this;
      this.admire == false ? (this.admire = true) : (this.admire = false);
      this.$http
        .post("/Api/User/collect", {
          model: "article",
          id: newId
        })
        .then(res => {
          console.log(res)
          that.$message({
            message: "返回我的藏拍，查看藏拍内容",
            type: "success"
          });
          that.reload();
        })
        .catch(error => {});
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
@import "../../../assets/search/search.less";
@import "../../../assets/menu/menu.less";
@import "../../../assets/menu/details.less";
.strategy{
  img,
  video {
    width: 100%;
  }
  #likeimage {
  width: 34px;
  height: 34px;
  right: 12px;
  top: 12px;;
  position: absolute;
  }
  .buy {
    font-size: 12px;
    padding: 2vw 3vw;
  }
}
</style>
