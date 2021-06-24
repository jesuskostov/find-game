<template>
  <div class="home">
    <ProfileBanner />
    <Category />
    <div v-if="install" class="save-app">
      <button @click="install = false" class="close">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 123.05 123.05" style="enable-background:new 0 0 123.05 123.05;"
          xml:space="preserve">
          <g>
            <path d="M121.325,10.925l-8.5-8.399c-2.3-2.3-6.1-2.3-8.5,0l-42.4,42.399L18.726,1.726c-2.301-2.301-6.101-2.301-8.5,0l-8.5,8.5
              c-2.301,2.3-2.301,6.1,0,8.5l43.1,43.1l-42.3,42.5c-2.3,2.3-2.3,6.1,0,8.5l8.5,8.5c2.3,2.3,6.1,2.3,8.5,0l42.399-42.4l42.4,42.4
              c2.3,2.3,6.1,2.3,8.5,0l8.5-8.5c2.3-2.3,2.3-6.1,0-8.5l-42.5-42.4l42.4-42.399C123.625,17.125,123.625,13.325,121.325,10.925z"/>
          </g>
        </svg>
      </button>
      <p>
        От тук можете да запазите сайта като приложение на телефона ви:
        <br>
        <br>
        <br>
        1. Натиснете
        <br>
        2. Натиснете "Add To Home Screen"
      </p>
      <span></span>
    </div>
    <div v-for="(event, i) in events" :key="i">
      <div class="box mx-auto">
        <div class="user">
          <img :src="event.avatar" alt="avatar">
          <h4>{{event.admin}}</h4>
        </div>
        <h2>{{event.title}}</h2>
        <p>{{event.place}}</p>
        <p class="mb-0 b">Участващи</p>
        <div class="d-flex justify-content-between">
          <p class="mb-0">{{event.players.length}}</p>
          <p class="mb-0">{{event.capacity}}</p>
        </div>
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="{'width': event.players.length * 100 / event.capacity + '%'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '../components/Category.vue'
import ProfileBanner from '../components/ProfileBanner.vue'
// import fb from "firebase"
import "../../firebase"
import "firebase/auth"
// import { db } from '../../firebase'

export default {
  name: 'Home',
  data() {
    return {
      text: null,
      install: false,
    }
  },
  components: {
    ProfileBanner,
    Category
  },
  computed: {
    events() {
      return this.$store.state.allEvents
    }
  },
  mounted() {
    
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent );
    }
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    if (isIos() && !isInStandaloneMode()) {
      this.install = true
    } 
  },
}
</script>

<style lang="scss" scoped>

.b {
  font-weight: bold;
}

.box {
  text-align: left;
  width: 90%;
  box-shadow: 0 2px 19px 1px rgb(0 0 0 / 10%);
  border-radius: 11px;
  padding: 10px 15px;
  margin-bottom: 30px;
  h2 {
    font-size: 16px;
    margin-bottom: 0;
  }
  p {
    font-size: 12px;
  }
  .user {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    h4 {
      font-size: 15px;
      margin-bottom: 0;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 999px;
      margin-right: 8px;
    }
  }
  .progress {
    height: 0.6rem;
    .progress-bar {
      background: rgb(25,198,55);
      background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
    }
  }
}

.close {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 5px;
  right: 25px;
  svg {
    fill: #fff;
  }
}

.save-app {
  text-align: left;
    width: 95%;
    position: fixed;
    height: 50%;
    background-color: red;
    left: 50%;
    bottom: 25px;
    transform: translate(-50%, 0);
    border-radius: 26px;
    padding: 2px 25px;
    font-size: 18px;
    color: #fff;
    background: rgb(25,198,55);
    background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
    box-shadow: 0 0 0 100vh rgb(0 0 0 / 70%);
    padding-top: 30px;
    z-index: 5;
    span {
      width: 30px;
      height: 30px;
      background-color: #4cd038;
      display: block;
      position: absolute;
      bottom: -15px;
      left: 50%;
      z-index: 1;
      animation: move 0.4s alternate infinite;
    }
}

@keyframes move {
  0% {
    transform: translate(-50%, 0) rotate(45deg);
  }
  100% {
    transform: translate(-50%, -20%) rotate(45deg);
  }
}
</style>