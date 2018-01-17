

<template>

<div>
  <el-row :gutter="24">
    <h2>身份证号解析</h2>
  </el-row>
    <el-row :gutter="24">
        <el-col :span="4">
            <p>身份证号</p>
        </el-col>
        <el-col :span="14">

            <el-input v-model="idNumber" placeholder="请输入身份证号"></el-input>

        </el-col>
        <el-col :span="6">

            <el-button @click="jiexi">解析</el-button>
            <el-button @click="make">随机一个</el-button>

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
                {{ addr }}
            </p>
        </el-col>
        <el-col :span="4">
            <h4>出生年月:</h4>
        </el-col>
        <el-col :span="6">
            <p>
                {{ year }}年{{ month }}月{{ day }}日
            </p>
        </el-col>
        <el-col :span="2">
            <h4> 性别:</h4>
        </el-col>
        <el-col :span="2">
            <p>
                {{ sex }}
            </p>
        </el-col>
    </el-row>

</div>

</template>

<script>

var IDValidator = require('id-validator')
var GB2260 = require('id-validator/src/GB2260')

var Validator = new IDValidator(GB2260)
export default {

  data () {
    return {
      idNumber: '',
      // province: "河北",
      // city: "秦皇岛市",
      // area: "北戴河区",
      addr: '',
      year: '',
      month: '',
      day: '',
      sex: ''
    }
  },
  methods: {
    make () {
      // 制造一个18位ID
      var ID = Validator.makeID()

      this.idNumber = ID
      this.jiexi()
    },
    jiexi () {
      if (this.idNumber.length === 18) {
        if (!Validator.isValid(this.idNumber)) {
          this.$alert(this.idNumber, '身份证不合法!', {
            confirmButtonText: '确定'
          })
          return
        }

        // const validator = require('idnumbervalidator')
        //
        // // parseIDNumber
        // let infos = validator.parseIDNumber(this.idNumber)
        //
        // if(infos){
        //
        //   this.province = infos.province
        //   this.city = infos.city
        //   this.area = infos.district
        //   this.year = infos.year
        //   this.month = infos.month
        //   this.day = infos.day
        //   this.sex = infos.sex % 2 ? '男' : '女'
        // }

        this.addr = Validator.getInfo(this.idNumber).addr
        /*
                         * 号码有效时返回内容示例:
                         * {
                         *   'addrCode': 100101, //地址码信息,
                         *   'addr':     '北京市东城区', //地址信息, 只在实例化时传入了GB2260时返回
                         *   'birth':    '1988-01-20', //出生年月日
                         *   'sex':      1, //性别，0为女，1为男
                         *   'checkBit': 'X', //校验位，仅当18位时存在
                         *   'length':   18 //身份证类型，15位或18位
                         * }
                         */
        this.year = this.idNumber.substring(6, 10)
        this.month = this.idNumber.substring(10, 12)
        this.day = this.idNumber.substring(12, 14)
        this.sex = parseInt(this.idNumber.substring(16, 17)) % 2 ? '男' : '女'
      } else {
        this.$alert(this.idNumber, '长度不合法!', {
          confirmButtonText: '确定'
        })
      }

      console.log(this.idNumber)
    }
  }
}
</script>
