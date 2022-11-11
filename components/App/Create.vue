<template>
  <div class="create">
    <Modal>
      <template #title>
        <h1>Create new task</h1>
      </template>
      <template #body>
        <form>
          <div class="form-group">
            <label>Title</label>
            <input type="text" placeholder="What would you call this task?" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" placeholder="What would you call this task?" required></textarea>
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
      }

      textarea {
        @include form-control;
        height: 220px;
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
  }
}
</style>
