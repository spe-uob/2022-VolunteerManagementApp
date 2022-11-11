<template>
  <div>
    <div class="container">
      <div class="center">
        <div class="btns">
          <button class="search" @click="search">Search</button>
          <button class="add" @click="add">Add</button>
        </div>
        <div class="component">
          <user-list v-if="ShowList"></user-list>
          <user-add v-if="ShowAdd" class="add"></user-add>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserList from "../components/UserList.vue";
import UserAdd from "../components/UserAdd.vue";
export default {
  components: {
    UserList,
    UserAdd,
  },
  data() {
    return {
      ShowList: false,
      ShowAdd: false,
    };
  },
  methods: {
    search() {
      this.ShowList = true;
      this.ShowAdd = false;
    },
    add() {
      this.ShowAdd = true;
      this.ShowList = false;
    },
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
    // justify-content: center;
    // align-items: center;

    .btns {
      display: flex;
      flex-direction: column;

      button {
        border: none;
        outline: none;
        margin-left: 80px;
        margin-top: 150px;
        width: 120px;
        height: 70px;
        background-color: #92cbce;
        font-size: 20px;
      }
      button:hover {
        background-color: #508387;
        color: white;
      }
      button:active {
        background-color: #15595e;
        color: white;
      }
    }

    .component {
      margin-left: 150px;
      width: 1000px;
      height: 500px;
      margin-top: 100px;
      margin-right: 50px;

      .add {
        margin-left: 80px;
        margin-top: 65px;
        width: 600px;
      }
    }
  }
}
</style>