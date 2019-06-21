<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      提现
    </el-header>
    <el-main class="userWithdrawDepositRow">
      <el-row>
        <el-col :span="22" :offset="1">
          <el-form ref="form" :model="form">
            <el-form-item label="提现金额"></el-form-item>
            <el-col>
              <el-col :span="1" class="pdT1 priceCharacter">￥</el-col>
              <el-col :span="22" :offset="1">
                <el-form-item>
                  <el-input v-model="form.inputValue" placeholder="请输入内容" type="number"></el-input>
                </el-form-item>
              </el-col>
            </el-col>
            <el-col class="pd1 colorRed promptText">金额已超过可提现余额</el-col>
            <el-col class="usableBalance pd2 colorGray mgT1" v-if="form.stateText==='大于'">可用余额{{form.inputBalance}}元
            </el-col>
            <el-col class="pdT12">
              <el-form-item>
                <el-button type="primary" class="subBtn bgYellow brRNone" @click="onSubmit">确认提现</el-button>
              </el-form-item>
            </el-col>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        inputBalance: 100,
        inputValue: "",
        stateText: "小于"
      }
    };
  },
  methods: {
    onSubmit() {
      alert("点击提现");
      this.form.inputValue;
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
@import "../../../assets/user/user.less";

.el-main {
  padding: 0;
}
</style>
