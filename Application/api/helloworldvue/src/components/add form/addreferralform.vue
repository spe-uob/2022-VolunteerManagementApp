<template>
  <form>
    <header>Create New Referral</header>
    <div class="details">
      <label for="selectedHelpType">Help Type</label>
      <select v-model="selectedHelpType" @change="onHelpTypeSelected($event.target.value)">
        <option v-for="helptype in helpTypes" :key="helptype.id" :value="helptype.id">{{ helptype.name }}</option>
      </select>
    </div>
    <div class="details">
      <label for="selectedHelpType">Coordinators</label>
      <select v-model="selectedCoordinator" @change="onCoordinatorSelected($event.target.value)">
        <option v-for="coordinator in coordinators" :key="coordinator.id" :value="coordinator.id">{{ coordinator.first_name + ' ' + coordinator.last_name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="datetime">Select date and time:</label>
      <input type="datetime-local" id="datetime" v-model="dateTime" @change="updateISO" />
    </div>
    <div class="form-group">
      <label for="publicDescription">Public Description</label>
      <input  @input="event => text = event.target.value" v-model="publicDescription">
    </div>
    <div class="form-group">
      <label for="privateDescription">Private Description</label>
      <input @input="event => text = event.target.value" v-model="privateDescription">
    </div>
    <button type="submit" @click.prevent="submitForm" class="btn btn-primary">Save</button>
  </form>
</template>

<script>
import $ from 'jquery';
export default {
  name: "newResidentForm",
  data() {
    return {
      help_type: '',
      dateTime: '',
      added_by: '',
      coordinator: '',
      resident: this.id,
      publicDescription: '',
      privateDescription: '',
      helpTypes: [],
      coordinators: []
    };
  },
  props: ['id'],
  methods: {
    async submitForm() {
      let action = {
        "referral_type": this.help_type,
        "resident": this.id,
        "added_by": this.added_by,
        "referral_status": "3",
        "coordinator": this.coordinator,
        "data_consent_date": this.dateTime,
        "action_uuid": this.generateUUID(),
        "public_description": "",
        "private_description": "",
      }
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: "http://localhost:8000/" + "api/referrals/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken)
        },
        method: "POST",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(action),
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
    generateUUID(){
      let uuid = '', i, random;
      for (i = 0; i < 32; i++) {
        random = (Math.random() * 16) | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += '-';
        }
        uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
      }
      return uuid;
    },
    updateISO() {
      this.isoDateTime = new Date(this.dateTime).toISOString();
    },
    baseURL: function(){
      return window.location.origin
    },
    onHelpTypeSelected: async function(id) {
      // let myHelpType = this.helpTypes.find(obj => obj.name === id)
      // const csrftoken = this.getCookie('csrftoken')
      // const json = await $.ajax({
      //   url: this.baseURL() + `/api/actions/${this.id}/`,
      //   beforeSend: function (xhr) {
      //     xhr.setRequestHeader('X-CSRFToken', csrftoken)
      //   },
      //   method: "PATCH",
      //   type: "PATCH",
      //   contentType: 'application/json',
      //   data: JSON.stringify({'action_status': myHelpType.id}),
      //   success: () => {
      //     //this.$emit('removed-action', response)
      //     console.log("success")
      //   },
      //   error: (err) => {
      //     console.error(JSON.stringify(err))
      //   },
      //
      // }).catch((err) => {
      //   console.error(JSON.stringify(err))
      // })
      // console.log(JSON.stringify(json))
      // return json;
      this.help_type = id
      console.log( "Inputted helptype: "+ this.help_type)
    },
    onCoordinatorSelected: async function(id) {
      // let myCoordinator = this.coordinators.find(obj => obj.name === id)
      // const csrftoken = this.getCookie('csrftoken')
      // const json = await $.ajax({
      //   url: this.baseURL() + `/api/actions/${this.id}/`,
      //   beforeSend: function (xhr) {
      //     xhr.setRequestHeader('X-CSRFToken', csrftoken)
      //   },
      //   method: "PATCH",
      //   type: "PATCH",
      //   contentType: 'application/json',
      //   data: JSON.stringify({'action_status': myCoordinator.id}),
      //   success: () => {
      //     //this.$emit('removed-action', response)
      //     console.log("success")
      //   },
      //   error: (err) => {
      //     console.error(JSON.stringify(err))
      //   },
      //
      // }).catch((err) => {
      //   console.error(JSON.stringify(err))
      // })
      // console.log(JSON.stringify(json))
      // return json;
      this.added_by = id
      this.coordinator = id
      console.log( "Inputted coordinator: "+ this.added_by)

    },
    getReferralTypes: async function () {
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: this.baseURL() + `/api/referraltypes/`,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken)
        },
        method: "GET",
        type: "GET",
        contentType: 'application/json',
        success: () => {
          //this.$emit('removed-action', response)
          console.log("success")
        },
        error: (err) => {
          console.error(JSON.stringify(err))
        },

      }).catch((err) => {
        console.error(JSON.stringify(err))
      })
      console.log(JSON.stringify(json))
      return json;
    },
    getCoordinators: async function () {
      const csrftoken = this.getCookie('csrftoken')
      const json = await $.ajax({
        url: this.baseURL() + `/api/coordinators/`,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken)
        },
        method: "GET",
        type: "GET",
        contentType: 'application/json',
        success: () => {
          //this.$emit('removed-action', response)
          console.log("success")
        },
        error: (err) => {
          console.error(JSON.stringify(err))
        },

      }).catch((err) => {
        console.error(JSON.stringify(err))
      })
      console.log(JSON.stringify(json))
      return json;
    },
  },
  async mounted() {
    let response = await this.getReferralTypes()
    response = response.results
    this.helpTypes = response
    response = await this.getCoordinators()
    this.coordinators = response.results
  }

};
</script>

<style scoped>
/* CSS for the form header */
form header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* CSS for the search box */
.form-group:first-of-type {
  margin-bottom: 30px;
}

.form-group:first-of-type label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.form-group:first-of-type input {
  font-family: 'Times New Roman', Times, serif;
  width: 80%;
  padding: 5px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
}

.form-group input {
  font-family: 'Times New Roman', Times, serif;
  width: 80%;
  padding: 5px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
}

.btn {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #334756;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #3e8e41;
}

.btn:active {
  background-color: #1e4420;
}
</style>