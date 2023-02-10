<template>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 100%">
        <q-chat-message
          :text="['Realizado los cambios según feedBack']"
          sent
          text-color="white"
          bg-color="primary"
        >
          <template v-slot:name>Alumno</template>
          <template v-slot:stamp>30 dic 2018 / 08:22</template>
          <template v-slot:avatar>
            <img
              class="q-message-avatar q-message-avatar--sent"
              src="https://cdn.quasar.dev/img/avatar2.jpg"
            >
          </template>
        </q-chat-message>
        <q-chat-message
          bg-color="grey-4"
        >
            <template v-slot:stamp>30 dic 2018 / 15:25</template>
            <template v-slot:name>Francisco</template>
            <template v-slot:avatar>
            <img
              class="q-message-avatar q-message-avatar--received"
              src="https://cdn.quasar.dev/img/avatar4.jpg"
            >
          </template>
            <div>
            Perfecto,exelente trabajo.          
            </div>
        </q-chat-message>
      </div>
    </div>
  </template>
  