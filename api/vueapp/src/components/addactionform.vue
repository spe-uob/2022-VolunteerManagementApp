<!-- 
<template>
    <form class="container needs-validation card-body" novalidate @submit="validateForm($event)">
      <h2 class="card-title">{{title}}</h2>
      <div class="form-group row">
        <label class="col-sm-4">Resident</label>
        <div class="col">
          <input class="form-control" type="text" name="" v-model="activeResident.first_name + ' ' + activeResident.last_name" readonly>
        </div>
      </div>
      <div class="form-group row">
        <label for="helpType" class="col-sm-4 col-form-label">Help Type</label>
        <div class="col-10 col-sm-6">
          <select required v-model="action.help_type" id="helpType" name="helpType" class="form-control select-picker">
            <option></option>
            <option :value="type.id" v-for="(type,index) in help_types">{{type.name}}</option>
          </select>
          <div class="invalid-feedback">Please select a Help Type</div>
        </div>
        <div class="col-2">
          <button class="btn btn-secondary rounded-circle" type="button" data-toggle="modal" data-target="#addNewHelpType" title="Create New Type"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <div class="row">
        <label for="dueDate" class="col-sm-4 col-lg-4 col-form-label">Date / Time Due</label>
        <div class="col row">
          <div class="col-12 col-lg-6 form-group">
            <input required type="date" class="form-control w-auto" id="dueDate" placeholder="" v-model="date">
            <div class="invalid-feedback" id="dateInvalidFeedback">Please select a date</div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 form-group">
            <input required type="time" class="form-control w-auto" id="dueTime" placeholder="" v-model="time">
            <div class="invalid-feedback">
              Please set a time.
            </div>
          </div>
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-sm-4 col-lg-4 col-form-label">Priority</legend>
          <div class="col-sm-8 col-lg-6">
            <div v-for="(priority, key) in action_priorities" :key="key" class="form-check">
              <input v-model="action.action_priority" class="form-check-input ignore-validation" type="radio" name="actionPriority" :id="'priorityRadio' + key" :value="key">
              <label class="form-check-label" :for="'priorityRadio' + key">
                {{priority}}
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div class="row form-group flex-wrap validate-me">
        <div class="col-12 detail-field"><label class="">Number of Volunteers</label></div>
        <div class="col detail-field">
          <div class="row flex-wrap">
            <label for="minimumVolunteers" class="col-form-label col-auto">Minimum</label>
            <input class="form-control col" type="number" name="minimumVolunteers" min="1" :max="action.maximum_volunteers"v-model="action.minimum_volunteers">
            <div class="invalid-feedback col-12">Cannot be more than max or less than 1</div>
          </div>
      </div>
      <div class="col detail-field">
        <div class="row">
            <label for="maximumVolunteers" class="col-form-label col-auto">Maximum</label>
            <input class="form-control col" type="number" :min="action.minimum_volunteers" name="maximumVolunteers" v-model="action.maximum_volunteers"><div class="invalid-feedback col-12">Cannot be less than min</div>
          </div>
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend  class="col-sm-4 col-lg-4 col-form-label">Volunteer Requirements</legend>
          <div class="col-sm-8 col-lg-8">
            <div class="form-check" v-for="(requirement, key) in requirements" :key="key">
              <input v-model="action.volunteer_requirements" :id="'requirement' + key" :name="'requirement' + key" type="checkbox" class="form-check-input ignore-validation" :value="key"/>
              <label class="form-check-label" :for="'requirement' + key">
               {{requirement.name}}
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div class="form-group row">
        <label class="col-sm-4 col-lg-4 col-form-label" for="publicDescription">Public Description</label>
        <div class="col-sm-8 col-lg-8">
          <textarea required v-model="action.public_description" class="form-control" id="publicDescription" rows="3"></textarea>
          <div class="invalid-feedback">You must include a public description</div>
        </div>
      </div>
       <div class="form-group row">
        <label class="col-sm-4 col-lg-4 col-form-label" for="privateDescription">Private Description</label>
        <div class="col-sm-8 col-lg-8">
          <textarea required v-model="action.private_description" class="form-control" id="privateDescription" rows="3"></textarea>
          <div class="invalid-feedback">You must include a private description</div>
        </div>
      </div>
      <div class="row form-group mt-3 ">
        <div class="col">
          <button type="button" class="btn btn-secondary" @click="discardForm">Discard</button>
        </div>
        <div class="text-right col">
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'AddActionForm',
    data () {
      return {
        date:"",
        time:"",
        errors:[],
        formValidated: false
      }
    },
    props: ['action', 'activeResident','title', 'requirements','help_types'],
    watch: {
      date: function(val) {
        this.action.requested_datetime = val + " " + this.time
      },
      time: function(val) {
        this.action.requested_datetime = this.date + " " + val
      },
      formValidated: function (val) {
        this.addNewAction()
      }
    },
    methods: {
      validateForm: function (event) {
        event.preventDefault()
        if (this.date && !this.isFutureDateTime(this.action.requested_datetime)) {
          console.log('past')
          $('#dateInvalidFeedback').html('Date must be in the future')
        } else {
          console.log('future')
        }
        if (!event.target.checkValidity()) {
          console.log('not valid')
        } else {
          this.addNewAction(event)
        }
        event.target.classList.add('was-validated')
      },
      addNewAction: function (e) {
        const csrftoken = this.getCookie('csrftoken');
        var action = JSON.stringify(this.action)
        if (!e.target.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            } else{
              event.preventDefault()
              event.stopPropagation()
              $.ajax({
          url: "/api/actions/",
          beforeSend: function(xhr) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken)
          },
          method: "POST",
          type:"POST",
          contentType:'application/json',
          data:action,
          success: (response) =>{
            this.$emit('new-action', response)
          }
        })
            }
            e.target.classList.add('was-validated')
      },
      discardForm: function () {
        bootbox.confirm("Are you sure you want to discard this action?", (result) =>{
          if (result === true) {
            this.$emit('discard-form')
          }
        })
      },
      isFutureDateTime: function (date) {
        var today = new Date().getTime()
        date = new Date(date).getTime()
        return (today - date) > 0
      }
    },
    computed: {
    },
    mounted: function () {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
       if(dd<10){
              dd='0'+dd
          } 
          if(mm<10){
              mm='0'+mm
          } 
      today = yyyy+'-'+mm+'-'+dd;
      document.getElementById("dueDate").setAttribute("min", today);
    }
  }
  </script>
  
  <style lang="css" scoped>
    .was-validated .ignore-validation.form-check-input:valid ~ .form-check-label{
      color: initial;
    }
  </style> -->