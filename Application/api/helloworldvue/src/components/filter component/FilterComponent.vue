<template>
    <div class="filter-container">
      <div class="f-title">Referral Filters</div>
      <div>
        <label for="id4">
          <input class="filter-head-input" id="id4" type="checkbox">
          <div @click="setToggle1" class="filter-head">
            <i class="arrow-right"></i>
            Referral Type
          </div>
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
        </label>
      </div>
<!--        <div>-->
<!--            <div class="filter-head" @click="setToggle1"><i class="arrow-right"></i> Referral Type</div>-->
<!--            <div v-show="toggle1" class="filter-body">-->
<!--                <div>-->
<!--                    <label>-->
<!--                        <input type="checkbox">-->
<!--                        foodbank-->
<!--                    </label>-->
<!--                </div>-->
<!--                <div>-->
<!--                    <label>-->
<!--                        <input type="checkbox">-->
<!--                        gp-->
<!--                    </label>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

      <div>
        <label for="id5">
          <input class="filter-head-input" id="id5" type="checkbox">
          <div @click="setToggle2" class="filter-head">
            <i class="arrow-right"></i>
            Status
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

<!--        <div>-->
<!--            <div class="filter-head" @click="setToggle2"><i class="arrow-right"></i> Status</div>-->
<!--            <div v-show="toggle2" class="filter-body">-->
<!--                <div>-->
<!--                    <label>-->
<!--                        <input type="checkbox">-->
<!--                        sub type1-->
<!--                    </label>-->
<!--                </div>-->
<!--                <div>-->
<!--                    <label>-->
<!--                        <input type="checkbox">-->
<!--                        sub type1-->
<!--                    </label>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

      <div>
        <label for="id6">
          <input class="filter-head-input" id="id6" type="checkbox">
          <div @click="setToggle3" class="filter-head">
            <i class="arrow-right"></i>
            Organisation
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
  font-weight: bold;
  margin-top: 20px;
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  width: 150px;
  position: absolute;
  right: 10px;
  top: 120px;
}

.f-title{
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  padding: 4px;
  color: black;
  background-color: rgba(247, 247, 247, 1);
}

.filter-head{
  background: #eee;
  padding: 8px;
  font-size: 10px;
  border-top: 1px solid #D8D8D8;
  margin: 1px 0;
  color: black;
}

.filter-head-input{
  display: none;
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

@media (max-width: 1350px ){
   .filter-container{
    display: none;
  }
}

</style>