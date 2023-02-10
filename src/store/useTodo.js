import { defineStore } from "pinia";

export const useTodo = defineStore("todo", {
  state: () => ({
    TodoList: [
      {
        id: 0,
        version: "VERSION 1",
        title: "Titulo del archivo a subir 2.pdf",
        date: "Documento / PDF (3.8) 28 dic 2018 / 14:45",
      },
    ],
  }),

  getters: {
    versionTodo: (state) => state.TodoList.map((todo) => todo.version),
    titleTodo: (state) => state.TodoList.map((todo) => todo.title),
    dateTodo: (state) => state.TodoList.map((todo) => todo.date),
  },
});
