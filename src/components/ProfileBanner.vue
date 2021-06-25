<template>
  <div>
    <div id="nav">
      <button v-if="loginBtn" @click="login">login</button>
      <div v-if="!loginBtn" class="w-100 d-flex align-items-center gap-35">
        <div class="profile-picture mr-auto">
          <img class="avatar" v-if="avatar" :src="avatar" alt="avatar">
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center">
          <div @click="$router.push('/createevent')" class="create-btn mb-2">
            <svg viewBox="0 0 469.33333 469.33333" xmlns="http://www.w3.org/2000/svg">
                <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"/>
            </svg>
          </div>
          <small>Създай игра</small>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center">
          <div class="settings-btn mb-2">
            <svg id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m464.866 192.8h-10.87c-3.531-11.05-7.986-21.784-13.323-32.097l7.698-7.698c18.665-18.645 18.165-48.525.006-66.665l-22.711-22.71c-18.129-18.153-48.015-18.679-66.665-.007l-7.704 7.704c-10.313-5.336-21.048-9.792-32.097-13.323v-10.871c0-25.989-21.144-47.133-47.134-47.133h-32.133c-25.989 0-47.133 21.144-47.133 47.133v10.871c-11.049 3.53-21.784 7.986-32.097 13.323l-7.697-7.697c-18.613-18.635-48.498-18.198-66.664-.006l-22.713 22.711c-18.152 18.132-18.677 48.014-.006 66.665l7.704 7.704c-5.337 10.313-9.792 21.046-13.323 32.097h-10.87c-25.989-.001-47.134 21.143-47.134 47.132v32.134c0 25.989 21.145 47.133 47.134 47.133h10.87c3.531 11.05 7.986 21.784 13.323 32.097l-7.698 7.698c-18.665 18.645-18.165 48.525-.006 66.665l22.711 22.71c18.129 18.153 48.015 18.679 66.665.007l7.704-7.704c10.313 5.336 21.048 9.792 32.097 13.323v10.871c0 25.989 21.145 47.133 47.134 47.133h32.133c25.989 0 47.134-21.144 47.134-47.133v-10.871c11.049-3.53 21.784-7.986 32.097-13.323l7.697 7.697c18.613 18.635 48.497 18.198 66.664.006l22.713-22.712c18.152-18.132 18.677-48.014.006-66.665l-7.704-7.704c5.337-10.313 9.792-21.046 13.323-32.097h10.87c25.989 0 47.134-21.144 47.134-47.133v-32.134c-.001-25.987-21.146-47.131-47.135-47.131zm-208.866 174.6c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4z"/>
            </svg>
          </div>
          <small>Настройки</small>
        </div>
      </div>
    </div>
    <div v-if="!loginBtn" class="d-flex justify-content-center position-relative">
      <div class="name" v-if="name">
        <span></span>
        <p>{{name}}</p>
      </div>
      <span class="animated-line">
        <span></span>
      </span>
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
      loginBtn: false
    }
  },
  methods: {
    async login() {

      let provider = new fb.auth.FacebookAuthProvider();      
      let res = await fb.auth().signInWithPopup(provider)

      let id = res.user.uid
      let name = res.additionalUserInfo.profile.name
      let avatar = res.additionalUserInfo.profile.picture.data.url

      await this.$store.dispatch('saveUser', {id, name, avatar})

      db.collection('users').doc(id).set({
        id: id,
        name: name,
        avatar: avatar,
        events: []
      })

      this.name = await this.$store.state.name
      this.avatar = await this.$store.state.avatar
      if (this.name) {
        this.loginBtn = false
      }
    }
  },
  async mounted() {
    fb.auth().onAuthStateChanged( async (user) => {
      if (user !== null) {
        let id = user.uid
        let res = await db.collection('users').doc(id).get()
        let data = res.data()

        if (res.exists) {
          this.name = data.name
          this.avatar = data.avatar
          let events = data.events
          let name = this.name
          let avatar = this.avatar
          this.$store.dispatch('saveUser', {id, name, avatar, events})
        } else {
          this.loginBtn = true
        }
      } else {
        this.loginBtn = true
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.animated-line {
  position: absolute;
  width: 100%;
  height: 4px;
  background: rgb(25,198,55);
  top: 50%;
  z-index: -1;
  overflow: hidden;
  span {
    position: absolute;
    height: 100%;
    background: rgb(25,198,55);
    background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
    left: 0;
    top: 0;
    animation: line 2.8s infinite;
  }
}

.gap-35 {
  gap: 35px;
}

.option {
  position: relative;
  top: 25px;
}

.profile-picture {
  width: 92px;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(25,198,55);
  background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  border-radius: 999px;
}

.create-btn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(25,198,55);
  background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  border-radius: 999px;
  position: relative;

  svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(25,198,55);
    background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
    border-radius: 999px;
    z-index: -1;
    animation: pulse 1.6s infinite;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.settings-btn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(25,198,55);
  background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  border-radius: 999px;
  svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }
}

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
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  border: 2px solid white;
}

.name {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgb(25,198,55);
  position: relative;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  p {
    margin-bottom: 0;
    z-index: 4;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    animation-name: line2;
    animation-duration: 2.8s;
    animation-iteration-count: infinite;
    animation-delay: 0.1s;
    background: rgb(25,198,55);
    background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
    /* z-index: 1; */
  }
  // animation: line 2.8s infinite;

  // background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
  // -webkit-box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 20%);
  // -moz-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  // box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 20%);
  border-radius: 999px;
  padding: 0px 35px;
  color: #fff;
}


@keyframes line {
  10% {
    left: 0;
    width: 0;
  } 
  100% {
    width: 100%;
  }
}

@keyframes line2 {
  0%       { width: 0%; }
  30%       { width: 100%; left: 0; }
  100%       { width: 100%; left: 100%; opacity: 0;}
}


</style>
