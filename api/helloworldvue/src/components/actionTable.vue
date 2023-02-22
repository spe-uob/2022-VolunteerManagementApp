<template>
  <div>
    <div class='table-container' :style="{ width: containerSize + 'px', height: containerSize + 'px'}">
      <table class="table">
        <thead>
        <tr style="font-size: 17px;background-color: #f7f7f7;">
          <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Actions</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </thead>
        <tbody>

        <tr>
          <th>ID<div style="display: inline-block;position: absolute;top:45px;">
            <span class="arrow asc"></span><br /><span class="arrow dsc"></span>
          </div>
          </th>
          <th>Resident<div style="display: inline-block;position: absolute;top: 45px;">
            <span class="arrow asc"></span><br /><span class="arrow dsc"></span>
            </div>
          </th>
          <th>Help Type<div style="display: inline-block;position: absolute;top: 45px;">
            <span class="arrow asc"></span><br /><span class="arrow dsc"></span>
          </div>
          </th>
          <th>Due<div style="display: inline-block;position: absolute;top: 45px;">
            <span
              class="arrow asc"></span><br /><span class="arrow dsc"></span>
            </div>
          </th>
          <th>Status<div style="display: inline-block;position: absolute;top: 45px;">
            <span
              class="arrow asc"></span><br /><span class="arrow dsc"></span>
            </div>
          </th>
        </tr>
        <!-- 用索引值除以 2 取余 -->
        <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">
          <td style="color:  black;">{{item.id}}</td>
          <td style="color:  black;">{{item.resident}}</td>
          <td style="color:  black;">{{item.help_type}}</td>
          <td style="color:  black;">{{item.Due}}</td>
          <td style="color:  black;">{{item.Status}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery';

export default {
  name: 'actionTable',
  data() {
    return {
      toggle: false,
      list: [
      ]
    }
  },
  props: {
    containerSize: {
      type: Number,
      required: true
    },
  },
  created() {
    this.tableData = this.$store.state.tableData
  },
  methods: {
    toggleHide() {
      this.toggle = !this.toggle;
    },
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
  },
  mounted(){
        this.getActions().then((response) => {
        this.list = response.results.map((result) => {
          return {
            id: result.id,
            resident: result.resident,
            help_type: result.help_type,
            Due: 'n/a',
            Status: result.action_status,
          }
        })
    })
    },
}

</script>

<style>

</style>