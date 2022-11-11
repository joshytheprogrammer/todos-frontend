<template>
  <div class="app">
    <Nav />
    <SearchBar />
    <Transition name="fade">
      <Create v-show="showingCreate" />
    </Transition>
    <Nuxt />
  </div>
</template>

<script>
import Nav from "../components/App/Nav.vue"
import SearchBar from "../components/App/Bar.vue"
import Create from "../components/App/Create.vue"

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      showingCreate: 'isShowingCreateModal'
    })
  },
  components: {
    Nav,
    SearchBar,
    Create
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
