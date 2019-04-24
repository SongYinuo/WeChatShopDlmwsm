<template lang="html">
    <!-- <mt-header title="积分商城">
    </mt-header> -->
    <el-container>
        <el-header class="tittle">积分商城</el-header>
        <el-main class="hotShop">
            <el-row>
                <el-col :span="12" v-for="k in datas.hotShopListArray" class="hotShopRow pdTRBL2">
                    <router-link :to="{ name: '详情页', params: { id: k.id } }">
                      <img :src="k.imgurl">
                      <div class="pd2 overHidden">{{k.title}}</div>
                      <div class="colorRed integralConversion">{{k.integralConversion}}</div>
                      <div class="colorRed pd1">¥{{k.price}}</div>
                    </router-link>
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
        hotShopListArray: [
          {
            id: "integralShop10001",
            imgurl: "static/testImg/product-details01-3.jpg",
            title: "【来自农家院】产的优质绿色大米 10kg 两代包邮",
            integralConversion: "300积分可抵31元",
            price: 540
          },
          {
            id: "integralShop10002",
            imgurl: "static/testImg/product-details01-3.jpg",
            title: "1【来自农家院】产的优质绿色大米 10kg 两代包邮",
            integralConversion: "301积分可抵32元",
            price: 140
          },
          {
            id: "integralShop10003",
            imgurl: "static/testImg/product-details01-3.jpg",
            title: "2【来自农家院】产的优质绿色大米 10kg 两代包邮",
            integralConversion: "302积分可抵33元",
            price: 240
          },
          {
            id: "integralShop10004",
            imgurl: "static/testImg/product-details01.jpg",
            title: "3【来自农家院】产的优质绿色大米 10kg 两代包邮",
            integralConversion: "303积分可抵34元",
            price: 340
          },
          {
            id: "integralShop10005",
            imgurl: "static/testImg/product-details01.jpg",
            title: "4【来自农家院】产的优质绿色大米 10kg 两代包邮",
            integralConversion: "304积分可抵35元",
            price: 440
          },
          {
            id: "integralShop10006",
            imgurl: "static/testImg/product-details01.jpg",
            title: "5【来自农家院】产的优质绿色大米 10kg 两代包邮",
            integralConversion: "305积分可抵36元",
            price: 640
          },
          {
            id: "integralShop10007",
            imgurl: "static/testImg/product-details01.jpg",
            title: "6【来自农家院】产的优质绿色大米 10kg 两代包邮",
            integralConversion: "306积分可抵37元",
            price: 740
          },
          {
            id: "integralShop10008",
            imgurl: "static/testImg/product-details01.jpg",
            title: "7【来自农家院】产的优质绿色大米 10kg 两代包邮",
            integralConversion: "307积分可抵38元",
            price: 840
          }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/hotShop/hotShop.less";
.el-main {
  padding: 0;
}
</style>