<template>
  <div class="h-100">
      <b-card-header class="custom-info text-white font-weight-bold">Your Score: {{ score }} / {{ maxScore }}</b-card-header>
    <Answer v-for="(question, index) of questions" :key="index" :question="question"></Answer>
  </div>
</template>

<script>
import Answer from '../components/Answer'

export default {
  name: 'GameOver',
  components: {
    Answer
  },
  data() {
    return {
      questions: [],
      score: 0,
      maxScore: 0
    }
  },
  methods: {
    /** Invoked on created().
     * Grabs data from $root.$data.state.
     * Empties $root.$data.state => This is done to ensure data is cleared when starting a new game.
     * Invokes setScore().
     * @public
     */
    setQuestions() {
      this.questions = this.$root.$data.state || []
      this.$root.$data.state = []
      this.setScore()
    },
    /** Computes maximum possible score (amount of questions * 10)
     * Computes achieved score (amount of correct answers * 10)
     * @public
     */
    setScore() {
      this.maxScore = this.questions.length * 10
      this.score = this.questions.filter(q => q.correct).length * 10
    }
  },
  created() {
    this.setQuestions();
  }
}
</script>

<docs>
Simple view to show the user the results of the trivia game.
Has Answer child component.
</docs>