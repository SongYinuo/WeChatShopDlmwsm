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
                <router-link :to="{ name: '最具有影响力排名页'}">
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
              <el-col :span="24" class="companyRowHearder mgTB2" v-for="(k,index) in companyRanksArray"
                v-if="index == 0">
                <img class="imgLogo" :src="k.thumb">
                <span>{{k.title}}</span>
              </el-col>
              <el-col :span="24" class="firstCompanyPic" v-for="(k,index) in companyRanksArray" v-if="index == 0">
                <router-link :to="{ name: '公司排名详情', query: { id: k.article_id }  }">
                  <img src="../../../static/testImg/first.png" class="topIcon">
                  <div v-for="(k,index) in companyRanksArray" v-if="index == 0">
                    <img :src="k.thumb" class="first">
                  </div>
                </router-link>
              </el-col>
            </div>
          </el-col>
          <el-col :span="8" :offset="1">
            <div>
              <el-col :span="24" class="companyRowHearder mgTB2" v-for="(k,index) in companyRanksArray"
                v-if="index == 1">
                <img class="imgLogo" :src="k.thumb">
                <span>{{k.title}}</span>
              </el-col>
              <el-col :span="24" class="secondCompanyPic" v-for="(k,index) in companyRanksArray" v-if="index == 1">
                <router-link :to="{ name: '公司排名详情', query: { id: k.article_id }  }">
                  <img src="../../../static/testImg/second.png" class="topIcon">
                  <div v-for="(k,index) in companyRanksArray" v-if="index == 1">
                    <img :src="k.thumb" class="twophoto">
                  </div>
                </router-link>
              </el-col>
            </div>
            <div>
              <el-col :span="24" class="companyRowHearder mgTB2" v-for="(k,index) in companyRanksArray"
                v-if="index == 2">
                <img class="imgLogo" :src="k.thumb">
                <span>{{k.title}}</span>
              </el-col>
              <el-col :span="24" class="thirdlyCompanyPic" v-for="(k,index) in companyRanksArray" v-if="index == 2">
                <router-link :to="{ name: '公司排名详情',query: { id: k.article_id }  }">
                  <img src="../../../static/testImg/thirdly.png" class="topIcon">
                  <div v-for="(k,index) in companyRanksArray" v-if="index == 2">
                    <img :src="k.thumb" class="twophoto">
                  </div>
                </router-link>
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
  data() {
    return {
      companyRanksArray: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const thit = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Index/company_sort"
      })
        .then(function(res) {
          thit.companyRanksArray = res.data.data;
        })
        .catch(function(error) {});
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

  .imgLogo {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }

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
}

.first {
  height: 200px;
}

.twophoto {
  height: 70px;
}
</style>
