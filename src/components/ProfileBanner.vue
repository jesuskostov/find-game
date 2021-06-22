<template>
  <div id="nav">
    <button v-if="loginBtn" @click="login">login</button>
    <div class="d-flex align-items-center">
      <img class="avatar" v-if="avatar" :src="avatar" alt="avatar">
      <p class="name" v-if="name">{{name}}</p>
    </div>
  </div>
</template>

<script>
import fb from "firebase"
import "../../firebase"
import "firebase/auth"
import { db } from '../../firebase'
export default {
  name: 'ProfileBanner',
  data() {
    return {
      name: '',
      avatar: '',
      loginBtn: true
    }
  },
  methods: {
    async login() {

      let provider = new fb.auth.FacebookAuthProvider();      
      let res = await fb.auth().signInWithPopup(provider)

      let id = res.additionalUserInfo.profile.id
      let name = res.additionalUserInfo.profile.name
      let avatar = res.additionalUserInfo.profile.picture.data.url

      await this.$store.dispatch('saveUser', {id, name, avatar})

      db.collection('users').doc(id).set({
        id: id,
        name: name,
        avatar: avatar,
      })

      this.name = await this.$store.state.name
      this.avatar = await this.$store.state.avatar
      if (this.name) {
        this.loginBtn = false
      }
    }
  },
  async mounted() {
        fb.auth().onAuthStateChanged(user => {
          this.name = user.displayName
        })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#nav {
  width: 100%;
  padding: 15px;
  display: flex;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 9999px;
  margin-right: 16px;
}

.name {
  font-size: 14px;
  margin-bottom: 0;
}

</style>
