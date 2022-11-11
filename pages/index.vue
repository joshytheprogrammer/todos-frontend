<template>
  <div class="dashboard">
    <PageTitle :numOftasks="this.tasks.length" />
    <div class="tasks">
      <Task v-for="task in tasks" :key="task.id" :task="task" />
    </div>
    <Modal />
  </div>
</template>

<script>
import Modal from "../components/App/Modal.vue"
import PageTitle from "../components/App/Heading.vue"
import Task from "../components/App/Task.vue"

export default {
  auth: 'guest',
  layout: 'user',
  components: {
    PageTitle,
    Task,
    Modal
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
          title: 'Call mum and tell her to get reference letter.'
        },
        {
          id: 2,
          title: 'Study WORK, ENERGY and POWER. (PHY111)'
        },
        {
          id: 3,
          title: 'Buy bread from caf.'
        },
        {
          id: 4,
          title: 'Attend debating meeting today!!!!'
        },
        {
          id: 5,
          title: 'Test the JTP todos website for bugs and things like that.'
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
