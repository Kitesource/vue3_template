<template>
  <el-dialog
    v-model="show"
    custom-class="dialog-form"
    :close-on-click-modal="false"
    :title="title"
    :width="width"
    @close="cancel"
  >
    <slot />
    <template #footer>
      <div>
        <el-button :disabled="submitting" @click="cancel">
          {{ cancelName }}
        </el-button>
        <el-button
          type="primary"
          class="mr-6"
          :disabled="submitting"
          :loading="submitting"
          @click="submit"
        >
          {{ submitName }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { proxyProp } from '@/composition/props'

interface PropsType {
  title?: string,
  cancelName?: string,
  submitName?: string,
  visible?: boolean,
  submitting?: boolean,
  width?: string | number,
}
const props = withDefaults(defineProps<PropsType>(), {
  /** 弹窗标题 */
  title: 'Tips',
  /** 取消按钮文案 */
  cancelName: '取消',
  /** 提交按钮文案 */
  submitName: '确定',
  /** 是否显示 */
  visible: false,
  /** 是否提交中 */
  submitting: false,
  /** 弹窗宽度 */
  width: '50%',
})
const emit = defineEmits(['update:visible', 'cancel', 'submit'])

const show = proxyProp(props, 'visible')
const cancel = () => {
  emit('cancel')
}
const submit = () => {
  emit('submit')
}
</script>

<style lang="scss">
.dialog-form{
  .el-dialog__body{
    @apply pt-4 pb-6 px-12;
  }
  .el-dialog__footer{
    @apply py-3 px-0 border-t border-neutral-20;
  }
}
</style>
