<script setup>
import { ref } from 'vue'
import router from '../router';
import { useTaskStore } from '../stores/task.js'
const isComplete = ref('')
const title = ref('')
const taskStore = useTaskStore()
/* async function handleSubmit (){
    try {
        await taskStore.fetchTasks(taskName.value, isComplete.value, userId.value)
        console.log('yehaaa!')
         router.push({path:'/home'}) 
    }
    catch(error) {console.log ('fallamos', error)} 
} */
</script>

<template>
    <h1 class="beautyTitle">Please update your tasks here!</h1>
    <form @submit.prevent="handleSubmit" class="newTask input-group" method="post">
        <input type="text" class="input-group-field" v-model="title" placeholder="New task">
        <input type="checkbox" v-model="is_complete">
        <span class="input-group-button">
            <button class="button" type="submit">
                <i class="fa-solid fa-file-circle-plus"></i> Add </button>
        </span>
    </form>
    <button @click="">
        <i class="fa-solid fa-xmark">Delete</i></button>
</template>

<style>

</style>