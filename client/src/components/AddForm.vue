<template>
  <div class="add-form-container">
    <button v-if="addStatus === false" @click="changeStatus" class="add-btn">Add Product</button>
    <form v-else class="add-form">
      <h2>Add Product</h2>
      <input v-model="formData.name" type="text" placeholder="Name Product" required>
      <input v-model="formData.image_url" type="text" placeholder="Image URL">
      <input v-model="formData.price" type="number" placeholder="Price" required>
      <input v-model="formData.stock" type="number" placeholder="Stock" required>
      <div class="btn-container">
        <button class="submit-btn">Submit</button>
        <a @click="changeStatus" class="cancel-btn">Cancel</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      formData: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    changeStatus () {
      this.$store.commit('changeAddStatus')
      this.formData.name = ''
      this.formData.image_url = ''
      this.formData.price = ''
      this.formData.stock = ''
    }
  },
  computed: {
    addStatus () {
      return this.$store.state.addStatus
    }
  }
}
</script>

<style scoped>
  .add-form-container {
    width: 400px;
    height: 100%;
    border-right: 1px solid black;

  }

  .add-btn {
    display: block;
    border: none;
    color: white;
    background-color: rgb(47, 113, 236);
    cursor: pointer;
    width: 130px;
    height: 40px;
    margin: 0px auto;
  }

  .add-btn:hover {
    transition: 0.15s ease;
    background-color: rgb(78, 134, 238);
  }

  .add-form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .add-form input {
    margin: 0px 25px;
    margin-top: 10px;
    height: 25px;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    gap: 15px;
  }

  .submit-btn {
    border: none;
    background-color: rgb(47, 113, 236);
    width: 100px;
    height: 35px;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }

  .submit-btn:hover {
    transition: 0.15s ease;
    background-color: rgb(78, 134, 238);
  }

  .cancel-btn {
    border: none;
    background-color: rgb(241, 65, 65);
    width: 100px;
    height: 35px;
    color: white;
    cursor: pointer;
    line-height: 35px;
  }

  .cancel-btn:hover {
    transition: 0.15s ease;
    background-color: rgb(241, 92, 92);
  }
</style>
