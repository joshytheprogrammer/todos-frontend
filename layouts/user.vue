<template>
  <div class="app">
    <MNavigation v-if="isMobile" />
    <DNavigation v-else />
    <div class="body">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import DNavigation from "../components/App/Nav.vue"
import MNavigation from "../components/App/MobileNav.vue"

import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isMobile: 'getDevice',
    }),
  },
  components: {
    DNavigation,
    MNavigation,
  },
  mounted() {
    this.checkWidth()

    // Watch for window size change
    window.addEventListener("resize", this.checkWidth);
  },
  unmounted() {
    window.removeEventListener("resize", this.checkWidth);
  },
  methods: {
    ...mapActions({
      checkWidth: 'checkWidth',
    }),
  },
}
</script>
