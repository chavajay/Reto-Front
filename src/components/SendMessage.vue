<template>
    <div class="shadow-2xl q-pa-md row justify-center">
        <div style="width: 100%; max-width: 100%">
            <q-input outlined bottom-slots label="Label" counter maxlength="100" >
                <template v-slot:before>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
                </template>

                <template v-slot:append>
                <q-icon class="cursor-pointer" />
                <q-icon name="schedule" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>

                <template v-slot:after>
                <q-btn round dense flat icon="send" />
                </template>
            </q-input>
        </div>
    </div>
</template>