<template>
  <div class="home-container">
    <div class="home-container-header">
      <h1 style="text-align: center">
        vue-training
        <a href="https://github.com/Aimony/vue-training" target="_blank" style="color: inherit; text-decoration: none">
          <Icon icon="mdi:github" style="cursor: pointer" />
        </a>
        <a
          href="https://blog.linser.shop/"
          target="_blank"
          style="color: inherit; text-decoration: none; margin-left: 15px"
        >
          <Icon icon="fa-solid:blog" style="cursor: pointer" />
        </a>
      </h1>
    </div>
    <div class="home-container-body" style="margin: 10%">
      <!-- TODO 循环生成 -->
      <el-row :gutter="40">
        <el-col :span="6">
          <el-card class="card" shadow="hover" @click="$router.push('/add')">增加标题和按钮</el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="card" shadow="hover" @click="$router.push('/movie')">选择电影</el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="card" shadow="hover" @click="$router.push('/rate')">汇率转换</el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="card" shadow="hover" @click="$router.push('/form')">表单信息</el-card>
        </el-col>
        <el-col :span="6">
          <!-- <el-card class="card" shadow="hover"></el-card> -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { routes } from "@/router";
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.card {
  border-radius: 10px;
}
.card:hover {
  filter: drop-shadow(0 0 1em #42b883aa);
}
</style>
