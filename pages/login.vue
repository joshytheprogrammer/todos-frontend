<template>
  <div class="container">
    <h1>Welcome back 👋</h1>
    <form @submit.prevent="userLogin">
      <div class="form-group">
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="login.password" />
      </div>
      <div class="btn">
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 400px;
  max-width: 90%;

  height: 500px;

  margin: 2rem auto;
  padding: 2rem 1rem;

  border: 1px solid $dark;
  box-shadow: 0px 4px 4px $dark;
  border-radius: 10px;

  h1 {
    font-size: 30px;
    font-weight: 500;
  }

  form {
    display: block;
    padding: 2rem 0;

    .form-group {
      display: block;
      padding: 1rem 0;

      label {
        display: inline-block;
      }

      input {
        width: 100%;
        height: 40px;
      }
    }

  }
}
</style>
