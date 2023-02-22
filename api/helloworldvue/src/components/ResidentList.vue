<template>
    <div class="container">
      <input class="searchbox" type="text" v-model="search" placeholder="Search Residents"/>
      <ul class="resident-list">
        <li class="resident-item" v-for="resident in filteredResidents" :key="resident.id">
            <a class="name" @click="showDetails(resident.id)">{{ resident.name }}</a>
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
            residents: [],
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
        showDetails(id) {
            this.$router.push({
                name: "add",
                params: { id: id }
            });
        },
        getResidents: async function () {
            const csrftoken = this.getCookie("csrftoken");
            const json = await $.ajax({
                url: "http://localhost:8000/" + "api/residents/",
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

<style>
  .container {
    position: relative;
    top: 150px;
    left: 100px;
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
    font-family:'Times New Roman', Times, serif;
    font-size: 20px;
  }
  .address {
    color: #555;
    font-family:'Times New Roman', Times, serif;
    font-size: 16px;
  }
</style>