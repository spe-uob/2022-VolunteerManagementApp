<template>
    <div>

        <button
                class="custom-button" :class="selected ? 'selected-button' : 'unselected-button'"
                  @click="$emit('click', $event)">{{ label }}
        </button>
    </div>
    <!-- <button :style="{left: left + 'px'}"
            v-bind:class="{'dark-button': clicked, 'light-button': !clicked}"
            v-on:click="clicked=!clicked">{{ label }}</button> -->
</template>

<script>
    //may be good to only change background with :style to desired colour after clicked -> only one button change css
    export default {
        name: 'myButton',
        //props: [action],
        components: {},

        data() {
            return {
                clicked: false,
            }
        },
        props: ['label', 'left', 'selected'],
        computed: {},
        methods: {},
    }
</script>

<style scoped>
    /*.button-container {*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*}*/

    .custom-button {
        color: black;
        border: none;
        padding: 10px 25px;
        outline: none;
        background: #ffffff;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        font-size: 1vw;
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
    }
    .selected-button {
        background-color: #6B818C;
        color: #ffffff;
    }

    .unselected-button {
        background-color: #ffffff;
        color: #000000;
    }

    .custom-button:hover {
        color: #808080;


    }


    .dark-button {
        /*color: white;*/
        /*border: none;*/
        /*padding: 10px 20px;*/
        /*outline: none;*/
        /*background: #6B818C;*/
        /*border-radius: 5px;*/
        /*cursor: pointer;*/
        /*transition: background-color 0.3s ease-in-out;*/
    }

    .clicked {
        background-color: #334756;

    }

</style>
