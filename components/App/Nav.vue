<template>
  <div class="nav">
    <h2>JTP todos</h2>
    <button>New</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 14px;

  h2 {
    @include page-title;
  }

  button {
    @include btn;
  }
}
</style>
