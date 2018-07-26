const state = {
    orders: [],
}

const getters = {
    numberOfOrders : state => state.orders.length
}

const mutations = {
    addOrder : (state, basket) => state.orders.push(basket)
}

const actions = {}

export default {
    state, mutations, getters, actions
}