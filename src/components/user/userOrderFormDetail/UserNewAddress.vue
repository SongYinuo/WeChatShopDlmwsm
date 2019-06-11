<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
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
            <el-col :span="8">
                <el-select v-model="form.provinceValue" placeholder="所在省" @change="getCity">
                    <el-option v-for="item in form.province" :key="item.id" :label="item.name" :value="item.id" ></el-option>
                </el-select>
            </el-col>
            <el-col :span="8">
                  <el-select v-model="form.valueCity" placeholder="所在市/直辖市" @change="getDistrict">
                      <el-option v-for="item in form.city" :key="item.id" :label="item.name" :value="item.id"></el-option>
                  </el-select>
            </el-col>
            <el-col :span="8">
                  <el-select v-model="form.valueDistrict" placeholder="所在区域">
                      <el-option v-for="item in form.district" :key="item.id" :label="item.name" :value="item.id"></el-option>
                  </el-select>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-input type="textarea" v-model="form.desc" :rows="7" placeholder="街道、小区门牌等详细地址"></el-input>
          </el-form-item>
          <el-form-item>
            <el-col class="saveBtn" :span="22">
              <el-button type="primary" class="bgUndertintYellow brRNone" @click="onSubmit">立即创建</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-container>

</template>
<script>
import axios from "axios";
export default {
  inject: ["reload"],
  data() {
    return {
      title: "新增收货地址",
      form: {
        name: "",
        phone: "",
        region: "",
        desc: "",
        province: [],
        provinceValue: "",
        city: [],
        valueCity: "",
        district: [],
        valueDistrict: ""
      }
    };
  },
  created() {
    this.getProvince();
    this.getCity();
  },
  methods: {
    getProvince() {
      var thia = this;
      axios({
        method: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Api/get_province"
      })
        .then(function(res) {
          thia.form.province = res.data.data; //将获取的数据赋值
          console.log(thia.form.province);
        })
        .catch(function(response) {});
    },
    getCity(val) {
      // alert ();
      var thia = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Api/get_region?parent_id=" + val // +
      }).then(function(res) {
        console.log(res);
        thia.form.city = res.data.data; //将获取的数据赋值
        console.log(thia.form.city);
      });
    },
    getDistrict(value) {
      var thia = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Api/get_region?parent_id=" + value // +
      }).then(function(res) {
        console.log(res);
        thia.form.district = res.data.data; //将获取的数据赋值
        console.log(thia.form.district);
      });
    },
    onSubmit() {
      var thir = this;
      axios
        .post("Api/User/address_add", {
          consignee: thir.form.name,
          mobile: thir.form.phone,
          province: thir.form.provinceValue,
          city: thir.form.valueCity,
          district: thir.form.valueDistrict,
          address: thir.form.desc
        })
        .then(res => {})
        .catch(error => {});
      // this.reload();
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
