<template>
  <div class="nav">
    <h2>JTP todos</h2>
    <button><Icon icon="carbon:new-tab" width="24" height="24" /></button>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  components: {
    Icon
  }
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
