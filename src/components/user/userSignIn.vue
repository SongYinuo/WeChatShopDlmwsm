<template lang="html">
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
          签到
        </el-header>
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
                      <span class="signInInfoDaysBg right">{{getTiem.keep_days}}</span>
                    </span>
                    <span class="colorWhite signIn">天签到</span>
                  </el-col>
                  <el-col class="pdT12">
                    <span class="bgRedOrange colorWhite integralTotalAmount">积分总额：{{getTiem.user_points}}分</span>
                  </el-col>
                </el-col>
              </div>
            </el-col>
          </el-row>
          <el-row class="signDesk">
              <el-col :span="20" :offset="2" class="signDeskRow bgCfff">
                <div class="continuousSignInDays pd2 mgT2 text-alignCenter">
                  已经连续签到<span class="colorRed">{{getTiem.keep_days}}</span>天
                </div>
                <div class="text-alignCenter SignInIntegralDescription colorGray">连续签到7天可额外获得{{getTiem.sign_award}}积分</div>
                <div class="pdT12">
                  <!-- <span v-bind:style="{'display':config.isHaveSearch ? 'block':'none'}" >搜索</span> -->
                  <el-button type="primary" circle v-for="item in signData" class="color" :style="{'background-color':item.date == '今日'?'#FFAC00':'#DBDBDB'}">+{{item.point}}</el-button>
                  <el-button circle v-for="item in signData" class="cdata" style="margin-left:0;" :style="{'color':item.date == '今日'?'#FFAC00':'#DBDBDB'}">{{item.date}}</el-button>
                </div>
              </el-col>
              <el-col class="text-alignCenter pdT12">
                <el-button round class="signInBtn bgRedOrange colorWhite bgYellow" v-on:click="greet" :style="{'background-color':sign_status == 1 ?'#bbb':'#FFD800'}">{{sign_status == 1 ? '签到已成功' :'马上签到'}}</el-button>
              </el-col>
          </el-row>
        </el-main>
    </el-container>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      userSignIn: {
        userSignInBgImg: "static/testImg/qiandao@2x.png",
        IfSignIn: true,
        signInDays: [{}],
      },
       // 签到日期
        signData:[],
        // 总数据
        getTiem:{},
        // 签到成功的标志
        signSuccess:'马上签到',
        // 是否是签到状态
        sign_status:'',
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let that = this
      Axios({
        methods:'get',
         headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/sign"
      }).then(function(res){
        console.log("功率")
        console.log(typeof(res.data.data.keep_award))
        // that.bookList = res.data.data
        that.signData = res.data.data.list
        that.getTiem = res.data.data
        that.sign_status = res.data.data.is_sign
        console.log(that.signData)
        // 新加的内容开始
        var numbers = String(res.data.data.keep_award)
        // 新家的内容结束
      })
    },
    greet: function(event) {
      // this.userSignIn.IfSignIn === false;
      // alert("签到成功");
      // console.log(this.userSignIn.IfSignIn);
       let that = this
      Axios({
        methods:'get',
         headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/sign_handle"
      }).then(function(res){
        console.log("签到成功")
        console.log(res)
        // that.bookList = res.data.data
       if(res.data.code == 1){
         console.log("111")
         that.signSuccess = '签到已成功'
         console.log(that.signSuccess)
       }else{
          that.signSuccess = '签到已成功'
       }
      })
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
    .el-button:focus,
    .el-button:hover {
      color: #dcdfe6;
    }
    .el-button.is-circle {
      padding: 8px;
    }
  }
}
.color{
  width: 11%;
}
.cdata{
  background: #fff;
  color:#9E9E9E;
  text-align: center;
  width: 13.5%;
}
.el-button:focus, .el-button:hover {
  background: #FFC000;
}
</style>