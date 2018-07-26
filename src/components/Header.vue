<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">PIZZA PLANET</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <router-link :to="{name: 'homeLink'}" tag="li"><a href="">home</a></router-link>
                    <router-link :to="{name: 'menuLink'}" tag="li"><a href="">menu</a></router-link>
                </ul>

            </div>
        </div>
    </nav>

</template>

<script>
    export default {

    }
</script>

<style scoped>
    /*.router-link-active {*/
        /*background: #ccc;*/
        /*font-size: 17px;*/
    /*}*/

</style>