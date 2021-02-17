<template>
  <div class="card">
    <img class="card-img" src="https://keeweeshop.com/wp-content/uploads/2014/10/Headphone-ATH-M40X-1.jpg" alt="">
    <div class="card-detail">
      <h2 class="card-name">ath m40x</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style scoped>
  .card {
    display: flex;
    height: 120px;
    margin: 0px 20px;
    margin-bottom: 15px;
    background-color: rgb(230, 230, 230);
  }

  .card:hover {
    transition: 0.15s ease;
    background-color: rgb(220, 220, 220);
  }

  .card-img {
    height: 120px;
  }

  .card-detail {
    display: flex;
    padding: 10px;
  }
</style>
