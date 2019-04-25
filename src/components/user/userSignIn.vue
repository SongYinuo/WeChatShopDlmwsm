<template lang="html">
    <el-container>
        <el-header class="tittle">签到</el-header>
        <el-main class="userSignInInfo">
          <el-row>
            <el-col>
              <div class="userSignInInfoBgImg">
                <img :src="userSignIn.userSignInBgImg">
              </div>
              <div class="userSignInInfoDays text-alignCenter">
                <el-col :span="20" :offset="2">
                  <el-col>
                    <span class="colorWhite signIn">已连续</span>
                    <span class="colorOrange">
                      <span class="signInInfoDaysBg left">0</span>
                      <span class="signInInfoDaysBg center">0</span>
                      <span class="signInInfoDaysBg right">7</span>
                    </span>
                    <span class="colorWhite signIn">天签到</span>
                  </el-col>
                  <el-col class="pdT12">
                    <span class="bgRedOrange colorWhite integralTotalAmount">积分总额：2778分</span>
                  </el-col>
                </el-col>
              </div>
            </el-col>
          </el-row>
          <el-row class="signDesk">
              <el-col :span="20" :offset="2" class="signDeskRow bgCfff">
                <div class="continuousSignInDays pd2 mgT2 text-alignCenter">
                  已经连续签到<span class="colorRed">6</span>天
                </div>
                <div class="text-alignCenter SignInIntegralDescription colorGray">连续签到7天可额外获得1000积分</div>
                <div class="pdT12">
                  <el-button type="primary"circle>+1</el-button>
                  <el-button type="success" circle>+1</el-button>
                  <el-button type="info" circle>+2</el-button>
                  <el-button type="warning" circle>+3</el-button>
                  <el-button type="danger" circle>+4</el-button>
                  <el-button type="warning" circle>+5</el-button>
                  <el-button type="danger" circle>+6</el-button>
                </div>
              </el-col>
              <el-col class="text-alignCenter pdT12">
                <el-button round class="signInBtn bgRedOrange colorWhite bgYellow" v-on:click="greet">马上签到</el-button>
              </el-col>
          </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      userSignIn: {
        userSignInBgImg: "static/testImg/qiandao@2x.png",
        IfSignIn: true,
        signInDays: [{}]
      }
    };
  },
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      // alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      // if (event) {
      //   alert(event.target.tagName)
      // }
      this.userSignIn.IfSignIn === false;
      alert('签到成功');
      console.log(this.userSignIn.IfSignIn);
    }
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/user/user.less";
.el-main {
  padding: 0;
}
.userSignInInfo {
  .el-button {
    .fz(font-size, 32);
    border: 0;
  }
  .signDesk {
    .el-button {
      .fz(font-size, 28);
    }
    .el-button.is-round {
      padding: 12px 80px;
    }
    .el-button:focus, .el-button:hover {
      color: #DCDFE6;
    }
    .el-button.is-circle {
      padding: 8px;
    }
  }
}
</style>