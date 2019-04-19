<template lang="html">
    <!-- <mt-header title="讲堂">
    </mt-header> -->
    <el-container>
        <el-header class="tittle">大讲堂</el-header>
         <el-col :span="22" :offset="1">
            <el-row></el-row>
            <el-row >
                
                
                <div v-for="item in items">
                    <router-link :to="{ name: (item.text)}">
                        <el-row class="smallimg">
                          <el-col :span="16" class="pd" >  
                                <p class="menu-strategy ">{{item.text}}</p>
                                <div class="menu-strategy-small">{{item.txt}}</div>
                                <span class="menu-time">{{item.time}}</span>
                            </el-col>
                            
                        <el-col :span="8">  
                            <img :src="item.iconUrl" >
                        
                         </el-col>
                        </el-row>
                    </router-link >
                </div>
                
                

                            
            </el-row>
            <el-row>
                  <el-col :span="8" :offset="15">  
                           <div class="menu-buttron">
                               <a href="#">
                                   <img src="../../../static/testImg/write@2x.png">
                                   <p>讲个故事</p>
                                </a>
                            </div>
                        
                         </el-col>
            </el-row>
         </el-col>
  </el-container>
 
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            items: [
                {
                    text: "红山玉文化源远流长",
                    txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反......",
                    iconUrl: "static/testImg/secondCompany.png",
                    time: "17分钟"
                },
                {
                    text: "红山玉文化源远流长",
                    txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反......",
                    iconUrl: "static/testImg/secondCompany.png",
                    time: "17分钟"
                },
                {
                    text: "红山玉文化源远流长",
                    txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反......",
                    iconUrl: "static/testImg/secondCompany.png",
                    time: "17分钟"
                }
            ]
        }
    }
};
</script>

<style lang="less" scoped>
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";
</style>