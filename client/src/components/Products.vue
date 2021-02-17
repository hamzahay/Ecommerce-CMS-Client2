<template>
  <div class="product-container">
    <AddForm/>
    <div v-if="products.length === 0" class="empty-list">
      <h3>Empty List</h3>
    </div>
    <div v-else class="card-container">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
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
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>
  .product-container {
    display: flex;
    height: 580px;
  }

  .empty-list {
    display: inline-block;
    width: 65vw;
  }

  .card-container {
    overflow: auto;
    width: 65vw;
    margin: 10px 0px;
  }
</style>
