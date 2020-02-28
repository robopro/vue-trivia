<template>
  <div class="h-100">
      <b-card-header class="custom-info text-white font-weight-bold">Your Score: {{ score }} / {{ maxScore }}</b-card-header>
    <Result v-for="(question, index) of questions" :key="index" :question="question"></Result>
  </div>
</template>

<script>
import Result from '../components/Result'

export default {
  name: 'GameOver',
  components: {
    Result
  },
  data() {
    return {
      questions: [],
      score: 0,
      maxScore: 0
    }
  },
  methods: {
    setScore() {
      this.maxScore = this.questions.length * 10
      this.score = this.questions.filter(q => q.correct).length * 10
    }
  },
  created() {
    this.questions = this.$root.$data.state || []
    this.$root.$data.state = []
    this.setScore()
  },
}
</script>

<style scoped>
</style>