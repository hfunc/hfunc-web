<script lang="ts" setup>
import PageLayout from "@/views/layout/PageLayout.vue"
import {pageLayout} from '@/views/layout/layout';
import {onMounted, ref} from "vue";
import {useUserService} from "@/repositories/useUserService";
import {strict} from "assert";

// 抓取用户信息
const info = ref({
  avatar: ""
})
const {fetchUserInfo} = useUserService()
onMounted(() => {
  fetchUserInfo().then(
      value => {
        info.value = value
        info.value.avatar = "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      }
  ).catch(
      reason => {
        info.value.avatar = "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      }
  )
})

</script>

<template lang="pug">
page-layout(:layout="pageLayout")
  .flex-row-between
    el-card.border-all-radius-1em.width-30per.width-xs-100per
      el-space(direction="vertical")
        el-avatar(:size="80" :src="info.avatar")
        h1(style={margin: 0}) {{info.nickname}}
        span ({{info.username}})
        span.main-comment-font ID：{{info.id}}
        span.main-comment-font 注册时间：{{info.createTime}}
    el-card.border-all-radius-1em.width-70per.width-xs-100per
      el-table()
</template>

<style lang="stylus" scoped>

</style>
