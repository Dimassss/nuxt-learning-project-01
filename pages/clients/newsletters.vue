<template>
	<v-row>
		<v-col>
			<v-data-table
					:headers="headers"
					:items="newsletters"
					:items-per-page="5"
					class="elevation-1"
			>
				<template v-slot:item.action>
					<v-btn small outlined color="cyan">
						<v-icon left small>mdi-pencil</v-icon>
            Изменить
					</v-btn>
					<v-btn color="indigo" small dark class="my-2 ml-2">
						Отправить
					</v-btn>
				</template>
			</v-data-table>
		</v-col>
	</v-row>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data () {
    return {
      headers: [
        {
          text: 'Название',
          value: 'name',
        },
        {
          text: '',
	        align: 'right',
          value: 'action',
        },
      ]
    }
  },
  computed: {
    ...mapState({
      newsletters: state => state.tables.newslatters
    })
  }
}
</script>
