<template>
  <div id="nav">
    
  </div>
</template>

<script>
// import fb from "firebase"
// import "../../firebase"
// import "firebase/auth"
import { db } from '../../firebase'

export default {
  name: 'CreateEvent',
  async mounted() {
    let data = await this.$store.state 

    let newEvents = {
        'id': data.id,
        'admin': data.name,
        'avatar': data.avatar,
        'title': 'Shte se razmajem',
        'place': 'Stara Zagora, aqzmoto',
        'capacity': 15,
        'description': 'lorem na aqzmoto v stzto basi qkoto shte e',
        'time': '10:88',
        'type': 'running',
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
