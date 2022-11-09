<template>
  <div class="bar">
    <form @submit.prevent="search">
      <input type="text" v-model="search_term" @keypress.enter="search" placeholder="Search title, description and tags" class="form-control">
      <button @click="search">Search</button>
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
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;

    }
  }

  @media screen and (max-width: $medium) {
    width: 90%;
  }
}
</style>
