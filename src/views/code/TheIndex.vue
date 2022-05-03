<template>
  <div>{{count}}</div>
  <div>{{getMoreTwiceCount}}</div>
  <div>{{getUserMsg}}</div>
  <div>user2: {{getUserById(2)}}</div>
  <el-input-number v-model="count" :min="0" @change="change"></el-input-number>
  <el-button type="primary" @click="update">修改</el-button>
  <el-button type="primary" @click="reset">reset</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PublicStore } from '@/store/public'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'CodeManage',
  setup() {
    const { getUserMsg, count, getUserById, getMoreTwiceCount } = storeToRefs(PublicStore())


    const store = PublicStore();

    const update = () => {
      store.setUserMsg({
        username: 'Tom',
        age: 30,
      })
    }

    const reset = () => {
      store.$reset();
    }

    const change = (newV, oldV) => {
      store.$patch((state) => {
        state.count = newV;
        if (oldV > newV) {
          state.userMsg.age -= 1;
        } else {
          state.userMsg.age += 1;
        }
      })
      
    }

    return {
      getUserMsg,
      count,
      getUserById,
      getMoreTwiceCount,
      update,
      reset,
      change,
    }
  },
})
</script>

<style scoped></style>
