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

  }

  form {
    .form-group {

      input {
        @include form-control;
      }
    }
  }
}
</style>
