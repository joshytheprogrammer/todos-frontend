<template>
  <div class="nav">
    <NuxtLink to="/" class="logo">JTP todos</NuxtLink>

    <div class="actions">
      <NuxtLink to="/create">Create</NuxtLink>
      <a href="/logout" @click.prevent="logout">Logout</a>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  methods: {

  },
  methods: {
    async logout() {
      await this.$auth.logout()
      await this.$router.push('/login')
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
  display: flex;
  align-items: center;

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
