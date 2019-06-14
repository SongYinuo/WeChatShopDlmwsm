<template lang="html">
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
        积分明细
        </el-header>
        <el-row class="integral">
            <el-col class="bg" v-for="item in items">
                <img >
            </el-col>
        </el-row>
    </el-container>
</template>
<script>
export default {
    data() {
        // return {
        //     items:{
              
        // }
        // }
    },
    
}
</script>
<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/user/user.less";
.integral{
    // .bg{
        
    // }
}
</style>