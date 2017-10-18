const path = require('path');
const DIST_DIR = path.join(__dirname, 'dist');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "client.js",
        path: DIST_DIR,
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