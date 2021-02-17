<template>
  <div class="form-container">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <input v-model="loginData.email" class="form-input" type="email" placeholder="Email here" required>
      <input v-model="loginData.password" class="form-input" type="password" placeholder="password" required>
      <button class="submit-btn">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    changePage () {
      this.$router.push('Register')
    },
    login () {
      console.log('login components')
      this.$store.dispatch('login', this.loginData)
        .then(() => {
          this.loginData.email = ''
          this.loginData.password = ''
          this.$router.push({ name: 'Home' })
        })
    }
  }
}
</script>

<style scoped>
</style>
