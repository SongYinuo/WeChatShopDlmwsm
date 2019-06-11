<template lang="html">
  <section>
    <div class="indexTimeLimit mgTB2" v-if="swiperList.prom_status===1||swiperList.prom_status===2">
      <div class="indexSwiperHeader">
        <el-row>
          <el-col :span="22" :offset="1">
            <el-col :span="7">
              <div class="headerTitle pdB2 pdT2">限时抢购</div>
            </el-col>
            <el-col :span="10">
              <div class="countDown">
                <span class="countDown pd2">
                  <count-down v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(1)"
                    :currentTime="timestamp" :startTime="swiperList.prom.start_time" :endTime="swiperList.prom.end_time"
                    :tipText="'活动开始'" :tipTextEnd="'活动结束'" :endText="'活动结束'" :dayTxt="'天'" :hourTxt="':'"
                    :minutesTxt="''"></count-down>
                </span>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="indexSwiperHeaderMore">
                <router-link :to="{ name: '限时抢购页' }">
                  <a>查看更多<i class="el-icon-arrow-right"></i></a>
                </router-link>
              </div>
            </el-col>
          </el-col>
        </el-row>
      </div>
      <div class="indexSwiperRow">
        <el-row>
          <el-col :span="22" :offset="1">
            <div class="swiper-container" id="swiper-container1">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="swiper in swiperList.prom.goods_list" :key="swiper.link_id">
                  <router-link :to="{ name: '详情页', query: { id: swiper.link_id }}">
                    <img :src="swiper.goods_image" class="swiperListImg">
                  </router-link>
                  <div class="explainRow">
                    <el-row>
                      <el-col :span="14">
                        <div class="explainTitle">
                          {{swiper.goods_name}}
                        </div>
                      </el-col>
                      <el-col :span="4" :offset="1">
                        <div class="explainPrice">
                          ¥{{swiper.goods_price}}
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="explainOriginalPrice text-alignRight">
                          <del>¥{{swiper.shop_price}}</del>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="explainAnnotation lh4 pdT2">
                          {{swiper.goods_remark}}
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
import countDown from "vue2-countdown";
import axios from "axios";
export default {
  data() {
    return {
      timestamp: Date.parse(new Date()),
      swiperList: []
    };
  },
  components: {
    "count-down": countDown
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getData();
    this._initSwipera();
  },
  methods: {
    newDate() {},
    _initSwipera() {
      var swiper = new Swiper(".indexTimeLimit #swiper-container1", {
        slidesPerView: 1.2,
        spaceBetween: 16,
        paginationClickable: true,
        spaceBetween: 12,
        observer: true,
        observeParents: true,
        autoplay: 10000,
        loop: true
      });
    },
    getData() {
      const thit = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Index/prom"
      })
        .then(function(res) {
          thit.swiperList = res.data.data;
        })
        .catch(function(error) {});
    },
    countDownS_cb: function(a) {},
    countDownE_cb: function(a) {}
  }
};
</script>

<style lang="less" >
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
@import "../../assets/index/indexSwiper.less";

.swiperListImg {
  height: 200px;
  border-radius: 8px;
}

.countDown div span {
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  background-color: #333;
  border-radius: 100%;
  display: block;
  float: left;
  .fz(font-size, 24);
  text-align: center;
}

.countDown div span span {
  .fz(font-size, 24);
  float: left;
}

.countDown div i {
  float: left;
  padding: 0 4px;
  color: #333333;
}

.countDown div span i {
  float: left;
  padding: 0 4px;
  color: #333333;
}
</style>
