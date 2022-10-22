<script>
import { defineComponent, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { store } from './store'
import { supabase } from './supabase'
import Auth from './components/Auth.vue'
import Profile from './components/Profile.vue'
import { useUserStore } from './stores/user'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default defineComponent({
  components: {
    Auth,
    Profile,
    Navbar,
    Footer
},

  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    const { user } = storeToRefs(userStore)
    onMounted(async () => {
      console.log("Mounted")
      try {
        await userStore.fetchUser()
        if (!user.value) console.log('Nos despertamos')
      }
      catch { console.log('el error') }
    })
    /* user = supabase.auth.user()
     supabase.auth.onAuthStateChange((_, session) => {
      store.user = session.user
     }) */

    return {
      store,
    }
  },
})
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>