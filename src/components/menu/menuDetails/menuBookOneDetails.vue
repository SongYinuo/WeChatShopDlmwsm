<template lang="html">
  <el-container>
    <el-header class="tittle" v-model="title" v-for="i in name">
      <!-- v-if="this.ruleForm.text!==''&&this.ruleForm.textarea!=='' -->
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{i.title}}
    </el-header>
    <el-row class="book">
      <el-col :span="24" >
        <div class="likePo">
          <img :src="books.thumb" class="bookimg">
          <div class="Like">
           <div id="admire">
                  <img  v-if="books.is_collect===0" src="static/testImg/Focus1.png" class="likeimage"  @click="change()" >
                  <img src="static/testImg/Focus2.png" class="likeimage" v-else @click="change()" >
              </div>
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
export default {
  props: ["article_id"],
  inject: ["reload"],
  data() {
    return {
      title: "书画详情",
      article_ids: "",
      admire: "",
      name: [
        {
          title: "书画详情"
        }
      ],
      books: [
      ]
    };
  },
  mounted() {
    this.getImg();
  },
  methods: {
    getImg() {
      var newId = this.$route.query.id;
      const that = this;
      axios
        .get("/Api/Article/paint_detail" + "?id=" + newId)
         .then(function(res) {
          that.article_ids = res.data.data.is_collect;
           that.books = res.data.data;
        })
        .catch(function(error) {
        });
    },
     change: function() {
      var newId = this.$route.query.id;
      const that = this;
      this.admire == false ? (this.admire = true) : (this.admire = false);
      this.$http
        .post("/Api/User/collect", {
          model: "paint",
          id: newId,
        })
        .then(res => {
          that.$message({
            message: "返回我的收藏，查看收藏内",
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
}
.book .bookPortrait img {
  border-radius: 50px;
  margin-bottom: 10px;
}
.book .bookPhotoTxt {
  line-height: 40px;
}
.likeimage {
  width: 100%;
}
</style>