<template>
  <div class="app">
    <Nav />
    <SearchBar />
    <Create v-if="showingCreate" />
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

</style>
