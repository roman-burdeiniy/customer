module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'core.js',
    },
    externals:  [
        {
            "React": 'React',
            "react": 'React',
            "react-dom": "ReactDOM",
            "ReactDOM": 'ReactDOM',
            "TweenLite": "TweenLite",
        }
    ],
    devtool: 'source-map',
};