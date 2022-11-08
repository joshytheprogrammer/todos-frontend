<template>
  <div class="bar">
    <form @submit.prevent="search">
      <input type="text" v-model="search_term" @keypress.enter="search" placeholder="Search title, description and tags" class="form-control">
      <button @click="search">S</button>
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
  display: inline-flex;
  justify-content: center;
  width: 50%;

  form {
    width: 100%;
    display: block;
    
    .form-control {
      @include form-control;
    }
  }
}
</style>
