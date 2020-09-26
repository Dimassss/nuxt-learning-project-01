<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="font-weight-bold text-h4">Часто задаваемые вопросы</h2>
      </v-col>
      <v-col cols="12">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(q,i) in questions"
            :key="i"
          >
            <v-expansion-panel-header>{{q.title}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{q.text}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" class="mt-8">
        <h2 class="font-weight-bold text-h5">Если у вас остались вопросы или вы нашли ошибку</h2>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-textarea
              outlined
              name="user-question"
              label="Сообщение"
              :value="userQuestion"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn class="uppercase" color="primary">Отправить</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      userQuestion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eaque ipsum odit optio quis rem?',
      questions: Array.apply(null, Array(5)).map(() => ({
        title: 'Здесь будет написан вопрос?',
        text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
      }))
    };
  }
};
</script>
