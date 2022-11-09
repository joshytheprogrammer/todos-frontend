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
  padding: 2rem 14px;

  box-shadow: 0px 2px 2px $dark;

  h2 {
    @include page-title;
  }

  button {
    @include btn;
    box-shadow: 0px 1px 1px $dark;
  }
}
</style>
