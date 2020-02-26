<template>
  <div class="col-sm-12 col-md-6">
    <b-card
      :title="question.questionData.category"
      :sub-title="question.questionData.difficulty"
    >
      <b-card-text>{{question.questionData.question}}</b-card-text>
    </b-card>
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
  methods: {
    shuffleArray(arr) {
      return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
    }
  }
}
</script>

<style scoped>

</style>