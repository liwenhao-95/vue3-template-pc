<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import useSwitchThemes from '@/hooks/useSwitchThemes'
import { ref, watch } from 'vue'
import { onMounted } from 'vue'

const { locale } = useI18n()
const router = useRouter()

const color = ref<string>('#a0d911')

onMounted(() => {
  if (localStorage.getItem('themeColor')) {
    color.value = localStorage.getItem('themeColor') as string
  }
})

const { switchTheme } = useSwitchThemes()

const goBack = () => {
  // console.log('go back')
  router.back()
}

const changeLanguage = (command: string) => {
  locale.value = command
  localStorage.setItem('language', command)
}

const changeStyle = (command: string) => {
  localStorage.setItem('theme', command)
  switchTheme(command)
}

const isDark = useDark()
const toggleDark = useToggle(isDark)

watch(color, () => {
  if (color.value) {
    localStorage.setItem('themeColor', color.value)
    switchTheme(color.value)
  } else {
    color.value = '#a0d911'
  }
})
</script>

<template>
  <el-page-header @back="goBack" class="page-header">
    <template #title>{{ $t('back') }}</template>
    <template #content>
      <span class="title"> {{ $t('title') }} </span>
    </template>

    <template #extra>
      <el-space class="header-right" :size="16">
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

        <el-color-picker v-model="color" @active-change="(v: string) => (color = v)" />
        <!-- <el-dropdown @command="changeStyle">
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
        </el-dropdown> -->
      </el-space>
    </template>
  </el-page-header>
</template>

<style lang="scss" scoped>
.page-header {
  height: 100%;

  /* stylelint-disable-next-line */
  :deep(.el-page-header__header) {
    width: 100%;
    height: 100%;

    .title {
      font-weight: 600;
    }

    .header-right {
      .el-dropdown-link {
        display: flex;
        align-items: center;
        color: var(--el-color-primary);
        cursor: pointer;
      }

      .el-dropdown-link:focus {
        outline: unset;
      }
    }
  }
}
</style>
