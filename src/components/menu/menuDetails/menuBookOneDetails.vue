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
          <img :src="books.thumb" class="bookimg">
          <div class="Like">
            <v-like />
          </div>
        </div>
        <div class="bookTittle pdT6">{{books.title}}</div>
        <div class="bookTxt pdT6 text-alignCenter">{{books.img_author}}|{{books.img_width}}×{{books.img_height}}|{{books.img_year}}</div>
        <div class="bookTxt pdT6 text-alignCenter">{{books.img_material}}</div>
        <div class="bookDetails " v-html="books.content">{{books.content}}</div>
        <div class="ptbg" v-if="books.is_hot===1">
            <span class="ptAttribute">热门</span>
        </div>
        <div class="ptbg" v-if="books.is_hot===-1" style="display:none;">
            <span class="ptAttribute">热门</span>
        </div>
        <el-row>
          <el-col :span="22" :offset="1" class="bookNav">
            <el-col :span="3" :offset="1" class="bookPortrait">
              <img :src="books.author_head_pic">
            </el-col>
            <el-col :span="18" :offset="1">
              <span class="bookPhotoTxt">{{books.author}}</span>
            </el-col>

          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </el-container>
</template>
<script>
 import axios from "axios";
  import Like from "@/common/like.vue";
 
  export default {
    components: {
      "v-like": Like
    },
    data() {
      return {
        books: [
          // {
          //   imageUrl: "static/testImg/youhua.jpg",
          //   tittle: "我想要最狂的风和最近的海",
          //   txt: "哈桑六艺|40X40cm|2019",
          //   smtxt: "艺术微喷",
          //   details: "可触及但是又不可触碰的身体",
          //   photoUrl: "static/testImg/shunPrincess.png",
          //   photoTxt: "BB..颜无画",
          //   attribute: "热门"
          // }
        ]
      };
    },mounted(){
      this.getImg();
    },methods:{
      getImg(){
        const that = this;
        axios
        .get("/php/Article/paint_detail?id=2")
        .then(function(res){
          // console.log(res)
          that.books = res.data.data;
        })
        .catch(function(error){
          // console.log(error)
        });   
              
      }
    }
  };
</script>
<style lang="less">
  @import "../../../assets/index/indexSwiper.less";
  @import "../../../assets/header.less";
  @import "../../../assets/index/style.less";
  @import "../../../assets/menu/details.less";
.book .ptAttribute {
    font-size: 11px;
    position: absolute;
    left: -37px;
    top: -28px;
    color: #fff;
    z-index: 99;
    width: 50px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-180deg);
}.book .bookPortrait img{
      border-radius: 50px;
      margin-bottom: 10px;
}.book .bookPhotoTxt{
  line-height: 40px;
}
</style>