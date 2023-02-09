<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 100%">
      <div>
        <NavBar />
        <Chat />
        <SendMessage />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Chat from "./components/Chat.vue";
import CardUp from "./components/CardUp.vue";
import SendMessage from "./components/SendMessage.vue";

export default {
  components: {
    NavBar,
    Chat,
    SendMessage,
    CardUp,
  },
};
</script>
