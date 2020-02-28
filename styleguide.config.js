module.exports = {
	// set your styleguidist configuration here
	title: 'Vue Trivia Docs',
	// defaultExample: true,
	sections: [
    {
      name: 'Introduction',
      content: 'README.md'
    },
    {
      name: 'Components',
      components: ['src/components/[A-Z]*.vue', 'src/views/[A-Z]*.vue']
    }
  ],
  styleguideDir: 'docs',
	// webpackConfig: {
	//   // custom config goes here
	// },
	exampleMode: 'expand'
}
