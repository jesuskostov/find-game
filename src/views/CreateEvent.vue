<template>
  <div class="d-flex flex-column h-100">
      <div class="header">
        <button @click="$router.push('/')">
            <img src="../assets/back.svg" alt="">
        </button>
        <h1 v-if="!allowToCreate" class="text-muted-custom">Create new game</h1>
        <h1 v-else @click="create">Create new game</h1>
      </div>
      <div class="form flex-grow-1 d-flex flex-column pt-4 pb-4">
        <label for="title">Title</label>
        <input type="text" id="title" class="form-control" v-model="info.title">
        <label for="place">Place</label>
        <input type="text" id="place" class="form-control" v-model="info.place">
        <label for="capacity">How many players</label>
        <input type="number" id="capacity" class="form-control" v-model="info.capacity">
        <label for="date">Day</label>
        <input type="date" id="date" class="form-control" v-model="info.date">
        <label for="time">Time</label>
        <input type="time" id="time" class="form-control" v-model="info.time">
        <label for="type">Game category</label>
        <input type="text" id="type" class="form-control" v-model="info.type">
        <label for="description">Description</label>
        <input type="text" id="description" class="form-control" v-model="info.description">
      </div>
  </div>
</template>

<script>
import { db } from '../../firebase'

export default {
  name: 'CreateEvent',
  data() {
    return {
      info: {
        title: '',
        place: '',
        capacity: null,
        date: null,
        time: null,
        type: '',
        description: '',
      },
      allowToCreate: false
    }
  },
  watch: {
    info: {
      handler() {
        if (this.info.title && this.info.place && this.info.capacity && this.info.date && this.info.time && this.info.type && this.info.description) {
          this.allowToCreate = true
        }
      }, deep: true
    }
  },
  methods: {
    async create() {

      let data = await this.$store.state 
  
      let newEvents = {
        'id': data.id,
        'admin': data.name,
        'avatar': data.avatar,
        'title': this.title,
        'place': this.place,
        'date': this.date,
        'capacity': this.capacity,
        'description': this.description,
        'time': this.time,
        'type': this.type,
        'players': []
      }
  
      if (data.events == null) {
        data.events = []
      }
  
      let events = [...data.events, newEvents]
  
      let update = {
        'id': data.id,
        'avatar': data.avatar,
        'name': data.name,
        events
      }
      db.collection("users").doc(data.id).update(update)
  
      let globalEvents = await db.collection("allEvents").doc('here').get()
      let res = globalEvents.data()
  
      if (res.events.length == 0) {
        let events = [newEvents]
        db.collection("allEvents").doc('here').update({events})
      } else {
        let events = res.events
        events.push(newEvents)
        db.collection("allEvents").doc('here').update({events})
      }

      this.$router.push('/')

    }
  },
  mounted() {
    this.$store.dispatch('getEvents')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.text-muted-custom {
  opacity: 0.4;
}

.form {
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  overflow: scroll;
  label {
    text-align: left;
    margin-bottom: 0.2em;
    font-size: 0.8rem;
    font-weight: 600;
  }
  input {
    flex-shrink: 0;
    display: block;
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 12px;
    border: 1px solid rgb(213, 213, 213);
    padding-left: 8px;
  }
  button {
    flex-shrink: 0;
    height: 60px;
    border-radius: 12px;
    border: 0;
    color: #fff;
    background: rgb(25,198,55);
    background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  padding-left: 15px;
  padding-right: 15px;
  background: rgb(25,198,55);
  background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
  h1 {
    margin-top: -15px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }
  button {
    margin-top: -20px;
    border: 0;
    background-color: transparent;
    img {
      width: 30px;
    }
  }
}

.form {
  width: 100%;
  background-color: #fff;
  position: relative;
  margin-top: -30px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: 0 -4px 10px 0 rgba(0,0,0,0.3);
}

</style>
