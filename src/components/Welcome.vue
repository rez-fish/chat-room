<template>
  <div class="welcome container">
    <div class="card black">
      <div class="card-content center-align">
        <h2 class="light-green-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name: </label>
          <input
            type="text"
            name="name"
            v-model="name"
            class="black light-green-text"
          />
          <p v-show="feedback" class="pink-text">{{ feedback }}</p>
          <button class="btn light-green">Enter Chat-Room</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null,
    }
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      } else {
        this.feedback = 'You must enter a name to join'
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
  background-color: black;
}

.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px auto;
}
</style>
