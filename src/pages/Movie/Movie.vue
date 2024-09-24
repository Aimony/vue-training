<!--
 * @Author: Aimony
 * @Date: 2024-09-24 11:18:03
 * @LastEditors: Aimony
 * @FilePath: \vue-training\src\pages\Movie\Movie.vue
-->
<template>
  <div>
    <!-- 电影列表 -->
    <div class="movie-list">
      <span
        v-for="(movie, index) in movies"
        :key="movie"
        :class="{ selected: selectedMovieIndex === index }"
        @click="selectMovie(index)"
        class="movie-item"
      >
        {{ movie }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";

// 电影名称列表
const movies = ref(["教父", "阿甘正传", "楚门的世界", "盗梦空间"]);

// 当前选中的电影的索引，默认选中第一个
const selectedMovieIndex = ref(0);

// 选择电影的函数
const selectMovie = (index) => {
  selectedMovieIndex.value = index;
  ElMessage({
    message: `你选择了 <span style="color: red;font-weight: bold;">${movies.value[index]}</span>`,
    type: "success",
    dangerouslyUseHTMLString: true,
  });
};
</script>

<style scoped>
.movie-list {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}

.movie-item {
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
}

.selected {
  color: red;
  font-weight: bold;
}
</style>
