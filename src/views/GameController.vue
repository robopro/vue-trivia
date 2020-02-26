<template>
  <div>
    <LoadingIcon v-if="loading"></LoadingIcon>
    <div id="current-question" class="d-flex justify-content-center" v-if="!loading">
      <QuizQuestion v-bind:question="currentQuestion" @answer-submitted="onAnswerSubmit"></QuizQuestion>
    </div>
  </div>
</template>

<script>
import QuizQuestion from '../components/QuizQuestion'
import LoadingIcon from '../components/LoadingIcon'
import axios from 'axios'

export default {
  name: 'GameController',
  props: ['number', 'category', 'difficulty'],
  components: {
    QuizQuestion,
    LoadingIcon
  },
  data() {
    return {
      questions: [],
      currentQuestion: null,
      loading: true
    }
  },
  created() {
    axios.get(`https://opentdb.com/api.php?amount=${this.number}&category=${this.category}&difficulty=${this.difficulty.toLowerCase()}&type=multiple`)
      .then(resp => resp.data)
      .then(resp => {
        resp.results.forEach(q => {
          this.questions.push({
            questionData: q,
            answers: [q.correct_answer, ...q.incorrect_answers],
            correct: null,
            answered: false
          })
        });
        this.currentQuestion = this.questions[0]
        this.loading = false
      })
  },
  methods: {
    onAnswerSubmit(answer) {
      console.log(answer)
      if (this.currentQuestion.questionData.correct_answer === answer) {
        this.currentQuestion.correct = true
      } else {
        this.currentQuestion.correct = false
      }
      this.currentQuestion.answered = true
      const unansweredQuestions = this.questions.filter(q => !q.answered)
      this.currentQuestion = unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)]
    }
  }
}
</script>

<style scoped>
</style>