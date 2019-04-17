<template lang="html">
    <!-- <mt-header title="红山">

    </mt-header> -->
<el-container>
  <el-header class="tittle">红山文化</el-header>
  <!-- <el-main class="menu-tabs">            
      <el-row> -->
       <el-col :span="22" :offset="1">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="攻略" name="first">
              <el-row class="smallimg">
                <el-col :span="1"></el-col>
                <el-col :span="11" class="fl">
                  <p class="menu-strategy">红山玉文化源远流长</p>
                  <div class="menu-strategy-small">红山文化的玉文化是红山文化的先祖们集体的智慧而集中反......</div>
                  <p class="menu-strategy-time">17分钟前</p>
                  </el-col>
                  <el-col :span="2"></el-col>
                  <el-col :span="8" class="menu-strategy-img fr"><img src="..\..\..\static\testImg\secondCompany.png" ></el-col>
                
              </el-row>
              <el-row class="menuStrategy smallimg">
                <el-col :span="1"></el-col>
                <el-col :span="11" class="fl">
                  <p class="menu-strategy">红山玉文化源远流长</p>
                  <div class="menu-strategy-small">红山文化的玉文化是红山文化的先祖们集体的智慧而集中反......</div>
                  <p class="menu-strategy-time">17分钟前</p>
                  </el-col>
                  <el-col :span="2"></el-col>
                <el-col :span="8" class="menu-strategy-img fr"><img src="..\..\..\static\testImg\secondCompany.png" ></el-col>
                
              </el-row>
          </el-tab-pane>
          <el-tab-pane label="社区" name="second">
              <div class="menuHead ">
                  <img class="fl menuHeader" src="..\..\..\static\testImg\shunPrincess.png">
                  <div class="fl menuHead-txt">满文满商种草
                      <div class="menuHead-smalltxt cl">47分钟前</div>
                      <p class="smalltxt-p cl fl">红山文化|论红山文化的历史性</p>
                      
                  </div>
                
                  <div class="cl smalltxt-div">红山文化是这个地区独具特征的一种新石器文化。
                      有其自身的发生发展过程。同时受到其......
                  <el-row type="flex" class="row-bg smallimg " justify="space-around">
                  <el-col :span="6"><img src="..\..\..\static\testImg\secondCompany.png" ></el-col>
                  <el-col :span="6"><img src="..\..\..\static\testImg\secondCompany.png" ></el-col>
                  <el-col :span="6"><img src="..\..\..\static\testImg\secondCompany.png" ></el-col>
                  </el-row>
                  
                </div>
              </div>
              <div class="menuHead mg">
                  <img class="fl menuHeader" src="..\..\..\static\testImg\shunPrincess.png">
                  <div class="fl menuHead-txt">满文满商种草
                      <div class="menuHead-smalltxt cl">47分钟前</div>
                      <p class="smalltxt-p cl fl">红山文化|论红山文化的历史性</p>
                      
                  </div>
                
                  <div class="cl smalltxt-div">发个视频，留作纪念而已。
                  <el-row :gutter="22" class="mg ">
                  
                  <el-col :span="22" class=" smallimg">
                      <video width="320" height="240" controls class="menu-video">
                      <source src="http://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4">
                      
                      
                      </video>
                  </el-col>
                  
                  </el-row>
                  
                </div>
              </div>
            <div class="menuHead mg">
                  <img class="fl menuHeader" src="..\..\..\static\testImg\shunPrincess.png">
                  <div class="fl menuHead-txt">满文满商种草
                      <div class="menuHead-smalltxt cl">47分钟前</div>
                      <p class="smalltxt-p cl fl">红山文化|论红山文化的历史性</p>
                      
                  </div>
                
                  <div class="cl smalltxt-div">红山文化是这个地区独具特征的一种新石器文化。
                      有其自身的发生发展过程。同时受到其......
                  <el-row type="flex" class="row-bg smallimg " justify="space-around">
                  <el-col :span="6"><img src="..\..\..\static\testImg\secondCompany.png" ></el-col>
                  <el-col :span="6"></el-col>
                  <el-col :span="6"></el-col>
                  </el-row>
                  
                </div>
              </div> 
              <el-row>
                <el-col :span="24"><div class="emptyFOOT"></div></el-col>
              </el-row>
          </el-tab-pane>
        </el-tabs>
    </el-col>
        <!-- </el-row>
    </el-main> -->
</el-container>
   
</template>
<script>
export default {
     data() {
      return {
        activeName: 'first'
      };
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