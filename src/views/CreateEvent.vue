<template>
  <div class="d-flex flex-column h-100">
      <div class="header">
        <button @click="$router.push('/')">
            <img src="../assets/back.svg" alt="">
        </button>
        <h1>Нова игра</h1>
      </div>
      <div class="form flex-grow-1 d-flex flex-column">
        <input type="text" class="form-control" v-model="title" placeholder="Заглавие">
        <input type="text" class="form-control" v-model="place" placeholder="Място">
        <input type="number" class="form-control" v-model="capacity" placeholder="За колко играчи">
        <input type="date" class="form-control" v-model="date" placeholder="Кога">
        <input type="time" class="form-control" v-model="time" placeholder="Час">
        <input type="text" class="form-control" v-model="type" placeholder="Вид игра">
        <input type="text" class="form-control" v-model="description" placeholder="Описание">
        <button @click="create" class="mt-auto mb-4">Създай</button>
      </div>
  </div>
</template>

<script>
import { db } from '../../firebase'

export default {
  name: 'CreateEvent',
  data() {
    return {
      title: '',
      place: '',
      capacity: null,
      date: null,
      time: null,
      type: '',
      description: '',
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

.form {
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  input {
    display: block;
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 12px;
    border: 1px solid rgb(213, 213, 213);
    padding-left: 8px;
  }
  button {
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
