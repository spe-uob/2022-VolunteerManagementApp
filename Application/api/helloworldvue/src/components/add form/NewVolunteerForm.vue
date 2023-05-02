<template>
  <form>
    <div style="cursor: pointer" @click="back()">back</div>
    <div>
      <h1 class="form-title">Create New Volunteer</h1>
    </div>
    <div class="form-group">
      <label for="FirstName">First Name</label>
      <input type="text" class="form-control" id="Name" v-model="FirstName" placeholder="First Name">
    </div>
    <div class="form-group">
      <label for="LastName">Last Name</label>
      <input type="text" class="form-control" id="LastName" v-model="LastName" placeholder="Last Name">
    </div>
    <div class="form-group">
      <label for="PhoneNumber">Phone Number</label>
      <input type="text" class="form-control" id="PhoneNumber" v-model="PhoneNumber" placeholder="Main phone number for the user.">
    </div>
    <div class="form-group">
      <label for="Email">Email</label>
      <input type="text" class="form-control" id="Email" v-model="Email" placeholder="Main email for the user.">
    </div>
    <div class="form-group">
      <label for="ExternalVolunteerID">External Volunteer ID</label>
      <input type="text" class="form-control" id="ExternalVolunteerID" v-model="ExternalVolunteerID" placeholder="The ID of the volunteer in an external system">
    </div>
    <div class="form-group">
      <label for="Wards">Wards ID</label>
      <input type="text" class="form-control" id="Wards" v-model="Wards" placeholder="Wards">
    </div>
<!--    <div class="form-group">-->
<!--      <label for="TotalTimeGiven">Total Time Given</label>-->
<!--      <input type="text" class="form-control" id="TotalTimeGiven" v-model="TotalTimeGiven" placeholder="TotalTimeGiven">-->
<!--    </div>-->
    <div class="form-group">
      <button type="submit" @click.prevent="submitForm" class="btn btn-primary">Save</button>
    </div>
  </form>
</template>

<script>
import $ from 'jquery';
export default {
  name: "NewVolunteerForm",
  data() {
    return {
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      Email: '',
      ExternalVolunteerID: '',
      // TotalTimeGiven: ''
    };
  },
  methods: {
    baseURL: function(){
      return window.location.origin
    },
    back(){
      // this.$emit("back");
      this.$router.back();
    },
    async submitForm() {
      let Volunteer = {
        "first_name": this.FirstName,
        "last_name": this.LastName,
        "phone": this.PhoneNumber,
        "email": this.Email,
        "user_id":this.ExternalVolunteerID,
        // "TotalTimeGiven": this.TotalTimeGiven,
      }
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: this.baseURL() + "/api/volunteers/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken)
        },
        method: "POST",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(Volunteer),
        success: () => {
          //this.$emit('removed-action', response)
          console.log("success")
        },
        error: (err) => {
          console.error(JSON.stringify(err))
        }
      }).catch((err) => {
        console.err(JSON.stringify(err))
      })
      console.log(JSON.stringify(json))
    },
    getCookie: function (name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    },
  }
};
</script>

<style>
.form-title{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.form-group{
  margin-bottom: 20px;
}
label{
  font-weight: bold;
  font-size: 15px;
  display: block;
  margin-bottom: 5px;
}
input[type="text"], input[type="date"]{
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

</style>