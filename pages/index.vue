<template>
  <div class="dashboard">
    <SearchBar />
    <!-- <PageTitle :numOftasks="'4'" /> -->
  </div>
</template>

<script>
import SearchBar from "../components/Home/Bar.vue"
import PageTitle from "../components/Home/Heading.vue"
export default {
  auth: 'guest',
  components: {
    SearchBar,
    PageTitle
  }
}
</script>

<style lang="scss" scoped>

</style>
