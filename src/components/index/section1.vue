<template lang="html">
  <section class="section1 pd2">
    <!-- <h1 class="section1-title">
      section1
      <i class="icon-right"></i>
    </h1>
    <ul class="section1-list">
      <li v-for="k in list" :key="k.id">
        <router-link :to="{name:'详情页'}">
          <img v-lazy="k.imgPath" alt="">
        </router-link>
      </li>
    </ul> -->
    <div class="sectionRow">
      <span class="section1-title pd2">限时抢购</span>
      <span class="countDown pd2">
          <ul>
            <li>10</li>
            <li>:</li>
            <li>20</li>
            <li>:</li>
            <li>32</li>
          </ul>
      </span>
      <span class="sectionMore pd2">
        <a>
          查看更多
          <i></i>
        </a>
      </span>
    </div>

  <!-- <router-link :to="{ name: '详情页'}"  class="section1-banner">
    <img v-lazy="banner">
  </router-link> -->
  </section>
</template>

<script>
import { Lazyload } from "mint-ui";

export default {
  props: {
    banner: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.pd2 {
  padding: 2vw 0;
}
.sectionRow {
  .section1-title  {
    padding: 2vw 0;
    .fz(font-size, 48);
    color: #333;
    position: relative;
  }
  padding: 0 2%;
  span {
    display: block;
    float: left;
    height: 8vw;
    line-height: 8vw;
  }
  .countDown {
    margin-left: 12px;
    ul {
      height: 6vw;
      line-height: 6vw;
      margin-top: 4px;
      li {
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
      li:nth-child(even) {
        color: #333;
        background-color: #fff;
        width: 10px;
      }
    }
  }
  .sectionMore {
    float: right;
  }
}
// .section1 {
//   .section1-title {
//     .bt();
//     background-color: #ffffff;
//     text-align: center;
//     padding: 4vw 0;
//     .fz(font-size, 60);
//     color: #333;
//     position: relative;

//     i {
//       position: absolute;
//       right: 6vw;
//       top: 50%;
//       .fz(font-size, 36);
//       .fz(margin-top, -16);

//       &::before {
//         color: rgb(159, 159, 159);
//       }
//     }
//   }

//   .section1-list {
//     display: -ms-flex;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -ms-flex-wrap: wrap;
//     flex-wrap: wrap;
//     -ms-flex-pack: distribute;
//     justify-content: space-around;
//     padding: 0 2vw 4vw 2vw;
//     li {
//       width: 50%;
//       padding: 1vw;
//       -webkit-box-sizing: border-box;
//       box-sizing: border-box;
//       a,
//       img {
//         width: 100%;
//         display: block;
//       }
//     }
//   }

//   .section1-banner {
//     display: block;
//     width: 100vw;
//     img {
//       width: 100%;
//       height: 24vw;
//     }
//   }
// }
</style>
