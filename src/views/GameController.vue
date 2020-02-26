<template>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ category }}</pre>
    </b-card>
</template>

<script>
export default {
    name: 'GameController',
    props: ['number', 'category', 'difficulty'],
    created: () => {
        console.log("TEST");
    }
}
</script>

<style scoped>

</style>