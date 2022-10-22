<script setup> 
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'
const email = ref('')
const fname = ref('')
const lname = ref('')
const phone = ref('')
const password = ref('')
const userStore = useUserStore()
async function handleSubmit (){
    try {
        await userStore.signUp(email.value, password.value, fname.value, lname.value, phone.value)
        console.log('registrado')
    }
    catch(error) {console.log ('fallamos', error)}
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="container">
        <div class="row">
            <div class="col">
                <label for="InputFname" class="form-label">First name</label>
                <input type="text" class="form-control" v-model="fname" placeholder="First name" aria-label="First name">
            </div>
            <div class="col">
                <label for="InputLname" class="form-label">Last name</label>
                <input type="text" class="form-control" v-model="lname" placeholder="Last name" aria-label="Last name">
            </div>
        </div>
        <div class="mb-3">
            <label for="InputEmail" class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="email" id="InputEmail" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="InputPhone" class="form-label">Phone</label>
            <input type="phone" class="form-control" v-model="phone" id="Phone" aria-describedby="phoneHelp">
        </div>
        <label for="inputPassword" class="form-label">Password</label>
        <input type="password" id="inputPassword" v-model="password" class="form-control" aria-describedby="passwordHelpBlock">
        <div id="passwordHelpBlock" class="form-text">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
            special characters, or emoji.
        </div>

        <button type="submit" class="btn btn-primary">Sign Up!</button>
    </form>
</template>

<style>

</style>