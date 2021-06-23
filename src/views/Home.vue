<template>
  <div class="home">
    <Category />
    <div class="save-app">
      {{text}}
      <!-- <p>
        От тук можете да запазите сайта като приложение на телефона ви:
        <br>
        <br>
        <br>
        1. Натиснете
        <br>
        2. Натиснете "Add To Home Screen"
      </p> -->
      <!-- <span></span> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '../components/Category.vue'
export default {
  name: 'Home',
  data() {
    return {
      text: null
    }
  },
  mounted() {
    this.text = window.navigator.appCodeName
    console.log(this.text);
  },
  components: {
    Category
  }
}
</script>

<style lang="scss" scoped>
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