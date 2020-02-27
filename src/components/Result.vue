<template>
  <div class="result-container text-left">
    <b-card no-body class="rounded-0">
      <b-card-header class="d-flex justify-content-between border-bottom-0">
        <div>{{ question.questionData.category }}</div>
        <div class="text-capitalize">{{ question.questionData.difficulty }}</div>
      </b-card-header>

      <b-card-body>
        <b-card-text class="font-weight-bold" v-html="question.questionData.question"></b-card-text>
        <b-card-text class="px-2" v-html="question.questionData.correct_answer"></b-card-text>
        <b-card-text class="px-2" v-bind:class="{ correct: question.correct, wrong: !question.correct }"
          v-html="question.userAnswer"
        >
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    question: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.correct {
  background-color: #d4edda;
}

.wrong {
  background-color: #f8d7da;
}
</style>