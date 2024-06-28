const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CopyWebpackPlugin=require('copy-webpack-plugin');

module.exports = {
  mode:'production',  
  entry:{
    filename:'./src/index.tsx',
    content:'./src/content.ts',
    background:'./src/background.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use:{
            loader:'babel-loader',
            options:{
                presets:[
                    '@babel/preset-env',
                    ['@babel/preset-react',{"runtime":"automatic"}],
                     "@babel/preset-typescript"
                    
                    
                ],
            },
            
        },
        
      },
     {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
     },
     {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            // make all svg images to work in IE
            iesafe: true,
          },
        },
      },
     
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
        template:'./public/index.html',
        filename:'popup.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
        patterns:[
            {
                from:'public',to:'.'
            },
        ]
    })
  ]
};