<template>
  <div>
    <el-container class="header">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>大牌制作中华上下
    </el-container>
    <el-row>
      <!-- :src="array.user_url" -->
      <!-- <video controls="controls" class="menu-video" style="width:80%" :src="article_list.thumb" v-html="article_list.content"></video> -->
      <div v-html="article_list.content"></div>
      <div class="make">{{article_list.title}}</div>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UserVipDetail",
  data: function() {
    return {
        article_id:'',
        article_list:{},
    };
  },
  mounted: function() {
    let that = this;
    that.getData();
  },
  methods: {
    getData: function() {
        // console.log(this.$route.query.id)
        // console.log("2222")
        // console.log(this.$route.params.article_id)
      let that = this;
    //   that.article_id = that.$route.params.article_id
      var article_id = that.$route.query.id
      console.log(that.$route.query.id)
      console.log(article_id)
    //   Axios({
    //     methods: "get",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //     url: "/Api/User/vip_detail?article_id",
    //     data:{
    //         article_id:that.article_id
    //     }
    //   })
    //     .then(function(res) {
    //       console.log("111");
    //       console.log(res);
    //     //   that.goodslist = res.data.data;
    //     //   console.log(that.goodslist);
    //     })
    //     .catch({});
    //  getData(){
      axios.get('/Api/User/vip_detail?article_id=' + article_id)
      .then(function(res){
          console.log(1111)
          console.log(res)
         that.article_list = res.data.data
        // console.log(res)
      }).catch(function(error){
        // console.log(error)
      })
    // }
    }
  }
};
</script>
<style lang="">
/* @import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less"; */
.back {
  margin-right: 30%;
}
.back i {
  margin-top: 5px;
  margin-left: 50%;
}
.header {
  height: 40px;
  line-height: 40px;
}
.make {
  font-size: 1.5rem;
  color: #313131;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
.menu-video {
  width: 80%;
  display: block;
  margin: 0 auto;
}
</style>