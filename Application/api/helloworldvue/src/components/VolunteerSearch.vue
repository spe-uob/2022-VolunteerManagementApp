<template>
  <div>
    <div class="filter-container">
      <div class="f-title">Search</div>
      <!--    <div class="mi">-->
      <!--          <input type="search" name="" id="" placeholder="">-->
      <!--          <button type="button">Search</button>-->
      <!--        </div>-->
      <div>
        <div class="mi">
          <input type="text" v-model="name" placeholder="" v-on:input="changetext"/>
          <button type="button">Search</button>
        </div>
        <ul v-show="flag" class="item-ul">
          <li class="item-ul-li" v-for="(item,index) in nlist" :key="index" @click="queryadd(item)">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--        <div>-->
  <!--            <div class="filter-head" @click="setToggle2"><i class="arrow-right"></i> Status</div>-->
  <!--            <div v-show="toggle2" class="filter-body">-->
  <!--                <div>-->
  <!--                    <label>-->
  <!--                        <input type="checkbox">-->
  <!--                        sub type1-->
  <!--                    </label>-->
  <!--                </div>-->
  <!--                <div>-->
  <!--                    <label>-->
  <!--                        <input type="checkbox">-->
  <!--                        sub type1-->
  <!--                    </label>-->
  <!--                </div>-->
  <!--            </div>-->
  <!--        </div>-->
</template>
<script>

export default {
  data() {
    return {
      flag: false,
      name: '',
      nlist: [],
      userList: [
        {
          name: 'Noel',
          age: 'Wester',
          phone: '01179123456',
          email: 'noel.wester@gmail.com',
          time:'1 day, 5 hours',
        },
        {
          name: 'Noel',
          age: 'Wes',
          phone: '355667564532',
          email: 'noel.wes@gmail.com',
          time:'5 day, 2 hours',
        },
        {
          name: 'Noe',
          age: 'Wester',
          phone: '465768778787',
          email: 'noe.wester@gmail.com',
          time:'1 day, 12 hours',
        },
        {
          name: 'Noel',
          age: 'Wester',
          phone: '01179123456',
          email: 'noel.wester@gmail.com',
          time:'13 day, 24 hours',
        },
        {
          name: 'Nel',
          age: 'Weser',
          phone: '0456667665',
          email: 'nel.weser@gmail.com',
          time:'1 day, 5 hours',
        },
      ]
    }
  },
  methods: {
    changetext() {
      this.userList.filter(item => {
        if (this.name === item.name) {
          let sin = {
            name: item.name,
            age: item.age,
            phone: item.phone,
            email: item.email,
            time: item.time,
          }
          this.nlist.push(sin)
          this.flag = true
        }
      })

      this.nlist.forEach(item => {
        if (this.name !== item.name) {
          this.nlist = []
          this.flag = false
        }
      })
    },
    
  }
}
</script>
<style scoped lang="scss">
.mi {
  text-align: center;
  input {
    border: 2px solid #B8B8B8;
    height: 40px;
    width: 88%;
    font-size: 16px;
  }
  input:focus{
    border: 2px solid #3385FF;
  }
}
.mi-ul {
  .mi-ul-li{
    margin: auto;
    height: 30px;
    line-height: 30px;
    width: 35%;
    span{
      font-size: 16px;
    }
  }
  .mi-ul-li:hover{
    background-color: #F1F3F4;
  }
}
.filter-container {
  font-weight: bold;
  margin-top: 20px;
  background: #ebecf0;
  color: rgba(31, 31, 31, 0.7);
  border-radius: 0.5rem;
  border: 0.1rem solid #f7f7f7;
  width: 10rem;
  position: absolute;
  right: 0.5%;
  top: 23%;
}

.f-title{
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  padding: 6px;
  color: black;
  background-color: rgba(247, 247, 247, 1)
}


.filter-head{
  background: #eee;
  padding: 10px;
  font-size: 10px;
  border-bottom: 1px solid #D8D8D8;
  border-top: 1px solid #D8D8D8;
  margin: -1px 0;
  color: black;
}
.filter-head-input{
  display: none;
}
.arrow-right {
  display: inline-block;
  width: 0.45rem;
  height: 0.45rem;
  border-top: .10rem solid #666;
  border-right: .10rem solid #666;
  margin-right: 6px;
  transform: rotate(45deg);
  transition: transform 0.1s ease-in-out;
}

.filter-head-input:checked+.filter-head .arrow-right{
  transform: rotate(135deg);
  transition: transform 0.1s ease-in-out;
}

label{
  font-size: 10px;
  color: black;
}

.filter-body{
  background-color: white;
}

@media (max-width: 1180px ){
  .filter-container{
    display: none;
  }
}
button,
input {
  border: 0;
  outline: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

.mi {
  position: relative;
  left: 2.5px;
  top: 3px;
  width:150px;
  height: 36px;
  border: 2px solid rgba(223, 226, 230, 1);
}

.mi button {
  float: right;
  width: 50px;
  height: 33px;
  background-color: rgba(223, 226, 230, 1);
  font-size: 13px;
  color: gray;
}

.mi input {
  float: left;
  width: 150px;
  height: 33px;
  padding-left: 10px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 48px;
  border: 1px solid #e0e0e0;
  outline: none;
  transition: all 0.3s;
}

/*.mi .search {*/
/*  border: 1px solid #b1191a;*/
/*}*/

.result-list {
  display: none;
  left: 0;
  top: 48px;
  width: 454px;
  border: 1px solid #b1191a;
  border-top: 0;
  background: #fff;
}

.result-list a {
  display: block;
  padding: 6px 15px;
  font-size: 12px;
  color: #424242;
  text-decoration: none;
}

.result-list a:hover {
  background-color: #eee;
}

</style>