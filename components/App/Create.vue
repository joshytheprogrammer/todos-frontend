<template>
  <div class="create">
    <Modal>
      <template #title>
        <h1>Create new task</h1>
      </template>
      <template #body>
        <form @submit.prevent="">
          <div class="form-group">
            <label>Title</label>
            <input type="text" v-model="task.title" placeholder="What would you call this task?" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" v-model="task.desc" placeholder="How would you describe it?" required></textarea>
          </div>
          <div class="form-group">
            <label>Deadline</label>
            <input type="datetime-local" v-model="task.date" placeholder="When does the task end?" required>
          </div>
          <div class="submit">
            <button type="submit">Create task</button>
          </div>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue"

export default {
  components: {
    Modal
  },
  data() {
    return {
      task : {
        title: '',
        desc: '',
        date: ''
      }
    }
  },
  methods: {
    submitTask() {
      console.log(this.task)
    }
  }
}
</script>

<style lang="scss" scoped>
.create {

  h1 {
    @include page-title;
  }

  form {
    display: block;
    padding: 1rem 0;

    .form-group {
      display: block;
      padding-top: 1rem;

      label {
        display: inline-block;
        @include label;
        font-size: 16px
      }

      input {
        @include form-control;
        font-size: 14px;
      }

      textarea {
        @include form-control;
        font-size: 14px;
        height: 180px;
        padding: 0.8rem 0.4rem;

        &::-webkit-resizer {
          display: none;
        }

        &::-webkit-scrollbar {
          width: 8px;
          height: 4px;
        }

        &::-webkit-scrollbar-track {
          background: $light;
        }

        &::-webkit-scrollbar-thumb {
          background: $primary;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: $dark;
        }
      }
    }

    .submit {
      padding-top: 2rem;

      button {
        @include btn;
        padding: 1rem 2rem;
      }
    }
  }
}
</style>
