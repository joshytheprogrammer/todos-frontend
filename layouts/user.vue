<template>
  <div class="app">
    <Nav />
    <SearchBar />
    <Transition>
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
