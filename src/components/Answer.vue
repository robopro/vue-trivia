<template>
  <div>
    <b-card no-body class="answer-card rounded-0">
      <QuestionBody :questionData="question.questionData"></QuestionBody>
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
import QuestionBody from './QuestionBody'

export default {
  name: 'Answer',
  props: {
    /** Question object containing questionData, possible answers, and user answer information. */
    question: {
      required: true,
      type: Object
    }
  },
  components: {
    QuestionBody
  }
}
</script>

<style scoped>
.answer-card >>> .card-header {
  border-radius: 0;
}
</style>

<docs>
Simple card to display the question data, user answer, and whether the answer was correct or not.
Has QuestionBody child component.
</docs>