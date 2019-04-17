<template lang="html">
    <!-- <mt-header title="讲堂">
    </mt-header> -->
    <el-container>
        <el-header class="tittle">我的讲堂</el-header>
         <el-col :span="22" :offset="1">
            <el-row class="tittle">讲堂（2）</el-row>
            <el-row >
                <el-col :span="1"></el-col>
                <el-col :span="22" class="fl">
                <!-- <p class="menu-strategy">红山玉文化源远流长</p>
                <div class="menu-strategy-small">红山文化的玉文化是红山文化的先祖们集体的智慧而集中反......</div>
                <p class="menu-strategy-time">17分钟前</p> -->
                <div v-for="item in items">
                    <router-link :to="{ name: (item.text)}">
                        <el-row class="smallimg">
                          <el-col :span="16" >  
                        <p class="menu-strategy ">{{item.text}}</p>
                        <div class="menu-strategy-small">{{item.txt}}</div>
                            </el-col>
                            <el-col :span="8">  
                        <img :src="item.iconUrl" >
                         </el-col>
                        </el-row>
                    </router-link >
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
                    iconUrl: "static/testImg/secondCompany.png"
                },
                {
                    text: "红山玉文化源远流长",
                    txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反......",
                    iconUrl: "static/testImg/secondCompany.png"
                },
                {
                    text: "红山玉文化源远流长",
                    txt: "红山文化的玉文化是红山文化的先祖们集体的智慧而集中反......",
                    iconUrl: "static/testImg/secondCompany.png"
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