<template>
  <div class="filter-container">
    <div class="f-title">Filters</div>
    <div>
      <label for="id10">
        <input class="filter-head-input" id="id10" type="checkbox">
      <div @click="setToggle1" class="filter-head">
        <i class="arrow-right"></i>
        Help Type
      </div>
      <div v-show="toggle1" class="filter-body">
        <div>
          <label>
            <input type="checkbox">
            Dog Walking
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            Food Parcel
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            Leafleting
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            Prescription
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            Shopping
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            Volunteer Assigned
          </label>
        </div>
      </div>
      </label>
    </div>

    <div>
      <label for="id11">
        <input class="filter-head-input" id="id11" type="checkbox">
        <div @click="setToggle2" class="filter-head">
          <i class="arrow-right"></i>
          Checks
        </div>
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
              sub type2
            </label>
          </div>
        </div>
      </label>
    </div>
    <div>
      <div>
        <label for="id12">
          <input class="filter-head-input" id="id12" type="checkbox">
          <div @click="setToggle3" class="filter-head">
            <i class="arrow-right"></i>
            Ward
          </div>
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
                sub type2
              </label>
            </div>
          </div>
        </label>
      </div>


      <div>
        <label for="id13">
          <input class="filter-head-input" id="id13" type="checkbox">
          <div @click="setToggle4" class="filter-head">
            <i class="arrow-right"></i>
            Account
          </div>
<!--      <div class="filter-head" @click="setToggle4()"> <i class="arrow-right"></i> Account</div>-->
      <div v-show="toggle4" class="filter-body">
        <div>
          <label>
            <input type="checkbox">
            Daily Digest
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            Weekly Digest
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox">
            User Without Account
          </label>
        </div>
      </div>
        </label>
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
      toggle4: false,
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
    },
    setToggle4() {
      this.toggle4 = !this.toggle4;
    }

  }
}
</script>

<style scoped>

.filter-container {
  font-weight: bold;
  margin-top: 175px;
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  border-radius: 0.5rem;
  border: 0.1rem solid #f7f7f7;
  width: 10rem;
  position: absolute;
  right: 0.5%;
  top: 23%;
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
  transition: transform 0.1s ease-in-out;
}
.filter-head-input{
  display: none;
}
.filter-head-input:checked+.filter-head .arrow-right{
  transform: rotate(135deg);
  transition: transform 0.1s ease-in-out;
}

label{
  font-size: 10px;
  color: black;
}

.filter-body{
  background-color: white;
}

@media (max-width: 1180px ){
  .filter-container{
    display: none;
  }
}

</style>