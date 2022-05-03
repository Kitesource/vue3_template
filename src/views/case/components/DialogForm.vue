<template>
  <el-dialog
    v-model="visible"
    title="Shipping address"
    width="600px"
    draggable
    @close="close"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
    >
      <el-form-item
        label="Promotion name"
        prop="name"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.name"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="Zones"
        prop="region"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="form.region"
          filterable
          placeholder="Please select a zone"
        >
          <el-option
            label="Zone No.1"
            value="shanghai"
          />
          <el-option
            label="Zone No.2"
            value="beijing"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="Activity type"
        prop="type"
      >
        <el-checkbox-group v-model="form.type">
          <el-checkbox
            label="Online activities"
            name="type"
          />
          <el-checkbox
            label="Promotion activities"
            name="type"
          />
          <el-checkbox
            label="Offline activities"
            name="type"
          />
          <el-checkbox
            label="Simple brand exposure"
            name="type"
          />
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="confirm"
        >Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts'>
import { boolProps, proxyProp } from '@/composition/props';
import { defineComponent, reactive } from 'vue';
import { simpleRule } from '@/utils/form';
import type { FormInstance } from 'element-plus';
import { ElMessage } from 'element-plus';
export default defineComponent({
  name:'DialogForm',
  props: {
    show: boolProps(),
  },
  emits: ['update:show'],
  setup(props) {
    const visible = proxyProp(props, 'show');
    const formLabelWidth = '140px';
    const formRef = ref<FormInstance | null>(null);
    const form = reactive({
      name: '',
      region: '',
      type: [],
    });
    const rules = reactive({
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      region: [
        simpleRule('Please select Activity zone'),
      ],
      type: [
        simpleRule('Please select at least one activity type'),
      ],
    });

    const close = () => {
      formRef.value?.resetFields();
      visible.value = false;

    };
    const confirm = async () => {
      if (!formRef.value) return;
      await formRef.value.validate(async (valid, fields) => {
        if (valid) {
          ElMessage.success('success submit');
        } else {
          console.log('error submit!', fields);
          ElMessage.error('error submit!');
        }
        close();
      });
    };

    return {
      formLabelWidth,
      form,
      visible,
      close,
      formRef,
      rules,
      confirm,
    };
  },
});
</script>

<style scoped>

</style>