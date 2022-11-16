<template>
  <div class="container">
    <h1>Signup for JTP todos</h1>
    <form @submit.prevent="userReg">
      <div class="form-group">
        <label>Username</label>
        <input type="text" v-model="register.username" placeholder="Enter your username" required />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="text" v-model="register.email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="register.password" placeholder="Enter your password" required />
      </div>
      <div class="submit-line">
        <button type="submit">Register</button>
        <p> Already have an account? <NuxtLink to="/login">Login</NuxtLink></p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"
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
    async userReg() {
      try {
        await axios.post('http://localhost:5000/api/auth/register', {
          username: this.register.username,
          email: this.register.email,
          password: this.register.password
        }).then((response) => {
          if(response.status = 200) {
            this.$router.push('/login')
          }
        })

        // await this.$auth.loginWith('local', {
        //   email: this.register.email,
        //   password: this.register.password
        // })
      }catch(e) {
        console.log(e)
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

  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

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
