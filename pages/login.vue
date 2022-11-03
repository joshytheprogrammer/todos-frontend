<template>
  <div class="container">
    <h1>Welcome back 👋</h1>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: block;

  width: 400px;
  max-width: 90%;

  height: 500px;

  margin: 2rem auto;
  padding: 2rem;

  border: 1px solid $dark;
  box-shadow: 0px 4px 4px $dark;
  border-radius: 10px;

  form {
    display: block;
  }
}
</style>
