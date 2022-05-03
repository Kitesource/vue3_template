<template>
  <div class="login">
    <header class="login__header">
      <div>
        <img
          class="h-6 lg:hidden text-brand-300"
          alt="Logo"
          src="@/assets/sprites/fu.svg"
        >
        <img
          class="hidden h-6 lg:block"
          alt="Logo"
          src="@/assets/sprites/fu.svg"
        >
      </div>

      <!-- language switcher -->
      <!-- <BaseLangbar /> -->
    </header>

    <!-- Slogan & Images -->
    <section class="login__slogan">
      <div class="login__slogan-bg">
        <img
          alt="Background Image"
          src="@/assets/sprites/login-bg.svg"
        >
      </div>

      <div class="login__slogan-text">
        <h1
          class="text-white login__slogan-textTitle"
          :style="{fontSize: '3.25rem'}"
        >
          {{ $t('user.slogan') }}
        </h1>
      </div>
    </section>

    <!-- Main Section -->
    <section class="login__main">
      <div class="login__main-formBody">
        <h1 class="login__main-formBodyTitle">
          {{ $t('user.login') }}
          <!-- <span
            v-if="showShortcuts"
            v-text="$t('account.wechat_login')"
          /> -->
        </h1>

        <el-form>
          <el-form-item>
            <el-input
              v-model="loginForm.account"
              size="large"
              clearable
              :placeholder="$t('user.email')"
              @keyup.enter.native="submit"
            />
          </el-form-item>

          <el-form-item>
            <el-input
              v-model="loginForm.password"
              size="large"
              type="password"
              show-password
              :placeholder="$t('user.password')"
              @keyup.enter.native="submit"
            />
          </el-form-item>

          <el-form-item>
            <div class="login__main-submitBtnGroups flex-1">
              <el-button
                type="text"
                @click="redirectForgotPassword"
              >
                {{ $t('user.forgetPassword') }}
              </el-button>

              <el-button
                class="login__main-submitBtn flex items-center justify-center"
                type="primary"
                size="large"
                :loading="logining"
                :disabled="logining"
                @click="submit"
              >
                {{ $t('user.login2') }}
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <!-- Footer -->
      <footer
        class="login__main-footer"
        v-text="$t('common.copyright', [currentYear])"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import $t from '@/i18n'
// import BaseLangbar from '@/components/widgets/BaseLangbar.vue'

const loginForm = reactive({
  account: 'chenfuzhou',
  password: 'Abcd1234',
})
const currentYear = ref<number>(new Date().getFullYear())
const logining = ref<boolean>(false)
const router = useRouter()
const submit = () => {
  if (!loginForm.account || !loginForm.password) {
    return
  }
  logining.value = true
  setTimeout(() => {
    logining.value = false
    ElMessage.success('登录成功')
    router.push({ name: 'projects' })
  }, 500)
  //  login(loginForm)
  //   .then((res: any) => {
  //     setLocal('grpc-metadata-sessionid', res['grpc-metadata-sessionid'])
  //     router.push({ name: 'projects' })
  //     // getUserList({userId: res.userId}).then((res) => {
  //     //   console.log('userInfo', res?.users)
        
  //     //   setLocal('userInfo', res?.users[0])
  //     // })
  //   })
  //   .catch((res) => {
  //     if (res?.message?.includes('Network Error')) {
  //       ElMessage.error('Network Error')
  //       return
  //     }
  //   })
  //   .finally(() => {
  //     logining.value = false
  //   })
}

const redirectForgotPassword = () => {
  window.open(`/forgot_password?app_key=&callback_url=${document.location.href}`)
}
</script>

