<template>
  <div class="container">
    <h1>Signup for JTP todos</h1>
    <form @submit.prevent="userReg">
      <div class="form-group">
        <label>Username</label>
        <input type="text" v-model="register.username" placeholder="Enter your username" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="text" v-model="register.email" placeholder="Enter your email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="register.password" placeholder="Enter your password" />
      </div>
      <div class="submit-line">
        <button type="submit">Register</button>
        <p> Already have an account? <NuxtLink to="/login">Login</NuxtLink></p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      register: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    userReg() {
      console.log(this.register)
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
        @include link;
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
      padding-top: 1rem;

      p {
        display: block;
        padding: 0.6rem 0;
      }
    }
  }
}
</style>
