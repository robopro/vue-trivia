<template>
  <div>
    <b-card no-body class="result-card rounded-0">
      <QuizQuestionBody :questionData="question.questionData"></QuizQuestionBody>
      <b-card-body class="pt-0 text-left">
        <hr class="mt-0">
        <b-card-text 
          class="px-2" 
          v-html="question.questionData.correct_answer"
        >
        </b-card-text>
        <b-card-text 
          class="px-2" 
          :class="{ 'custom-success': question.correct, 'custom-danger': !question.correct }"
          v-html="question.userAnswer"
        >
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import QuizQuestionBody from './QuizQuestionBody'

export default {
  name: 'Result',
  props: {
    question: {
      required: true,
      type: Object
    }
  },
  components: {
    QuizQuestionBody
  }
}
</script>

<style scoped>
.result-card >>> .card-header {
  border-radius: 0;
}
</style>