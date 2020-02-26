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
      this.$router.replace({ name: 'quiz', params: data })
    }
  }
}
</script>

<style scoped>
</style>