<template>
<div>
  <b-card-header class="custom-info text-white font-weight-bold">New Game</b-card-header>
  <b-card-body class="h-100">
    <GameForm @form-submitted="handleFormSubmitted"></GameForm>
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
    /** Triggered by custom 'form-submitted' event from GameForm child component. 
     * Parses formData, and route pushes to 'quiz' with formData as query
     * @public
     */
    handleFormSubmitted(formData) {
      const query = formData
      query.difficulty = query.difficulty.toLowerCase()
      this.$router.push({ name: 'quiz', query: query })
    }
  }
}
</script>

<docs>
Root view. Contains GameForm component - for user to set game options. Routes to GameController view on form submit.
</docs>