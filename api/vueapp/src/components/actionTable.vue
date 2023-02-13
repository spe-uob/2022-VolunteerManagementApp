<template>
    <div class="table-container">
      <h1 class="table-title">Actions</h1>
      <b-table
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      sort-icon-left
      responsive="sm"
    ></b-table>
    </div>
  </template>
  
  <script>
    import $ from 'jquery';
    export default {
      data() {
        return {
          sortBy: 'age',
          sortDesc: false,
          items: [],
          fields: [
          { key: 'id', label: 'ID', sortable: true },
          { key: 'resident', label: 'Resident', sortable: true },
          { key: 'help_type', label: 'Help Type', sortable: true},
        ],
        }
      },
      methods: {
        getActions: async function () {
          const csrftoken = this.getCookie('csrftoken')
          const json = await $.ajax({
              url: "http://localhost:8000/" + "api/actions/",
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
          getResidentByID: async function(id){
            const csrftoken = this.getCookie('csrftoken')
            const json = await $.ajax({
                url: `http://localhost:8000/api/residents/${id}`,
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
            return json.first_name + ' ' + json.last_name;
            }
      },
      mounted(){
        this.getActions().then((response) => {
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
  .table-container {
    box-sizing: border-box;

    position: absolute;
    width: 1229px;
    height: 854px;
    left: 20px;
    top: 194px;

    background: #F2F2F2;
    border: 1px solid #DFDFDF;
    border-radius: 5px;
  }
  </style>