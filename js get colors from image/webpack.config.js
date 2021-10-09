const HtmlWebpackPlugin=require("html-webpack-plugin")
const MiniCssExtractPlugin=require("mini-css-extract-plugin")
const path=require("path")


module.exports={
    mode: "development",
    entry: {
        index:path.resolve(__dirname,"src","main.js")
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[contenthash].bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.(sa|sc|c)ss$/i,
                //use:["style-loader","css-loader","sass-loader"]
                use: [MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"src","index.html")
        }),
        new MiniCssExtractPlugin()
    ]
}
