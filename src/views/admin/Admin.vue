<script lang="ts" setup>
import PageLayout from "@/views/layout/PageLayout.vue";


</script>

<template lang="pug">
el-row
  el-col(:xs="0" :sm="6" :md="4" :lg="4" :xl="4")
    el-affix(position="top")
      .main-blue
        router-link(to="/")
          img.width-100per(src="/src/assets/nav-logo.png" style="vertical-align:middle;")
        el-menu.main-blue
          el-submenu(index="1")
            template(#title) 公告管理
            el-menu-item 首页走马灯
            el-menu-item 页面横幅
          el-submenu(index="2")
            template(#title) 用户管理
            el-menu-item 首页走马灯
            el-menu-item 页面横幅
          el-submenu(index="3")
            template(#title) 练习管理
            el-menu-item 首页走马灯
            el-menu-item 页面横幅
          el-submenu(index="4")
            template(#title) 比赛管理
            el-menu-item 首页走马灯
            el-menu-item 页面横幅
          el-submenu(index="5")
            template(#title) 系统设置
            el-menu-item 首页走马灯
            el-menu-item 页面横幅
            el-menu-item 关于我们
  el-col(:xs="24" :sm="18" :md="20" :lg="20" :xl="20")
    router-view/
</template>


<style scoped>

</style>