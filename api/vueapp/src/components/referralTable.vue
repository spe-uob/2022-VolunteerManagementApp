<template>
    <div class="table-container">
      <h1 class="table-title">Referrals</h1>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </template>
  
  <script>
    import $ from 'jquery';
    export default {
      data() {
        return {
          items: [],
          fields: [
          { key: 'id', label: 'ID' },
          { key: 'resident', label: 'Resident' },
          { key: 'help_type', label: 'Referral Type' },
        ],
        }
      },
      methods: {
        getReferrals: async function () {
          const csrftoken = this.getCookie('csrftoken')
          const json = await $.ajax({
              url: "http://localhost:8000/" + "api/referrals/",
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
              }
          }).catch((err) => {
              console.err(JSON.stringify(err))
          })
          console.log(JSON.stringify(json))
          return json;
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
      mounted(){
        this.getReferrals().then((response) => {
        this.items = response.results.map((result) => {
          return {
            id: result.id,
            resident: result.resident,
            help_type: result.help_type
          }
        })
    })
    },
  }
  </script>

  <style>
  </style>