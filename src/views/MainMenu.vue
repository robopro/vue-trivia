<template>
<div>
  <b-card-header class="custom-info text-white font-weight-bold">New Game</b-card-header>
  <b-card-body class="h-100">
    <GameForm @form-submitted="onFormSubmit"></GameForm>
  </b-card-body>
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
      const query = data
      query.difficulty = query.difficulty.toLowerCase()
      this.$router.push({ name: 'quiz', query: query })
    }
  }
}
</script>

<style scoped>
</style>