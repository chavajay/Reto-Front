<template>
  <div class="q-pa-md row justify-center" >
    <div style="width: 100%; max-width: 100%">
      <div >
        <NavBar />
      </div>
      <div>
        <CardUp/>
      </div>
      <div>
        <Chat />
      </div>
      <div>
        <CardArchivo/>
      </div>
      <div>
        <ChatMessage/>
      </div>
      <div>
        <SendMessage/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Chat from './components/Chat.vue';
import CardUp from './components/CardUp.vue';
import CardArchivo from './components/CardArchivo.vue';
import ChatMessage from './components/ChatMessage.vue';
import SendMessage from './components/SendMessage.vue';

export default {
  components: {
    NavBar,
    Chat,
    CardArchivo,
    ChatMessage,
    SendMessage,
    CardUp
  }
}
</script>