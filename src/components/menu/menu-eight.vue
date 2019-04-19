<template lang="html">
    <el-container>
        <el-header class="tittle">交易中心</el-header>
              <el-tabs :tab-position="tabPosition" class="tradingtab">
                <el-tab-pane label="家居">
                  <el-row>
                      <el-col :span="22" :offset="1" class="tradingtab-antique">
                        <div class="tradingtab-adiv">
                          <img src="../../../static/testImg/banner01.png">
                        </div>
                      </el-col>
                  </el-row>
                   <div v-for="household in households">
                      <router-link :to="{ name:(household.text)}">
                        <span class="tradingtab-icon">
                          <img :src="household.iconurl" >
                            <span class="menu-strategy tc">{{household.text}}</span>
                              </span>
                      </router-link>
                   </div>
                  </el-tab-pane>
                <el-tab-pane label="古董">
                  <el-row>
                    <el-col :span="22" :offset="1" class="tradingtab-antique">
                      <div class="tradingtab-adiv"><img src="../../../static/testImg/banner01.png"></div>
                    </el-col>
                  </el-row>
                  <div v-for="item in items">
                    <router-link :to="{ name:(item.text)}">
                      <span class="tradingtab-icon">
                        <img :src="item.iconurl" >
                          <span class="menu-strategy tc">{{item.text}}</span>
                      </span>
                    </router-link>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="手机">
                  <el-row>
                    <el-col :span="22" :offset="1" class="tradingtab-antique">
                      <div class="tradingtab-adiv"><img src="../../../static/testImg/banner01.png"></div>
                    </el-col>
                  </el-row>
                  <div v-for="phone in phones">
                    <router-link :to="{ name:(phone.text)}">
                      <span class="tradingtab-icon">
                        <img :src="phone.iconurl" >
                          <span class="menu-strategy tc">{{phone.text}}</span>
                      </span>
                    </router-link>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="数码">
                  <el-row>
                    <el-col :span="22" :offset="1" class="tradingtab-antique">
                      <div class="tradingtab-adiv"><img src="../../../static/testImg/banner01.png"></div>
                    </el-col>
                  </el-row>
                  <div v-for="digital in digitals">
                    <router-link :to="{ name:(digital.text)}">
                      <span class="tradingtab-icon">
                        <img :src="digital.iconurl" >
                          <span class="menu-strategy tc">{{digital.text}}</span>
                      </span>
                    </router-link>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="电脑">
                  <el-row>
                    <el-col :span="22" :offset="1" class="tradingtab-antique">
                      <div class="tradingtab-adiv"><img src="../../../static/testImg/banner01.png"></div>
                    </el-col>
                  </el-row>
                  <div v-for=" computer in computers">
                    <router-link :to="{ name:(computer.text)}">
                      <span class="tradingtab-icon">
                        <img :src=" computer.iconurl" >
                          <span class="menu-strategy tc">{{computer.text}}</span>
                      </span>
                    </router-link>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="家电"><el-row>
                    <el-col :span="22" :offset="1" class="tradingtab-antique">
                      <div class="tradingtab-adiv"><img src="../../../static/testImg/banner01.png"></div>
                    </el-col>
                  </el-row>
                  <div v-for="appliance in appliances">
                    <router-link :to="{ name:(appliance.text)}">
                      <span class="tradingtab-icon">
                        <img :src="appliance.iconurl" >
                          <span class="menu-strategy tc">{{appliance.text}}</span>
                      </span>
                    </router-link>
                  </div>
                </el-tab-pane>
             </el-tabs>
          </el-container>
      </template>

<script>
  export default {
    data() {
      return {
        tabPosition: 'left',
        households:[
           {
             iconurl:"static/testImg/greenFood.png",
             text:"沙发", 
            },{
             iconurl:"static/testImg/greenFood.png",
             text:"摆设", 
            },
            {
             iconurl:"static/testImg/greenFood.png",
             text:"复古瓷碗", 
            },{
             iconurl:"static/testImg/greenFood.png",
             text:"搪瓷", 
            }
            ],
        items:[
           {
             iconurl:"static/testImg/redMountain.png",
             text:"玉", 
            },{
             iconurl:"static/testImg/redMountain.png",
             text:"摆设", 
            },
            {
             iconurl:"static/testImg/redMountain.png",
             text:"复古瓷碗", 
            },{
             iconurl:"static/testImg/redMountain.png",
             text:"搪瓷", 
            }
            ],
         phones:[
           {
             iconurl:"static/testImg/haHundred.png",
             text:"手机", 
            },{
             iconurl:"static/testImg/haHundred.png",
             text:"手机", 
            },
            {
             iconurl:"static/testImg/haHundred.png",
             text:"手机", 
            },{
             iconurl:"static/testImg/haHundred.png",
             text:"手机", 
            }
            ],
            digitals:[
           {
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            },{
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            },
            {
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            },{
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            }
            ],
            computers:[
           {
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            },{
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            },
            {
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            },{
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            }
            ],
            appliances:[
           {
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            },{
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            },
            {
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            },{
             iconurl:"static/testImg/tradingCenter.png",
             text:"手机", 
            }
            ],
       
      }
    }
  };
</script>

<style lang="less" >
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";
.tradingtab {
.el-tabs__nav {
    margin-left: 0%;
    background-color: #F5F5F4;
}
.tradingtab-antique .tradingtab-adiv img {
    width: 100%;
}
}
</style>