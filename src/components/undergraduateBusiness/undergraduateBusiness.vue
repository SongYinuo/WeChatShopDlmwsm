<template lang="html">
    <!-- <mt-header title="支持大学生创业">
    </mt-header> -->
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
        支持大学生创业
        </el-header>
        <el-main class="undergraduateBusinesRow">
            <el-row>
                <el-col :span="22" :offset="1" class="">
                    <div class="lh1-2 letterSpacing1 pd2 textIndent2-8" v-html="undergraduateBusinessDetails.content">
                        {{undergraduateBusinessDetails.content}}
                    </div>
                    <div class="detailsImg pd1">
                        <img :src="undergraduateBusinessDetails.thumb">
                    </div>
                    <!-- <div class="lh1-2 letterSpacing1 pd2 textIndent2-8">
                        {{undergraduateBusinessDetails.explainText}}
                    </div>
                    <div class="lh1-2 letterSpacing1 pd2 textIndent2-8">
                        {{undergraduateBusinessDetails.explainTextTwo}}
                    </div>
                    <div class="detailsImg pd1">
                        <img :src="undergraduateBusinessDetails.detailsTwo">
                    </div> -->
                </el-col>
                <el-col :span="8" :offset="8" class="pd2">
                    <router-link :to="{ name: '顺格格' }">
                        <el-button plain class="joinIn">我也要加入</el-button>
                     </router-link>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      undergraduateBusinessDetails: {
        // title:
        //   "教育部高教司有关负责人到浙大调研第五届中国“互联网+”大学生创新创业大赛筹备情况",
        // detailsImg: "static/testImg/mianmo.png",
        // explainText:
        //   "2月16日，教育部高教司二级巡视员、综合处处长吴爱华一行来浙江大学，调研第五届中国“互联网+”大学生创新创业大赛筹备情况并组织座谈会。",
        // explainTextTwo:
        //   "浙江大学党委副书记邬小撑在主持座谈会时表示，办好第五届中国“互联网+”大学生创新创业大赛是教育部交给浙江大学的光荣使命，学校将组织力量精心筹办，力争办出一届出彩出色、令人难忘的大赛。",
        // detailsTwo: "static/testImg/pic1@2x.png"
     }
    };
  },
  mounted() {
    this.getImg();
  },
  methods:{
    getImg(){
      const that = this
      axios.get('/php/Index/college_student?')
      .then(function(res){
         console.log(res,res.data.data)
        that.undergraduateBusinessDetails = res.data.data;
      }).catch(function(error){
        console.log(error)
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/index/style.less";
@import "../../assets/header.less";
.el-main {
  padding: 0;
}
.undergraduateBusinesRow {
  .fz(font-size, 28);
  .detailsImg {
    img {
      width: 100%;
    }
  }
  .joinIn {
    width: 100%;
  }
}
</style>