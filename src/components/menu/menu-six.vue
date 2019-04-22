<template lang="html">
    <!-- <mt-header title="顺格格">
    </mt-header> -->
    <el-container>
      <el-header class="tittle">顺格格</el-header>
      <el-main class="menuShunPrincess">
          <el-row>
            <el-col class="shunPrincessAdvertising">
                <img :src="datas.headerUrlImg">
            </el-col>
          </el-row>
          <el-row>
              <el-col :span="24">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="面膜" name="mianmo">
                        <el-row>
                            <el-col :span="24">
                                <div class="maskHeaderTitle pd4 colorBlack text-alignCenter bgCfff">{{datas.oneTitle}}</div>
                                <el-col class="listRome fr" :span="6">
                                    查看更多
                                    <i class="el-icon-arrow-right"></i>
                                </el-col>
                            </el-col>
                        </el-row>
                        <el-row class="rows">
                                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArray" :key="k.id" class="ShunPrincessRow bgCBlue pdTRBL1">
                                  <router-link :to="{ name: '详情页', params: { id: k.id } }">
                                      <div class="bgCfff pdTRBL1">
                                          <img :src="k.url">
                                          <div class="shunPrincessProductTitle pd2">{{k.title}}</div>
                                          <div class="shunPrincessProductPrice pdB2 colorRed">¥{{k.price}}</div>
                                      </div>
                                  </router-link>
                                </el-col>
                        </el-row>
                        <el-row>
                           <el-col :span="24">
                                <div class="maskHeaderTitle pd4 colorBlack text-alignCenter bgCfff">{{datas.twoTitle}}</div>
                                <el-col class="listRome fr" :span="6">
                                    查看更多
                                    <i class="el-icon-arrow-right"></i>
                                </el-col>
                            </el-col>
                        </el-row>
                        <el-row>
                                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArrayTwo" :key="k.id" class="ShunPrincessRow bgCBlue pdTRBL1">
                                  <router-link :to="{ name: '详情页', params: { id: k.id } }">
                                    <div class="bgCfff pdTRBL1">
                                      <img :src="k.url">
                                      <div class="shunPrincessProductTitle pd2">{{k.title}}</div>
                                      <div class="shunPrincessProductPrice pdB2 colorRed">¥{{k.price}}</div>
                                    </div>
                                  </router-link>
                                </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="饰品" name="shipin">
                        <el-row>
                            <el-col :span="24">
                                <div class="maskHeaderTitle pd4 colorBlack text-alignCenter bgCfff">{{datas.oneTitle}}</div>
                                <el-col class="listRome fr" :span="6">
                                    查看更多
                                    <i class="el-icon-arrow-right"></i>
                                </el-col>
                            </el-col>
                        </el-row>
                        <el-row class="rows">
                                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArray" :key="k.id" class="ShunPrincessRow bgCBlue pdTRBL1">
                                  <router-link :to="{ name: '详情页', params: { id: k.id } }">
                                    <div class="bgCfff pdTRBL1">
                                      <img :src="k.url">
                                      <div class="shunPrincessProductTitle pd2">{{k.title}}</div>
                                      <div class="shunPrincessProductPrice pdB2 colorRed">¥{{k.price}}</div>
                                    </div>
                                  </router-link>
                                </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="衣衫" name="yichen">
                        <el-row>
                           <el-col :span="24">
                                <div class="maskHeaderTitle pd4 colorBlack text-alignCenter bgCfff">{{datas.twoTitle}}</div>
                                <el-col class="listRome fr" :span="6">
                                    查看更多
                                    <i class="el-icon-arrow-right"></i>
                                </el-col>
                            </el-col>
                        </el-row>
                        <el-row class="rows">
                                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArrayTwo" :key="k.id" class="ShunPrincessRow bgCBlue pdTRBL1">
                                  <router-link :to="{ name: '详情页', params: { id: k.id } }">
                                    <div class="bgCfff pdTRBL1">
                                      <img :src="k.url">
                                      <div class="shunPrincessProductTitle pd2">{{k.title}}</div>
                                      <div class="shunPrincessProductPrice pdB2 colorRed">¥{{k.price}}</div>
                                    </div>
                                  </router-link>
                                </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="口红" name="kouhong">
                        <el-row>
                           <el-col :span="24">
                                <div class="maskHeaderTitle pd4 colorBlack text-alignCenter bgCfff">{{datas.twoTitle}}</div>
                                <el-col class="listRome fr" :span="6">
                                    查看更多
                                    <i class="el-icon-arrow-right"></i>
                                </el-col>
                            </el-col>
                        </el-row>
                        <el-row class="rows">
                                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArrayTwo" :key="k.id" class="ShunPrincessRow bgCBlue pdTRBL1">
                                  <router-link :to="{ name: '详情页', params: { id: k.id } }">
                                    <div class="bgCfff pdTRBL1">
                                      <img :src="k.url">
                                      <div class="shunPrincessProductTitle pd2">{{k.title}}</div>
                                      <div class="shunPrincessProductPrice pdB2 colorRed">¥{{k.price}}</div>
                                    </div>
                                  </router-link >
                                </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="包包" name="baobao">
                        <el-row>
                            <el-col :span="24">
                                <div class="maskHeaderTitle pd4 colorBlack text-alignCenter bgCfff">{{datas.oneTitle}}</div>
                                <el-col class="listRome fr" :span="6">
                                    查看更多
                                    <i class="el-icon-arrow-right"></i>
                                </el-col>
                            </el-col>
                        </el-row>
                        <el-row class="rows">
                                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArray" :key="k.id" class="ShunPrincessRow bgCBlue pdTRBL1">
                                  <router-link :to="{ name: '详情页', params: { id: k.id } }">
                                    <div class="bgCfff pdTRBL1">
                                      <img :src="k.url">
                                      <div class="shunPrincessProductTitle pd2">{{k.title}}</div>
                                      <div class="shunPrincessProductPrice pdB2 colorRed">¥{{k.price}}</div>
                                    </div>
                                  </router-link>
                                </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="更多" name="more">
                        <el-row>
                        </el-row>
                    </el-tab-pane>
              </el-tabs>
              </el-col>
          </el-row>
      </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeName: "mianmo",
      datas: {
        headerUrlImg: "../../../static/testImg/banner01.png",
        // shunNav: [
        //     {  text: '面膜', name: 'mianmo' },
        //     {  text: '饰品', name: 'shipin' },
        //     {  text: '衣衫', name: 'yichen' },
        //     {  text: '口红', name: 'kouhong' },
        //     {  text: '包包', name: 'baobao' }
        // ],
        oneTitle: "顺格格面膜",
        mianmoShunPrincessArray: [
          {
            id: "ShunGG00001",
            url: "static/testImg/product-details01.jpg",
            title: "顺格格面膜-时尚走 秀必备1",
            price: 124
          },
          {
            id: "ShunGG00002",
            url: "static/testImg/product-details01.jpg",
            title: "顺格格面膜-时尚走 秀必备2",
            price: 125
          },
          {
            id: "ShunGG00003",
            url: "static/testImg/product-details01.jpg",
            title: "顺格格面膜-时尚走 秀必备3",
            price: 126
          },
          {
            id: "ShunGG00004",
            url: "static/testImg/product-details01.jpg",
            title: "顺格格面膜-时尚走 秀必备4",
            price: 127
          },
          {
            id: "ShunGG00005",
            url: "static/testImg/product-details01.jpg",
            title: "顺格格面膜-时尚走 秀必备5",
            price: 128
          },
          {
            id: "ShunGG00006",
            url: "static/testImg/product-details01.jpg",
            title: "顺格格面膜-时尚走 秀必备6",
            price: 129
          },
          {
            id: "ShunGG00007",
            url: "static/testImg/product-details01.jpg",
            title: "顺格格面膜-时尚走 秀必备7",
            price: 130
          },
          {
            id: "ShunGG00008",
            url: "static/testImg/product-details01.jpg",
            title: "顺格格面膜-时尚走 秀必备8",
            price: 131
          }
        ],
        twoTitle: "寡肽原液面膜",
        mianmoShunPrincessArrayTwo: [
          {
            id: "YuanYemianmo0000001",
            url: "static/testImg/product-details01-3.jpg",
            title: "顺格格面膜-时尚走 秀必备11",
            price: 224
          },
          {
            id: "YuanYemianmo0000002",
            url: "static/testImg/product-details01-3.jpg",
            title: "顺格格面膜-时尚走 秀必备12",
            price: 225
          },
          {
            id: "YuanYemianmo0000003",
            url: "static/testImg/product-details01-3.jpg",
            title: "顺格格面膜-时尚走 秀必备13",
            price: 226
          },
          {
            id: "YuanYemianmo0000004",
            url: "static/testImg/product-details01-3.jpg",
            title: "顺格格面膜-时尚走 秀必备14",
            price: 227
          },
          {
            id: "YuanYemianmo0000005",
            url: "static/testImg/product-details01-3.jpg",
            title: "顺格格面膜-时尚走 秀必备15",
            price: 228
          },
          {
            id: "YuanYemianmo0000006",
            url: "static/testImg/product-details01-3.jpg",
            title: "顺格格面膜-时尚走 秀必备16",
            price: 229
          },
          {
            id: "YuanYemianmo0000007",
            url: "static/testImg/product-details01-3.jpg",
            title: "顺格格面膜-时尚走 秀必备17",
            price: 230
          },
          {
            id: "YuanYemianmo0000008",
            url: "static/testImg/product-details01-3.jpg",
            title: "顺格格面膜-时尚走 秀必备18",
            price: 231
          }
        ]
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>


<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";
.el-tabs__header {
  margin: 0;
}
.menuShunPrincess {
  .el-tabs__nav {
    width: 100%;
    margin-left: 0%;
    overflow: hidden;
    background-color: #94bcdc;
  }
  .el-tabs__item {
    .fz(font-size, 28);
    width: 16.6%;
    padding: 0;
    text-align: center;
    color: #f2f2f2;
  }
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    width: 16.6%;
  }
  .el-tabs__active-bar {
    display: none;
  }
  .el-tabs__item.is-active {
    color: #f2f2f2;
    background-image: url("../../../static/testImg/smallDot.png");
    background-repeat: no-repeat;
    background-position: 130% -10%;
  }
  .is-active {
    .fz(font-size, 36);
    font-weight: 600;
  }
  .el-tabs__content {
    background-color: #ffffff;
  }
  .ShunPrincessRow {
    // border: 4px solid #94BCDC;
  }
  .rows {
    border: 4px solid #94bcdc;
  }
  .menuShunPrincess .el-tabs__item:hover {
    .fz(font-size, 36);
    background-color: transparent;
    color: white;
  }
  .menuShunPrincess .el-tabs__item {
    color: white;
  }
}
</style>