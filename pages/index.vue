<template>
  <div class="dashboard">
    <Nav />
    <SearchBar />
    <PageTitle :numOftasks="'4'" />
    <Task :task="{title: 'Code extensively for 12 hours. Implement Authentication and things like that'}" />
  </div>
</template>

<script>
import Nav from "../components/App/Nav.vue"
import SearchBar from "../components/Home/Bar.vue"
import PageTitle from "../components/Home/Heading.vue"
import Task from "../components/Home/Task.vue"

export default {
  auth: 'guest',
  components: {
    Nav,
    SearchBar,
    PageTitle,
    Task
  }
}
</script>

<style lang="scss" scoped>

</style>
