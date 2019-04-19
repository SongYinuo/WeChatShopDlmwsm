<template lang="html">

<el-container>
  <el-header class="tittle">养生文化</el-header>
       <el-col :span="22" :offset="1">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="攻略" name="first">
              <el-row >
                  <div v-for="item in items">
                      <router-link  :to="{ name: (item.text)}">
                          <el-row class="smallimg">
                              <el-col :span="16" class="pd" >  
                                <p class="menu-strategy ">{{item.text}}</p>
                                <div class="menu-strategy-small">{{item.txt}}</div>
                              </el-col>

                              <el-col :span="8">  
                            <img :src="item.iconUrl" >
                            
                         </el-col>
                          </el-row>
                      </router-link>
                  </div>
                 
                  
                
              </el-row>
          </el-tab-pane>
          <el-tab-pane label="社区" name="second">
              <div v-for="array in arrays">
                <router-link :to="{name: (array.text)}">
                    <el-row>
                        <el-col :span="22" >
                            <img :src="array.iconUrl" class="fl menuHeader" >
                            <div class="fl menuHead-txt">{{array.text}}</div>
                            <div class="fl cl menuHead-smtxt">{{array.txt}}</div>
                             <p class="smalltxt-p cl fl">{{array.paragraph}}</p>
                            <div class="cl smalltxt-div">{{array.article}}</div>
                  
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg smallimg " justify="space-around">
                        
                            
                            <el-col :span="6" :offset="3"><img :src="array.photoUrl"></el-col>
                            <el-col :span="6"><img :src="array.photoUrl"></el-col>
                            <el-col :span="6"><img :src="array.photoUrl"></el-col>
                            
                            
                        
                    </el-row>
                   
                </router-link>
              </div>
              <div v-for="avideo in avideos">
                <router-link :to="{name: (avideo.text)}">
                    <el-row>
                        <el-col :span="22" >
                            <img :src="avideo.iconUrl" class="fl menuHeader" >
                            <div class="fl menuHead-txt">{{avideo.text}}</div>
                            <div class="fl cl menuHead-smtxt">{{avideo.txt}}</div>
                             <p class="smalltxt-p cl fl">{{avideo.paragraph}}</p>
                            <div class="cl smalltxt-div">{{avideo.article}}</div>
                  
                        </el-col>
                    </el-row>
                     <el-row :gutter="22" class="mg ">
                  
                         <el-col :span="22" :offset="3" class=" smallimg">
                         <video :src="avideo.videoUrl" controls="controls" class="menu-video"></video>
                         </el-col>
                  
                    </el-row>
                
                </router-link>
                
              </div>
             <div v-for="array in arrays">
                <router-link :to="{name: (array.text)}">
                    <el-row>
                        <el-col :span="22" >
                            <img :src="array.iconUrl" class="fl menuHeader" >
                            <div class="fl menuHead-txt">{{array.text}}</div>
                            <div class="fl cl menuHead-smtxt">{{array.txt}}</div>
                             <p class="smalltxt-p cl fl">{{array.paragraph}}</p>
                            <div class="cl smalltxt-div">{{array.article}}</div>
                  
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg smallimg " justify="space-around">
                        
                            
                            <el-col :span="6" :offset="3"><img :src="array.photoUrl"></el-col>
                            <el-col :span="6"></el-col>
                            <el-col :span="6"></el-col>
                            
                            
                        
                    </el-row>
                   
                </router-link>
              </div>
              <el-row>
                <el-col :span="24"><div class="emptyFOOT"></div></el-col>
              </el-row>
          </el-tab-pane>
        </el-tabs>
    </el-col>
</el-container>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            activeName: 'first',
            items: [
                {
                    text: "对胃好的食物",
                    txt: "如何选择一份对胃好不伤胃的早餐呢......",
                    iconUrl: "static/testImg/secondCompany.png",
                    state:"审核中"
                },
                {
                    text: "对胃好的食物",
                    txt: "如何选择一份对胃好不伤胃的早餐呢......",
                    iconUrl: "static/testImg/secondCompany.png",
                    state:" "
                },
                {
                    text: "对胃好的食物",
                    txt: "如何选择一份对胃好不伤胃的早餐呢......",
                    iconUrl: "static/testImg/secondCompany.png",
                    states:"已审核"
                }
            ],
            arrays: [
                {
                    text: "对胃好的食物",
                    txt: "47分钟前",
                    iconUrl: "static/testImg/shunPrincess.png",
                    paragraph: "红山文化|论红山文化的历史性",
                    article: "如何选择一份对胃好不伤胃的早餐呢......",
                    photoUrl: "static/testImg/secondCompany.png",
                },
                
            ],
            avideos: [
                {
                    text: "对胃好的食物",
                    txt: "47分钟前",
                    iconUrl:  "static/testImg/shunPrincess.png",
                    paragraph: "红山文化|论红山文化的历史性",
                    article: "如何选择一份对胃好不伤胃的早餐呢......",
                    videoUrl: "http://www.runoob.com/try/demo_source/movie.mp4",
                },
               
            ]
        }
    },
       methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    } 
};
</script>
<style lang="less" >
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";
</style>