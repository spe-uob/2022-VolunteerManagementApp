<template>
  <form>
    <div style="cursor: pointer" @click="back()">back</div>
    <div>
      <h1 class="form-title">Update Organisation</h1>
    </div>
    <div class="form-group">
      <label for="Name">Name</label>
      <input type="text" class="form-control" id="Name" v-model="Name" placeholder="Name of organisation">
    </div>
    <div class="form-group">
      <label for="PhoneNumber">Phone Number</label>
      <input type="text" class="form-control" id="PhoneNumber" v-model="PhoneNumber" placeholder="Main phone number for organisation contact.">
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" class="form-control" id="address" v-model="address" placeholder="Address">
    </div>
    <div class="form-group">
      <label for="MainContact">Main Contact</label>
      <input type="text" class="form-control" id="MainContact" v-model="MainContact" placeholder="Name of organisation contact.">
    </div>
    <div class="form-group">
      <label for="Email">Email</label>
      <input type="text" class="form-control" id="Email" v-model="Email" placeholder="Main email for organisation contact.">
    </div>
    <div class="form-group">
      <label for="postcode">Postcode</label>
      <input type="text" class="form-control" id="postcode" v-model="postcode" placeholder="Address postcode.">
    </div>
    <div class="form-group">
      <button type="submit" @click.prevent="submitForm" class="btn btn-primary">Save</button>
    </div>
  </form>
</template>

<script>
import $ from 'jquery';
export default {
  props:["detail"],
  name: "NewOrganisationForm",
  data() {
    return {
      Name: '',
      PhoneNumber: '',
      address: '',
      MainContact: '',
      Email: '',
      postcode: '',
    };
  },
  methods: {
    back(){
      // this.$emit("back");
      this.$router.back();
    },

    async submitForm() {
      let Organisation = {
        "name": this.Name,
        "phone_number": this.PhoneNumber,
        "address_line_1": this.address,
        "contact_name": this.MainContact,
        "email": this.Email,
        "postcode":this.postcode
        // "Email": this.email,
      }
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: this.baseURL() + "/api/organisations/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken)
        },
        method: "POST",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(Organisation),
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
     this.Name = data.name;
     this.PhoneNumber = data.phone;
     this.address = data.address_line_1;
     this.MainContact = data.contact_name;
     this.Email = data.email;
     this.postcode = data.postcode;

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
