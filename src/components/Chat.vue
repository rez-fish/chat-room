<template>
  <div class="chat container">
    <h2 class="center green-text">Chat Room</h2>
    <div class="card black">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li class="left-align" v-for="message in messages" :key="message.id">
            <span class="green-text">{{ message.name }}: </span>
            <span class="white-text text-darken-3">{{ message.content }}</span>
            <span class="white-text time">{{ message.time }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '../components/NewMessage'
import db from '../firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage,
  },
  data() {
    return {
      messages: [],
    }
  },
  created() {
    let ref = db.collection('messages').orderBy('time')

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == 'added') {
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            time: moment(doc.data().time).format('LT'),
          })
        }
      })
    })
  },
}
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}

.chat span {
  font-size: 1.4em;
}

.chat .time {
  display: block;
  font-size: 1.2em;
}

.messages {
  max-height: 300px;
  overflow: auto;
}

.messages {
  scrollbar-color: red yellow;
}

.messages::-webkit-scrollbar {
  width: 2px;
  height: 5px;
}
.messages {
  scrollbar-width: thin;
  scrollbar-color: black black;
}
.messages::-webkit-scrollbar-track {
  background: black;
}
.messages::-webkit-scrollbar-thumb {
  background-color: green;
  border-radius: 5px;
  border: 1px solid green;
}
</style>
