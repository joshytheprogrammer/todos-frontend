<template>
  <div class="bar">
    <form @submit.prevent="search">
      <input type="search" v-model="search_term" placeholder="Search title, description and tags" class="form-control">
      <button type="submit" title="Search"><Icon icon="akar-icons:search" width="24" height="24" /></button>
    </form>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  components: {
    Icon,
  },
  data() {
    return {
      // search_term: this.$route.query.k
      search_term: ''
    }
  },
  methods: {
    search() {
      console.log(this.search_term)
    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  margin: 2rem auto;
  width: 50%;

  form {
    width: 100%;
    display: flex;


    .form-control {
      @include form-control;
      border-width: 1.5px;
      border-right: 0px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button {
      border: none;
      background: $primary;
      width: 48px;
      height: 48px;
      color: $light;
      cursor: pointer;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;

    }
  }

  @media screen and (max-width: $m-large) {
    width: 75%;
  }

  @media screen and (max-width: $medium) {
    width: 90%;
  }
}
</style>
