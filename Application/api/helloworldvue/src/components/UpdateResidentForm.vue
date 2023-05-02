<template>
  <form>
    <div style="cursor: pointer" @click="back()">back</div>
    <div>
      <h1 class="form-title">Update Resident</h1>
    </div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" v-model="firstName" placeholder="First Name">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName" v-model="lastName" placeholder="Last Name">
    </div>
    <div class="form-group">
      <label for="phoneNumber">Phone Number</label>
      <input type="text" class="form-control" id="phoneNumber" v-model="phoneNumber" placeholder="Main phone number for the user.">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" class="form-control" id="email" v-model="email" placeholder="Main email for the user. ">
    </div>
    <div class="form-group">
      <label for="totalTimeReceived">Total Time Received</label>
      <input type="text" class="form-control" id="email" v-model="totalTimeReceived" placeholder="">
    </div>
<!--    <div class="form-group">-->
<!--      <label for="date">Date:</label>-->
<!--      <input type="date" id="date" v-model="date">-->
<!--    </div>-->
    <div class="form-group">
      <button type="submit" @click.prevent="submitForm" class="btn btn-primary">Save</button>
    </div>
  </form>
</template>

<script>
import $ from 'jquery';
export default {
  props:["detail"],
  name: "newResidentForm",
  data() {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      totalTimeReceived: '',
      // date: ''
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
        let Resident = {
          "first_name": this.firstName,
          "last_name": this.lastName,
          "phone": this.phoneNumber,
          "email": this.email,
          // "data_consent_date": this.date,
        }

      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: this.baseURL() + "/api/residents/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken)
        },
        method: "POST",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(Resident),
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
  },
  mounted() {
    // {"name":"Noel","phone":"01179123456","address":"A","email":"noel.wester@gmail.com","contact":"Carol Lamentably"}
    let data =JSON.parse(localStorage.getItem("org"));
    if(data){
      this.FirstName = data.first_name;
      this.LastName = data.last_name;
      this.PhoneNumber = data.phone;
      this.Email = data.email;
      this.TotalTimeGiven ='n/a';
      this.consent = 'n/a';


    }
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