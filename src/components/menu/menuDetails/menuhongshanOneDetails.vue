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
        <el-col :span="22" :offset="1">
          <div>
            <div class="Period2 pd2">{{itemtxts.title}}</div>
            <div class="Period1 pd2" v-html="itemtxts.content">{{itemtxts.content}}</div>
          </div>
        </el-col>
        <el-col :span="22" :offset="1" class=" list pdT12">
          <div v-for="list in lists">
            <router-link :to="{ name:'详情页',query: { id: list.id }}">
              <el-row>
                <el-col :span="8" class="pdT4">
                  <img :src="list.imgUrl" class="Periodimg">
                </el-col>
                <el-col :span="16">
                  <div class="listTittle pdT6 lh1-6">{{list.tittle}}</div>
                  <div class="colorRed  pdT6 price">{{list.price}}</div>
                  <div class="buy">立即购买</div>
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
  data() {
    return {
      name: [
        {
          title: "攻略"
        }
      ],
      itemtxts: [],
      lists: [
        {
          imgUrl: "static/testImg/product-details01-3.jpg",
          tittle: "【古董人雕像】价值高真品包邮",
          price: "¥1.2w",
          id: "21000"
        },
        {
          imgUrl: "static/testImg/product-details01-3.jpg",
          tittle: "【古董人雕像】价值高真品包邮",
          price: "¥1.2w",
          id: "21000"
        }
      ]
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
        });
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
}
</style>
