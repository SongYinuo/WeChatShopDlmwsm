<template lang="html">
    <!-- <mt-header title="限时抢购">
    </mt-header> -->
    <el-container>
        <el-header class="tittle">限时抢购</el-header>
        <el-main class="timeLimit">
            <el-row>
                <el-col :span="24">
                    <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                        <el-radio-button label="top">top</el-radio-button>
                        <el-radio-button label="right">right</el-radio-button>
                        <el-radio-button label="bottom">bottom</el-radio-button>
                        <el-radio-button label="left">left</el-radio-button>
                    </el-radio-group> -->
                      <el-tabs v-model="datas.tabKey"  type="card">
                            <el-tab-pane v-for="k in datas.timeLimits.timeLimitsArray" :label="k.timeFramesLabel" :name="k.timeFramesName">
                                <el-row class="timeLimitRow pdB2">
                                    <el-col :span="24">
                                        <el-col :span="24" class="timeLimitAdvertisingImg">
                                            <img :src="k.advertisingImgUrl">
                                        </el-col>
                                        <el-col :span="24">
                                            <p class="stateText bgGray colorWhite pdTRBL1">疯抢中</p>
                                            <!-- <p class="stateText bgGray colorWhite pdTRBL1">已抢光</p> -->
                                        </el-col>
                                    </el-col>
                                </el-row>
                                <el-row class="timeLimitproductRow">
                                    <el-col :span="22" :offset="1" v-for="o in k.productArray" class="pd2">
                                        <el-col :span="7" class="productImg">
                                            <img :src="o.productUrl">
                                        </el-col>
                                        <el-col :span="16" :offset="1" class="productText">
                                             <router-link :to="{ name: '详情页', params: { id: o.id } }">
                                                <div class="pdT4">
                                                    <div class="title overHidden">{{o.title}}</div>
                                                    <div class="explainTitle colorGray">{{o.explanatory}}</div>
                                                    <el-row>
                                                        <el-col :span="16">
                                                            <div class="price colorRed letterSpacing1">¥{{o.price}}</div>
                                                            <div class="originalPrice letterSpacing1"><del>¥{{o.originalPrice}}</del></div>
                                                        </el-col>
                                                        <el-col :span="7" :offset="1">
                                                            <div class="rushBtn">
                                                                <el-button type="danger" class="btn">抢购中</el-button>
                                                            </div>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </router-link>
                                        </el-col>
                                    </el-col>
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
      datas: {
        tabKey: "10:00",
        timeLimits: {
          timeLimitsArray: [
            {
              timeFramesLabel: "10:00",
              timeFramesName: "10:00",
              state: "已开抢",
              advertisingImgUrl: "static/testImg/pic1@2x.png",
              productArray: [
                {
                  id: "xianshi100001",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "401",
                  originalPrice: "645"
                },
                {
                  id: "xianshi100002",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "1【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "1401",
                  originalPrice: "1645"
                },
                {
                  id: "xianshi100003",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "2【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "2两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "2401",
                  originalPrice: "2645"
                },
                {
                  id: "xianshi100004",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "3【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "3两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "3401",
                  originalPrice: "3645"
                },
                {
                  id: "xianshi100005",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "4【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "4两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "4401",
                  originalPrice: "4645"
                },
                {
                  id: "xianshi100006",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "6【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "6401",
                  originalPrice: "6645"
                },
                {
                  id: "xianshi100007",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "7【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "7401",
                  originalPrice: "7645"
                }
              ]
            },
            {
              timeFramesLabel: "12:00",
              timeFramesName: "12:00",
              state: "已开抢",
              advertisingImgUrl: "static/testImg/pic1@2x.png",
              productArray: [
                {
                  id: "xianshi100002",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "02【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "2001",
                  originalPrice: "20641"
                },
                {
                  id: "xianshi100002",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "20【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "20401",
                  originalPrice: "20642"
                },
                {
                  id: "xianshi100003",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "20【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "2两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "20401",
                  originalPrice: "20643"
                },
                {
                  id: "xianshi100004",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "20【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "3两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "20401",
                  originalPrice: "20644"
                },
                {
                  id: "xianshi100005",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "20【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "4两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "20401",
                  originalPrice: "20645"
                },
                {
                  id: "xianshi100006",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "20【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "20401",
                  originalPrice: "20646"
                },
                {
                  id: "xianshi100007",
                  productUrl: "static/testImg/product-details01-2.jpg",
                  title: "20【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "20401",
                  originalPrice: "20647"
                }
              ]
            },
            {
              timeFramesLabel: "14:00",
              timeFramesName: "14:00",
              state: "抢购中",
              advertisingImgUrl: "static/testImg/pic1@2x.png",
              productArray: [
                {
                  id: "xianshi100001",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "401",
                  originalPrice: "645"
                },
                {
                  id: "xianshi100002",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "1【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "1401",
                  originalPrice: "1645"
                },
                {
                  id: "xianshi100003",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "2【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "2两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "2401",
                  originalPrice: "2645"
                },
                {
                  id: "xianshi100004",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "3【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "3两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "3401",
                  originalPrice: "3645"
                },
                {
                  id: "xianshi100005",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "4【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "4两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "4401",
                  originalPrice: "4645"
                },
                {
                  id: "xianshi100006",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "6【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "6401",
                  originalPrice: "6645"
                },
                {
                  id: "xianshi100007",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "7【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "7401",
                  originalPrice: "7645"
                }
              ]
            },
            {
              timeFramesLabel: "16:00",
              timeFramesName: "16:00",
              state: "即将开抢",
              advertisingImgUrl: "static/testImg/pic1@2x.png",
              productArray: [
                {
                  id: "xianshi100001",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "401",
                  originalPrice: "645"
                },
                {
                  id: "xianshi100002",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "1【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "1401",
                  originalPrice: "1645"
                },
                {
                  id: "xianshi100003",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "2【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "2两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "2401",
                  originalPrice: "2645"
                },
                {
                  id: "xianshi100004",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "3【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "3两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "3401",
                  originalPrice: "3645"
                },
                {
                  id: "xianshi100005",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "4【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "4两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "4401",
                  originalPrice: "4645"
                },
                {
                  id: "xianshi100006",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "6【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "6401",
                  originalPrice: "6645"
                },
                {
                  id: "xianshi100007",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "7【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "7401",
                  originalPrice: "7645"
                }
              ]
            },
            {
              timeFramesLabel: "18:00",
              timeFramesName: "18:00",
              state: "即将开抢",
              advertisingImgUrl: "static/testImg/pic1@2x.png",
              productArray: [
                {
                  id: "xianshi100001",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "401",
                  originalPrice: "645"
                },
                {
                  id: "xianshi100002",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "1【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "1401",
                  originalPrice: "1645"
                },
                {
                  id: "xianshi100003",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "2【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "2两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "2401",
                  originalPrice: "2645"
                },
                {
                  id: "xianshi100004",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "3【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "3两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "3401",
                  originalPrice: "3645"
                },
                {
                  id: "xianshi100005",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "4【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "4两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "4401",
                  originalPrice: "4645"
                },
                {
                  id: "xianshi100006",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "6【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "6401",
                  originalPrice: "6645"
                },
                {
                  id: "xianshi100007",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "7【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "7401",
                  originalPrice: "7645"
                }
              ]
            },
            {
              timeFramesLabel: "20:00",
              timeFramesName: "20:00",
              state: "即将开抢",
              advertisingImgUrl: "static/testImg/pic1@2x.png",
              productArray: [
                {
                  id: "xianshi100001",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "401",
                  originalPrice: "645"
                },
                {
                  id: "xianshi100002",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "1【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "1401",
                  originalPrice: "1645"
                },
                {
                  id: "xianshi100003",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "2【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "2两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "2401",
                  originalPrice: "2645"
                },
                {
                  id: "xianshi100004",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "3【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "3两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "3401",
                  originalPrice: "3645"
                },
                {
                  id: "xianshi100005",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "4【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "4两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "4401",
                  originalPrice: "4645"
                },
                {
                  id: "xianshi100006",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "6【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "6401",
                  originalPrice: "6645"
                },
                {
                  id: "xianshi100007",
                  productUrl: "static/testImg/product-details01.jpg",
                  title: "7【来自农家院】产的优质绿色大米 10kg 两代包邮",
                  explanatory: "6两包包邮，仅限大陆各地，港澳台不包邮。",
                  price: "7401",
                  originalPrice: "7645"
                }
              ]
            }
          ]
        }
      }
    };
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/timeLimit/timeLimit.less";
.el-main {
  padding: 0;
}
.timeLimit {
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__item {
    border: none;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    background-color: red;
    color: #fff;
  }
  .el-tabs__nav-wrap.is-scrollable {
    padding: 0;
  }
  .el-tabs__nav-prev {
    display: none;
  }
  .el-tabs__nav-next {
    display: none;
  }
}
</style>