<template lang="html">
    <el-container>
      <el-header class="tittle">
        <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
         </div>
           种草详情视频
     </el-header>
     <el-row class="videos">
         <el-col v-for="video in videos">
              <video :src="video.videoUrl" controls="controls" class="deVideos"></video>
         </el-col>
     </el-row>
    </el-container>
</template>
<script>
export default{
    data() {
        return {
           videos:[
               {
                  videoUrl:"static/testImg/pigsmall.mp4", 
               }
           ] 
        }
    },
}




</script>
<style lang="less">
@import "../../../assets/index/indexSwiper.less";
@import "../../../assets/header.less";
@import "../../../assets/index/style.less";
@import "../../../assets/menu/details.less";
</style>