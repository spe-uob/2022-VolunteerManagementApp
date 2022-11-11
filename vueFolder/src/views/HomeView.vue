<template>
  <div>
    <div class="container">
      <div class="center">
        <button @click="handle">Call</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handle() {
      this.$router.push('/content')
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .center {
    background-color: #e0f8f8;
    box-shadow: #f2d0c5;
    width: 1200px;
    height: 700px;
    box-shadow: 3px 3px 12px #76a4a7;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
      border: none;
      outline: none;
      width: 200px;
      height: 100px;
      background-color: #92cbce;
      font-size: 30px;

    }
    button:hover{
      background-color: #508387;
      color: white;
    }
    button:active{
      background-color: #15595e;
      color: white;
    }
  }
}
</style>