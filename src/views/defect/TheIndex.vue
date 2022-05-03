<template>
  <div>defect</div>
  <div>{{ count }}</div>
  <div>{{ getUserMsg }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PublicStore } from '@/store/public'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'Defect',
  setup() {
    const store = PublicStore()
    const { getUserMsg, count } = storeToRefs(store)
    return {
      getUserMsg,
      count,
    }
  },
})
</script>

<style scoped></style>
