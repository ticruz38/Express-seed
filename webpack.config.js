const path = require('path');

module.exports = {
    entry: './index.ts',
    target: 'node',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'backend.js',
        libraryTarget: "commonjs"
    },
    devtool: 'sourcemap',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        alias: {
            api: path.resolve('./api'),
            login: path.resolve('./login'),
            renderer: path.resolve('./renderer'),
            graph: path.resolve('./graph')
        }
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?|ts$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    }
}