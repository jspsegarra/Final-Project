<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'
const email = ref('')
const password = ref('')
const userStore = useUserStore()
async function handleSubmit() {
    try {
        await userStore.signIn(email.value, password.value)
        console.log('registrado')
    }
    catch (error) { console.log('fallamos', error) }
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="container">
        <div class="mb-3">
            <label for="InputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="email" id="InputEmail" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="InputPassword" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password" id="InputPassword">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</template>