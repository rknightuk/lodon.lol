module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets')
    
    eleventyConfig.addShortcode('timestampxxx', () => {
        console.log(new Date().toISOString())
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
