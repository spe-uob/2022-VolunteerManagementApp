<!--header-->
<template>
    <div>
        <nav class="nav">
            <navbar />

            <img class="symbol" :src="companyIcon" @click="goToHomePage" />

            <div class="person-wrapper">
                <div class="person-wrapper">
                    <span class="coordinator">Coordinator</span>
                    <span class="gap"></span>
                    <img class="person" :src="dropdown" @click="toggleDropdown" />
                    <button id="burgerMenuButton" class="burger-menu-button" @click="toggleDropdown">
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                    </button>
                </div>
                <div class="dropdown-content" v-if="dropdownVisible">
<!--                    <a href="#">Volunteer view</a>-->
                    <a href="#">Account settings</a>
                    <a @click="Login_page">Log Out</a>
                </div>
            </div>
        </nav>
    </div>

</template>

<script>
    import companyIcon from "../../img/CompanyIcon.png";
    import dropdown from "../../img/dropdown.png"
    // import personIcon from "../img/person.png"
    // import arrow from "../img/arrow.png"
    export default {
        name: 'App',
        data() {
            return {
                companyIcon: companyIcon,
                dropdown: dropdown,
                dropdownVisible: false,
                // personIcon: personIcon,
                // arrow: arrow,
            }
        },
        methods: {
            goToHomePage() {
                //first one for frontend test
                window.location.href = "http://localhost:8000/index";
                window.location.href = "http://localhost:8080/AllActivity";
                //this is the url
                // window.location.href="http://localhost:8000/index";
            },
            Login_page() {
                window.location.href = "http://localhost:8000/";
            },
            toggleDropdown(){
                this.dropdownVisible =! this.dropdownVisible;
            }
        }
    }
</script>

<style>


    .nav {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 40px;
        background: #3A4857;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
    }

    .symbol {
        position: absolute;
        width: 60px;
        height: 30px;
        left: 1em;
        top: 3px;
        transition: height 0.2s ease-in-out;
        cursor: pointer;
    }

    .symbol:hover {
        opacity: 0.8;
        transition: opacity 0.3s ease-in-out;
    }

    .burger-menu-button {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 50px;
        height: 30px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .burger-line {
        width: 70%;
        height: 2px;
        background-color: white;
        border-radius: 1px;
        margin-left: auto;
        margin-right: auto;
        transition: all 0.3s ease;
    }


    .burger-line:nth-child(1) {
        top: 60%;
    }

    .burger-line:nth-child(2) {
        top: 50%;
    }

    .burger-line:nth-child(3) {
        top: 60%;
    }



    .burger-menu-button.active .burger-line:nth-child(1) {
        transform: translateY(5px) rotate(45deg);
    }

    .burger-menu-button.active .burger-line:nth-child(2) {
        opacity: 0;
    }

    .burger-menu-button.active .burger-line:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg);
    }


    .coordinator {
        color: #FFFFFF;
        font-family: 'Inter';
        font-style: normal;
        top: 20px;
        font-size: 15px;
        align-items: center;
    }
   .burger-menu-button{
       display: none;
    }

    .person-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-top: 2px;
        position: relative;
    }


    .person-wrapper:hover .dropdown-content {
        display: block;
        pointer-events: initial;
    }

    .person {
        /*position: absolute;*/
        display: block;
        width: 50px;
        padding-right: 20px;
        top: 3px;
        transition: height 0.2s ease-in-out;
    }

    @media (max-width: 850px) {
        .burger-menu-button{
            position: absolute;
            display: flex;
            right: 30px;

        }

        .coordinator{
            display: none;
        }
        .person{
            display: none;
        }
    }


    /* Links inside the dropdown */
    /*.dropdown-content a,*/
    /*.dropdown-content a:hover {*/
    /*    color: black;*/
    /*    font-size: 18px;*/
    /*    padding: 0.8em 1.5em;*/
    /*    text-decoration: none;*/
    /*    display: block;*/
    /*    background-color: transparent;*/
    /*    transition: transform 0.2s ease-in-out;*/

    .dropdown-content {
        display: none;
        position: absolute;
        top: 40px;
        right: 0;
        background-color: #FFFFFF;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
        z-index: 1;
        min-width: 200px;
        border-radius: 4px;
        overflow: hidden;
    }

    .dropdown-content a {
        display: block;
        padding: 12px 16px;
        color: black;
        text-decoration: none;
        font-family: 'Inter';
        font-style: normal;
        font-size: 15px;
        white-space: nowrap;
        text-align: center; /* Align text to the center */
    }

    /*.dropdown-content a:hover {*/
    /*    background-color: #F0F0F0;*/
    /*}*/

    .dropdown-content a {
        border-bottom: 1px solid #eee;
    }

    .dropdown-content a:last-child {
        border-bottom: none;
    }
    .dropdown-arrow {
        width: 1.8vw;
        height: 2vw;
        transition: all 0.2s ease-out;
        margin-left: 1vw;
        /*font-size: 0.5rem;*/
        /*transition: transform 0.2s ease-in-out;*/
        /*transform: rotate(180deg);*/
    }


    .gap {
        padding-left: 4px;
        padding-right: 4px;
    }

    .background-color {
        background: RGB(114, 140, 159);

        padding: 3px;
        border: 2px solid RGB(114, 140, 159);
        border-radius: 5px;
    }


</style>






