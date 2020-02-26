<template>
  <div>
    <b-card-title>{{question.questionData.category}}</b-card-title>
    <b-card-sub-title>{{question.questionData.difficulty}}</b-card-sub-title>
    <b-card-text>{{question.questionData.question}}</b-card-text>
    <hr>
    <b-form @submit="onSubmit">
      <b-form-group
        id="quiz-question-answers"
        label="Select an answer:"
        class="text-left"
      >
        <b-form-radio 
          v-for="(ans, index) of question.answers" 
          :key="index" 
          v-model="answer" 
          :value="ans"
        >
          {{ans}}
        </b-form-radio>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <h1>{{question.questionData.correct_answer}}</h1>
  </div>
</template>

<script>
export default {
  name: 'QuizQuestion',
  props: {
    question: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      answer: null
    }
  },
  created() {
    this.question.answers = this.shuffleArray(this.question.answers)
  },
  methods: {
    shuffleArray(arr) {
      return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
    },
    onSubmit(evt) {
      evt.preventDefault()
      if (this.answer) {
        this.$emit('answer-submitted', this.answer)
        this.answer = null
      }
    }
  }
}
</script>

<style scoped>
.card-subtitle:first-letter {
  text-transform: capitalize;
}
</style>