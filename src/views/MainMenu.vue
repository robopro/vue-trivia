<template>
  <b-card-body>
    <b-card-title>New Game</b-card-title>
    <GameForm @form-submitted="onFormSubmit"></GameForm>
  </b-card-body>
</template>

<script>
import GameForm from '../components/GameForm'
export default {
  name: 'MainMenu',
  components: {
    GameForm
  },
  methods: {
    onFormSubmit(data) {
      const query = data
      query.difficulty = query.difficulty.toLowerCase()
      this.$router.push({ name: 'quiz', query: query })
    }
  }
}
</script>

<style scoped>
</style>