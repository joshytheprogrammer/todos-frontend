<template>
  <div class="container">
    <h1>Signup for JTP todos</h1>
  </div>
</template>

<script>
export default {
  auth: 'guest'
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 400px;
  max-width: 90%;

  height: fit-content;

  margin: 2rem auto;
  padding: 2rem 1rem;

  border: 1px solid $dark;
  box-shadow: 0px 4px 4px $dark;
  border-radius: 10px;

  h1 {
    @include display-1;
  }
}
</style>
