<template>
  <div class="nav">
    <NuxtLink to="/" class="logo">JTP todos</NuxtLink>
    <SearchBar />
    <div class= "actions">
      <NuxtLink to="/#">Home</NuxtLink>
      <NuxtLink to="/create">Create</NuxtLink>
      <a href="/logout" @click.prevent="logout">Logout</a>
    </div>
  </div>
</template>

<script>
import SearchBar from "../App/Bar.vue"
export default {
  components: {
    SearchBar
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
  justify-content: space-around;
  align-items: center;
  padding: 1rem 14px;

  box-shadow: 0px 2px 2px $dark;

  .logo {
    text-decoration: none;
    @include page-title;
  }

 .actions {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      padding: 0 4px;
      color: $dark;
      cursor: pointer;

      font-weight: 400;
      font-size: 16px;

      &:hover {
        text-decoration: underline;
        text-decoration-color: $primary;
        text-underline-offset: 9px;
      }

      &.nuxt-link-exact-active {
        text-decoration: underline;
        text-decoration-color: $primary;
        text-underline-offset: 9px;
        color: $dark;
      }
    }
  }
}
</style>
