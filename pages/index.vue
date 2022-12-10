<template>
  <div class="dashboard">
    <PageTitle :numOftasks="this.tasks.length" />
    <div class="tasks">
      <Task v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/App/Heading.vue"
import Task from "../components/App/Task.vue"

export default {
  layout: 'user',
  components: {
    PageTitle,
    Task,
  },
  data() {
    return {
      tasks: []
    }
  },
  async fetch() {
    await this.$axios.get('http://localhost:5000/api/task?user_id='+this.$auth.user._id)
    .then((res) => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 1rem;

  .tasks {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
