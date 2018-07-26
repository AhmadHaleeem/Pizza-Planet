<template>
    <footer class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
            <ul class="navbar-nav">
               <router-link class="nav-item" :to="{name: 'homeLink'}" tag="li"><a class="nav-link" href="">home</a></router-link>
                <router-link class="nav-item" :to="{name: 'aboutLink'}" tag="li"><a class="nav-link" href="">about</a></router-link>
                <router-link class="nav-item" :to="{name: 'adminLink'}" tag="li"><a class="nav-link" href="">admin</a></router-link>
            </ul>
        </nav>
    </footer>
</template>:

<script>
    export default {

    }
</script>

<style scoped>

    .nav-item {
        display: inline;
        color: #000;
        margin-top: 12px;
        font-size: 18px;
    }

    .nav-link {
        height: 20px;
        margin-right: 30px;
        list-style: none;
        color: #7d7d7d;
        text-decoration: none;
    }

</style>