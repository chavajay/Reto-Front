import { defineStore } from "pinia";

export const useData = defineStore("data", {
  state: () => ({
    TodoList: [
      {
        id: 0,
        version: "VERSION 2",
        title: "Titulo del archivo a subir 2.pdf",
        date: "Documento / PDF (4.8) 30 dic 2018 / 08:22",
      },
    ],
  }),

  getters: {
    versionTodo: (state) => state.TodoList.map((data) => data.version),
    titleTodo: (state) => state.TodoList.map((data) => data.title),
    dateTodo: (state) => state.TodoList.map((data) => data.date),
  },
});
