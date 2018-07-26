<template>
    <div>
        <p>Click on the links below for more info:</p>
        <footer class="row">
            <nav class="navbar navbar-toggleable-md navbar-light">
                <ul class="navbar-nav">
                    <router-link class="nav-item" :to="{name: 'historyLink'}" tag="li"><a class="nav-link" href="">our history</a></router-link>
                    <router-link class="nav-item" :to="{name: 'contactLink'}" tag="li"><a  class="nav-link" href="">contact us</a></router-link>
                    <router-link class="nav-item" :to="{name: 'orderingGuideLink'}" tag="li"><a class="nav-link" href="">ordering guide</a></router-link>
                    <router-link class="nav-item" :to="{name: 'deliveryLink'}" tag="li"><a class="nav-link" href="">delivery</a></router-link>
                </ul>
            </nav>
        </footer>
        <router-view>:</router-view>
    </div>
</template>

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

</style> class=nav-item