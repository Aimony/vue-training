<!--
 * @Author: Aimony
 * @Date: 2024-09-24 10:57:32
 * @LastEditors: Aimony
 * @FilePath: \vue-training\src\App.vue
-->
<script setup></script>

<template>
  <el-button type="primary" style="margin-bottom: 10px" @click="$router.push('/')">返回首页</el-button>
  <router-view></router-view>
</template>

<style scoped></style>
