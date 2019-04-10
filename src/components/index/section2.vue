<template>
  <section class="section2">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="swiper in swiperList" :key="swiper.id">
           <router-link :to="{name:'详情页'}">
            <img :src="swiper.imgUrl" class="swiperListImg">
          </router-link>
          <div class="explainRow">
            <h2 class="section2-list-title ac">
              {{swiper.title}}
            </h2>
            <p class="section2-list-price">
              ￥{{swiper.price}} 
              <del>{{swiper.originalPrice}}</del>
            </p>
            <p class="section2-list-annotation">
              {{swiper.textAnnotation}}
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
      width: 80%;
      overflow: hidden;
      padding: 4vw 5vw;
      border: 1px solid #eee;
    }
    .explainRow {
      padding: 2vw 0;
      line-height: 1.2;
      height: 10vw;
      .fz(font-size,29);
      border-bottom: 1px solid #eee;
      h2 {
      text-align: left;
      width: 68%;
      float: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      }
      p {
        float: right;
        margin-right: 12px;
        line-height: 1.5;
        del {
          color: gray;
          .fz(font-size, 22);
        }
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
        color: gray;
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
        { title:"1古典轻奢瓷器艺术品陈设饰品", imgUrl: 'https://t10.baidu.com/it/u=3605678574,1074337534&fm=76', url: 'https://m.vip.com', textAnnotation: '1古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制1', price: '414', originalPrice: '659'  },
        { title:"2古典轻奢瓷器艺术品陈设饰品", imgUrl: 'https://t10.baidu.com/it/u=3605678574,1074337534&fm=76', url: 'https://www.baidu.com' , textAnnotation: '2古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制2', price: '415', originalPrice: '658' },
        { title:"3古典轻奢瓷器艺术品陈设饰品", imgUrl: 'https://t10.baidu.com/it/u=3605678574,1074337534&fm=76', url: 'https://www.baidu.com', textAnnotation: '3古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制3', price: '416', originalPrice: '659' },
        { title:"4古典轻奢瓷器艺术品陈设饰品", imgUrl: 'https://t10.baidu.com/it/u=3605678574,1074337534&fm=76', url: 'https://m.vip.com' , textAnnotation: '4古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制4', price: '417', originalPrice: '659' },
        { title:"5古典轻奢瓷器艺术品陈设饰品", imgUrl: 'https://t10.baidu.com/it/u=3605678574,1074337534&fm=76', url: 'https://m.vip.com' , textAnnotation: '5古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制5', price: '418', originalPrice: '659' },
        { title:"6古典轻奢瓷器艺术品陈设饰品", imgUrl: 'https://t10.baidu.com/it/u=3605678574,1074337534&fm=76', url: 'htttp://www.baidu.com' , textAnnotation: '6古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制6', price: '419', originalPrice: '659' },
        { title:"7古典轻奢瓷器艺术品陈设饰品", imgUrl: 'https://t10.baidu.com/it/u=3605678574,1074337534&fm=76', url: 'htttp://www.baidu.com', textAnnotation: '7古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制7', price: '420', originalPrice: '659' },
        { title:"8古典轻奢瓷器艺术品陈设饰品", imgUrl: 'https://t10.baidu.com/it/u=3605678574,1074337534&fm=76', url: 'htttp://www.baidu.com' , textAnnotation: '8古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制8', price: '414', originalPrice: '659' },
        { title:"9古典轻奢瓷器艺术品陈设饰品", imgUrl: 'https://t10.baidu.com/it/u=3605678574,1074337534&fm=76', url: 'htttp://www.baidu.com', textAnnotation: '9古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制9', price: '414', originalPrice: '659' },
        { title:"10古典轻奢瓷器艺术品陈设饰品", imgUrl: 'https://t10.baidu.com/it/u=3605678574,1074337534&fm=76', url: 'https://m.vip.com', textAnnotation: '10古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制10', price: '414', originalPrice: '659' }
    ]
    }
    },
    mounted () {
      this._initSwiper();
    },
    methods: {
      _initSwiper () {
        this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 1.6,
        spaceBetween: 16,
        pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 12
        })
    }
  }
  }
  </script>