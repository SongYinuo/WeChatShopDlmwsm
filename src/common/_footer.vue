<template lang="html">
  <!-- gotoRouter:点击后路由跳转到与id名相同的route.name所对应的路径 -->
  <footer class="footer" @click.stop='gotoRouter' style="z-index:100000">
    <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="首页">
      <i slot="icon" class="icon-index"></i>
      <!-- <img slot="icon" class="icon-index" src="../../static/testImg/indexOrangeIcon.png"> -->
        首页
    </mt-tab-item>
    <mt-tab-item id="购物车页">
      <i slot="icon" class="icon-car"></i>
      <!-- <img slot="icon" class="icon-index" src="../../static/testImg/indexCarIcon.png"> -->
      购物车
    </mt-tab-item>
    <mt-tab-item id="鉴定">
      <!-- <i slot="icon" class="icon-category"></i>
      分类 -->
      <span class="spanImg">
        <img slot="icon" class="icon-index" src="../../static/testImg/indexPublishIcon.png">
      </span>
    </mt-tab-item>
    <mt-tab-item id="藏拍页">
      <i slot="icon" class="icon-category"></i>
      <!-- <img slot="icon" class="icon-index" src="../../static/testImg/indexCollectionIcon.png"> -->
      藏拍
    </mt-tab-item>

    <mt-tab-item id="用户页">
      <i slot="icon" class="icon-user"></i>
      <!-- <img slot="icon" class="icon-index" src="../../static/testImg/indexMyIcon.png"> -->
      我的
    </mt-tab-item>
  </mt-tabbar>
  </footer>
</template>

<script>
  export default {
    methods: {
      gotoRouter() {
        this.$router.push({
          name: this.selected
        })
      }
    },
    data() {
      return {
        //对应mt-tab-item 的id值
        selected: ''
      }
    },
    mounted() {

      //获取当前路由名称，根据该名称给当前footer添加is-selected
      let Rname = this.$route.name;
      switch (Rname) {
        case '首页':
          this.selected = '首页';
          break;
        case '购物车页':
          this.selected = '购物车页';

          break;
        case '鉴定':
          this.selected = '鉴定';

          break;
        case '藏拍页':
          this.selected = '藏拍页';

          break;
        case '用户页':
          this.selected = '用户页';
          break;
      }
    }

  }
</script>

<style lang="less" scoped>
  @import '../assets/fz.less';
  @import '../assets/index/style.less';

.mint-tab-item-label:hover {
  color:#333;

}
  .footer {
    .mint-tabbar {
      background-color: #fff;
      background-image: none;
      box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      -webkit-box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      .is-selected {
        color: @cl;
        background-color: #fff;
        i {
          &::before {
            color: @cl;
          }
        }
      }
      i {
        .fz(font-size, 42);
      }
      .spanImg img{
        width: 40px;
        height: 40px;
      }
    }
  }
</style>
