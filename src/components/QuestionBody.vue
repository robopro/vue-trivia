<template>
  <div>
    <b-card-header :class="variant" class="d-flex justify-content-between border-bottom-0">
      <div>{{ questionData.category }}</div>
      <div class="text-capitalize">{{ questionData.difficulty }}</div>
    </b-card-header>
    <b-card-body>
      <b-card-text class="font-weight-bold" v-html="questionData.question"></b-card-text>
    </b-card-body>
  </div>
</template>

<script>
export default {
  name: 'QuestionBody',
  props: {
    /** Object containing question data as given by API. */
    questionData: {
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
  methods: {
    /** Invoked on mounted().
     * Sets background color of card header based on question difficulty.
     * @public
     */
    setVariant() {
      switch (this.questionData.difficulty) {
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
  },
  mounted() {
    this.setVariant()
  }
}
</script>

<docs>
Simple component displaying question category, difficulty and question text. 
Used on both Question component and Answer component.
</docs>