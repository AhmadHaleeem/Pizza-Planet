<template>
    <div class="row">
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
        }
    }
</script>