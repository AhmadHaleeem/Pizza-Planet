<template>
    <div>
        <section v-if="currentUser">

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
                        <tbody v-for="item in getMenuItems" :key="item['.key']">
                        <tr>
                            <td>{{ item.name }}</td>
                            <td>
                                <button class="btn btn-default btn-sm" type="button"
                                        @click="removeMenuItem(item['.key'])">
                                    X
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <h3>Current orders: {{ numberOfOrders }}</h3>
                    <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">
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
                            <strong><em>Order Number: {{ index + 1 }}</em></strong>
                            <button class="btn btn-default btn-sm" type="button"
                                    @click="removeOrderItem(orders['.key'])">
                                X
                            </button>
                        </div>
                        <tr v-for="orderItems in orders['.value']">
                            <td>{{ orderItems.name }}</td>
                            <td>{{ orderItems.size }}"</td>
                            <td>{{ orderItems.quantity }}</td>
                            <td>{{ orderItems.price | currency }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
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
    import {mapGetters} from 'vuex'
    import {dbMenuRef} from '../firebaseConfig'
    import {dbOrdersRef} from '../firebaseConfig'

    export default {
        components: {
            ppNewPizza: NewPizza,
            ppLogin: Login,
        },
        computed: {
            ...mapGetters([
                'numberOfOrders',
                'getMenuItems',
                'getOrders',
                'currentUser'
            ])
//            getMenuItems() {
//                return this.$store.state.menuItems
//            },
//            numberOfOrders() {
//                return this.$store.getters.numberOfOrders
//            }
        },
        methods: {
            removeMenuItem(key) {
                dbMenuRef.child(key).remove()
            },
            removeOrderItem(key) {
                dbOrdersRef.child(key).remove()
            }
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
    .order-number {
        margin: 10px 0;
    }
</style>