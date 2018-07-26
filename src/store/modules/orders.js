import { firebaseAction } from 'vuexfire'

const state = {
    orders: [],
}

const getters = {
    getOrders : state => state.orders,
    numberOfOrders : state => state.orders.length
}

const mutations = {
    addOrder : (state, basket) => state.orders.push(basket)
}

const actions = {
    setOrderRef : firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('orders', ref)
    })
}

export default {
    state, mutations, getters, actions
}