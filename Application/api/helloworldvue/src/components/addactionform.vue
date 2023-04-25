<template>
    <form>
      <header class="form-header">Create New Action</header>
      <div class="form-group">
        <label for="help_type">Help Type</label>
        <input type="text" class="form-control first-input" id="help_type" v-model="help_type" placeholder="help_type">
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
      </div>
      <div class="form-group">
        <label for="datetime">Select date and time:</label>
        <input type="datetime-local" id="datetime" v-model="dateTime" @change="updateISO" />
      </div>
      <div class="form-group">
        <label for="publicDescription">Public Description</label>
        <input @input="event => text = event.target.value" v-model="publicDescription">
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
        resident: this.id,
        publicDescription: '',
        privateDescription: '',
      };
    },
    props: ['id'],
    methods: {
      baseURL: function(){
        return window.location.origin
      },
      async submitForm() {
        let action = {
            "help_type": this.help_type,
            "resident": this.id,
            "data_consent_date": this.dateTime,
            "action_uuid": this.generateUUID(),
            "public_description": "",
            "private_description": "",
        }
        const csrftoken = this.getCookie('csrftoken')
        const json = await $.ajax({
            url: this.baseURL() + "api/actions/",
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
    },

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
  font-family:
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Roboto,
          "Helvetica Neue",
          Arial,
          "Noto Sans",
          "Liberation Sans",
          sans-serif,
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji";
  width: 80%;
  padding: 5px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
}

.form-group input {
  font-family:
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Roboto,
          "Helvetica Neue",
          Arial,
          "Noto Sans",
          "Liberation Sans",
          sans-serif,
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji";
  width: 80%;
  padding: 5px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
}

.btn {
  font-family:
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Roboto,
          "Helvetica Neue",
          Arial,
          "Noto Sans",
          "Liberation Sans",
          sans-serif,
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji";
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
