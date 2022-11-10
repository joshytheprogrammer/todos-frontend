<template>
  <div class="dashboard">
    <Nav />
    <SearchBar />
    <PageTitle :numOftasks="this.tasks.length" />
    <div class="tasks">
      <Task v-for="task in tasks" :key="task.id" :task="task" />
    </div>
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
  },
  data() {
    return {
      tasks: [
        {
          id: 0,
          title: 'Code extensively for 12 hours. Implement Authentication and things like that'
        },
        {
          id: 1,
          title: 'Code extensively for 12 hours. Implement Authentication and things like that'
        },
        {
          id: 2,
          title: 'Code extensively for 12 hours. Implement Authentication and things like that'
        },
        {
          id: 3,
          title: 'Code extensively for 12 hours. Implement Authentication and things like that'
        },
        {
          id: 4,
          title: 'Code extensively for 12 hours. Implement Authentication and things like that'
        },
        {
          id: 5,
          title: 'Code extensively for 12 hours. Implement Authentication and things like that'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.dashboard {

  .tasks {
    margin: auto;
    padding: 1rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
