import { defineStore } from "pinia";

export const useTodo = defineStore("todo", {
  state: () => ({
    TodoList: [
      /*
        {
        id: 0,
        version: "VERSION 1",
        title: "Titulo del archivo a subir 2.pdf",
        date: "Documento / PDF (3.8) 28 dic 2018 / 14:45",
      },
      {
        id: 1,
        version: "VERSION 2",
        title: "Titulo del archivo a subir 2.pdf",
        date: "Documento / PDF (3.8) 30 dic 2018 / 08:22",
      },*/
      {
        text: "",
        sent: false
      }
    ],
  }),

  getters: {
    versionTodo: (state) => state.TodoList.map((todo) => todo.version),
    titleTodo: (state) => state.TodoList.map((todo) => todo.title),
    dateTodo: (state) => state.TodoList.map((todo) => todo.date),
  },
});
