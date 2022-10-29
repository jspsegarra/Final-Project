<script>
import { defineComponent, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { store } from './store'
import { supabase } from './supabase'
import Profile from './components/Profile.vue'
import { useUserStore } from './stores/user'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default defineComponent({
  components: {
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

<template class="body">
  <Navbar />
   
  <router-view />

  <Footer />
</template>

<style>
.body {
  margin: 50px;
  background-color: rgb(111, 158, 205);
  align-items: center;
}

.title-big {
  margin-top: 50px;
  margin-bottom: 30px;
  padding-left: 80px;
  align-items: center;
}

.texto-que-no-se-van-a-creer {
  color: rgb(226, 198, 43);
  padding-left: 80px;
  padding-right: 80px;
  margin-bottom: 30px;
}
</style>