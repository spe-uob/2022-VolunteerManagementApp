<!--header-->
<template>
    <div>
        <nav class="nav">
            <navbar/>

            <img class="symbol" :src="companyIcon" @click="goToHomePage"/>

            <div class="title">
                 <span>
                    Coordinator
                </span>
                <span class="gap"></span>

                <div class="person-wrapper">
                    <div class="person-wrapper ">
                        <img class="person" :src="dropdown"/>

                    </div>
                    <div class="dropdown-content">
                        <a href="#">Volunteer view</a>
                        <a href="#">Account settings</a>
                        <a @click="Login_page">Log Out</a>
                    </div>
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
                dropdown : dropdown,
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


    .title {
        position: fixed;
        height: 2vw;
        right: 1vw;
        top: 1vw;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 1.5vw;
        display: flex;
        align-items: center;
        color: #FFFFFF;

    }
    .person-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-top: 2px;
    }

    .person-wrapper:hover .dropdown-arrow {
        transform: rotate(180deg);
    }
    .person-wrapper:hover .dropdown-content {
        display: block;
        pointer-events: initial;
    }

    .person {
        /*position: absolute;*/
        width: 2vw;
        height: 2vw;
        right: 1vw;
        top: 3px;
        transition: height 0.2s ease-in-out;
    }



    /* Links inside the dropdown */
    .dropdown-content a,
    .dropdown-content a:hover {
        color: black;
        font-size: 18px;
        padding: 0.8em 1.5em;
        text-decoration: none;
        display: block;
        background-color: transparent;
        transition: transform 0.2s ease-in-out;

    }
    .dropdown-content a:hover {
        display: block;
        background-color: #eee;
    }

    /* Show the dropdown menu on hover */

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown-content:hover {
        font-weight: bold;
    }



    .dropdown-content a {
        border-bottom: 1px solid #eee;
    }

    .dropdown-content a:last-child {
        border-bottom: none;
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






