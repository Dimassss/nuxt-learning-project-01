<template>
  <v-container>
    <v-row v-if="user !== null">
      <v-col cols="3" cols-sm="12" class="d-flex align-center justify-center">
        <v-avatar class="elevation-15" size="200px">
  				<v-img src="avatar"/>
  			</v-avatar>
      </v-col>
      <v-col cols="9" cols-sm="12">
        <v-card>
          <v-container>
            <v-row>
              <v-col
                v-for="field in fields"
                cols="4"
                cols-sm="4"
                cols-md="6"
                :key="field.label"
              >
                <v-text-field
                  :label="field.label"
                  :value="field.value"
                  :type="field.type || 'text'"
                  :disabled="!!field.isDisabled"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer/>
            <v-btn color="primary">
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12">Please, sign in</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return {};
  },
  computed: {
    user(){
      return this.$store.state.auth.user
    },
    fields(){
      const user = this.$store.state.auth.user;

      return [
        {
          label: 'Фамилия',
          value: user.lastName
        },
        {
          label: 'Имя',
          value: user.firstName
        },
        {
          label: 'Дата рождения',
          value: user.birthDate,
          isDisabled: true
        },
        {
          label: 'Email',
          value: user.email
        },
        {
          label: 'Телефон',
          value: user.telephone
        },
        {
          label: 'Мой клуб',
          value: user.club,
          isDisabled: true
        }
      ];
    }
  }
}
</script>
