<template>
    <v-dialog
            persistent
            :value="currentUser"
            max-width="1000px"
    >
        <v-card>
            <v-toolbar color="grey darken-3" dark>
                <v-btn @click="$emit('close')" dark icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Карточка клиента</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn @click="$emit('save-user', currentUser)" dark text>Сохранить</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col cols="4">
                        <v-avatar item size="250px">
                            <v-img :src="currentUser.photo" alt=""/>
                        </v-avatar>
                    </v-col>
                    <v-col cols="4">
                        <v-switch
                                class="ma-4"
                                label="Активность"
                                readonly
                                v-model="currentUser.status"
                        ></v-switch>
                        <v-switch
                                class="ma-4"
                                label="Член клуба"
                                readonly
                                v-model="currentUser.isGymMember"
                        ></v-switch>
                        <p class="subtitle-1">
                            ФИО:
                            <span class="text--primary">{{ currentUser.name }}</span>
                        </p>
                        <p class="subtitle-1">
                            Дата рождения:
                            <span class="text--primary">{{ currentUser.birthday }}</span>
                        </p>
                        <p class="subtitle-1" v-if="currentUser.cardDate">
                            Действие карты:
                            <span class="text--primary">{{ currentUser.cardDate }}</span>
                        </p>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field
                                :value="currentUser.email"
                                class="mt-4"
                                disabled
                                label="Email"
                        ></v-text-field>
                        <v-text-field
                                :value="currentUser.phone"
                                class="mt-4"
                                disabled
                                label="Телефон"
                        ></v-text-field>
                        <v-text-field
                                :value="currentUser.club"
                                class="mt-4"
                                disabled
                                label="Мой клуб"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">История покупок</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['user'],
  data(){
    return {
      currentUser: null
    };
  },
  watch: {
    user(){
      this.currentUser = JSON.parse(JSON.stringify(this.user));
    }
  },
  beforeMount(){
    this.currentUser = JSON.parse(JSON.stringify(this.user));
  }
}
</script>
