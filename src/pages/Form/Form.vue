<template>
  <div class="card-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span class="underline">个人信息</span>
        </div>
      </template>
      <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="auto" style="max-width: 555px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="form.age" />
        </el-form-item>

        <!-- <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio value="1">男</el-radio>
            <el-radio value="0">女</el-radio>
          </el-radio-group>
        </el-form-item> -->

        <el-form-item label="性别" prop="sex">
          <el-segmented v-model="form.sex" :options="['男', '女']" />
        </el-form-item>

        <el-form-item label="爱好" prop="hobby">
          <el-checkbox-group v-model="form.hobby">
            <el-checkbox value="singing" name="type"> 唱🎤 </el-checkbox>
            <el-checkbox value="dance" name="type">跳💃 </el-checkbox>
            <el-checkbox value="rap" name="type">rap🐔 </el-checkbox>
            <el-checkbox value="basketball" name="type">篮球🏀 </el-checkbox>
            <el-checkbox value="coding" name="type">敲键盘🎹 </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="职业" prop="occupation">
          <el-select v-model="form.occupation" placeholder="请选择你的职业">
            <el-option label="大老板" value="bigboss" />
            <el-option label="小老板" value="smallboss" />
            <el-option label="牛马🐂🐎" value="niuma" />
          </el-select>
        </el-form-item>

        <el-form-item label="城市" prop="city">
          <el-select v-model="form.city" placeholder="请选择你的城市">
            <el-option label="上海" value="shanghai" />
            <el-option label="北京" value="beijing" />
          </el-select>
        </el-form-item>

        <el-form-item label="个人简介">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>

        <el-form-item class="form-footer" prop="flag">
          <el-checkbox v-model="form.flag" value="false" name="type" style="margin-left: 66px">同意协议</el-checkbox>
          <div style="margin-left: auto">
            <el-button @click="resetForm(ruleFormRef)"
              ><el-icon><RefreshLeft /></el-icon
            ></el-button>
            <el-button type="primary" @click="onSubmit(ruleFormRef)">提交</el-button>
          </div>
        </el-form-item>

        <el-form-item> </el-form-item> </el-form
    ></el-card>

    <el-dialog v-model="dialogTableVisible" title="个人信息详情" width="800">
      <el-table :data="computedData" :cell-class-name="setCellClass" :cell-style="setCellStyle">
        <el-table-column property="name" label="用户名" width="150" />
        <el-table-column property="age" label="年龄" />
        <el-table-column property="sex" label="性别" />
        <el-table-column property="hobby" label="爱好" />
        <el-table-column property="occupation" label="职业" />
        <el-table-column property="city" label="城市" />
        <el-table-column property="desc" label="个人简介" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { ElMessage } from "element-plus";
import { el } from "element-plus/es/locales.mjs";

const form = reactive({
  name: "",
  sex: "",
  age: "",
  region: "",
  hobby: [],
  occupation: "",
  city: "",
  desc: "",
  flag: false,
});

const ruleFormRef = ref();

// 方法定义在 rules之前
const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入年龄"));
  }
  if (!Number.isInteger(value)) {
    callback(new Error("请输入数字"));
  } else {
    if (value < 18) {
      callback(new Error("你个小屁孩"));
    } else if (value > 120) {
      callback(new Error("鸽鸽都没你大"));
    } else {
      callback();
    }
  }
};
const rules = reactive({
  name: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  age: [{ validator: checkAge, trigger: "blur" }],
  sex: [
    {
      required: true,
      message: "请选择你的性别",
      trigger: "change",
    },
  ],
  hobby: [
    {
      type: "array",
      required: true,
      message: "请选择你的爱好",
      trigger: "change",
    },
  ],
  occupation: [
    {
      required: true,
      message: "请选择你是什么牛马",
      trigger: "change",
    },
  ],
  city: [
    {
      required: true,
      message: "请选择你的🐂🐎城市",
      trigger: "change",
    },
  ],
  flag: [
    {
      required: true,
      message: "请同意协议后提交",
      trigger: "change",
    },
  ],
});

const dialogTableVisible = ref(false);

// 发送请求取后端的值
const computedData = [
  {
    name: computed(() => form.name),
    sex: computed(() => form.sex),
    age: computed(() => form.age),
    region: computed(() => form.region),
    hobby: computed(() => {
      const targetHobbies = ["singing", "dance", "rap", "basketball"];
      const selectedHobbies = form.hobby;
      const isAiKun =
        targetHobbies.every((item) => selectedHobbies.includes(item)) &&
        selectedHobbies.length === targetHobbies.length;
      return isAiKun ? "你是爱坤🐔" : selectedHobbies.join(", ");
    }),
    occupation: computed(() => form.occupation),
    city: computed(() => form.city),
    desc: computed(() => (form.desc ? form.desc : "无")),
  },
];

function setCellClass({ row, column, rowIndex, columnIndex }) {
  if (column.property === "hobby" && row.hobby === "你是爱坤🐔") {
    return "green-background";
  }
  return "";
}

function setCellStyle({ row, column, rowIndex, columnIndex }) {
  // 针对 hobby 列，并且 hobby 为 "篮球" 时，设置背景色为绿色
  if (column.property === "hobby" && row.hobby === "你是爱坤🐔") {
    return { backgroundColor: "pink", color: "white" };
  }
  return {}; // 默认返回空样式
}

const onSubmit = async (formEl) => {
  console.log(form);
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid && form.flag) {
      console.log("submit! formEl: ", formEl);
      ElMessage({
        message: "提交成功！鸽鸽为你点赞👍~",
        type: "success",
      });
      dialogTableVisible.value = true;
    } else {
      console.log("error submit!", fields);
      ElMessage({
        message: "哎呦你干嘛~没填完就要交",
        type: "warning",
      });
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped>
.card-container {
  width: 666px;
  margin: 20px auto;
}

.form-footer {
  display: flex;
  align-items: center;
}

.underline {
  position: relative;
  color: inherit;
  font-weight: bold;
}

.underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: rgb(64, 158, 255);
  transform: translateX(2px);
}

.green-background {
  background-color: green;
  color: white; /* 可选：文字颜色变为白色以保证可读性 */
}
</style>
