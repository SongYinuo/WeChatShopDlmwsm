<template lang="html">
    <!-- <mt-header title="拍卖会">
    </mt-header> -->
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
        拍卖会
        </el-header>
        <el-main class="auctionRow pd2 mgB2">
            <el-row class="advertising">
                <el-col class="advertisingImg">
                    <img :src="auctionList.auctionAdvertisingImg">
                </el-col>
            </el-row>
            <el-row>
                <el-tabs v-model="auctionList.tabKey">
                    <el-tab-pane v-for="k in auctionList.auctionAdvertisingArray" :label="k.label" :name="k.name">
                        <el-row class="productRow">
                            <el-col :span="22" :offset="1">
                                <el-col :span="8" class="productRowInfo pdLR1" v-for="o in k.productArray">
                                    <router-link :to="{ name: '详情页', params: { id: o.id } }">
                                        <img :src="o.productImg">
                                        <div class="pd2 infoTilte bgCfff lh1-2">{{o.title}}</div>
                                        <div class="colorRed bgCfff">¥{{o.price}}</div>
                                     </router-link>
                                </el-col>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      auctionList: {
        auctionAdvertisingImg: "static/testImg/product-details01.jpg",
        tabKey: "biqiangbaokuan",
        auctionAdvertisingArray: [
          {
            label: "必抢爆款",
            name: "biqiangbaokuan",
            productArray: [
              {
                id: "auction100001",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "农家特产优质绿色大米",
                price: 441
              },
              {
                id: "auction100002",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "1农家特产优质绿色大米",
                price: 1440
              },
              {
                id: "auction100003",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "2农家特产优质绿色大米",
                price: 1441
              },
              {
                id: "auction100004",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "3农家特产优质绿色大米",
                price: 1442
              },
              {
                id: "auction100005",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "4农家特产优质绿色大米",
                price: 1443
              },
              {
                id: "auction100006",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "5农家特产优质绿色大米",
                price: 1444
              }
            ]
          },
          {
            label: "万年古董",
            name: "wanniangudong",
            productArray: [
              {
                id: "auction200001",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "农家特产优质绿色大米",
                price: 10041
              },
              {
                id: "auction200002",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "12农家特产优质绿色大米",
                price: 10440
              },
              {
                id: "auction200003",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "12农家特产优质绿色大米",
                price: 10441
              },
              {
                id: "auction200004",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "13农家特产优质绿色大米",
                price: 10442
              },
              {
                id: "auction200005",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "14农家特产优质绿色大米",
                price: 10443
              },
              {
                id: "auction200006",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "15农家特产优质绿色大米",
                price: 10444
              }
            ]
          },
          {
            label: "人气爆品",
            name: "renqibaopin",
            productArray: [
              {
                id: "auction300001",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "农家特产优质绿色大米",
                price: 10041
              },
              {
                id: "auction300002",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "13农家特产优质绿色大米",
                price: 5440
              },
              {
                id: "auction300003",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "14农家特产优质绿色大米",
                price: 3441
              },
              {
                id: "auction300004",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "14农家特产优质绿色大米",
                price: 3442
              },
              {
                id: "auction300005",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "16农家特产优质绿色大米",
                price: 3443
              },
              {
                id: "auction300006",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "17农家特产优质绿色大米",
                price: 3444
              }
            ]
          },
          {
            label: "囤货必备",
            name: "tunhuobibei",
            productArray: [
              {
                id: "auction400001",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "农家特产优质绿色大米",
                price: 6041
              },
              {
                id: "auction400002",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "23农家特产优质绿色大米",
                price: 6440
              },
              {
                id: "auction400003",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "24农家特产优质绿色大米",
                price: 25441
              },
              {
                id: "auction400004",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "25农家特产优质绿色大米",
                price: 6442
              },
              {
                id: "auction400005",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "26农家特产优质绿色大米",
                price: 6443
              },
              {
                id: "auction400006",
                productImg: "static/testImg/product-details01-3.jpg",
                title: "27农家特产优质绿色大米",
                price: 6444
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
.el-main {
  padding: 0;
}
.auctionRow {
  .el-tabs__active-bar {
    display: none;
  }
  .el-tabs__nav-wrap::after {
    display: none;
  }
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding: 0 20px;
  }
  .el-tabs__header {
    margin-bottom: 4px;
  }
  .el-tabs__active-bar {
  }
  .el-tabs__item {
    width: 25%;
  }
  .el-tabs__nav {
    width: 100%;
  }
  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding: 0 20px;
  }
  .el-tabs--top .el-tabs__item.is-top:last-child {
    padding: 0 20px;
  }
  .advertising {
    .advertisingImg {
      img {
         width: 100%;
      }
    }
  }
  .productRow {
    background-color: #f5f5f5;
    .productRowInfo {
      background-color: white;
      padding-bottom: 1vw;
      img {
        width: 100%;
      }
      .infoTilte {
        .fz(font-size, 28);
      }
    }
  }
}
</style>