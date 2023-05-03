<template>
    <div class="container">
      <input class="searchbox" type="text" v-model="search" placeholder="Search Residents"/>
      <ul class="resident-list">
        <li class="resident-item" v-for="resident in filteredResidents" :key="resident.id">
            <router-link :to="{ name: 'add', params: { id: resident.id }}">
                <a class="name">{{ resident.name }}</a>
            </router-link>
            <p class="address">{{ resident.address }}</p>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </template>


<script>
import $ from 'jquery';
import { RouterView } from 'vue-router';

export default {
    data() {
        return {
            residents: [
                {
                    name: "Mia Postings",
                    id: 1,
                    address: "Brum"
                },                {
                    name: "Mia Postings",
                    id: 1,
                    address: "Brum"
                },                {
                    name: "Mia Postings",
                    id: 1,
                    address: "Brum"
                },                {
                    name: "Mia Postings",
                    id: 1,
                    address: "Brum"
                },                {
                    name: "Mia Postings",
                    id: 1,
                    address: "Brum"
                }
            ],
            search: ""
        };
    },

    computed: {
        filteredResidents() {
            return this.residents.filter(resident => {
                return resident.name.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    },

    methods: {
        baseURL: function(){
        return window.location.origin
      },
        showDetails(id) {
            console.log("link working")
            this.$router.push({
                name: "add",
                params: { id: id }
            });
        },
        getResidents: async function () {
            const csrftoken = this.getCookie("csrftoken");
            const json = await $.ajax({
                url: this.baseURL() + "/api/residents/",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-CSRFToken", csrftoken);
                },
                method: "GET",
                type: "GET",
                contentType: "application/json",
                success: () => {
                    //this.$emit('removed-action', response)
                    console.log("success");
                },
                error: (err) => {
                    console.error(JSON.stringify(err));
                }
            }).catch((err) => {
                console.err(JSON.stringify(err));
            });
            console.log(JSON.stringify(json));
            return json;
        },
        getCookie: function (name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== "") {
                const cookies = document.cookie.split(";");
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + "=")) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
    },
    mounted() {
        this.getResidents().then((response) => {
            this.residents = response.results.map((result) => {
                return {
                    name: result.first_name + " " + result.last_name,
                    address: result.postcode,
                    id: result.id
                };
            });
        });
        console.log(this.residents);
    },
    components: { RouterView }
}
</script>

<style scoped>
  .container {
    position: relative;
    top: 150px;
    left: 100px;
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    background-color: white;
    border: none;
  }

.search-box {
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
  width: 60%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
}

.resident-list {
  box-shadow: -5px -1px 10px rgba(62, 62, 62, 0.134);
  background-color: white;
  width: 20%;
  list-style: none;
  padding: 0;
  text-align: center;
}

.resident-item {
  border: 1px solid #ddd;
  padding: 30px;
  box-sizing: border-box;
  width: 300px;
  height: 100px;
  text-align: left;
}

.name {
    color: #333;
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
    font-size: 20px;
  }

  .name:hover {
    color: blue;
  }
  .address {
    color: #555;
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
  }
</style>
