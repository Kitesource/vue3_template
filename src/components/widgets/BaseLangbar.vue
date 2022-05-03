<template>
  <el-dropdown
    trigger="click"
    class="h-full bg-brand-700 flex items-center justify-end"
    @command="handleSetLanguage"
  >
    <div class="bg-brand-700 text-brand-200 cursor-pointer hover:text-white flex items-center">
      <ym-svg svg-name="language" />
      <span>
        {{ locale === 'zh-cn' ? '中文' : 'En' }}
      </span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :disabled="language==='zh-cn'"
          command="zh-cn"
        >
          中文
        </el-dropdown-item>
        <el-dropdown-item
          :disabled="language==='en'"
          command="en"
        >
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { languageKey } from '@/i18n';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'BaseInfobar',
  setup() {
    const language = ref<string>(localStorage.getItem('language') || 'zh-cn');
    const { locale } = useI18n();

    // 切换事件：
    const handleSetLanguage = (lang: string) => {
      language.value = lang;
      locale.value = lang;
      localStorage.setItem(languageKey, lang);
    };
    return {
      language,
      locale,
      handleSetLanguage,
    };
  },
  methods: {

  },
});

</script>
<style scoped>
</style>
