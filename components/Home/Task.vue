<template>
  <div class="task">
    <div class="title">
      <span>Code extensively for 12 hours. Implement Authentication and things like that</span>
    </div>
    <div class="_actions">
      <a @click.prevent="">View task</a>
      <a @click.prevent="">Mark as completed</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.task {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid $dark;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    span {
      font-size: 14px;
      font-weight: 500;
    }
  }

  ._actions {
    display: flex;
    justify-content: space-between;

    a {
      @include link;
      font-size: 14px;
    }
  }
}
</style>
