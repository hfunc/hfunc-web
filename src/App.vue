<script lang="ts" setup>
import {ref} from "vue";

const show = ref(false)

</script>

<template lang="pug">
router-view
</template>


<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
