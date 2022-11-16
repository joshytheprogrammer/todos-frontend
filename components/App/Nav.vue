<template>
  <div class="nav">
    <NuxtLink to="/" class="logo">JTP todos</NuxtLink>

    <div class="actions">
      <a @click.prevent="logout">Logout</a>
      <button @click="open" type="button" title="Create new task"><Icon icon="carbon:new-tab" width="24" height="24" /></button>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { mapActions } from "vuex"

export default {
  components: {
    Icon
  },
  methods: {
    ...mapActions({
      open: 'toggleCreateModal'
    })
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 14px;

  box-shadow: 0px 2px 2px $dark;

  .logo {
    text-decoration: none;
    @include page-title;
  }

 .actions {
   button {
      @include btn;
      width: 48px;
      height: 48px;
      box-shadow: 0px 1px 1px $dark;

      &:active {
        box-shadow: none;
        transform: translateY(1px);
      }
    }
 }
}
</style>
