<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
    </el-header>
    <el-main>
      <el-row class="newAddRow">
        <el-col :span="22" :offset="1">
          <el-form ref="editForm" :model="editForm">
            <el-form-item>
              <el-input placeholder="收货人姓名" v-model="editForm.formName" @focus="changeFouceValue" @change="changeValue"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="editForm.formPhone" placeholder="手机号码" type="number"></el-input>
            </el-form-item>
            <el-form-item>
              <el-col :span="8">
                <el-select v-model="editForm.formProvinceValue" placeholder="所在省" @change="getCity">
                  <el-option v-for="item in editForm.formProvince" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-select v-model="editForm.formvalueCity" placeholder="所在市/直辖市" @change="getDistrict">
                  <el-option v-for="item in editForm.formCity" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-select v-model="editForm.formvalueDistrict" placeholder="所在区域">
                  <el-option v-for="item in editForm.formDistrict" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-input type="textarea" v-model="editForm.formDesc" :rows="7" placeholder="街道、小区门牌等详细地址"></el-input>
            </el-form-item>
            <el-form-item>
              <el-col class="saveBtn" :span="22">
                <el-button type="primary" class="bgUndertintYellow brRNone" @click="onSubmit">立即创建</el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  inject: ["reload"],
  data() {
    return {
      title: "编辑地址详情",
      data: {},
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
      },
      editForm: {
        formPhone: "",
        formName: "",
        formProvince: [],
        formProvinceValue: "",
        formCity: [],
        formvalueCity: "",
        formDistrict: [],
        formvalueDistrict: "",
        formDesc: ""
      }
    };
  },
  created() {
    this.getData();
    this.getProvince();
    this.getCity();
  },
  methods: {
    getData: function() {
      var that = this;
      var id = that.$route.params.id;
      axios({
        method: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/address_detail?id=" + id
      })
        .then(function(res) {
          that.editForm = res.data.data; //将获取的数据赋值
          that.editForm.formPhone = res.data.data.mobile;
          that.editForm.formName = res.data.data.consignee;
          that.editForm.formProvinceValue = res.data.data.province_name;
          that.editForm.formvalueCity = res.data.data.city_name;
          that.editForm.formvalueDistrict = res.data.data.district_name;
          that.editForm.formDesc = res.data.data.address;
        })
        .catch(function(response) {});
    },
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
          thia.editForm.formProvince = res.data.data;
        })
        .catch(function(response) {});
    },
    getCity(val) {
      var thia = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Api/get_region?parent_id=" + val
      }).then(function(res) {
        thia.editForm.formCity = res.data.data;
      });
    },
    getDistrict(value) {
      var thia = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Api/get_region?parent_id=" + value
      }).then(function(res) {
        thia.editForm.formDistrict = res.data.data;
      });
    },
    onSubmit() {
      var thir = this;
      axios
        .post("/Api/User/address_edit", {
          consignee: thir.editForm.formName,
          mobile: thir.editForm.formPhone,
          province: thir.editForm.formProvinceValue,
          city: thir.editForm.formvalueCity,
          district: thir.editForm.valueDistrict,
          address: thir.editForm.formDesc
        })
        .then(res => {})
        .catch(error => {});
      this.reload();
      console.log("submit!");
    },
    changeFouceValue(evt){
      console.log(evt)
      this.form.formName = evt.path[0].innerText;
    },
    changeValue(evt) {
      console.log(evt)
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

.userVipBtnRow {
  .el-button {
    border-radius: 0;
  }
}
</style>
