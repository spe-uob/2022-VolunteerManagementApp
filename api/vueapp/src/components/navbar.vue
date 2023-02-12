<!--header-->
<template>
  <div>

  </div>

</template>

<script>
export default {
    components: {
  },
  name: "nav-bar",
  methods: {
  }
}
</script>

<style>


    .nav {
        position: absolute;
        width: 100vw;
        min-height:40px ;
        height: 4.5vw;
        left: 0;
        top: 0;
        background: #3A4857;
        transition: height 0.2s ease-in-out;
    }

    @media (max-width: 720px) {
        .nav {
            height: 40px;
            transition: height 0.2s ease-in-out;
        }
    }

    /*@media (min-width: 920px){*/
    /*    .nav {*/
    /*        height: 4.5vw;*/
    /*        transition: height 0.2s ease-in-out;*/
    /*    }*/
    /*}*/




</style>






