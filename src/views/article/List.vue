<script lang="ts" setup>
import PageLayout from "@/views/layout/PageLayout.vue";
import {pageLayout} from "@/views/layout/layout";
import {ref} from "vue";

const count = ref(10)
const loadMore = () => {
  count.value += 2
}
</script>

<template lang="pug">
page-layout(:layout="pageLayout" style="overflow:auto;height:500px;")
  ul(v-infinite-scroll="loadMore" :infinite-scroll-delay="1000")
    li(v-for="i in count" style="list-style:none;")
      el-card
        | test
</template>

<style lang="stylus" scoped>

</style>