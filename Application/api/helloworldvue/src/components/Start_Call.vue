<template>
    <div>
        <button class="back-button" @click="back">&lt;</button>
        <h1 class="call-title">
          Select Resident
        </h1>
        <div class="btn-container">
            <myButton v-for="(item, index) in buttons" :key="index" :label="item.label" :left="item.left" @click.native="selectButton(index)" :selected="item.selected" :style="{width: '300px'}"/>
        </div>
        <div class="comp-container">
            <ResidentList v-if="!NewResident" :style="{ top: '0%', left: '79%'}"/>
            <div class="form-container">
                <newResidentForm v-if="NewResident"/>
            </div>
        </div>
        <!-- <div class="comp-container">
            <newResidentForm v-if="NewResident"/>
        </div> -->
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
                    {label: 'New Residents', left: '273px', selected: true},
                    {label: 'All Resident', left: '426px', selected: false},
                ],
        }
    },
    props: [],
    methods: {
        back(){
            this.$router.push("/MyResident")
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
.btn-container {
    background-color: transparent;
    border:none;
    margin-bottom: 3px;
    padding-bottom: 5px;
    padding-left: 3px;
    padding-bottom: 3px;
    position: absolute;
    top:100px;
}

.list-container {
    background-color: transparent;
    border:none;
    margin-bottom: 3px;
    top:100px;
    left:200px;
}
.back-button {
  background-color: transparent;
  border: none;
  color: black;
  font-size: 20px;
  letter-spacing: -5px;
  cursor: pointer;
  position: absolute;
  left: 150px;
  top: 100px;
  display: inline-block;
}
.call-title{
    position: absolute;
    top: 80px;
    left: 260px;
}

.comp-container{
    box-sizing: border-box;

    position: absolute;
    width: 200px;
    height: 500px;
    left: 100px;
    top: 150px;

    background: transparent;
    border: none;
    border-radius: 5px;
}

.form-container{
    box-sizing: border-box;

    position: absolute;
    width: 200px;
    height: 500px;
    left: 85%;
    top: 0%;

    background: transparent;
    border: none;
    border-radius: 5px;
}

</style>