<template>
  <div class="nav">
    <nav>
      <NuxtLink to="/" class="logo">JTP todos</NuxtLink>

      <div class="actions">
        <NuxtLink to="/create">Create</NuxtLink>
        <a href="/logout" @click.prevent="logout">Logout</a>
      </div>
    </nav>
    
    <SearchBar />
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
  nav {
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
    }
  }


}
</style>
