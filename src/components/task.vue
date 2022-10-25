<script setup> 
import { ref } from 'vue'
import router from '../router';
import { useTaskStore } from '../stores/task.js'
const taskName = ref('')
const isComplete = ref('')
const userId = ref('')
const taskStore = useTaskStore()
async function handleSubmit (){
    try {
        await taskStore.fetchTasks(taskName.value, isComplete.value, userId.value)
        console.log('yehaaa!')
        /* router.push({path:'/home'}) */
    }
    catch(error) {console.log ('fallamos', error)}
}
</script>

<template>

</template>

<style>

</style>