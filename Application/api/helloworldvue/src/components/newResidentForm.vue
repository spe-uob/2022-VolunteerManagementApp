<template>
    <form>
      <div>   
        <h1 class="form-title">Create New Resident</h1>
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
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" v-model="address" placeholder="Address">
      </div>
      <div class="form-group">
        <label for="postcode">Postcode</label>
        <input type="text" class="form-control" id="postcode" v-model="postcode" placeholder="Postcode">
      </div>
      <div class="form-group">
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="date">
      </div>
      <div class="form-group">
        <button type="submit" @click.prevent="submitForm" class="btn btn-primary">Save</button>
      </div>
    </form>
  </template>   
  
  <script>
import $ from 'jquery';
  export default {
    name: "newResidentForm",
    data() {
      return {
        firstName: '',
        lastName: '',
        address: '',
        postcode: '',
        date: ''
      };
    },
    methods: {
      baseURL: function(){
        return window.location.origin
      },
      async submitForm() {
        let resident = {
            "first_name": this.firstName,
            "last_name": this.lastName,
            "address_line_1": this.address,
            "postcode": this.postcode,
            "data_consent_date": this.date
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
            data: JSON.stringify(resident),
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
