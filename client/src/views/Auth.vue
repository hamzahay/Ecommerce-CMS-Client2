<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: auto;
    padding-top: 10%;
    gap: 10px;
  }

  .form h1 {
    margin: 5px 0px;
  }

  .form-input {
    height: 35px;
    font-size: 16px;
  }

  .page-container {
    margin: 0px 5px;
    margin-top: 5px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }

  .page-container p {
    margin: 0px;
    font-size: 13px;
    cursor: default;
  }

  .page-btn {
    border: none;
    background-color: transparent;
    color: blue;
    cursor: pointer;
    font-size: 13px;
  }

  .submit-btn {
    border: none;
    background-color: rgb(47, 113, 236);
    height: 30px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    margin-top: 10px;
  }

  .submit-btn:hover {
    transition: 0.15s ease;
    background-color: rgb(78, 134, 238);
  }
</style>
