<template>
  <div class="p-4">
    <div class="my-4 flex gap-4">
      <el-select
        v-model="selectValue"
        clearable
        placeholder="Select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input
        v-model="inputValue"
        placeholder="Please input"
        class="w-60"
      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
      <el-button
        :icon="Edit"
        type="primary"
        @click="dialogFormVisible = true"
      >
        编辑
      </el-button>
    </div>
    <el-table
      :data="filterTableData"
      style="width: 100%"
    >
      <el-table-column
        label="Date"
        prop="date"
      />
      <el-table-column
        label="Name"
        prop="name"
      />
      <el-table-column align="right">
        <template #header>
          <el-input
            v-model="search"
            size="small"
            placeholder="Type to search"
          />
        </template>
        <template #default="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <dialog-form v-model:show="dialogFormVisible" />
</template>

<script lang='ts'>
import {
  ref, computed, defineComponent, reactive,
} from 'vue';
import { Search, Edit } from '@element-plus/icons-vue';
import DialogForm from './components/DialogForm.vue';

export default defineComponent({
  name: 'Example',
  components: {
    DialogForm,
  },
  setup() {
    interface User {
      date: string
      name: string
      address: string
    }
    interface Options {
      value: string,
      label: string,
    }
    const search = ref('');
    const selectValue = ref('');
    const inputValue = ref('');
    const dialogFormVisible = ref(false);
    const tableData: User[] = reactive([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Morgan',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]);
    const options: Options[] = reactive([
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
      {
        value: 'Option4',
        label: 'Option4',
      },
      {
        value: 'Option5',
        label: 'Option5',
      },
    ]);
    const filterTableData = computed(() => tableData.filter(
      (data) => !search.value
      || data.name.toLowerCase().includes(search.value.toLowerCase()),
    ));
    const handleEdit = (index: number, row: User) => {
      console.log(index, row);
    };
    const handleDelete = (index: number, row: User) => {
      console.log(index, row);
    };
    return {
      search,
      selectValue,
      inputValue,
      tableData,
      options,
      filterTableData,
      handleEdit,
      handleDelete,
      Search,
      Edit,
      dialogFormVisible,
    };
  },
});
</script>
