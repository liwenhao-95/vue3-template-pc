<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import useSwitchThemes from '@/hooks/useSwitchThemes';

const { locale } = useI18n()
const router = useRouter()

const { switchTheme } = useSwitchThemes();

const goBack = () => {
  console.log('go back')
  router.back()
}

const changeLanguage = (command: string) => {
  locale.value = command;
  localStorage.setItem('language', command)
}

const changeStyle = (command: string) => {
  localStorage.setItem('theme', command)
  switchTheme(command)
}

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <el-page-header @back="goBack" class="pageHeader">
    <template #title>{{ $t('back') }}</template>
    <template #content>
      <span class="title"> {{ $t('title') }} </span>
    </template>
      
    <template #extra>
      <el-space class="header_right" :size="16">
        <el-switch @change="toggleDark" v-model="isDark">
          <template #active-action>
            <el-icon>
              <Moon />
            </el-icon>
          </template>
          <template #inactive-action>
            <el-icon>
              <Sunny />
            </el-icon>
          </template>
        </el-switch>
        <el-dropdown @command="changeLanguage">
          <span class="el-dropdown-link">
            {{ locale === 'zhCh' ? '中文' : 'English' }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zhCh">中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown @command="changeStyle">
          <span class="el-dropdown-link">
            {{ locale === 'zhCh' ? '风格' : 'Style' }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="gold">金盏花</el-dropdown-item>
              <el-dropdown-item command="lime">青柠</el-dropdown-item>
              <el-dropdown-item command="blue">极客蓝</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-space>
    </template>
  </el-page-header>
</template>

<style lang='scss' scoped>
.pageHeader {
  height: 100%;
  display: flex;
  :deep(.el-page-header__header) {
    width: 100%;
    .title {
      font-weight: 600;
    }
    .header_right {
      .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
      }
      .el-dropdown-link:focus {
        outline: unset;
      }
    }
  }
}
</style>