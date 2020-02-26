<template>
  <div id="game-form">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-number-of-questions">
        <b-form-input
          id="input-number-of-questions"
          v-model="form.number"
          type="number"
          min="10"
          max="20"
          required 
          placeholder="Number of questions: 10 to 20"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-category">
        <b-form-select
          id="input-category"
          v-model="form.category"
          :options="categories"
          required 
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-difficulty">
        <b-form-select
          id="input-difficulty"
          v-model="form.difficulty"
          :options="difficulties"
          required 
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        number: '',
        category: null,
        difficulty: null
      },
      categories: [{ text: 'Category', value: null}, 'Science'],
      difficulties: [{ text: 'Difficulty', value: null }, 'Easy', 'Medium', 'Hard'],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$emit('form-submitted', this.form)
      console.log("emitting")
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.number = ''
      this.form.category = null
      this.form.difficulty = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}

</script>

<style>

</style>