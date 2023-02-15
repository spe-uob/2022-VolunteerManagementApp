<template>
    <div>
        <button class="back-button" @click="back">&lt;</button>
        <h1 class="call-title">
          Select Resident
        </h1>
        <div>
            <myButton v-for="(item, index) in buttons" :key="index" :label="item.label" :left="item.left" @click.native="selectButton(index)" :selected="item.selected" style="top: -200px; width: 150px;"/>
        </div>
        <ResidentList v-if="!NewResident"/>
        <newResidentForm class="comp-container" v-if="NewResident"/>
    </div>
</template>

<script>
import ResidentList from './ResidentList.vue'
import myButton from './myButton.vue'
import newResidentForm from './newResidentForm.vue'
export default {
    name: 'Start_Call',
    components: {
        myButton,
        ResidentList,
        newResidentForm
    },
    data(){
        return {
            NewResident: false,
            buttons: [
                    {label: 'Existing Resident', left: '273px', selected: true},
                    {label: 'New Resident', left: '426px', selected: false},
                ],
        }
    },
    props: [],
    methods: {
        back(){
            this.$router.push("/All Activity")
        },
        selectButton(index) {
                this.buttons.forEach((item, i) => {
                    item.selected = (i === index)
                })
                this.NewResident = !this.NewResident
            },
        }
}
</script>

<style>
.back-button {
  background-color: transparent;
  border: none;
  color: black;
  font-size: 20px;
  letter-spacing: -5px;
  cursor: pointer;
  position: absolute;
  left: 15%;
  top: 12%;
  display: inline-block;
}
.call-title{
    position: absolute;
    top: 150px;
    left: 225px;
}

.comp-container{
    box-sizing: border-box;

    position: absolute;
    width: 1229px;
    height: 500px;
    left: 100px;
    top: 300px;

    background: #F2F2F2;
    border: 1px solid #DFDFDF;
    border-radius: 5px;
}

</style>