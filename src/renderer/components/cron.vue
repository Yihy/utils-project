<template>

    <div class="cron">
        <h1>vue-cron</h1>
        <el-popover v-model="cronPopover">
            <cron @change="changeCron" @close="cronPopover=false" i18n="cn"></cron>
            <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略"></el-input>
        </el-popover>
    </div>
</template>

<script>
  import { cron } from '@/store/modules/cron/index.js'

  export default {
    components: {cron},
    data () {
      return {
        cronPopover: false,
        cron: ''
      }
    },
    methods: {
      changeCron (val) {
        this.cron = val
      }
    }
  }
</script>
