<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen p-4">
    <ym-svg svg-name="404" class="w-28 h-28" />
    <div class="flex flex-col items-center gap-4 py-10 max-w-480">
      <h2 class="text-2xl text-center">Ooups, page not found</h2>
      <p class="text-center">
        We are very sorry for the inconvenience. It looks like you’re trying to
        access a page that has been deleted or never even existed.
      </p>
      <div class="flex items-center gap-4">
        <router-link :to="{ path: '/' }">
          <el-button type="primary">
            BACK TO HOMEPAGE
          </el-button>
        </router-link>
        <el-button type="primary" @click="logout">
          BACK TO LOGIN
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const logout = () => {
  router.push({ name: 'login' })
}
</script>
