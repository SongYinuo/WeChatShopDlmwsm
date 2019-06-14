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
          <el-form ref="editForm" :model="editForm" :rules="rules">
            <el-form-item prop="nameAuthor">
              <!-- <el-input placeholder="收货人姓名" v-model="editForm.formName" @focus="changeFouceValue" v-on:input="change()" type="text" ></el-input>-->
              <el-input placeholder="收货人姓名" v-model="editForm.formName" type="text"></el-input>
            </el-form-item>
            <el-form-item prop="date1">
              <el-input type="number" v-model="editForm.formPhone" placeholder="手机号码" ></el-input>
            </el-form-item>
            <el-form-item>
              <el-col :span="8" prop="date2">
                <el-select v-model="editForm.formProvinceValue" placeholder="所在省"  @change="getCity">
                  <el-option v-for="item in editForm.formProvince" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8" prop="year1">
                <el-select v-model="editForm.formvalueCity" placeholder="所在市/直辖市" @change="getDistrict">
                  <el-option v-for="item in editForm.formCity" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8" prop="year2">
                <el-select v-model="editForm.formvalueDistrict" placeholder="所在区域">
                  <el-option v-for="item in editForm.formDistrict" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
            <el-form-item prop="messageText">
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
      },
      rules: {
        nameAuthor: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur"
          },
          {
            min: 1,
            max: 50,
            message: "长度在 1 到 50 个字符",
            trigger: "blur"
          }
        ],
        date1: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          },
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: "手机号格式不对",
            trigger: "blur"
          }
        ],
        date2: [
          {
            required: true,
            message: "请输入所在省",
            trigger: "blur"
          }
        ],
        year1: [
          {
            required: true,
            message: "请输入所在市",
            trigger: "blur"
          }
        ],
        year2: [
          {
            required: true,
            message: "请输入所在区",
            trigger: "blur"
          }
        ],

        messageText: [
          {
            required: true,
            message: "请输入详细留言",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    newName() {
      return this.editForm.formName;
    }
  },
  watch: {
    newName(val) {
      this.value = val;
    }
  },
  mounted() {
    this.getData();
    this.getProvince();
    this.getCity();
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
          // that.editForm = res.data.data; //将获取的数据赋值
          that.editForm.formPhone = res.data.data.mobile;
          that.editForm.formName = res.data.data.consignee;
          that.editForm.formProvinceValue = res.data.data.province_name;
          that.editForm.formvalueCity = res.data.data.city_name;
          that.editForm.formvalueDistrict = res.data.data.district_name;
          that.editForm.formDesc = res.data.data.address;
          that.editForm.id = res.data.data.address_id;
          that.editForm.district = res.data.data.district_name;
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
      if (
        thir.editForm.formName === "" ||
        thir.editForm.formPhone === "" ||
        thir.editForm.formProvinceValue === "" ||
        thir.editForm.formvalueCity === "" ||
        thir.editForm.formvalueDistrict === "" ||
        thir.editForm.formvalueDistrict === "" ||
        thir.editForm.formDesc === ""
      ) {
        thir.$message({
          message: "请输入当前要修改的信息",
          type: "warning"
        });
      } else {
        axios
          .post("/Api/User/address_edit", {
            consignee: thir.editForm.formName,
            mobile: thir.editForm.formPhone,
            province: thir.editForm.formProvinceValue,
            city: thir.editForm.formvalueCity,
            district: thir.editForm.formvalueDistrict,
            address: thir.editForm.formDesc,
            id: thir.editForm.id
          })
          .then(res => {})
          .catch(error => {});
        this.reload();
      }
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
