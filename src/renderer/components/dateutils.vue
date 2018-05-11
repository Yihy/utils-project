<template>

    <div>
        <el-row :gutter="24">
            <h2>时间戳工具</h2>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="2">
                <p>时间戳</p>
            </el-col>
            <el-col :span="6">
                <el-input v-model="unixTimestamp" placeholder="输入时间戳"></el-input>

            </el-col>
            <el-col :span="4">

                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="2">
                <p>日期</p>
            </el-col>
            <el-col :span="8">
                <el-date-picker v-model="pdate" type="datetime" placeholder="选择日期" default-value="">
                </el-date-picker>
            </el-col>
        </el-row>
        <!-- <el-row :gutter="24">
            <el-col :span="10">
            </el-col>
            <el-col :span="4">
              <el-button>解析</el-button>
              <el-button>随机一个</el-button>
            </el-col>
            <el-col :span="10">
            </el-col>
        </el-row> -->
    </div>

</template>

<script>
    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
    // 例子：
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    var Format = function (fmt) { // author: meizz
      var o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'h+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        'S': this.getMilliseconds() // 毫秒
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    }
    var flag = true
    export default {
      data () {
        return {
          'unixTimestamp': '',
          'pdate': '',
          'options': [{
            value: 'ms',
            label: '毫秒'
          }, {
            value: 's',
            label: '秒'
          }],
          'value': 'ms'

        }
      },
      watch: {
        'unixTimestamp': function (val, oldVal) {
          if (!flag) {
            flag = true
            return
          }
          var new2 = Number(val)
          if (this.value === 's') {
            new2 = new2 * 1000
          }

          var a = new Date(new2)
          console.log(a)
          a.Format = Format
          this.pdate = a.Format('yyyy-MM-dd hh:mm:ss.S')
          flag = false
          console.log(a.Format('yyyy-MM-dd hh:mm:ss.S'))
          console.log('new: %s, old: %s', val, oldVal)
        },
        'pdate': function (val, oldVal) {
          if (!flag) {
            flag = true
            return
          }

          if (this.value === 'ms') {
            this.unixTimestamp = new Date(this.pdate).getTime()
          } else if (this.value === 's') {
            this.unixTimestamp = new Date(this.pdate).getTime() / 1000
          }
          flag = false
        }

      }
    }

    // var timerID = setInterval(updateTime, 1000);
    // updateTime();
    // function updateTime() {
    //     this.nowDate = new Date();
    // };
</script>
