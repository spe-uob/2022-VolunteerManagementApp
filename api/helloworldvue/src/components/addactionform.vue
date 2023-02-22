<template>
    <form>
        <header>Create New Action</header>
    <div class="form-group">
        <label for="help_type">Help Type</label>
        <input type="text" class="form-control" id="help_type" v-model="help_type" placeholder="help_type">
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
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
        resident: this.id,
        publicDescription: '',
        privateDescription: '',
      };
    },
    props: ['id'],
    methods: {
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
            url: "http://localhost:8000/" + "api/actiosns/",
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