<!--
 * @Author: Aimony
 * @Date: 2024-09-24 11:16:38
 * @LastEditors: Aimony
 * @FilePath: \vue-training\src\pages\Add\Add.vue
-->
<template>
  <div>
    <!-- <el-page-header>
      <template #content>
        <span class="text-large font-600 mr-3"> 主页 </span>
      </template>
      <template #title>
        <span>
          <router-link to="/">回到首页</router-link>
        </span>
      </template>
    </el-page-header> -->

    <!-- 控制按钮 -->
    <div class="control-buttons">
      <button style="margin-right: 10px; margin-bottom: 10px" @click="addTitle">点击我增加一行</button>
      <button @click="addButton">点击我增加一个按钮</button>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <!-- 标题部分 -->
        <div v-for="(title, index) in titles" :key="index" class="title">
          {{ title }}
        </div>
      </el-col>
      <el-col :span="12">
        <!-- 按钮部分 -->
        <div class="button-list">
          <button v-for="(button, index) in buttons" :key="index" class="button-item">
            {{ button }}
          </button>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 定义标题和按钮的列表
const titles = ref(["haha"]);
const buttons = ref(["haha,我是新增的按钮"]);

// 新增标题的函数
const addTitle = () => {
  titles.value.push("haha,我是新增的一行");
};

// 新增按钮的函数
const addButton = () => {
  buttons.value.push("haha,我是新增的按钮");
};
</script>

<style scoped>
.button-list {
  margin-top: 10px;
}

.button-item {
  margin-right: 10px;
}

.title {
  font-size: 24px;
  margin: 10px 0;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
