<template lang="html">
    <el-container>
        <el-header class="tittle">交易中心</el-header>
        <div class="trading">
           <el-tabs :tab-position="tabPosition"  v-model="datas.tabkey">
              
                <el-tab-pane v-for="household in datas.households" :label="household.label" :name="household.name">
                  <el-row>
                      <el-col :span="22" :offset="1" class="tradingtab-antique">
                    <div class="tradingtab-adiv">
                          <img :src="household.houseUrl">
                        </div>
                      </el-col>
                  </el-row>
                   <div v-for="k in household.iconArray">
                        
                      <router-link :to="{ name:'交易中心列表',query: { id: k.id }}">
                        <span class="tradingtab-icon">
                          <img :src="k.iconurl" >
                            <span class="menu-strategy tc">{{k.text}}</span>
                         </span>
                      </router-link>
                   </div>
                   
                  </el-tab-pane>

             </el-tabs>
             </div>
          </el-container>
      </template>

<script>
export default {
  data() {
    return {
      
      tabPosition: "left",
     
      datas: {
        aa: 'aa',
        tabkey:'jiaju',
        households: [
          {
            label: '家居',
            name: 'jiaju',
            houseUrl: "static/testImg/banner01.png",
            iconArray: [
              {
                iconurl: "static/testImg/greenFood.png",
                text: "沙发",
                id: "100001"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "摆设",
                id: "100002"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "复古瓷碗",
                id: "100003"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "搪瓷",
                id: "100004"
              }
            ],
          } ,
          {
            label: '古董',
            name: 'gudong',
            houseUrl: "static/testImg/banner01.png",
            iconArray: [
              {
                iconurl: "static/testImg/greenFood.png",
                text: "沙发",
                id: "100001"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "摆设",
                id: "100002"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "复古瓷碗",
                id: "100003"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "搪瓷",
                id: "100004"
              }
            ],
          } ,
          {
            label: '手机',
            name: 'shouji',
            houseUrl: "static/testImg/banner01.png",
            iconArray: [
              {
                iconurl: "static/testImg/greenFood.png",
                text: "沙发",
                id: "100001"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "摆设",
                id: "100002"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "复古瓷碗",
                id: "100003"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "搪瓷",
                id: "100004"
              }
            ],
          },
            {
            label: '数码',
            name: 'shuma',
            houseUrl: "static/testImg/banner01.png",
            iconArray: [
              {
                iconurl: "static/testImg/greenFood.png",
                text: "沙发",
                id: "100001"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "摆设",
                id: "100002"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "复古瓷碗",
                id: "100003"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "搪瓷",
                id: "100004"
              }
            ],
          } ,
            {
            label: '电脑',
            name: 'diannao',
            houseUrl: "static/testImg/banner01.png",
            iconArray: [
              {
                iconurl: "static/testImg/greenFood.png",
                text: "沙发",
                id: "100001"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "摆设",
                id: "100002"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "复古瓷碗",
                id: "100003"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "搪瓷",
                id: "100004"
              }
            ],
          } ,
            {
            label: '家电',
            name: 'jiadian',
            houseUrl: "static/testImg/banner01.png",
            iconArray: [
              {
                iconurl: "static/testImg/greenFood.png",
                text: "沙发",
                id: "100001"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "摆设",
                id: "100002"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "复古瓷碗",
                id: "100003"
              },
              {
                iconurl: "static/testImg/greenFood.png",
                text: "搪瓷",
                id: "100004"
              }
            ],
          } ,
        ]
      }
    }
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";

.trading .el-tabs__nav {
  margin-left: 0%;
  background-color: #f5f5f4;
  left: 0;
}
.trading .el-tabs--left .el-tabs__active-bar.is-left, .el-tabs--left .el-tabs__nav-wrap.is-left::after {
    left: 0;
   
}
.trading  .el-tabs__item:hover {
    color: #DAB62E;
    cursor: pointer;
    background-color: #fff;
}
.tradingtab-adiv img {
  width: 80%;

  padding-left: 10%;
}

.tradingtab-adiv {
  border-radius: 3px;
  background-color: #dab62e;
}
.trading .tradingtab-icon {
  width: 33%;
  float: left;
  text-align: center;
}
   
// .trading .el-tabs--left .el-tabs__active-bar.is-left,
// .el-tabs--left .el-tabs__nav-wrap.is-left::after {
//   left: 0;
// }
// .trading .el-tabs__item.is-active {
//   color: #dab62e;
//   background-color: #ffffff;
// }
// .trading .el-tabs__item {
//   .fz(font-size, 26);
//   color: #313131;
// }
// .trading .el-tabs__item {
//   height: 50px;
//   line-height: 50px;
// }

// .trading .menu-strategy {
//   .fz(font-size, 26);
//   color: #313131;
//   font-weight: bold;
// }

.tradingtab-icon img{
  border-radius: 3px;
}
</style>