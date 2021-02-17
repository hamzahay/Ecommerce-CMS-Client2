<template>
  <div class="product-container">
    <AddForm/>
    <div class="card-container">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import AddForm from './AddForm.vue'

export default {
  name: 'Products',
  data () {
    return {
      message: 'from products'
    }
  },
  components: {
    ProductCard,
    AddForm
  }
}
</script>

<style>
  .product-container {
    display: flex;
    height: 580px;
  }

  .card-container {
    overflow: auto;
    width: 65vw;
    margin: 10px 0px;
  }
</style>
