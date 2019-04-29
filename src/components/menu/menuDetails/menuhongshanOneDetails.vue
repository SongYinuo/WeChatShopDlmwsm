<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      旅游攻略
    </el-header>
    <div class="strategy">
      <el-row class="pd2">
        <el-col :span="22" :offset="1">
          <div v-for="itemtxt in itemtxts">
            <div class="Period1 pd2">{{itemtxt.txtOne}}</div>
            <div class="Period2 pd2">{{itemtxt.tittle}}</div>
            <div class="Period1 pd2">{{itemtxt.txt}}</div>
            <div class="Period2 pd2"> {{itemtxt.tittleTwo}}</div>
            <div class="Period1 pd2">{{itemtxt.txtTwo}}</div>
            <img :src="itemtxt.photo" class="Periodimg">
            <div class="Period2 pd2">{{itemtxt.tittleThree}}</div>
            <div class="Period1 pd2">{{itemtxt.txtThree}}</div>
            <video :src="itemtxt.video" controls="controls" class="PeriodVd"></video>
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
  export default {
    data() {
      return {
        itemtxts: [
          {
            txtOne: " 首先，出行前一定要提前预定好门票，住宿，如果不浪费太多的精力也可以找个当地向导、找那种纯玩自助游最好，性价比很高。跟团游玩价格虽然便宜，但是后期自费太多了，还有购物，人多了玩也不自由。",
            tittle: "1.导游攻略:",
            txt: " 首先，出行前一定要提前预定好门票，住宿，如果不浪费太多的精力也可以找个当地向导、找那种纯玩自助游最好，性价比很高。跟团游玩价格虽然便宜，但是后期自费太多了，还有购物，人多了玩也不自由。",
            tittleTwo: "2.游玩攻略:",
            txtTwo: "第一天：全国各地--昆明接机--入住温泉酒店--自由活动,第二天：昆明--石林--前往楚雄--赠送野生菌火锅--入住酒店,第三天：大理古城—洱海私人游艇----吉普车环海--入住酒店",
            photo: "static/testImg/tourism01.jpg",
            tittleThree: "3.注意事项:",
            txtThree: "第一天：全国各地--昆明接机--入住温泉酒店--自由活动,第二天：昆明--石林--前往楚雄--赠送野生菌火锅--入住酒店,第三天：大理古城—洱海私人游艇----吉普车环海--入住酒店",
            video: "http://www.runoob.com/try/demo_source/movie.mp4",

          }
        ],
        lists: [
          {
            imgUrl: "static/testImg/product-details01-3.jpg",
            tittle: "【古董人雕像】价值高真品包邮",
            price: "¥1.2w",
            id: "21000"
          }, {
            imgUrl: "static/testImg/product-details01-3.jpg",
            tittle: "【古董人雕像】价值高真品包邮",
            price: "¥1.2w",
            id: "21000"
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  @import "../../../assets/index/style.less";
  @import "../../../assets/header.less";
  @import "../../../assets/search/search.less";
  @import "../../../assets/menu/menu.less";
  @import "../../../assets/menu/details.less";
</style>