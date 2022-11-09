<template>
  <div class="bar">
    <form @submit.prevent="search">
      <input type="text" v-model="search_term" placeholder="Search title, description and tags" class="form-control">
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button {
      border: none;
      background: $primary;
      padding: 1rem;
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
