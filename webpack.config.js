module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/, //says fi;e ends in .js
                loader: 'babel-loader',
                options: {
                  presets: ['@babel-preset-react']
                }
            }
        ]
    }
}