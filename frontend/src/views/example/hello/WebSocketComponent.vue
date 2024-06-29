<template>
  <div>
    <button @click="connect">Connect</button>
    <button @click="sendMessage">Send Message</button>
    <button @click="disconnect">Disconnect</button>
    <div v-if="connected">Connected: {{ sessionId }}</div>
    <div v-if="message">Received: {{ message }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const socket = ref(null);
const connected = ref(false);
const sessionId = ref('');
const message = ref('');

function connect() {
  socket.value = new WebSocket("ws://localhost:8967/ws");
  socket.value.onopen = () => {
    connected.value = true;
    sessionId.value = socket.value.protocol; // 可以用其他方法获取 sessionId
    console.log("Connected");
  };
  socket.value.onmessage = (event) => {
    message.value = event.data;
    console.log("Received: " + event.data);
  };
  socket.value.onclose = () => {
    connected.value = false;
    sessionId.value = '';
    console.log("Disconnected");
  };
}

function sendMessage() {
  if (socket.value && socket.value.readyState === WebSocket.OPEN) {
    socket.value.send("Hello, WebSocket!");
  }
}

function disconnect() {
  if (socket.value) {
    socket.value.close();
  }
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
