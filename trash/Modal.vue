<template>
  <div class="overlay">
    <div class="modal">
      <div class="header">
        <slot name="title"></slot>
        <span @click="close" class="icon"><Icon icon="ci:close-big" width="24" height="24" /></span>
      </div>
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2'
import {mapActions} from "vuex"

export default {
  components: {
    Icon
  },
  methods: {
    ...mapActions({
      close: 'closeModal'
    }),
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  overflow-y: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .modal {
    width: 80%;
    max-width: 720px;
    background-color: $light;
    border: 2px solid $dark;
    border-radius: 10px;
    box-shadow: 0 12px 12px $dark;
    z-index: 10;

    padding: 2rem;

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

  @media screen and (max-width: $medium){
    .modal {
      width: 95%;
      padding: 1rem;
    }
  }
}
</style>
