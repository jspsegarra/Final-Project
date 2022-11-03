<script setup>
import { ref } from 'vue'
import router from '../router';
import { useTaskStore } from '../stores/task.js'
import { useUserStore } from '../stores/user.js'
import { storeToRefs } from 'pinia'
const isComplete = ref(false)
const title = ref('')
const newTitle = ref('')
const taskStore = useTaskStore()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const { tasks } = storeToRefs(taskStore)
async function handleSubmit() {
    try {
        await taskStore.newTask(title.value, isComplete.value, user._object.user.id)
        await taskStore.fetchTasks()
        console.log('prueba')
    }
    catch (error) { console.log('fallamos', error) }
}
async function fetchTasks() {
    await taskStore.fetchTasks()
}
fetchTasks();

const deleteTask = async (task) => {
    await taskStore.deleteTask(task.id)
    console.log('Borrado')
    await taskStore.fetchTasks();
};

const editTask = async (id, newTitle) => {
    try {
        if (newTitle) {
            await taskStore.editTask(id, newTitle)
            newTitle = ''
            if (errorMsg.value != null) {
                showError.value = true
            }
        }
        else {
            errorMsg.value = "Try again later."
            showError.value = true
        }
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <section class="container">
        <h1 class="beautyTitle">Please update your tasks here!</h1>
        <form @submit.prevent="handleSubmit" class="newTask input-group" method="post">
            <input type="text" class="input-group-field" v-model="title" placeholder="New task">
            <input type="checkbox" v-model="isComplete">
            <p class="complete">Completed?</p>
            <span class="input-group-button">
                <button class="button" type="submit">
                    <i class="fa-solid fa-file-circle-plus"></i> Add </button>
            </span>
        </form>
        <div v-for="task in tasks">
            <h2> {{ task.title }}</h2>
            <button class="buttond">
                <i class="fa-solid fa-xmark" @click="deleteTask(task)">Delete</i></button>
            <button class="buttond" @click="editTask(task)">Edit
            </button>
        </div>
    </section>
</template>

<style>
body {
    background-color: rgb(111, 158, 205);

}

h1 {
    margin-top: 50px;
    margin-bottom: 40px;
}

button {
    background-color: #abc;
}

button :hover {
    background-color: rgb(226, 198, 43);
}

.buttond {
    margin-bottom: 50px;
}

.newTask {
    justify-content: space-evenly;
}

.complete {
    font-style: bolder;
}
</style>