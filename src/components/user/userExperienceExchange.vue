<template lang="html">
    <el-container>
      <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
              <i class="el-icon-arrow-left"></i>
          </div>
        心得
      </el-header>
    
    <el-row>
      <el-col :span="22" :offset="1">
         <div v-for="array in arrays">
            <router-link :to="{name: '种草详情',query: { id: array.article_id,title:array.title }}">
              <el-row>
                <el-col :span="22">
                  <img :src="array.author_head_pic" v-on:error.once="moveErrorImg($event)" class="fl menuHeader">
                  <div class="fl menuHead-txt">{{array.author}}</div>
                  <div class="fl cl menuHead-smtxt omit">{{array.confirm_time_text}}</div>
                  <p class="smalltxt-p cl fl">{{array.content}}</p>
                  <div class="cl smalltxt-div">{{array.title}}</div>
                    <div  v-if="array.is_confirm===1">
                    <span class="audit" >审核中</span>
                    </div>
                    <div  v-if="array.is_confirm===-1">
                    <span class="audit">审核未通过</span>
                    </div>
                    <div  v-if="array.is_confirm===2" style="display:none;">
                    <span >审核通过</span>
                    </div>
                </el-col>
              </el-row>
              <el-row type="flex" class="row-bg smallimg ">
                <el-row>
                  <div class="morePhoto1">
                    <el-col :span="7" :offset="1" v-for="b in array.user_url"
                      v-if="array.user_type===1 && array.user_url.length===1" justify="start">
                      <img :src="b" class="CommunityImg">
                    </el-col>
                    <!--单图-->
                  </div>
                </el-row>
                <el-row>
                  <div class="morePhoto">
                    <el-col :span="7" :offset="1" v-for="b in array.user_url"
                      v-if="array.user_type===1 && array.user_url.length > 1" justify="start">
                      <img :src="b" class="CommunityImg2">
                    </el-col>
                   <!--多图 -->
                  </div>
               </el-row>
                <el-row>
                  <el-col :span="21" :offset="3">
                    <video :src="array.user_url" controls="controls" class="menu-video"
                      v-if="array.user_type===2"></video>
                  </el-col>
                </el-row>
              </el-row>
            </router-link>
         </div>
      </el-col> 
    </el-row> 
    </el-container>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
       arrays: []
    };
  },mounted(){
    this.getData();
  },methods:{
    handleClick(tab, event) {
        // console.log(tab, event);
      },
     getData() {
        const that = this;
        axios
          .get("/Api/User/article_list")
          .then(function (res) {
            console.log(res)
            that.arrays = res.data.data;
          })
          .catch(function (error) {
            // console.log(error)
          });
      },
      }
  };

</script>

<style lang="less">
  @import "../../assets/index/style.less";
  @import "../../assets/header.less";
  @import "../../assets/menu/menu.less";

  .el-tabs__nav {
    margin-left: 35%;
  }

  .menuHead-smtxt {
    margin-left: 45px;
    .fz(font-size, 22);
    color: #949494;
    margin-top: -20px;
  }

  .smalltxt-p {
    .fz(font-size, 28);
    color: #313131;
    font-weight: bold;
    margin-left: 45px;
  }

  .menuTime {
    // position: absolute;
    // bottom: 10px;
    .fz(font-size, 24);
    color: #adaeaf;
  }

  .CommunityImg {
    width: 32%;
  }

  .menu-video {
    height: 310px;
    width: 90%;
  }

  .morePhoto,
  .CommunityImg {
    width: 90%;
    margin-left: 10%;
  }.audit {
  position: absolute;
  color: #ee4040;
  right: 10px;
  top: 15px;
  .fz(font-size, 24);
}
</style>