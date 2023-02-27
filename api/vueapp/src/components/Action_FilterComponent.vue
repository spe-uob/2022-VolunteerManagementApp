<template>
  <div class="filter-container">
    <div class="f-title">Action Filters</div>
    <div>
      <div @click="setToggle1" class="filter-head"><i class="arrow-right"></i> Help Type</div>
      <div v-show="toggle1" class="filter-body">
        <div>
          <label>
            <input type="checkbox">
            feedback
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
      <div class="filter-head" @click="setToggle2"><i class="arrow-right"></i> Status</div>
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

    <div>
      <div class="filter-head" @click="setToggle3()"> <i class="arrow-right"></i> Priority</div>
      <div v-show="toggle3" class="filter-body">
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
  border: 1px solid #D8D8D8;
  font-weight: bold;
  margin-top: 20px;
}

.f-title{
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  padding: 6px;
  color: black;
  background-color: rgba(247, 247, 247, 1);
}

.filter-head{
  background: #eee;
  padding: 10px;
  font-size: 10px;
  border-bottom: 1px solid #D8D8D8;
  border-top: 1px solid #D8D8D8;
  margin: -1px 0;
  color: black;
}

.arrow-right {
  display: inline-block;
  width: 0.45rem;
  height: 0.45rem;
  border-top: .10rem solid #666;
  border-right: .10rem solid #666;
  margin-right: 6px;
  transform: rotate(45deg);
  transition: transform 0.3s ease-in-out;
}

.filter-head:active .arrow-right{
  animation: rotateArrow 0.1s ease-in-out forwards;
}

@keyframes rotateArrow {
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(135deg);
  }
}

 label{
   font-size: 10px;
   color: black;
 }

 .filter-body{
   background-color: white;
 }

</style>