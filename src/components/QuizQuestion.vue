<template>
  <div>
    <b-card-header :class="variant" class="d-flex justify-content-between border-bottom-0">
      <div>{{ question.questionData.category }}</div>
      <div class="text-capitalize">{{ question.questionData.difficulty }}</div>
    </b-card-header>
    <b-card-body>
      <b-card-text class="font-weight-bold" v-html="question.questionData.question"></b-card-text>
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
            <div v-html="ans"></div>
          </b-form-radio>
        </b-form-group>

        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>
    </b-card-body>
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
      answer: null,
      variants: { easy: 'bg-success', medium: 'bg-warning', hard: 'bg-danger', default: 'bg-info' },
      variant: 'bg-info'
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      if (this.answer) {
        this.$emit('answer-submitted', this.answer)
        this.answer = null
      }
    }
  },
  beforeUpdate() {
    switch (this.question.questionData.difficulty) {
      case 'easy':
        this.variant = this.variants.easy
        break
      case 'medium':
        this.variant = this.variants.medium
        break
      case 'hard':
        this.variant = this.variants.hard
        break
      default:
        this.variant = this.variants.default
        break
    }
  }
}
</script>

<style scoped>
</style>