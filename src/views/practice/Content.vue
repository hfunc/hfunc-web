<script lang="ts" setup>
import {useBreadcrumbInject} from "@/composables/Home/useBreadcrumb";
import {onMounted} from "vue";

const {setVisible,push,refresh} = useBreadcrumbInject()

onMounted(()=>{
  push({
    path: "detail",title:"deatil"
  })
})
</script>

<template lang="pug">
span | content
</template>

<style lang="stylus" scoped>

</style>
