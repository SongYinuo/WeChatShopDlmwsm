<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      书画详情
    </el-header>
    <el-row class="book">
      <el-col :span="24" v-for="book in books">
        <div class="likePo">
          <img :src="book.imageUrl" class="bookimg">
          <div class="Like">
            <v-like />
          </div>
        </div>
        <div class="bookTittle pdT6">{{book.tittle}}</div>
        <div class="bookTxt pdT6 text-alignCenter">{{book.txt}}</div>
        <div class="bookTxt pdT6 text-alignCenter">{{book.smtxt}}</div>
        <div class="bookDetails ">{{book.details}}</div>
        <div class="ptbg"></div>
        <span class="ptAttribute">{{book.attribute}}</span>
        <el-row>
          <el-col :span="22" :offset="1" class="bookNav">
            <el-col :span="3" :offset="1" class="bookPortrait">
              <img :src="book.photoUrl">
            </el-col>
            <el-col :span="18" :offset="1">
              <span class="bookPhotoTxt">{{book.photoTxt}}</span>
            </el-col>

          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </el-container>
</template>
<script>
  import Like from "@/common/like.vue";
  export default {
    components: {
      "v-like": Like
    },
    data() {
      return {
        books: [
          {
            imageUrl: "static/testImg/youhua.jpg",
            tittle: "我想要最狂的风和最近的海",
            txt: "哈桑六艺|40X40cm|2019",
            smtxt: "艺术微喷",
            details: "可触及但是又不可触碰的身体",
            photoUrl: "static/testImg/shunPrincess.png",
            photoTxt: "BB..颜无画",
            attribute: "热门"
          }
        ]
      };
    }
  };
</script>
<style lang="less">
  @import "../../../assets/index/indexSwiper.less";
  @import "../../../assets/header.less";
  @import "../../../assets/index/style.less";
  @import "../../../assets/menu/details.less";
</style>