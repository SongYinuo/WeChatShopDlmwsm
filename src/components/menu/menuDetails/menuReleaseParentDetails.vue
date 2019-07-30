<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      发布
    </el-header>
    <el-main class="misan">
      <el-row></el-row>
      <el-row>
        <el-col :span="6" class="ss ">
        </el-col>
        <el-col :span="17" class="txt">分享我的美好世界</el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="placeholder"></el-col>
      </el-row>
      <el-row>
        <router-link :to="{name:'发布心得', params : {cart_id:cart_id}}">
          <el-col class="decil text-alignCenter" :span="4" :offset="6"><i class="el-icon-picture-outline deIcon"></i>
          </el-col>
        </router-link>
        <router-link :to="{name:'发布心得', params : {cart_id:cart_id}}">
        <el-col class="decil text-alignCenter" :span="4" :offset="4"> <i class="el-icon-arrow-right deIcon"></i>
        </el-col>
         </router-link>
         <div class="Camera">
            <v-camera />
          </div>
        <el-col :span="6"></el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="text-alignCenter">
          <el-button @click="prev()" class=" fork">×</el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import Camera from "@/common/camera.vue";
export default {
  components: {
    "v-camera": Camera
  },
  data() {
    return {
      cart_id: ""
    };
  },
  mounted() {
    this.cart_id = this.$route.params.cart_id;
  },
  methods: {
    prev() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/index/indexSwiper.less";
@import "../../../assets/header.less";
@import "../../../assets/index/style.less";
@import "../../../assets/menu/details.less";
@import "../../../assets/fz.less";

.misan {
  padding: 0;

  .ss {
    width: 80px;
    height: 80px;
    background: #dab62e;
    border-radius: 50px;
    position: relative;
    left: -40px;
    margin-top: 100px;
  }

  .txt {
    position: relative;
    left: -30px;
    margin-top: 120px;
    color: #363636;
    .fz(font-size, 44);
  }

  .decil {
    width: 65px;
    height: 65px;
    border: 2px solid #dab62e;
    border-radius: 50%;
  }

  .deIcon {
    .fz(font-size, 70);
    color: #dab62e;
    text-align: center;
    line-height: 62px;
    // padding-left: 0px;
  }

  .iCon {
    position: absolute;
    margin: 0 auto;
    margin-left: 25%;
    bottom: 120px;
  }

  .mg10 {
    margin-right: 40px;
  }

  .placeholder {
    width: 100%;
    height: 160px;
    margin-top: 20%;
  }

  @media screen and (max-width: 320px) {
    .placeholder {
      height: 80px;
    }
  }

  @media screen and (max-width: 360px) {
    .placeholder {
      height: 120px;
    }
  }
  .fork {
    .fz(font-size, 60);
    color: #c6c6c6;
    border: 0;
  }
}
</style>