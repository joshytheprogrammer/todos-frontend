<template>
  <div class="task">
    <div class="title">
      <span>{{task.title}}...</span>
    </div>
    <div class="_actions">
      <a @click.prevent="">View task</a>
      <a @click.prevent="">Mark as completed</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"]
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

  line-height: 1.5;


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
