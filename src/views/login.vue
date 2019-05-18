<template lang="html">
  <div class="login">
    <!-- <v-header>
      <h1 slot="title">登录页</h1>
    </v-header> -->
    <el-header class="tittle">
        <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
        </div>
        登录页
    </el-header>
    <section>
      <mt-field
       label="账号"
        placeholder="请输入账号"
        type = "text"
        v-model = "account"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        ></mt-field>
      <mt-field
       label="密码"
       placeholder="请输入密码"
       type="password"
       v-model="password"
       :readonly='!toggle'
       :disableClear = '!toggle'
        ></mt-field>
      <p class="tip">Tip : 账号密码随便输</p>
    </section>
    <mt-button
     plain
     size="large"
     @click="login"
     v-if='toggle'>登录</mt-button>
    <mt-button
     plain
     size="large"
     @click="logout"
     v-else>退出登录</mt-button>
  </div>
</template>

<script>
import Header from "@/common/_header.vue";
import { Toast } from 'mint-ui'
export default {
  components: {
    "v-header": Header
  },
  data() {
    return {
      account:'',
      password:'',
      toggle:!this.$store.state.login.token
    };
  },
  methods: {
    // 登录按钮
    login(){
      if(this.account!=="" && this.password!=="") {
        Toast('登录成功,存储token,跳转网页');
        this.toggle = false;
        this.$store.commit('CHANGE_TOKEN',1);
      }else {
        Toast('账号密码不能为空');
      }

      setTimeout(()=>{
        this.$router.replace({
          path: 'user'
        })
      },1000);
      // 登录成
    },

    // 退出登录按钮
    logout(){
      Toast('退出登录成功,清除token');
      this.$store.commit('CHANGE_TOKEN',0);
      this.toggle = true;
      this.account = '';
      this.password = '';

    },
    // getCode() {
    //   // 非静默授权，第一次有弹框
    //   this.code = "";
    //   var local = window.location.href; // 获取页面url
    //   var appid = "wx65adcf0753691319";
    //   this.code = this.getUrlCode().code; // 截取code
    //   if (this.code == null || this.code === "") {
    //     // 如果没有code，则去请求
    //     window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(
    //       local
    //     )}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
    //   } else {
    //     // 你自己的业务逻辑
    //   }
    // },
    // getUrlCode() {
    //   // 截取url中的code方法
    //   var url = location.search;
    //   this.winUrl = url;
    //   var theRequest = new Object();
    //   if (url.indexOf("?") != -1) {
    //     var str = url.substr(1);
    //     var strs = str.split("&");
    //     for (var i = 0; i < strs.length; i++) {
    //       theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
    //     }
    //   }
    //   return theRequest;
    // }
  },

  // mounted() {
  //   if (!window.localStorage.getItem("openId")) {
  //     // 如果缓存localStorage中没有微信openId，则需用code去后台获取
  //     this.getCode();
  //   } else {
  //     // 别的业务逻辑
  //   }
  // }
};
</script>

<style lang="less" scoped>
@import "../assets/header.less";
.login {
  > section {
    .tip {
      padding: 6vw 3vw;
      color: rgb(224, 145, 71);
      letter-spacing: 2px;
      font-size: 16px;
    }
  }
}
</style>
