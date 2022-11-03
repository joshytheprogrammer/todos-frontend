<template>
  <div class="container">
    <h1>Welcome back 👋</h1>
    <form @submit.prevent="userLogin">
      <div class="form-group">
        <label>Username</label>
        <input type="text" v-model="login.username" placeholder="Enter your username" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="login.password" placeholder="Enter your password" />
      </div>
      <div class="btn">
        <button type="submit">Login</button>
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

  height: fit-content;

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
    padding: 1rem 0;

    .form-group {
      display: block;
      padding: 1rem 0;

      label {
        display: inline-block;

        font-weight: 500;
        font-size: 16px;
        padding: 0.75rem 0;
      }

      input {
        width: 100%;
        height: 48px;

        border-radius: 10px;

        outline: none;
        border: 1.8px solid $dark;
        border-radius: 4px;
        padding: 0 0 0 0.4rem;
        transition: background .2s linear, outline .1s ease-in-out;

        font-size: 16px;
        font-weight: 400;

        &::placeholder {
          color: $dark;
        }
      }
    }

  }
}
</style>
