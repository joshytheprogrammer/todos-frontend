<template>
  <div class="dashboard">
    <Nav />
    <SearchBar />
    <PageTitle :numOftasks="'4'" />
  </div>
</template>

<script>
import Nav from "../components/App/Nav.vue"
import SearchBar from "../components/Home/Bar.vue"
import PageTitle from "../components/Home/Heading.vue"
export default {
  auth: 'guest',
  components: {
    Nav,
    SearchBar,
    PageTitle
  }
}
</script>

<style lang="scss" scoped>

</style>
