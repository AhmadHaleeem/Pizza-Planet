<template>
    <div class="row">
        <div >
            <p v-if="!currentUser">Please login to continue</p>
            <p v-else>Logged in as: {{ currentUser }} </p>
        </div>
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password">
            </div>

            <button class="btn btn-primary" type="button" @click.prevent="signIn">Sign in</button>
            <button class="btn btn-danger" type="button" @click.prevent="signOut">Sign out</button>
        </form>
    </div>
</template>

<script>
    import Firebase from 'firebase'
    import {store} from '../store/store'

    Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            store.dispatch('setUser', user)
        } else {
            store.dispatch('setUser', null)
        }
    })

    export default {
        methods: {
            signIn() {
                var email = document.getElementById('email').value
                var password = document.getElementById('password').value

                Firebase.auth().signInWithEmailAndPassword(email, password)
                    .catch((error) => {
                        var errorCode = error.code
                        var errorMessage = error.message

                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password')
                        } else {
                            alert(errorMessage)
                        }
                    })
            },
            signOut() {
                Firebase.auth().signOut().then(() => {
                    alert('logged out successfully')
                }).catch((error) => {
                    alert('error.')
                })
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser
            }
        }
    }
</script>

<style scoped>
    form {
        margin:20px 0;
    }
</style>