<template>
  <div class="filter-container">
    <div class="f-title">Action Filters</div>
    <div>
      <label for="id1">
        <input class="filter-head1-input1" id="id1" type="checkbox">
        <div @click="setToggle1_1" class="filter-head1">
          <i class="arrow-right1"></i>
          HelpType
        </div>
        <div v-show="toggle1" class="filter-body1">
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
      </label>
    </div>
    <!--    <div>-->
    <!--      <div @click="setToggle1" class="filter-head1"><i class="arrow-right1"></i> Help Type</div>-->
    <!--      <div v-show="toggle1" class="filter-body1">-->
    <!--        <div>-->
    <!--          <label>-->
    <!--            <input type="checkbox">-->
    <!--            feedback-->
    <!--          </label>-->
    <!--        </div>-->
    <!--        <div>-->
    <!--          <label>-->
    <!--            <input type="checkbox">-->
    <!--            gp-->
    <!--          </label>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <div>
      <label for="id2">
        <input class="filter-head1-input1" id="id2" type="checkbox">
        <div @click="setToggle2_2" class="filter-head1">
          <i class="arrow-right1"></i>
          Status
        </div>
        <div v-show="toggle2" class="filter-body1">
          <div>
            <label>
              <input type="checkbox">
              sub type1
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox">
              sub type2
            </label>
          </div>
        </div>
      </label>
    </div>

    <!--    <div>-->
    <!--      <div class="filter-head1" @click="setToggle2"><i class="arrow-right1"></i> Status</div>-->
    <!--      <div v-show="toggle2" class="filter-body1">-->
    <!--        <div>-->
    <!--          <label>-->
    <!--            <input type="checkbox">-->
    <!--            sub type1-->
    <!--          </label>-->
    <!--        </div>-->
    <!--        <div>-->
    <!--          <label>-->
    <!--            <input type="checkbox">-->
    <!--            sub type1-->
    <!--          </label>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <div>
      <label for="id3">
        <input class="filter-head1-input1" id="id3" type="checkbox">
        <div @click="setToggle3_3" class="filter-head1">
          <i class="arrow-right1"></i>
          Priority
        </div>
        <div v-show="toggle3" class="filter-body1">
          <div>
            <label>
              <input type="checkbox">
              sub type1
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox">
              sub type2
            </label>
          </div>
        </div>
      </label>
    </div>
  </div>

  <!--    <div>-->
  <!--      <div class="filter-head1" @click="setToggle3()"> <i class="arrow-right1"></i> Priority</div>-->
  <!--      <div v-show="toggle3" class="filter-body1">-->
  <!--        <div>-->
  <!--          <label>-->
  <!--            <input type="checkbox">-->
  <!--            sub type1-->
  <!--          </label>-->
  <!--        </div>-->
  <!--        <div>-->
  <!--          <label>-->
  <!--            <input type="checkbox">-->
  <!--            sub type1-->
  <!--          </label>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
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
    setToggle1_1() {
      this.toggle1 = !this.toggle1;
    },
    setToggle2_2() {
      this.toggle2 = !this.toggle2;
    },
    setToggle3_3() {
      this.toggle3 = !this.toggle3;
    }

  }
}
</script>

<style scoped>

.filter-container {
  font-weight: bold;
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  width: 10rem;
  position: absolute;
  right: 10px;
  top: 140px;
}

.f-title{
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  padding: 4px;
  color: black;
  background-color: rgba(247, 247, 247, 1);
}

.filter-head1{
  background: #eee;
  padding: 8px;
  font-size: 10px;
  border-top: 1px solid #D8D8D8;
  margin: 1px 0;
  color: black;
}

.arrow-right1 {
  display: inline-block;
  width: 0.45rem;
  height: 0.45rem;
  border-top: .10rem solid #666;
  border-right: .10rem solid #666;
  margin-right: 6px;
  transform: rotate(45deg);
  transition: transform 0.1s ease-in-out;
}
.filter-head1-input1{
  display: none;
}
.filter-head1-input1:checked+.filter-head1 .arrow-right1{
  transform: rotate(135deg);
  transition: transform 0.1s ease-in-out;
}

label{
  font-size: 10px;
  color: black;
}

.filter-body1{
  background-color: white;
}

@media (max-width: 1180px ){
  .filter-container{
    display: none;
  }
}

</style>