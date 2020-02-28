<template>
  <div>
    <QuestionBody :questionData="question.questionData"></QuestionBody>

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
import QuestionBody from './QuestionBody'

export default {
  name: 'Question',
  props: {
    /** Question object containing questionData, possible answers, and user answer information. */
    question: {
      required: true,
      type: Object
    }
  },
  components: {
    QuestionBody
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
        /** Triggered on form submit. Passes user answer.
        * @event answer-submitted
        * @type {number|string}
        * @property {string}
        */
        this.$emit('answer-submitted', this.answer)
        this.answer = null
      }
    } 
  }
}
</script>

<docs>
Component shows question data and form for user to select answer.
Emits custom event and user answer to parent.
Has QuestionBody component as child.
</docs>