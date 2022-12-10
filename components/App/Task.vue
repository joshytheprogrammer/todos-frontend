<template>
  <div class="task">
    <div class="title">
      <span>{{task.title}}...</span>
    </div>
    <div class="_actions">
      <a @click.prevent="view(task._id)">View task</a>
      <a @click.prevent="complete(task)">Mark as completed</a>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  computed: {

  },
  props: ["task"],
  methods: {
    view(id) {

    },
    async complete() {
      let verify = confirm("We are about to mark the task - " + this.task.title + " - as completed. This action cannot be reversed.")

      if(!verify) {return}

      await axios.post('http://localhost:5000/api/task/complete', {
        task_id: this.task._id
      }).then((res) => {
        if(res.status == 200) {
          this.$router.push('/?completed='+this.task._id)
        }
      })

    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  margin: 1rem;
  padding: 1rem;
  border: 1.4px solid $dark;
  box-shadow: 0px 1px 1px $dark;
  border-radius: 10px;

  width: 350px;
  height: 220px;

  line-height: 1.675;


  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {

    span {
      font-size: 18px;
      font-weight: 700;
    }
  }

  ._actions {
    display: flex;
    justify-content: space-between;

    a {
      @include link;
      font-size: 16px;
    }
  }
}
</style>
