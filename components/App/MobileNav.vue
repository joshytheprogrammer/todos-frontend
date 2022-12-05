<template>
  <div class="nav">
    <nav>
      <NuxtLink to="/" class="logo">JTP todos</NuxtLink>

      <div class="actions">
        <NuxtLink class="btn" to="/create">
          <PlusCircleIcon size="2x" />
        </NuxtLink>
        <button class="btn" @click="logout">
          <LogoutIcon size="2x" />
        </button>
      </div>
    </nav>

    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "../App/Bar.vue"
import { PlusCircleIcon } from "@vue-hero-icons/outline"
import { LogoutIcon } from "@vue-hero-icons/outline"
export default {
  components: {
    SearchBar,
    PlusCircleIcon,
    LogoutIcon
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

      .btn {
        @include nav-btn;
      }
    }
  }


}
</style>
