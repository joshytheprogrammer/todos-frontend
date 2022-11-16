<template>
  <div class="container">
    <h1>Welcome back 👋 </h1>
    <form @submit.prevent="userLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" name="username" v-model="login.username" placeholder="Enter your username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="username" v-model="login.password" placeholder="Enter your password" required />
      </div>
      <div class="submit-line">
        <button type="submit">Login</button>
        <p> Don't have an account? <NuxtLink to="/register">Register</NuxtLink></p>
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
        await this.$auth.loginWith('local', { data: this.login })
        this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  @include container;
  width: 400px;

  h1 {
    @include display-1;
  }

  form {
    display: block;
    padding: 1rem 0;

    .form-group {
      display: block;
      padding-top: 1rem;

      label {
        display: inline-block;

        @include label;
      }

      input {
        @include form-control;
        font-size: 14px;
      }
    }

  }

  .submit-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;

    button {
      @include btn;
      padding: 0.85rem 2rem;
    }

    p {
      font-size: 14px;
      font-weight: 500;

      a {
        @include link;
      }
    }
  }

  @media screen and (max-width: $small) {
    .submit-line {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 1rem;

      p {
        display: block;
        padding: 0.6rem 0;
      }
    }
  }
}
</style>
