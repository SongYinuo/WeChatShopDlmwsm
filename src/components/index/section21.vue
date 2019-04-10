<template lang="html">
  <section class="section1 pd2">
    <div class="sectionRow">
      <span class="section1-title pd2">热卖商城</span>
      <span class="sectionMore pd2">
        <a>
          查看更多
          <i></i>
        </a>
      </span>
    </div>
  </section>
</template>

<script>
import { Lazyload } from "mint-ui";
export default {
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
</style>
