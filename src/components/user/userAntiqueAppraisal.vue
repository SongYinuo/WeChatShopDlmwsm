<template lang="html">
    <el-container>
      <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
              <i class="el-icon-arrow-left"></i>
          </div>
        古董鉴定
     </el-header>
     <el-row>
            <el-col :span="22" :offset="1">
            <div v-for="household in datas.households">
              <div class="smallTittle">{{household.smallTittle}}</div>
                <div v-for="k in household.items">
                    <router-link :to="{ name:'已发布-鉴定',query: { id: k.id }}">
                        <el-row class="smallimg">
                            <el-col :span="12" class="pd">
                                <p class="menu-strategy ">{{k.text}}</p>
                                <div class="menu-strategy-small omit">{{k.txt}}</div>
                                <span class="menuTime">{{k.time}}</span>
                            </el-col>
                            <el-col :span="8" :offset="4">
                                <img :src="k.iconUrl">
                                <span class="state">{{k.state}}</span>
                            </el-col>
                        </el-row>
                    </router-link>
                </div>
              </div>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      datas: {
        households: [
          {
            smallTittle: "发布内容(2)",
            items: [
              {
                text: "鹰雕像",
                txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反",
                iconUrl: "static/testImg/secondCompany.png",
                time: "17分钟",
                state:"处理中",
                id: "11200"
              },
              {
                text: "鹰雕像",
                txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反",
                iconUrl: "static/testImg/secondCompany.png",
                time: "17分钟",
                 state:" ",
                id: "11201"
              },
              {
                text: "鹰雕像",
                txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反",
                iconUrl: "static/testImg/secondCompany.png",
                time: "17分钟",
                 state:" ",
                id: "11202"
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
@import "../../assets/menu/menu.less";
.menuTime {
  position: absolute;
  bottom: 10px;
  .fz(font-size, 24);
  color: #adaeaf;
}

.menuBtn {
  border-radius: 30px;
  background-color: #dab62e;
  .fz(font-size, 34);
  margin-right: 20px;
}

.menuBtn img {
  width: 24px;
}.smallTittle{
  color: #313131;
  .fz(font-size, 34);
  font-weight: bold;
}.state{
  color: #EE4040;
   .fz(font-size, 24);
   position:absolute;
   right: 5px;
   top: 5px;
}
</style>