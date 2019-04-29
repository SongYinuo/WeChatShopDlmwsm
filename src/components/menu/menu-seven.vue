<template lang="html">

  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      哈百年
    </el-header>
    <el-main class="menuShunPrincess">
      <el-row>
        <el-col class="shunPrincessAdvertising">
          <img :src="datas.headerUrlImg">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="红肠" name="mianmo">
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
                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArray" :key="k.id"
                  class="ShunPrincessRow bgCBlue pdTRBL1">
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
                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArrayTwo" :key="k.id"
                  class="ShunPrincessRow bgCBlue pdTRBL1">
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
            <el-tab-pane label="大米" name="shipin">
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
                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArray" :key="k.id"
                  class="ShunPrincessRow bgCBlue pdTRBL1">
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
            <el-tab-pane label="水源" name="yichen">
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
                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArrayTwo" :key="k.id"
                  class="ShunPrincessRow bgCBlue pdTRBL1">
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
            <el-tab-pane label="空气" name="kouhong">
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
                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArrayTwo" :key="k.id"
                  class="ShunPrincessRow bgCBlue pdTRBL1">
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
                <el-col :span="8" v-for="k in datas.mianmoShunPrincessArray" :key="k.id"
                  class="ShunPrincessRow bgCBlue pdTRBL1">
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
          oneTitle: "红肠",
          mianmoShunPrincessArray: [
            {
              url: "static/testImg/food1.jpg",
              title: "精品红肠 品味经典-回味无穷",
              price: 124
            },
            {
              url: "static/testImg/food1.jpg",
              title: "精品红肠 品味经典-回味无穷2",
              price: 125
            },
            {
              url: "static/testImg/food1.jpg",
              title: "精品红肠 品味经典-回味无穷",
              price: 126
            },
            {
              url: "static/testImg/food1.jpg",
              title: "精品红肠 品味经典-回味无穷",
              price: 127
            },
            {
              url: "static/testImg/food1.jpg",
              title: "精品红肠 品味经典-回味无穷",
              price: 128
            },
            {
              url: "static/testImg/food1.jpg",
              title: "精品红肠 品味经典-回味无穷",
              price: 129
            },
            {
              url: "static/testImg/food1.jpg",
              title: "精品红肠 品味经典-回味无穷",
              price: 130
            },
            {
              url: "static/testImg/food1.jpg",
              title: "精品红肠 品味经典-回味无穷",
              price: 131
            }
          ],
          twoTitle: "五常大米",
          mianmoShunPrincessArrayTwo: [
            {
              url: "static/testImg/rice-2.jpg",
              title: "五常大米 入口回味-唇齿留香",
              price: 224
            },
            {
              url: "static/testImg/rice-2.jpg",
              title: "五常大米 入口回味-唇齿留香",
              price: 225
            },
            {
              url: "static/testImg/rice-2.jpg",
              title: "五常大米 入口回味-唇齿留香",
              price: 226
            },
            {
              url: "static/testImg/rice-2.jpg",
              title: "五常大米 入口回味-唇齿留香",
              price: 227
            },
            {
              url: "static/testImg/rice-2.jpg",
              title: "五常大米 入口回味-唇齿留香",
              price: 228
            },
            {
              url: "static/testImg/rice-2.jpg",
              title: "五常大米 入口回味-唇齿留香",
              price: 229
            },
            {
              url: "static/testImg/rice-2.jpg",
              title: "五常大米 入口回味-唇齿留香",
              price: 230
            },
            {
              url: "static/testImg/rice-2.jpg",
              title: "五常大米 入口回味-唇齿留香  ",
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