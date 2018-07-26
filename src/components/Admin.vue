<template>
    <div>
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <pp-new-pizza></pp-new-pizza>
            </div>
            <div class="col-sm-12 col-md-6">
                <h3>Menu:</h3>
                <table class="table table-hover">
                    <thead style="background: #ddd" class="thead-default">
                    <tr>
                        <th>Item</th>
                        <th>Remove from item</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Sicilian Meatlovers</td>
                        <td>
                            <button class="btn btn-default btn-sm" type="button">X</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <h3>Current orders:</h3>
                <table class="table table-sm">
                    <thead style="background: #ddd" class="thead-default">
                    <tr>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <div class="order-number">
                        <strong><em>Order Number: 1</em></strong>
                        <button class="btn btn-default btn-sm" type="button">X</button>
                    </div>
                    <tr>
                        <td>Sicilian Meatlovers</td>
                        <td>9"</td>
                        <td>1</td>
                        <td>6.95</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <hr>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <pp-login></pp-login>
            </div>
        </div>
    </div>
</template>

<script>
    import NewPizza from './NewPizza.vue'
    import Login from './Login.vue'
    export default {
        components: {
            ppNewPizza: NewPizza,
            ppLogin: Login,
        },
        beforeRouteLeave: (to, from, next) => {
            if (confirm('Have you remembered to logout') == true) {
                next()
            } else {
                next(false)
            }
        }

    }
</script>

<style scoped>

</style>