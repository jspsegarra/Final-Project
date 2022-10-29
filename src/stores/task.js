// /store/task.js

import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: null
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    },
    async newTask(title, complete) {
      const { error } = await supabase
        .from('tasks')
        .insert({
          title: title,
          is_complete: complete,
        })
    },
    async deleteTask(title) {
      const { error } = await supabase
        .from('tasks')
        .delete({
          title: title,
        })
        .eq('title')
    }
  }
});