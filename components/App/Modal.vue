<template>
  <div class="overlay">
    <div class="modal">
      <div class="header">
        <slot name="title"></slot>
        <span class="icon"><Icon icon="ci:close-big" width="24" height="24" /></span>
      </div>
      <slot name="body">

      </slot>
      <slot name="footer">

      </slot>
    </div>
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
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 720px;
    background-color: $light;
    border: 2px solid $dark;
    border-radius: 10px;
    box-shadow: 0 12px 12px $dark;
    z-index: 10;
    text-align: center;

    padding: 1rem;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .icon {
        cursor: pointer;

        &:hover {
          color: $danger;
        }
      }
    }
  }
}
</style>
