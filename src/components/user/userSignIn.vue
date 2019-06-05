<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
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
                  <span class="signInInfoDaysBg left">{{keep_day[0]}}</span>
                  <span class="signInInfoDaysBg center">{{keep_day[1]}}</span>
                  <span class="signInInfoDaysBg right">{{keep_day[2]}}</span>
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
            <el-button type="primary" circle v-for="item in signData" class="color"
              :style="{'background-color':item.date == '今日'?'#FFAC00':'#DBDBDB'}">+{{item.point}}</el-button>
            <el-button circle v-for="item in signData" class="cdata" style="margin-left:0;"
              :style="{'color':item.date == '今日'?'#FFAC00':'#DBDBDB'}">{{item.date}}</el-button>
          </div>
        </el-col>
        <el-col class="text-alignCenter pdT12">
          <el-button round class="signInBtn bgRedOrange colorWhite bgYellow" v-on:click="greet"
            :style="{'background-color':sign_status == 1 ?'#bbb':'#FFD800'}">{{sign_status == 1 ? '签到已成功' :'马上签到'}}
          </el-button>
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
      title: "签到",
      userSignIn: {
        userSignInBgImg: "static/testImg/qiandao@2x.png",
        IfSignIn: true,
        signInDays: [{}]
      },
      // 签到日期
      signData: [],
      // 总数据
      getTiem: {},
      // 签到日期数组
      keep_day: [],
      // 签到成功的标志
      signSuccess: "马上签到",
      // 是否是签到状态
      sign_status: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let that = this;
      Axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/sign"
      }).then(function(res) {
        // console.log("功率");
        // console.log(typeof res.data.data.keep_award);
        // that.bookList = res.data.data
        that.signData = res.data.data.list;
        that.getTiem = res.data.data;
        var the_keep_day = res.data.data.keep_days;
        //处理为三位数字
        if (the_keep_day < 10) {
          the_keep_day = "00" + the_keep_day;
        } else if (the_keep_day < 100) {
          the_keep_day = "0" + the_keep_day;
        } else if (the_keep_day > 999) {
          the_keep_day = 999;
        } else {
          the_keep_day = "" + the_keep_day;
        }

        that.keep_day = the_keep_day.split("");
        // console.log(that.keep_day);

        that.sign_status = res.data.data.is_sign;
        // console.log(that.signData);
        // 新加的内容开始
        var numbers = String(res.data.data.keep_award);
        // 新家的内容结束
      });
    },
    greet: function(event) {
      // this.userSignIn.IfSignIn === false;
      // alert("签到成功");
      // console.log(this.userSignIn.IfSignIn);
      let that = this;
      Axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/sign_handle"
      }).then(function(res) {
        // console.log("签到成功");
        // console.log(res);
        // that.bookList = res.data.data
        if (res.data.code == 1) {
          that.signSuccess = "签到已成功";
          // console.log(that.signSuccess);
        } else {
          that.signSuccess = "签到已成功";
        }
      });
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

.color {
  width: 11%;
}

.cdata {
  background: #fff;
  color: #9e9e9e;
  text-align: center;
  width: 13.5%;
}

.el-button:focus,
.el-button:hover {
  background: #ffc000;
}
</style>
