<template lang="html">
  <div class="service">
    <ul>
      <li class="indexPicLeft"><img src ="static/testImg/indexIcon-right.png"></li>
      <li><span>中华文化</span></li>
      <li class="indexPicRight"><img src ="static/testImg/indexIcon-right.png"></li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.service {
  ul {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-around;

    .indexPicLeft,
    .indexPicRight {
      padding: 1.3vw 0;
      bottom: 1vw;
      position: relative;
      img {
        width: 53px;
        height: 55px;
        position: absolute;
        margin-top: 28px;
      }
    }
    .indexPicLeft img {
      margin-left: 28px;
    }
    .indexPicRight img {
      margin-right: 10vw;
    }

    li {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      align-items: center;
      padding: 3.3vw 0;
      span {
        .fz(font-size, 52);
        padding-left: 1vw;
      }
      i {
        .fz(font-size, 36);
      }
    }
  }
}

.linkMean {
  .bd();
}
</style>
