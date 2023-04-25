<template>
    <div id="app">
        <header>
            <template>
                <nav class="nav">
                    <navbar/>

                    <img class="symbol" :src="companyIcon" @click="goToHomePage"/>

                    <div class="person-wrapper">
                        <span class="coordinator-text">Coordinator</span>

                        <img class="person" :src="dropdown"/>
                        <button class="burger-menu dropdown-content">☰</button>
                        <div class="dropdown-content">
                            <a href="#">Volunteer view</a>
                            <a href="#">Account settings</a>
                            <a @click="Login_page">Log Out</a>
                        </div>
                    </div>
                </nav>
            </template>


            <!--                            <myButton class="btn" v-for="(item, index) in buttons" :key="index" :label="item.label" :left="item.left"-->
            <!--                                      @click.native="selectButton(index)" :selected="item.selected"/>-->

            <div v-if="!CallStarted && !$route.path.includes('/add')" class="buttons">
                <myButton class="btn" v-for="(item, index) in buttons" :key="index" :label="item.label"
                          :left="item.left"
                          @click.native="selectButton(index)" :selected="item.selected"/>
                <button class="callbtn active" @click="Start_Call" :class="{ active: callbtnActive }">Start Call
                </button>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    import myButton from "@/components/myButton";
    import navbar from './components/navbar.vue';
    import companyIcon from "../img/CompanyIcon.png";
    import dropdown from "../img/dropdown.png"
    // import FilterComponent from './components/FilterComponent.vue';
    export default {
        name: 'App',
        data() {
            return {
                callbtnActive: false,
                showContent: false,
                companyIcon: companyIcon,
                // personIcon: personIcon,
                // arrow: arrow,
                dropdown: dropdown,
                buttons: [
                    {label: 'AllActivity', left: '273px', selected: false},
                    {label: 'Actions', left: '426px', selected: false},
                    {label: 'Referrals', left: '579px', selected: false},
                    {label: 'Residents', left: '732px', selected: false},
                    {label: 'Volunteers', left: '885px', selected: false},
                    {label: 'Organisations', left: '1038px', selected: false},
                ],
                CallStarted: false,
                previousPath: '',
                options: ['Account']
            }
        },
        created() {
            const callStarted = localStorage.getItem('callStarted');
            if (callStarted !== null) {
                this.CallStarted = callStarted === 'true';
            }
        },
        watch: {
            //TODO: fix gets broken when you refresh on Start Call or forward. Most likely need to run updateCallStarted on more than popstate event
            $route(to, from) {
                if (from !== '/Start_Call')
                    this.updateCallStarted(to.path)
            }
        },
        mounted() {
            this.updateCallStarted(this.$route.path);
            window.addEventListener('popstate', this.onPopState);
        },
        beforeDestroy() {
            window.removeEventListener('popstate', this.onPopState);
            window.removeEventListener('beforeunload', this.onBeforeUnload);
        },
        components: {
            navbar,
            myButton,
            // FilterComponent
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
            updateCallStarted(routeName) {
                this.CallStarted = (
                    routeName === '/Start_Call' ||
                    routeName.startsWith('/add/') ||
                    routeName.startsWith('/action_page')
                );
                localStorage.setItem('callStarted', this.CallStarted);
            },
            onBeforeUnload() {
                //code here
            },
            onPopState() {
                this.updateCallStarted(this.$route.name)
            },
            Start_Call() {
                this.callbtnActive = true;
                this.$router.push("/Start_Call")
            },
            back() {
                this.$emit('buttonClick')
                this.$router.push("/AllActivity")
            },
            selectButton(index) {
                this.buttons.forEach((item, i) => {
                    item.selected = (i === index)
                    if (i === index) {
                        this.$router.push(`/${item.label}`)
                    }
                })
            },
            openActionPage() {
                this.CallStarted = true
                this.$router.push("/action_page/1")
            }
        }
    }
</script>

<style>
    body {
        padding-top: 4vw;
        font-family: 'Inter';
    }
    .callbtn {
        /*position: fixed;*/
        width: 100px;
        height: 45px;
        /*right: 1vw;*/
        top: 100px;
        margin-left: 3vw;
        background: #1C405A;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        z-index: 1;
    }
    .dropdown-content:hover .callbtn {
        display: none;
    }
    /*@media screen and (max-width: 768px) {*/
    /*    .callbtn {*/
    /*        width: 340px;*/
    /*        height: 32px;*/
    /*        top: 8%;*/
    /*        font-size: 0.8rem;*/
    /*        z-index: 1;*/
    /*    }*/
    /*}*/
    /*@media screen and (max-width: 480px) {*/
    /*    .callbtn {*/
    /*        width: 240px;*/
    /*        height: 24px;*/
    /*        top: 4%;*/
    /*        font-size: 0.6rem;*/
    /*        z-index: 1;*/
    /*    }*/
    /*}*/
    router-link {
        text-decoration: none;
        color: inherit;
    }
    .buttons .btn {
        font-weight: 500;
        margin: 10px;
        font-size: 20px;
        color: black;
        /*text-transform: uppercase;*/
        transition: all 0.1s ease-in-out;
    }
    .buttons {
        margin: 10px;
        display: flex;
        justify-content: center;
        outline: none;
        font-family:"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    }
    .btn {
        margin: 10px;
        font-size: 2vw;
        color: black;
        text-transform: uppercase;
        transition: all 0.1s ease-in-out;
    }
    .btn[label="All Activity"],
    .btn[label="Actions"],
    .btn[label="Referrals"],
    .btn[label="Residents"],
    .btn[label="Volunteers"],
    .btn[label="Organisations"] {
        /*update the font size*/
        font-size: 2vw;
    }
    /*.btn:hover {*/
    /*    color: white;*/
    /*    !*border: 1px solid #3A4857;*!*/
    /*    !*background-color: #3A4857;*!*/
    /*    !*border-radius: 10px;*!*/
    /*    !*cursor: pointer;*!*/
    /*}*/
    .btn:active {
        transform: scale(1.15);
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        transition: all 0.3s ease-out;
        top: 100%;
        z-index: 2
    }
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
    .person-wrapper:hover .dropdown-content {
        display: block;
        pointer-events: initial;
    }
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
    .person-wrapper:hover .dropdown-arrow {
        transform: rotate(180deg);
    }



</style>
