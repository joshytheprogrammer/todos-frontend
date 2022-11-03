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
      padding-top: 1rem;

      label {
        display: inline-block;

        @include label;
      }

      input {
        @include input;
        font-size: 14px;

        &::placeholder {
          color: $dark;
        }

        &:focus {
          border-color: $primary;
        }
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
    }

    p {
      font-size: 14px;
      font-weight: 500;

      a {
        color: $primary;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media screen and (max-width: $small) {
    h1 {
      font-size: 24px;
    }

    .submit-line {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      p {
        display: block;
        padding: 0.6rem 0;
      }
    }
  }
}
</style>
