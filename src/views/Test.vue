<script lang="ts" setup>
import {HSplitPanel} from '@/components'
import {ref} from 'vue';
// import request from 'request-libcurl'
// const request = require('request-libcurl');
import axios from "axios";

const text = ref(0.1)
const editableTabsValue = ref('')
const test1 = ref(0)
const test2 = ref(0)
const handel = () => {
  test1.value += 1;
}
axios.get("https://127.0.0.1:4242/login").then(
    value => {
      console.log(value.data)
    }
)

</script>
<template lang="pug">
//h-split-panel(style="width:100%;height:200px;" v-model:value="text")
//  template(#top)
//    | asdasdasd
//  template(#bottom)
//    | asdasdasd
keep-alive
  el-tabs(v-model="editableTabsValue" @tab-click="handel")
    el-tab-pane(
      :key="1"
      :label="'test1'"
      :name="'test1'"
    ) {{test1}}
    el-tab-pane(
      :key="2"
      :label="'test2'"
      :name="'test2'"
    ) {{test2}}
</template>