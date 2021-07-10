<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: () => 'default'
  }
})
</script>

<template lang="pug">
el-card

</template>

<style lang="stylus" scoped>

</style>