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
    async newTask(title, complete, user) {
      const { error } = await supabase
        .from('tasks')
        .insert({
          title: title,
          is_complete: complete,
          user_id: user,
        })
    },
    async deleteTask(id) {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq(
          'id', id
        )
    },
    async editTask(title) {
      const { error } = await supabase
        .from('tasks')
        .update()
        .eq(
          'title', title,
          'id', id
        )
    }
  }
});