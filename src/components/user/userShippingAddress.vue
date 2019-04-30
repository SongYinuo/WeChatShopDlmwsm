<template lang="html">
    <el-container style="background-color:#F5F5F4; height: 100%">
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
          收货地址
        </el-header>
        <el-main class="addRow">
          <el-row>
              <el-col :span="22" :offset="1" class="bgCfff pdLR2TB1 positionR">
                <el-col v-for="(item, index) in items" class="addInfo">
                  <el-col :span="22" :offset="1" class="pd2">
                    <el-col :span="6" class="name">{{item.name}}</el-col>
                    <el-col :span="18" class="phone text-alignRight">{{item.phone}}</el-col>
                  </el-col>
                  <el-col class="addressTxt">
                    <el-col :span="3" v-if="item.default==='默认'">
                      <div class="bgUndertintYellow defaultIcon colorWhite addRowTxt text-alignCenter">{{item.default}}</div>
                    </el-col>
                    <el-col :span="20" :offset="1" class="site pd2">
                          {{item.addressUrl}}
                    </el-col>
                  </el-col>
                  <el-col class="pdT3 pdB1">
                    <el-col :span="8">
                      <i class="el-icon-refresh-right"></i>
                      <i class="el-icon-refresh-left"></i>
                      <span><el-radio v-model="radio" :label="item.label">默认地址</el-radio></span>
                    </el-col>
                    <el-col :span="2" :offset="14">
                      <i class="el-icon-delete" @click="deleteInfo"></i>
                    </el-col>
                  </el-col>
                </el-col>
              </el-col>
              <el-col class="newBtn" :span="22" :offset="1">
                <router-link :to="{ name: '新增地址' }">
                <el-button type="primary" class="bgUndertintYellow brRNone">新增收货地址</el-button>
                </router-link >
              </el-col>
          </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      radio: "0",
      items: [
        {
          name: "张三",
          phone: "18536790386",
          default: "默认",
          addressUrl:
            "0上海上海市浦东新区张江镇路上海上海市浦东新区张江镇路36号39号楼233室",
          id: "120000",
          label: "0"
        },
        {
          name: "1张三",
          phone: "18536790387",
          default: "",
          addressUrl:
            "1上海上海市浦东新区张江镇路上海上海市浦东新区张江镇路36号39号楼233室",
          id: "120001",
          label: "1"
        },
        {
          name: "2张三",
          phone: "18536790388",
          default: "",
          addressUrl:
            "2上海上海市浦东新区张江镇路上海上海市浦东新区张江镇路36号39号楼233室",
          id: "120002",
          label: "2"
        }
      ]
    };
  },
  methods: {
    getDta() {},
    deleteInfo(index) {
      this.items.splice(index, 1);
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

.addRow {
  width: 100%;
  height: 100%;
}
</style>