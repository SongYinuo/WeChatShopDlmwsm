<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      新增收货地址
    </el-header>
    <el-row class="newAddRow">
        <el-col :span="22" :offset="1">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.name" placeholder="收货人姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.phone" placeholder="手机号码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="form.region" placeholder="所在地区">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input type="textarea" v-model="form.desc" :rows="7" placeholder="街道、小区门牌等详细地址"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-col class="saveBtn" :span="22">
                        <el-button type="primary" class="bgGray brRNone" @click="onSubmit">立即创建</el-button>
                    </el-col>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
   </el-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        region: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
@import "../../../assets/user/user.less";
</style>