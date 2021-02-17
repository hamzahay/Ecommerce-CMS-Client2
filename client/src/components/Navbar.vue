<template>
  <div class="navbar">
    <h2>CEMES</h2>
    <button class="logout-btn" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    box-shadow: 4px 1px 5px grey;
    margin-bottom: 20px;
    background-color: white;
  }

  .navbar h2 {
    margin: 0px;
  }

  .logout-btn {
    border: none;
    background-color: rgb(248, 85, 85);
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }

  .logout-btn:hover {
    transition: 0.15s ease;
    background-color: rgb(247, 112, 112);
  }
</style>
