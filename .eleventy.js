module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets')
    
    eleventyConfig.addShortcode('timestampxxx', () => {
        return new Date().toISOString()
    },)

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'public'
        }
    }
}
