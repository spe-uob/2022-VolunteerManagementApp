<template>
    <div>
        <div class="box-container">
            <header>Actions</header>
          <ul class="action-list">
            <li class="action-item" v-for="action in filteredActions" :key="action.id">
                <a class="name">{{ action.type}}</a>
                <p class="address">{{ action.date}}</p>
            </li>
            <button class="btn" @click="openActionform">Add New Action</button>
          </ul>
        </div>

        <div class="box-container2">
            <header>Referrals</header>
          <ul class="action-list">
            <li class="action-item" v-for="action in filteredActions" :key="action.id">
                <a class="name">{{ action.type}}</a>
            </li>
          </ul>
          <button class="btn" @click="openActionform">Add New Action</button>
        </div>
        <div class="container-xyz">
          <addactionform :id="this.id"/>
        </div>
    </div>

</template>


<script>
import $ from 'jquery';
import addactionform from './addactionform.vue';

export default {
  data() {
    return {
        actions: [],
        referrals: [],
        actionForm: false,
        referralForm: false,
    }
  },
  props: [],
  components: {
    addactionform
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    filteredActions() {
            return this.actions.filter(action => action.resident === parseInt(this.id));
        },
    filteredReferrals(){
            return this.referrals.filter(referral => referral.resident === parseInt(this.id))
    }
  },
  methods: {
    openActionform(){
        this.actionForm = true
        this.referralForm = false
    },
    getActions: async function () {
        const csrftoken = this.getCookie('csrftoken')
          const json = await $.ajax({
              url: `http://localhost:8000/api/actions/`,
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
          return json;
      },
    getReferrals: async function (){
        const csrftoken = this.getCookie('csrftoken')
          const json = await $.ajax({
              url: `http://localhost:8000/api/referrals/`,
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
        }
  },
  mounted() {
    console.log(this.id)
    this.getReferrals().then((response) => {
       this.referrals = response.results.map((result) => {
            return {
                resident: result.resident,
                type: result.referral_type,
            }
       })
    })
    this.getActions().then((response) => {
        console.log("response.results:" + + response.results)
        this.actions = response.results.map((result) => {
          return {
            resident: result.resident,
            type: result.help_type,
            date: result.requested_datetime
        }
        })
    console.log("this.actions: " + JSON.stringify(this.actions))
    console.log("filtered actions: " + this.filteredActions)
    })
  }
}
</script>

<style>
  .box-container {
    position: relative;
    top: -50px;
    left: -500px;
    width: 500px;
    height: 400px;
    margin: 0 auto;
  }

  .container-xyz {
  width: 120px;
  border: 1px solid #ccc;
  font-weight: bold;
  margin-top: 30px;

}
  .box-container2 {
    position: relative;
    top: 0px;
    left: -500px;
    width: 500px;
    height: 400px;
    margin: 0 auto;
  }
.search-box {
    font-family: 'Times New Roman', Times, serif;
  width: 60%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
}

.action-list {
    box-shadow: -5px -1px 10px rgb(112, 102, 102);
  background-color: white;
  width: 20%;
  list-style: none;
  padding: 0;
  text-align: center;
  margin-bottom: 10px;
}

.action-list {
    box-shadow: -5px -1px 10px rgb(112, 102, 102);
  background-color: white;
  width: 20%;
  list-style: none;
  padding: 0;
  text-align: center;
  margin-bottom: 10px;
}

.action-item {
  border: 1px solid #ddd;
  padding: 30px;
  box-sizing: border-box;
  width: 300px;
  height: 100px;
  text-align: left;
}

.name {
    color: #333;
    font-family:'Times New Roman', Times, serif;
    font-size: 20px;
  }
  .address {
    color: #555;
    font-family:'Times New Roman', Times, serif;
    font-size: 16px;
  }
</style>
