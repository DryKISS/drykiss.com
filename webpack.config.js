/**
 * Webpack
 *
 * @see https://github.com/rossta/rossta.github.com
 */
var webpack           = require( 'webpack' );
var clean             = require( 'clean-webpack-plugin' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {

    entry : {
        body : [
            'source/assets/stylesheets/_all.css.scss',
            'source/assets/javascripts/_body.js.coffee'
        ]
    },

    resolve : {
        root  : __dirname,
        alias : {
            js       : 'source/assets/javascripts',
            lib      : 'source/assets/javascripts/_lib',
            css      : 'source/assets/stylesheets',
            atom     : 'source/partial/_codeBlender/atom',
            molecule : 'source/partial/_codeBlender/molecule',
            organism : 'source/partial/_codeBlender/organism',
            template : 'source/partial/_codeBlender/template'
        }
    },

    output: {
        path     : __dirname + '/.tmp/dist',
        filename : 'assets/javascripts/[name].bundle.js'
    },

    module : {

        loaders : [

            // Coffee
            {
                test    : /.*\.coffee$/,
                exclude : /node_modules|bower_components/,
                loader  : "coffee-loader"
            },

            // SCSS
            {
                test   : /.*\.scss$/,
                loader : ExtractTextPlugin.extract(
                    "style", "css!sass"
                )
            },

            // Load vanilla CSS
            {
                test   : /.*\.css$/,
                loader : "style!css"
            },

            // Woff fonts
            {
                test   : /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader : 'url-loader',
            },

            // TTF, EOT fonts and SVG
            {
                test   : /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader : 'file-loader',
            }

        ]
    },


    node : {
        console : true,
    },

    plugins : [

        new clean( [ '.tmp' ] ),

        new ExtractTextPlugin( 'assets/stylesheets/all.bundle.css' ),

        new webpack.ProvidePlugin( {
            $               : "jquery",
            jQuery          : "jquery",
            "window.jQuery" : "jquery"
        } )

    ]
};
