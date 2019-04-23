<template lang="html">
    <!-- <mt-header title="热卖商城">
    </mt-header> -->
    <el-container>
        <el-header class="tittle">热卖商城</el-header>
        <el-main class="hotShop">
            <el-row>
                <el-col :span="12" v-for="k in datas.hotShopListArray" class="hotShopRow pdTRBL2">
                    <router-link :to="{ name: '详情页', params: { id: k.id } }">
                      <img :src="k.imgurl">
                      <span class="hotShopIcon brR1 pdTRBL1">热门</span>
                      <div class="pd2">{{k.title}}</div>
                      <div class="pd1">¥{{k.price}}</div>
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
            id: "hotShop10001",
            imgurl: "static/testImg/product-details01-3.jpg",
            title: "【来自农家院】产的优质绿色大米 10kg 两代包邮",
            price: 540
          },
          {
            id: "hotShop10002",
            imgurl: "static/testImg/product-details01-3.jpg",
            title: "1【来自农家院】产的优质绿色大米 10kg 两代包邮",
            price: 140
          },
          {
            id: "hotShop10003",
            imgurl: "static/testImg/product-details01-3.jpg",
            title: "2【来自农家院】产的优质绿色大米 10kg 两代包邮",
            price: 240
          },
          {
            id: "hotShop10004",
            imgurl: "static/testImg/product-details01.jpg",
            title: "3【来自农家院】产的优质绿色大米 10kg 两代包邮",
            price: 340
          },
          {
            id: "hotShop10005",
            imgurl: "static/testImg/product-details01.jpg",
            title: "4【来自农家院】产的优质绿色大米 10kg 两代包邮",
            price: 440
          },
          {
            id: "hotShop10006",
            imgurl: "static/testImg/product-details01.jpg",
            title: "5【来自农家院】产的优质绿色大米 10kg 两代包邮",
            price: 640
          },
          {
            id: "hotShop10007",
            imgurl: "static/testImg/product-details01.jpg",
            title: "6【来自农家院】产的优质绿色大米 10kg 两代包邮",
            price: 740
          },
          {
            id: "hotShop10008",
            imgurl: "static/testImg/product-details01.jpg",
            title: "7【来自农家院】产的优质绿色大米 10kg 两代包邮",
            price: 840
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
@import "../../assets/hotShop/hotShop.less";
.el-main {
  padding: 0;
}
</style>
 