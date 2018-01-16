

<template>

<div>

    <el-row :gutter="24">
        <el-col :span="4">
            <p>时间戳</p>
        </el-col>
        <el-col :span="14">

            <el-input v-model="idNumber" placeholder="请输入身份证号"></el-input>

        </el-col>
        <el-col :span="6">

            <el-button>解析</el-button>
            <el-button>随机一个</el-button>

        </el-col>
    </el-row>
    <el-row :gutter="24">
        <el-col :span="24">
            基本信息
        </el-col>
    </el-row>
    <el-row :gutter="24">
        <el-col :span="4">
            <h4>省市:</h4>
        </el-col>
        <el-col :span="6">
            <p>
                {{ nowDate }}
            </p>
        </el-col>
        <el-col :span="4">
            <h4>出生年月:</h4>
        </el-col>
        <el-col :span="6">
            <p>

            </p>
        </el-col>
        <el-col :span="2">
            <h4> 性别:</h4>
        </el-col>
        <el-col :span="2">
            <p>

            </p>
        </el-col>
    </el-row>

</div>

</template>

<script>

export default {
  data () {
    return {
      'nowDate': ''
    }
  }
}

// var timerID = setInterval(updateTime, 1000);
// updateTime();
// function updateTime() {
//     this.nowDate = new Date();
// };
</script>
