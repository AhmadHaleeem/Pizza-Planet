<template>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead style="background: #ddd" class="thead-default">
                <tr>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Add to basket</th>
                </tr>
                </thead>
                <tbody v-for="item in getMenuItems">
                <tr>
                    <td><strong>{{ item.name }}</strong></td>
                </tr>
                <tr v-for="option in item.options">
                    <td>{{ option.size }}</td>
                    <td>{{ option.price }}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-success" type="button" @click="addToBasket(item, option)">
                            +
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <!-- Shopping basket -->
        <div class="col-md-6 col-sm-12">
            <div v-if="basket.length > 0">
                <table class="table table-hover">
                    <thead style="background: #ddd" class="thead-default">
                    <tr>
                        <th>Quantity</th>
                        <th>Item</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody v-for="item in basket">
                    <tr>
                        <td>
                            <button class="btn btn-sm" type="button" @click="decreaseQuantity(item)">-</button>
                            <span>{{ item.quantity }}-</span>
                            <button class="btn btn-sm" type="button" @click="increaseQuantity(item)">+</button>
                        </td>
                        <td>{{ item.name }} {{ item.size }}</td>
                        <td>{{ item.price * item.quantity }}</td>
                    </tr>
                    </tbody>
                </table>

                <p>Order total: </p>
                <button class="btn btn-success btn-block">Place Order</button>

            </div>
            <div v-else>
                <p>{{ basketText }}</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                basket: [],
                basketText: 'Your basket is empty',
                getMenuItems: {
                    1: {
                        'name': 'Sicilian Meatlovers',
                        'description': "Als je een eindbaas bent, verdien je het beste di tutti. Daarom is ‘ie terug van weggeweest; de Sicilian Meatlovers! Een pizza met pepperoni, ham, goudeerlijke chorizo, uber-rijke tomatensaus, romige mozzarella, ,frispittige lente-uitjes en knoflookolie op de rand.",
                        'options': [{
                            'size': 9,
                            'price': 7.95
                        }, {
                            'size': 12,
                            'price': 12.95
                        }]
                    },
                    2: {
                        'name': 'Sea Shepherd Vegan Shoarma Pizza',
                        'description': "De shoarma is heerlijk veganistisch. En verder zit er op deze pizza: tomatensaus, rode ui, romige vegan knoflook swirl en sublieme vegan kaas maken hem verantwoord en goddelijk af. Van elke pizza gaat één euro naar de stoere reddingsacties van Sea Shepherd.",
                        'options': [{
                            'size': 9,
                            'price': 7.95
                        }, {
                            'size': 12,
                            'price': 12.95
                        }]
                    },
                    3: {
                        'name': 'Margherita pizza',
                        'description': "Pizza met tomatensaus en mozzarella. Met boterzachte knoflookolie op de rand van de pizza. Tip! Ook lekker met oregano.",
                        'options': [{
                            'size': 9,
                            'price': 7.95
                        }, {
                            'size': 12,
                            'price': 12.95
                        }]
                    },
                }
            }
        },
        methods: {
            addToBasket(item, option) {
                this.basket.push({
                    name: item.name,
                    price: option.price,
                    size: option.size,
                    quantity: 1
                })
            },
            removeFromBasket(item) {
                this.basket.splice(this.basket.indexOf(item), 1)
            },
            increaseQuantity(item) {
              item.quantity++
            },
            decreaseQuantity(item) {
                item.quantity--

                if (item.quantity === 0) {
                    this.removeFromBasket(item)
                }
            }
        }
    }
</script>

<style scoped>

</style>