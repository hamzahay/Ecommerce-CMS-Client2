<template>
  <div class="card">
    <img class="card-img" :src="product.image_url" alt="">
    <div class="card-detail">
      <h2 class="card-name">{{ product.name }}</h2>
      <div class="icon-container">
        <a>
          <img @click.prevent="editProduct" class="icon" src="../assets/edit 2.png" alt="edit-icon">
        </a>
        <a class="delete-btn">
          <img @click.prevent="deleteProduct" class="icon" src="../assets/delete 2.png" alt="delete-icon">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: [
    'product'
  ],
  methods: {
    editProduct () {
      const product = {
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock
      }
      this.$store.commit('changeUpdateStatus', product)
      this.$store.commit('changeId', this.product.id)
    },
    deleteProduct () {
      this.$store.commit('changeId', this.product.id)
      this.$store.dispatch('deleteProduct')
    }
  }
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
    max-height: 120px;
    max-width: 120px;
    object-fit: contain;
    background-color: white;
  }

  .card-detail {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
  }

  .icon-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .icon {
    height: 30px;
    cursor: pointer;
  }
</style>
