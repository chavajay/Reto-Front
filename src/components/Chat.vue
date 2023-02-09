<script>

</script>

<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 100%">
      <q-chat-message
        :text="['Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión']"
        text-color="white"
        bg-color="primary"
        sent
      >
        <template v-slot:name>Alumno</template>
        <template v-slot:stamp>28 dic 2018 / 14:45</template>
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--sent"
            src="https://cdn.quasar.dev/img/avatar2.jpg"
          />
        </template>
      </q-chat-message>
      <q-chat-message bg-color="grey-4">
        <template v-slot:stamp>29 dic 2018 / 10:11</template>
        <template v-slot:name>Mary</template>
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--received"
            src="https://cdn.quasar.dev/img/avatar4.jpg"
          />
        </template>
        <div>
          ¡Gran trabajo Silvia! Pero creo que deberias revisar el punto 3.
          Intenta añadir un poco más de contexto y un apartado final de
          conclusiones personales.
        </div>
      </q-chat-message>
    </div>
  </div>
</template>
