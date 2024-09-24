<!--
 * @Author: Aimony
 * @Date: 2024-09-24 11:01:40
 * @LastEditors: Aimony
 * @FilePath: \vue-training\src\pages\Rate\Rate.vue
-->
<template>
  <el-card class="currency-converter">
    <h3>汇率转换器</h3>
    <el-form :model="form">
      <el-form-item label="金额" prop="amount">
        <el-tooltip placement="right" content="定义汇率：1 美元 = 7.3 人民币">
          <el-input v-model.number="form.amount" placeholder="请输入金额" />
        </el-tooltip>
      </el-form-item>

      <el-form-item label="选择货币" prop="currency">
        <el-radio-group v-model="form.currency">
          <el-radio-button label="CNY">人民币</el-radio-button>
          <el-radio-button label="USD">美元</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="转换后金额">
        <el-input :value="convertedAmount" disabled />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref, computed } from "vue";

const form = ref({
  amount: 0,
  currency: "CNY",
});

// 定义汇率：1 美元 = 7.3 人民币
const exchangeRate = 7.3;

// 计算转换后的金额
const convertedAmount = computed(() => {
  if (form.value.currency === "CNY") {
    return (form.value.amount / exchangeRate).toFixed(2) + " USD";
  } else {
    return (form.value.amount * exchangeRate).toFixed(2) + " CNY";
  }
});
</script>

<style scoped>
.currency-converter {
  width: 400px;
  margin: 20px auto;
}
</style>
