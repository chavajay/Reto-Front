<script setup>
import { useTodo } from "../store/useTodo";
const store = useTodo();
console.log(store.TodoList.map(item => console.log(item)))


</script>

<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 100%">
      <q-card class="my-card" bordered>
        <q-card-section class="flex justify-between" horizontal>
          <q-card-section class="q-pt-xs">
            <div
              class="text-overline"
              v-for="todo in store.TodoList"
              :key="`todo-item${todo.id}`"
            >
              {{ todo.version }}
            </div>
            <div 
                class="text-h7 text-sky-600 q-mt-sm q-mb-xs"
                v-for="todo in store.TodoList"
                :key="`todo-item${todo.id}`"
                >
                {{ todo.title }}
            </div>
            <div 
                class="text-caption text-grey"
                v-for="todo in store.TodoList"
                :key="`todo-item${todo.id}`"
                >
              {{ todo.date }}
            </div>
          </q-card-section>

          <q-card-actions vertical class="justify-center q-px-md">
            <q-btn flat round color="blue" icon="cloud_download" />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
