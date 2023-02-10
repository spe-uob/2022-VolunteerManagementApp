<template>
    <!-- <button :style="{left: left + 'px'}"
            v-bind:class="{'dark-button': clicked, 'light-button': !clicked}"
            v-on:click="clicked=!clicked">{{ label }}</button> -->
    <button :style="{ backgroundColor: selected ? '#6B818C' : '#ffffff', left: left}" class="custom-button" @click="$emit('click', $event)">{{ label }}</button>
</template>

<script>
    //may be good to only change background with :style to desired colour after clicked -> only one button change css
    export default {
        name: 'myButton',
        //props: [action],
        components: {
        },

        data(){
            return {
                clicked: false,
            }
        },
        props: ['label', 'left', 'selected'],
        computed: {

        },
        methods: {
        },
    }
</script>

<style scoped>
    .dark-button{
        color: white;
        border: #ffffff;
        position: absolute;
        width: 120px;
        height: 37px;
        top: 118px;

        background: #6B818C;
        border-radius: 5px;

        /* font-family: Inter;
        font-style: normal;
        font-weight: 400;
        font-size: 16px; */
    }

    .custom-button{
        color: black;
        border: #ffffff;
        position: absolute;
        width: 120px;
        height: 37px;
        top: 118px;

        background: #ffffff;
        border-radius: 5px;
        /*
            font-family: Inter;
            font-style: normal;
            font-weight: 400;
            font-size: 16px; */
    }

</style>
