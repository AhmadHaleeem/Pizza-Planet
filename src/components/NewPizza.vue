<template>
    <form>
        <h3>Add new pizza:</h3>
        <div class="form-group row">
            <label for="" class="col-sm-3">Name</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>

        <div class="form-group row">
            <label for="" class="col-sm-3">Description</label>
            <div class="col-sm-9">
                <textarea class="form-control" name="" id="" cols="30" rows="5" v-model="newPizza.description"></textarea>
            </div>
        </div>

        <h4>Option 1:</h4>
        <div class="form-group row">
            <label for="" class="col-sm-3">Size (")</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[0].size">
            </div>
        </div>

        <div class="form-group row">
            <label for="" class="col-sm-3">Price</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[0].price">
            </div>
        </div>

        <h4>Option 2:</h4>
        <div class="form-group row">
            <label for="" class="col-sm-3">Size (")</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[1].size">
            </div>
        </div>

        <div class="form-group row">
            <label for="" class="col-sm-3">Price</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[1].price">
            </div>
        </div>



        <div class="form-group row">
            <button type="button" class="btn btn-success btn-block" @click="addMenuItem">Add</button>
        </div>
    </form>
</template>

<script>

    import { dbMenuRef } from '../firebaseConfig'
    export default {
        data() {
            return {
                newPizza:{
                    'name': '',
                    'description': "",
                    'options': [{
                        'size': '',
                        'price': ''
                    }, {
                        'size': '',
                        'price': ''
                    }]
                }
            }
        },
        methods: {
            addMenuItem() {
                dbMenuRef.push(this.newPizza)
                this.newPizza.name = ''
                this.newPizza.description = ''
                this.newPizza.options[0].size = ''
                this.newPizza.options[0].price = ''
                this.newPizza.options[1].size = ''
                this.newPizza.options[1].price = ''
            }
        }
    }
</script>