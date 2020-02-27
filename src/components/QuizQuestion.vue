<template>
  <div>
    <b-card-header class="d-flex justify-content-between border-bottom-0">
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
  }
}
</script>

<style scoped>
</style>