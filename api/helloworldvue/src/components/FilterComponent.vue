<template>
  <div class="filter-container">
    <div class="f-title">Referral Filter</div>
    <div>
      <div class="filter-head" @click="setToggle1">Referral Type</div>
      <div v-show="toggle1" class="filter-body">
        <div>
          <label>
            <input type="checkbox">
            foodbank
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            gp
          </label>
        </div>
      </div>
    </div>

    <div>
      <div class="filter-head" @click="setToggle2">Status</div>
      <div v-show="toggle2" class="filter-body">
        <div>
          <label>
            <input type="checkbox">
            sub type1
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            sub type1
          </label>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle1: false,
      toggle2: false,
      toggle3: false,
    }
  },
  methods: {
    setToggle1() {
      this.toggle1 = !this.toggle1;
    },
    setToggle2() {
      this.toggle2 = !this.toggle2;
    },
    setToggle3() {
      this.toggle3 = !this.toggle3;
    }

  }
}
</script>

<style scoped>
.filter-container {
  width: 120px;
  border: 1px solid #ccc;
  font-weight: bold;
  margin-top: 30px;

}

.f-title{
  font-size: 10px;
  font-weight: 600;
  line-height: 1.5;
}

.filter-head {
  background: #eee;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  margin: -1px 0;
}

</style>