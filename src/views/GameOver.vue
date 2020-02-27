<template>
  <div>
    <Result></Result>
  </div>
</template>

<script>
import Result from '../components/Result'

export default {
  name: 'GameOver',
  components: {
    Result
  },
  data() {
    return {
      questions: []
    }
  },
  methods: {
    setAnswerData(ansData) {
      this.answerData = ansData
    }
  },
  created() {
    this.questions = this.$root.$data
    this.$root.$data.state = []
  },
}
</script>

<style scoped>
</style>