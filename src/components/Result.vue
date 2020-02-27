<template>
  <div class="result-container text-left">
    <b-card no-body class="rounded-0">
      <b-card-header :class="variant" class="d-flex justify-content-between border-bottom-0">
        <div>{{ question.questionData.category }}</div>
        <div class="text-capitalize">{{ question.questionData.difficulty }}</div>
      </b-card-header>

      <b-card-body>
        <b-card-text class="font-weight-bold" v-html="question.questionData.question"></b-card-text>
        <b-card-text class="px-2" v-html="question.questionData.correct_answer"></b-card-text>
        <b-card-text class="px-2" :class="{ 'custom-success': question.correct, 'custom-danger': !question.correct }"
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
  },
  data() {
    return {
      variants: { easy: 'custom-success', medium: 'custom-warning', hard: 'custom-danger', default: 'custom-info' },
      variant: 'custom-info'
    }
  },
  created() {
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