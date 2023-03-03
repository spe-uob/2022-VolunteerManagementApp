<template>
    <div>
      <div>
<!--        <table class="table">-->
<!--          <thead>-->
<!--          <tr style="font-size: 17px;background-color: #f7f7f7;">-->
<!--            <td rowspan="4" style="font-size: 17px;font-weight:bold;color: black">Referrals</td>-->
<!--            <td></td>-->
<!--            <td></td>-->
<!--            <td></td>-->
<!--            <td></td>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->

<!--          <tr>-->
<!--            <th>ID<div style="display: inline-block;position: absolute;top:45px;">-->
<!--              <span-->
<!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
<!--              </div>-->
<!--            </th>-->
<!--            <th>Resident<div style="display: inline-block;position: absolute;top: 45px;">-->
<!--              <span-->
<!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
<!--              </div>-->
<!--            </th>-->
<!--            <th>Help Type<div style="display: inline-block;position: absolute;top: 45px;">-->
<!--              <span-->
<!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
<!--              </div>-->
<!--            </th>-->
<!--            <th>Organisation<div style="display: inline-block;position: absolute;top: 45px;">-->
<!--              <span-->
<!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
<!--              </div>-->
<!--            </th>-->
<!--            <th>Completed<div style="display: inline-block;position: absolute;top: 45px;">-->
<!--              <span-->
<!--                class="arrow asc"></span><br /><span class="arrow dsc"></span>-->
<!--              </div>-->
<!--            </th>-->
<!--          </tr>-->
<!--          &lt;!&ndash; 用索引值除以 2 取余 &ndash;&gt;-->
<!--          <tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">-->
<!--            <td style="color:  black;">{{item.id}}</td>-->
<!--            <td style="color:  black;">{{item.resident}}</td>-->
<!--            <td style="color:  black;">{{item.help_type}}</td>-->
<!--            <td style="color:  black;">{{item.Organisation}}</td>-->
<!--            <td style="color:  black;">{{item.Completed}}</td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->
        <div>
          <Referrals_tablecomponent></Referrals_tablecomponent>
        </div>

        <div>
          <FilterComponent></FilterComponent>
        </div>

      </div>
    </div>
  </template>
  
  <script>
      import $ from 'jquery';
  
  export default {
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
      left: {
      type: Number,
      required: false
      },
      top: {
        type: Number,
        required: false
      }
    },
    created() {
      this.tableData = this.$store.state.tableData
    },
    components: {
      FilterComponent: require('./FilterComponent.vue').default,
      Referrals_tablecomponent: require('./myReferrals.vue').default
    },
    methods: {
      toggleHide() {
        this.toggle = !this.toggle;
      },
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
          this.list = response.results.map((result) => {
            return {
              id: result.id,
              resident: result.resident,
              help_type: result.help_type,
              Organisation: result.referral_organisation,
              Completed: 'n/a'
            }
          })
      })
      },
  }

  
  </script>
  
  <style>
  
  /*.table-container {*/
  /*    box-sizing: border-box;*/
  /*    position: absolute;*/
  /*    width: 1229px;*/
  /*    height: 854px;*/
  /*    left: 20px;*/
  /*    top: 194px;*/
  /*    background: rgb(212, 215, 211);*/
  /*    border: 1px solid #DFDFDF;*/
  /*    border-radius: 5px;*/
  /*  }*/
  
  /*.table {*/
  /*  border: 1px solid #f5f5f5;*/
  /*  border-radius: 5px;*/
  /*  margin: 0 auto;*/
  /*  border-spacing: 0px;*/
  /*  width: 100%;*/
  /*  max-width: 100%;*/
  /*  margin: 0;*/
  /*}*/

  /*.table1 {*/
  /*  background: #ebecf0;*/
  /*  color: rgba(31, 31, 31, 0.7);*/
  /*  border-radius: 5px;*/
  /*  margin: 0 auto;*/
  /*  border: 1px solid #f7f7f7;*/
  /*  width: 200px;*/
  /*  position: absolute;*/
  /*  right: -220px;*/
  /*  top: 0;*/
  /*}*/
  
  /*select {*/
  
  /*  !* styling *!*/
  /*  background-color: white;*/
  /*  border: black;*/
  /*  border-radius: 4px;*/
  /*  display: inline-block;*/
  /*  font: inherit;*/
  /*  line-height: 1.5em;*/
  /*  padding: 0.5em 0.1em 0.5em 0.5em;*/
  /*}*/
  
  
  /*th {*/
  /*  background-color: #ebecf0;*/
  /*  color: rgba(31, 31, 31, 0.7);*/
  /*  cursor: pointer;*/
  /*  text-align: left;*/
  /*}*/
  
  
  /*td {*/
  /*  font-size: 13px;*/
  /*  height: 30px;*/
  /*}*/
  
  /*th,*/
  /*td {*/
  /*  min-width: 90px;*/
  /*  padding: 10px 10px;*/
  
  /*}*/
  
  /*!* 定义余数为 0 的行颜色 *!*/
  
  /*.tr-color-0 {*/
  /*  background: #f2f2f2;*/
  /*}*/
  
  /*!* 定义余数为 1 的行颜色 *!*/
  
  /*.tr-color-1 {*/
  /*  background: #fff;*/
  /*}*/
  
  /*.arrow {*/
  /*  display: inline-block;*/
  /*  vertical-align: middle;*/
  /*  width: 0;*/
  /*  height: 0;*/
  /*  margin-left: 5px;*/
  /*  opacity: 0.66;*/
  /*}*/
  
  /*.arrow.asc {*/
  /*  border-left: 4px solid transparent;*/
  /*  border-right: 4px solid transparent;*/
  /*  border-bottom: 4px solid #4c4b50;*/
  /*}*/
  
  /*.arrow.dsc {*/
  /*  border-left: 4px solid transparent;*/
  /*  border-right: 4px solid transparent;*/
  /*  border-top: 4px solid #4c4b50;*/
  /*}*/
  </style>