<template>
  <div>
    <LoadingIcon v-if="loading"></LoadingIcon>

    <div v-else>
      <b-form @submit="onSubmit">
        <b-form-group 
          id="input-group-number-of-questions"
          label="Select a number"
          label-for="input-number-of-questions"
          class="text-left"
        >
          <b-form-input
            id="input-number-of-questions"
            v-model="form.number"
            type="number"
            :min="minQuestions"
            :max="maxQuestions"
            required 
            :placeholder="`Between ${minQuestions} and ${maxQuestions}`"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-category">
          <b-form-select
            id="input-category"
            v-model="form.category"
            :options="categories"
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-difficulty">
          <b-form-select
            id="input-difficulty"
            v-model="form.difficulty"
            :options="difficulties"
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-type">
          <b-form-select
            id="input-type"
            v-model="form.type"
            :options="types"
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" class="custom-success">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import LoadingIcon from './LoadingIcon'
import axios from 'axios'

export default {
  components: {
    LoadingIcon
  },
  data() {
    return {
      /** Form data, tied to respective inputs */
      // 
      form: {
        number: '',
        category: '',
        difficulty: '',
        type: ''
      },
      // Used for form dropdowns and number input
      categories: [{ text: 'Category', value: '' }],
      difficulties: [{ text: 'Difficulty', value: '' }, 'Easy', 'Medium', 'Hard'],
      types: [
        { text: 'Type', value: '' }, 
        { text: 'Multiple Choice', value: 'multiple' }, 
        { text: 'True or False', value: 'boolean'}
      ],
      minQuestions: 10,
      maxQuestions: 20,
      // Used for displaying ajax loading animation OR form
      loading: true
    }
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    /** Invoked on created(). 
     * Fetches question categories from Open Trivia Database API. 
     * Needed for category dropdown in form.
     * @public
     */
    fetchCategories() {
      axios.get('https://opentdb.com/api_category.php')
      .then(resp => resp.data)
      .then(resp => {
        resp.trivia_categories.forEach(category => {
          this.categories.push({text: category.name, value: `${category.id}`})
        });
        this.loading = false;
      })
    },
    onSubmit(evt) {
      evt.preventDefault()
       /** Triggered on form submit. Passes form data
        * @event form-submitted
        * @type {number|string}
        * @property {object}
        */
      this.$emit('form-submitted', this.form)
    }
  }
}
</script>

<docs>
Child of MainMenu view. Handles form input for game settings, and emits to parent (MainMenu).
</docs>