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
      <p class="mb-4">You can save this website like an app on your screen:</p>
      <p class="mb-1">1. Press the icon below</p>
      <p class="mb-0">2. Then press "Add To Home Screen"</p>
      <span></span>
    </div>
    <div v-for="(event, i) in events" :key="i">
      <div class="position-relative custom">
        <div class="box mx-auto">
          <div class="time">
              {{event.date}}
            <div>
              <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m352.193 96.193c-88.117 0-159.806 71.689-159.806 159.807s71.689 159.807 159.806 159.807c88.118 0 159.807-71.689 159.807-159.807s-71.689-159.807-159.807-159.807zm0 304.614c-79.846 0-144.806-64.96-144.806-144.807s64.96-144.807 144.806-144.807c79.847 0 144.807 64.96 144.807 144.807s-64.96 144.807-144.807 144.807z"/><path d="m272.473 176.279c39.733-39.733 103.365-43.963 148.012-9.839 3.291 2.516 7.998 1.887 10.513-1.404s1.886-7.998-1.405-10.513c-24.379-18.634-54.733-27.851-85.464-25.955-31.036 1.915-60.25 15.092-82.263 37.104-22.012 22.012-35.189 51.227-37.104 82.263-1.896 30.733 7.321 61.085 25.955 85.464 1.477 1.932 3.708 2.946 5.964 2.946 1.588 0 3.189-.503 4.549-1.542 3.291-2.516 3.919-7.222 1.404-10.513-34.124-44.646-29.895-108.277 9.839-148.011z"/><path d="m453.67 178.601c-2.516-3.291-7.223-3.92-10.513-1.404-3.291 2.516-3.92 7.222-1.405 10.513 34.125 44.647 29.895 108.278-9.838 148.011-39.733 39.732-103.364 43.963-148.011 9.839-3.29-2.515-7.997-1.887-10.513 1.404-2.515 3.291-1.886 7.998 1.405 10.513 22.285 17.034 49.562 26.199 77.558 26.199 2.63 0 5.267-.081 7.906-.244 31.036-1.915 60.25-15.092 82.262-37.104s35.189-51.227 37.104-82.263c1.896-30.733-7.321-61.086-25.955-85.464z"/><path d="m401.585 206.608c-2.929-2.93-7.678-2.93-10.606 0l-28.322 28.322c-3.154-1.573-6.706-2.463-10.463-2.463-12.976 0-23.532 10.557-23.532 23.532 0 10.354 6.724 19.16 16.032 22.3v33.813c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-33.812c9.308-3.14 16.032-11.946 16.032-22.3 0-3.757-.89-7.309-2.463-10.463l28.322-28.322c2.93-2.929 2.93-7.678 0-10.607zm-49.392 57.924c-4.705 0-8.532-3.828-8.532-8.532s3.828-8.532 8.532-8.532 8.532 3.828 8.532 8.532-3.827 8.532-8.532 8.532z"/><path d="m159.291 256c0-4.142-3.358-7.5-7.5-7.5h-144.291c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h144.291c4.142 0 7.5-3.358 7.5-7.5z"/><path d="m183.855 152.307h-32.064c-4.142 0-7.5 3.357-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5h32.064c4.142 0 7.5-3.358 7.5-7.5 0-4.143-3.358-7.5-7.5-7.5z"/><path d="m119.726 215.403h48.097c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-48.097c-4.142 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"/><path d="m79.645 215.403h8.016c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-8.016c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m183.855 344.693h-32.064c-4.142 0-7.5 3.358-7.5 7.5 0 4.143 3.358 7.5 7.5 7.5h32.064c4.142 0 7.5-3.357 7.5-7.5 0-4.141-3.358-7.5-7.5-7.5z"/><path d="m175.323 304.097c0-4.142-3.358-7.5-7.5-7.5h-48.097c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h48.097c4.142 0 7.5-3.358 7.5-7.5z"/><path d="m87.661 296.597h-8.016c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h8.016c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><circle cx="440.37" cy="256" r="7.5"/><circle cx="264.01" cy="256" r="7.5"/><circle cx="352.19" cy="344.18" r="7.5"/><circle cx="352.19" cy="167.82" r="7.5"/><path d="m282.319 215.66c2.071-3.587.842-8.174-2.745-10.245s-8.174-.842-10.245 2.745-.842 8.174 2.745 10.245 8.174.842 10.245-2.745z"/><path d="m432.306 293.595c-3.587-2.071-8.174-.842-10.245 2.745s-.842 8.174 2.745 10.245 8.174.842 10.245-2.745c2.071-3.588.842-8.174-2.745-10.245z"/><path d="m402.775 183.384c2.071-3.587.842-8.174-2.745-10.245s-8.174-.842-10.245 2.745-.842 8.174 2.745 10.245 8.174.842 10.245-2.745z"/><path d="m311.85 325.871c-3.587-2.071-8.174-.842-10.245 2.745s-.842 8.174 2.745 10.245 8.174.842 10.245-2.745.842-8.174-2.745-10.245z"/><path d="m424.806 205.415c-3.587 2.071-4.816 6.658-2.745 10.245s6.658 4.816 10.245 2.745 4.816-6.658 2.745-10.245-6.658-4.816-10.245-2.745z"/><path d="m279.574 306.585c3.587-2.071 4.816-6.658 2.745-10.245s-6.658-4.816-10.245-2.745-4.816 6.658-2.745 10.245c2.07 3.587 6.657 4.816 10.245 2.745z"/><path d="m314.595 175.884c-2.071-3.587-6.658-4.816-10.245-2.745s-4.816 6.658-2.745 10.245 6.658 4.816 10.245 2.745 4.816-6.658 2.745-10.245z"/><path d="m392.53 325.871c-3.587 2.071-4.816 6.658-2.745 10.245s6.658 4.816 10.245 2.745 4.816-6.658 2.745-10.245-6.658-4.816-10.245-2.745z"/></g></svg>
              {{event.time}}
              <br>
            </div>
          </div>
          <div class="user">
            <img :src="event.avatar" alt="avatar">
            <h4>{{event.admin}}</h4>
          </div>
          <h2 class="mb-3">{{event.title}}</h2>
          <p class="mt-1 mb-1 b">
            <img src="../assets/trophy.svg" alt="">
            {{event.type}}
          </p>
          <p class="mt-1 mb-1">
            <svg class="loc" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 493.508 493.508" style="enable-background:new 0 0 493.508 493.508;" xml:space="preserve">
              <g>
                <path d="M246.753,0C152.987,0,76.998,76.01,76.998,169.776c0,71.476,98.671,236.177,145.555,310.407
                  c5.254,8.299,14.403,13.324,24.217,13.324c9.818-0.02,18.948-5.041,24.186-13.34c46.899-74.246,145.555-238.916,145.555-310.392
                  C416.51,76.01,340.521,0,246.753,0z M246.753,273.424c-53.028,0-96.017-42.983-96.017-96.018c0-53.029,42.988-96.017,96.017-96.017
                  c53.029,0,96.017,42.987,96.017,96.017C342.77,230.441,299.783,273.424,246.753,273.424z"/>
              </g>
            </svg>
            {{event.place}}
          </p>
          <p class="mb-0">
            <img class="join" src="../assets/raise-hand.svg" alt="">
            Участващи
          </p>
          <div class="d-flex justify-content-between">
            <p class="mb-0">{{event.players.length}}</p>
            <p class="mb-0">{{event.capacity}}</p>
          </div>
          <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{'width': event.players.length * 100 / event.capacity + '%'}"></div>
          </div>
          <button @click="join(i)" class="go-btn">
            <img src="../assets/man-go.svg" alt="">
            <small>Участвай</small>
          </button>
        </div>
        <span class="btn-shadow"></span>
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
import { db } from '../../firebase'

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
  methods: {
    async join(eventID) {

      let id = await this.$store.state.id
      let name = await this.$store.state.name
      let avatar = await this.$store.state.avatar

      let events = await this.$store.state.allEvents

      events[eventID].players.push({
        id: id,
         name: name,
         avatar: avatar,
      }) 

      db.collection('allEvents').doc('here').update({
        events
      })

    }
  },
  mounted() {
    this.$store.dispatch('getEvents')
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

.join {
  width: 15px;
  height: 15px;
  position: relative;
  top: -4px;
  margin-left: -2px;
}

.loc {
  width: 13px;
  position: relative;
  height: 13px;
  top: -3px;
}

.btn-shadow {
  position: absolute;
  width: 10px;
  height: 20px;
  background-color: #849a55;
  top: 50%;
  right: -10px;
  transform: translate(-6px, 16px) rotate(58deg);
  z-index: -1;
}

.go-btn {
  position: absolute;
  top: 50%;
  right: -10px;
  border: 0;
  padding-left: 12px;padding-right: 20px;
  transform: translate(0, -50%);
  background-color: yellowgreen;
  height: 50px;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  small {
    color: white;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 4px;
    transform: scaleX(-1);
  }
}

.time {
  position: absolute;
  right: 15px;
  top: 5px;
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
  svg {
    position: relative;
    width: 32px;
    height: 32px;
    top: -1px;
    margin-left: -12px;
  }
  img {
    position: relative;
    top: -2px;
    width: 18px;
    height: 18px;
  }
}

.b {
  font-weight: bold;
}

.custom {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.box {
  position: relative;
  background-color: white;
  z-index: 1;
  text-align: left;
  width: 100%;
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
    img {
      width: 14px;
      margin-left: -1px;
    }
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
    position: relative;
    fill: #fff;
    z-index: 9999;
  }
}

.save-app {
  position: fixed;
  width: 95%;
  height: 50%;
  left: 50%;
  bottom: 25px;
  transform: translate(-50%, 0);
  text-align: left;
  background-color: red;
  border-radius: 26px;
  padding: 50px 25px 10px 25px;
  font-size: 18px;
  color: #fff;
  background: rgb(25,198,55);
  background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
  box-shadow: 0 0 0 100vh rgb(0 0 0 / 70%);
  z-index: 5;
  span {
    width: 30px;
    height: 30px;
    background-color: #4cd038;
    display: block;
    position: absolute;
    bottom: -15px;
    left: 50%;
    z-index: 999;
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