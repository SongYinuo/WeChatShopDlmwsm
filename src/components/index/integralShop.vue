<template>
  <section class="section2">
      <el-row class="mainRow">
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <el-col :span="18">
                    <h1 class="rowTitle">积分商城</h1>
                </el-col>
                 <el-col :span="6">
                    <h1 class="rowMore">查看更多</h1>
                </el-col>  
            </div>
        </el-col>
      </el-row>
      <div class="swiper-container integralShop">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="swiper in swiperList" :key="swiper.id">
           <router-link :to="{name:'详情页'}">
            <img :src="swiper.imgUrl" class="swiperListImg">
          </router-link>
          <div class="explainRow">
            <h2 class="section2-list-title ac">
              {{swiper.title}}
            </h2>
            <p class="section2-list-annotation clr">
              {{swiper.textAnnotation}}
            </p>
            <p class="section2-list-price">
              ￥{{swiper.price}} 
            </p>
          </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    banner: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    },
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.pd4 {
    padding: 2vw 0;
}
.clr {
    color: red;
}
.mainRow {
    border-top: 1px solid #f4f4f4;
    padding: 0 2%;
.rowTitle  {
    padding: 2vw 0;
    .fz(font-size, 48);
    color: #333;
    position: relative;
  }
  .rowMore{
    display: block;
    float: right;
    height: 8vw;
    line-height: 3;
  }
}

.swiper-container {
  width: 100%;
  .swiper-wrapper {
    padding: 2vw;
  }
  .swiper-slide {
    width: 247px;
    height: 100%;
    line-height: 100%;
    .swiperListImg {
      width: 100%;
      overflow: hidden;
      border: 1px solid #eee;
    }
    .explainRow {
      padding: 2vw 0;
      line-height: 1.2;
      height: 12vw;
      .fz(font-size,29);
      border-bottom: 1px solid #eee;
      h2 {
      width: 100%;
      float: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
      }
      p {
        margin-right: 12px;
        line-height: 1.5;
      }
      .section2-list-price {
        .fz(font-size, 26);
        color: #e4393c;
      }
      .section2-list-annotation {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        margin-right: 0;
          .fz(font-size, 22);
      }
    }
  }
}
</style>
<script>
  export default {
    name: '',
    data () {
      return {
        swiperList:[
        { title:"1神龟", imgUrl: '../../../static/testImg/productImg.png', url: 'https://m.vip.com', textAnnotation: '1300积分送30', price: '414' },
        { title:"2神龟", imgUrl: '../../../static/testImg/productImg.png', url: 'https://www.baidu.com' , textAnnotation: '21300积分送30', price: '415' },
        { title:"3神龟", imgUrl: '../../../static/testImg/productImg.png', url: 'https://www.baidu.com', textAnnotation: '31300积分送30', price: '416' },
        { title:"4神龟", imgUrl: '../../../static/testImg/productImg.png', url: 'https://m.vip.com' , textAnnotation: '41300积分送30', price: '417' },
        { title:"5神龟", imgUrl: '../../../static/testImg/productImg.png', url: 'https://m.vip.com' , textAnnotation: '51300积分送30', price: '418' },
        { title:"6神龟", imgUrl: '../../../static/testImg/productImg.png', url: 'htttp://www.baidu.com' , textAnnotation: '61300积分送30', price: '419' },
        { title:"7神龟", imgUrl: '../../../static/testImg/productImg.png', url: 'htttp://www.baidu.com', textAnnotation: '71300积分送30', price: '420' },
        { title:"8神龟", imgUrl: '../../../static/testImg/productImg.png', url: 'htttp://www.baidu.com' , textAnnotation: '81300积分送30', price: '414' },
        { title:"9神龟", imgUrl: '../../../static/testImg/productImg.png', url: 'htttp://www.baidu.com', textAnnotation: '91300积分送30', price: '414' },
        { title:"10神龟", imgUrl: '../../../static/testImg/productImg.png', url: 'https://m.vip.com', textAnnotation: '11300积分送30', price: '414' }
    ]
    }
    },
    mounted () {
      this._initSwiper();
    },
    methods: {
      _initSwiper () {
        this.swiper = new Swiper('.integralShop', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
        })
    }
  }
  }
  </script>