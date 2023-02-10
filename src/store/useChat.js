import { defineStore } from "pinia";

export const useChat = defineStore("chat", {
  state: () => ({
    ChatList: [
      {
        id: 0,
        title: "Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión",
        date: "28 dic 2018 / 14:45",
      },
    ],
  }),

  getters: {
    titleChat: (state) => state.ChatList.map((chat) => chat.title),
    dateChat: (state) => state.ChatList.map((chat) => chat.date),
  },
});