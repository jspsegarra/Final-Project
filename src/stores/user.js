// /store/user.js
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),

    actions: {
        async fetchUser() {
            const { data: { user } } = await supabase.auth.getUser()
            this.user = user;
        },
        async signUp(email, password, fname, lname, phone) {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                      first_name: fname,
                      last_name: lname,
                      phone: phone,
                    }
                  }
                })
            if (error) throw error;
        },
        async signIn(email, password) {
            const { user, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error) throw error;
            if (user) this.user = user;
        },
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: "user",
                storage: localStorage,
            },
        ],
    },
});