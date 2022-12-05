<template>
  <div class="bar">
    <form @submit.prevent="search">
      <input type="search" v-model="search_term" placeholder="Search title, description and tags" class="form-control">
      <button type="submit" title="Search">
        <SearchCircleIcon size="2.2x" />
      </button>
    </form>
  </div>
</template>

<script>
import { SearchCircleIcon } from "@vue-hero-icons/outline"
export default {
  components: {
    SearchCircleIcon,
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
  width: 100%;
  max-width: 498px;

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
}
</style>
