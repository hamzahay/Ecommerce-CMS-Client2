<template>
  <div class="form-container">
    <form class="form">
      <h1>Register</h1>
      <input class="form-input" type="email" placeholder="Email here" required>
      <input class="form-input" type="password" placeholder="Password" required>
      <div class="page-container">
        <p>Already have an account?</p>
        <a class="page-btn" @click="changePage">Login</a>
      </div>
      <button class="submit-btn">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      message: 'test router register'
    }
  },
  methods: {
    changePage () {
      this.$router.push('Login')
    }
  }
}
</script>

<style>

</style>
