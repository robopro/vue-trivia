<template>
  <div>
    <h1>Please set your game options</h1>
    <GameForm @form-submitted="onFormSubmit"></GameForm>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import GameForm from '../components/GameForm'
export default {
  name: 'MainMenu',
  components: {
    GameForm
  },
  data() {
    return {
      form: {
        number: '',
        category: null,
        difficulty: null
      }
    }
  },
  methods: {
    onFormSubmit(data) {
      console.log("handle emitting")
      this.form = data
    }
  }
}
</script>

<style scoped>

</style>