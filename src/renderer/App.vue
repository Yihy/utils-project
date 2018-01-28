<template>

<div id="app">
    <el-container>
        <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><router-link :to="{ name: 'landing-page'}">主页</router-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1"><router-link :to="{ name: 'dateUtils'}">时间戳工具</router-link></el-menu-item>
                    <el-menu-item index="2-2"><router-link :to="{ name: 'idNumberInfo'}">身份证号解析</router-link></el-menu-item>
                    <el-menu-item index="2-3"><router-link :to="{ name: 'regex'}">正则表达式测试工具</router-link></el-menu-item>
                    <el-menu-item index="2-4">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><a href="https://www.yihy.cc" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
    </el-container>

</div>

</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  /* CSS */
</style>
