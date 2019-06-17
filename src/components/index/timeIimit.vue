<template lang="html">
  <section>
    <div class="indexTimeLimit mgTB2" id="indexTimeLimit" v-if="swiperList.prom_status===1||swiperList.prom_status===2">
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
                    :currentTime="timestamp" :startTime="swiperList.prom.start_time" :endTime="swiperList.prom.end_time" :end-text="'活动结束'" :dayTxt="'天'" :hourTxt="':'"
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
            <!-- <div  id="swiper1" class="swiper-container"> -->
              <div style="height:260px; width:90%; margin-left:5%">
                <mt-swipe :auto="10000">
                  <mt-swipe-item v-for="(item,index) in swiperList.prom.goods_list" :key="index" class="mtSwiper">
                    <router-link :to="{ name: '详情页', params: { id: item.link_id }}">
                      <img :src="item.goods_image" class="swiperListImg">
                    </router-link>
                    <div class="explainRow">
                      <el-row>
                        <el-col :span="14">
                          <div class="explainTitle overHidden pd2">
                            {{item.goods_name}}
                          </div>
                        </el-col>
                        <el-col :span="4" :offset="1">
                          <div class="explainPrice">
                            ¥{{item.goods_price}}
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="explainOriginalPrice text-alignRight">
                            <del>¥{{item.shop_price}}</del>
                          </div>
                        </el-col>
                        <el-col :span="24">
                          <div class="explainAnnotation lh4 pdT2 overHidden">
                            {{item.goods_remark}}
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </mt-swipe-item>
                </mt-swipe>
             </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css';
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
    this._initSwiperaw();
  },
  methods: {
    newDate() {},
    _initSwiperaw() {
      var swiper1  = new Swiper("#swiper1", {
        // slidesPerView: 1.2,
        // spaceBetween: 16,
        // paginationClickable: true,
        // spaceBetween: 12,
        // observer: true,
        // observeParents: true,
        // autoplay: 10000,
        // loop: true
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
  width: 100%;
}

.indexTimeLimit {
  .mint-swipe-indicators {
    display: none;
  }
  .mint-swipe-items-wrap {
    overflow: visible;
  }
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
