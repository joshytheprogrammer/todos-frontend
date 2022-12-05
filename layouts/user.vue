<template>
  <div class="app">
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from "../components/App/Nav.vue"
import SearchBar from "../components/App/Bar.vue"

export default {
  components: {
    Nav,
    SearchBar,
  }
}
</script>
