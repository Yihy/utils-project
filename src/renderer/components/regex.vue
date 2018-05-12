<template>

    <div>
        <el-row :gutter="24">
            <h2>正则表达式测试</h2>
        </el-row>
        <el-row :gutter="24">
            <el-input type="textarea" :rows="6" placeholder="请输入待匹配文本" v-model="textarea">
            </el-input>
        </el-row>
        <br/>
        <el-row :gutter="24">


            <el-col :span="4">
                基本信息
            </el-col>
            <el-col :span="8">
                <el-input placeholder="请输入内容" v-model="reg" clearable>
                </el-input>
            </el-col>
            <el-col :span="4">
                <el-checkbox v-model="optionGlobal" label="全局搜索" border></el-checkbox>

            </el-col>
            <el-col :span="4">
                <el-checkbox v-model="optionIgnoreCase" label="忽略大小写" border></el-checkbox>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="test" plain>测试匹配</el-button>
            </el-col>
        </el-row>
        <h4>匹配结果 {{ textMatchResult }}</h4>

        <el-row :gutter="24">
            <el-col :span="24">
                <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="textarea2">
                </el-input>
            </el-col>

        </el-row>

    </div>

</template>

<script>
  export default {
    data () {
      return {
        textarea: '',
        // province: "河北",
        // city: "秦皇岛市",
        // area: "北戴河区",
        reg: '',
        optionGlobal: true,
        optionIgnoreCase: '',
        textarea2: '',
        regExp: '',
        textMatchResult: ''
      }
    },
    methods: {
      test () {
        var op = ''
        if (this.optionGlobal) op += 'g'
        if (this.optionIgnoreCase) op += 'i'
        this.textarea2 = ''
        this.textMatchResult = ''
        this.regExp = new RegExp(this.reg, op)
        var result = this.textarea.match(this.regExp)
        if (result == null || result.length === 0) {
          this.textMatchResult = '（没有匹配）'
          return
        }
        if (this.optionGlobal) {
          this.textMatchResult = '共找到 ' + result.length + ' 处匹配：'
          var strResult = ''
          for (var i = 0; i < result.length; ++i) { strResult = strResult + result[i] + '\r\n' }
          this.textarea2 = strResult
        }
      }
    }
  }
</script>
