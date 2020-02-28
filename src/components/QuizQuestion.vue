<template>
  <div>
    <QuizQuestionBody :questionData="question.questionData"></QuizQuestionBody>

    <b-card-body class="pt-0">
      <hr>
      <b-form @submit="onSubmit">
        <b-form-group
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

        <b-button type="submit" class="custom-success">Submit</b-button>
      </b-form>
    </b-card-body>
  </div>
</template>

<script>
import QuizQuestionBody from './QuizQuestionBody'

export default {
  name: 'QuizQuestion',
  props: {
    question: {
      required: true,
      type: Object
    }
  },
  components: {
    QuizQuestionBody
  },
  data() {
    return {
      answer: null
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