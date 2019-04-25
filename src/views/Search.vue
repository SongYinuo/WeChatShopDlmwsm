<template lang="html">
    <el-header class="tittle">
        <div class="back" @click="$router.go(-1)">
           <i class="el-icon-arrow-left"></i>
        </div>
        搜索
    </el-header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/header.less";
@import "../assets/index/style.less";
@import "../assets/search/search.less";
</style>