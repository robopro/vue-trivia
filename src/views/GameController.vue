<template>
  <div>
    <LoadingIcon v-if="loading"></LoadingIcon>
    <div id="current-question-container" class="d-flex justify-content-center" v-if="!loading">
      <QuizQuestion v-bind:question="currentQuestion" @answer-submitted="onAnswerSubmit"></QuizQuestion>
    </div>
  </div>
</template>

<script>
import EventBus from '../eventBus'
import ShuffleMixin from '../mixins/shuffleMixin'
import QuizQuestion from '../components/QuizQuestion'
import LoadingIcon from '../components/LoadingIcon'
import axios from 'axios'

export default {
  name: 'GameController',
  mixins: [ShuffleMixin],
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
    const url = `https://opentdb.com/api.php?amount=${this.number}&category=${this.category}&difficulty=${this.difficulty}&type=multiple`
    axios.get(url)
      .then(resp => resp.data)
      .then(resp => {
        if (resp.response_code === 0) {
          this.setData(resp)
        } else {
          EventBus.$emit('alert-error', 'Bad game settings. Try another combination.')
          this.$router.replace({ name: 'home' })
        }
      })
  },
  methods: {
    setData(resp) {
      resp.results.forEach(qst => {
        const answers = this.shuffleArray([qst.correct_answer, ...qst.incorrect_answers])
        const question = {
          questionData: qst,
          answers: answers,
          userAnswer: null,
          correct: null
        }
        this.questions.push(question)
      })
      this.$root.$data.state = this.questions
      this.currentQuestion = this.questions[0]
      this.loading = false
    },
    onAnswerSubmit(answer) {
      if (this.currentQuestion.questionData.correct_answer === answer) {
        this.currentQuestion.correct = true
      } else {
        this.currentQuestion.correct = false
      }
      this.currentQuestion.userAnswer = answer
      this.nextQuestion()
    },
    nextQuestion() {
      let unansweredQuestions = this.questions.filter(q => !q.userAnswer)
      if (unansweredQuestions.length > 0) {
        this.currentQuestion = unansweredQuestions[0]
      } else {
        this.$router.replace({ name: 'result' })
      }
    }
  }
}
</script>

<style scoped>
</style>