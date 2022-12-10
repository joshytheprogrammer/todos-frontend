<template>
  <div class="container">
    <div class="create">
      <h1>Create new task</h1>
      <form @submit.prevent="submitTask">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" name="title" v-model="task.title" placeholder="What would you call this task?" required>
        </div>
        <div class="form-group">
          <label for="desc">Description</label>
          <textarea type="text" name="desc" v-model="task.desc" placeholder="How would you describe it?" required></textarea>
        </div>
        <div class="form-group">
          <label for="deadline">Deadline</label>
          <input type="datetime-local" name="deadline" v-model="task.date" placeholder="When does the task end?" required>
        </div>
        <div class="submit">
          <button type="submit">Create task</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'user',
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
      // let d = new Date(this.task.date).valueOf()

      console.log(this.task)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  @include container;
  width: 720px;
  padding: 1rem;

  @include container-reset;
  border: none;

  .create {

    h1 {
      @include display-1;
    }

    form {
      display: block;

      .form-group {
        display: block;

        label {
          display: inline-block;
          @include label;
          font-size: 16px
        }

        input {
          @include form-control;
        }

        textarea {
          @include form-control;
          height: 160px;
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

        input, textarea {
          font-size: 16px;
          font-weight: 500;
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
}
</style>
