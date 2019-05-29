<template lang="html">
  <section>
    <div class="indexComapnyRank">
       <div class="indexSwiperHeader">
          <el-row>
            <el-col :span="22" :offset="1">
              <el-col :span="16">
                <div class="headerTitle pdB2 pdT2">最具有影响力排名</div>
              </el-col>
              <el-col :span="8">
                <div class="indexSwiperHeaderMore">
                  <router-link :to="{ name: '最具有影响力排名页' }">
                      <a>查看更多<i class="el-icon-arrow-right"></i></a>
                  </router-link>
                </div>
              </el-col>
            </el-col>
          </el-row>
        </div>
    </div>
    <div class="rankingComapnyRow">
        <el-row class="companyRow">
          <el-col :span="22" :offset="1" class="brB1 pdB2">
                <el-col :span="15" class="">
                    <div>
                        <el-col :span="24" class="companyRowHearder mgTB2">
                            <img src="../../../static/testImg/first.png">
                            <span v-for="(k,index) in companyRanksArray" v-if="index == 0">{{k.title}}</span>
                        </el-col>
                        <el-col :span="24" class="firstCompanyPic">
                            <img src="../../../static/testImg/first.png" class="topIcon">
                            <div v-for="(k,index) in companyRanksArray" v-if="index == 0">
                            <img :src="k.thumb"  class="first">
                            </div>
                        </el-col>
                    </div>
                </el-col>
                <el-col :span="8" :offset="1">
                    <div>
                        <el-col :span="24" class="companyRowHearder mgTB2">
                            <img src="../../../static/testImg/second.png">
                           <span v-for="(k,index) in companyRanksArray" v-if="index == 1">{{k.title}}</span>
                        </el-col>
                        <el-col :span="24" class="secondCompanyPic">
                            <img src="../../../static/testImg/second.png" class="topIcon">
                           <div v-for="(k,index) in companyRanksArray" v-if="index == 1">
                            <img :src="k.thumb" class="twophoto">
                            </div>
                        </el-col>
                    </div>
                    <div>
                        <el-col :span="24" class="companyRowHearder mgTB2">
                            <img src="../../../static/testImg/thirdly.png">
                             <span v-for="(k,index) in companyRanksArray" v-if="index == 2">{{k.title}}</span>
                        </el-col>
                        <el-col :span="24" class="thirdlyCompanyPic">
                            <img src="../../../static/testImg/thirdly.png" class="topIcon">
                            <div v-for="(k,index) in companyRanksArray" v-if="index == 2">
                            <img :src="k.thumb" class="twophoto" >
                            </div>
                        </el-col>
                    </div>
                </el-col>
                </el-col>
            </el-row>
    </div>
</div>
  </section>
</template>

<script>
import { Lazyload } from "mint-ui";
import axios from "axios";
export default {
  data(){
    return{
      companyRanksArray:[],
    }

  },mounted(){
    this.getData();
  },methods:{
    getData(){
      const that = this;
      axios 
      .get("/Api/Index/company_sort?size=12")
      .then(function(res){
        console.log(res.data.data);
        that.companyRanksArray = res.data.data;
      }) 
      .catch(function(error){

      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
@import "../../assets/index/indexSwiper.less";
.rankingComapnyRow {
  overflow: hidden;
  .companyRow {
    .companyRowHearder {
      line-height: 12vw;
      height: 12vw;
      .fz(font-size, 28);
    }
  }
  .firstCompanyPic {
    position: relative;
    img {
      width: 100%;
      border-radius: 2vw;
    }
    .topIcon {
      top: 8px;
      left: 8px;
      width: 32px;
      height: 32px;
      position: absolute;
    }
  }
  .secondCompanyPic,
  .thirdlyCompanyPic {
    position: relative;
    img {
      width: 100%;
      border-radius: 2vw;
    }
    .topIcon {
      top: 8px;
      left: 8px;
      width: 32px;
      height: 32px;
      position: absolute;
    }
  }

}.first{
  height: 200px;
}.twophoto{
  height: 70px;
}
</style>
