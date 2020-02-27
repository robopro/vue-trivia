<template>
  <div>
    <h1>New Game</h1>
    <GameForm @form-submitted="onFormSubmit"></GameForm>
  </div>
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
      const params = data
      params.difficulty = params.difficulty.toLowerCase()
      this.$router.push({ name: 'quiz', params: params })
    }
  }
}
</script>

<style scoped>
</style>