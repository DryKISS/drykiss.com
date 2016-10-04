##
# Middleman Configuration File
#
# @author   Ian Warner <ian.warner@drykiss.com>
# @category configuration
# @see      http://middlemanapp.com/
##

# ENV[ 'WEBPACK_ENV' ] ||= ( build? ? 'build' : 'development' )

# External pipeline - Webpack
activate :external_pipeline,
    name:    :webpack,
    command: build? ?
        "./node_modules/webpack/bin/webpack.js --bail -p" :
        "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
    source:  ".tmp/dist",
    latency: 1

# Variables
set :partials_dir, "partial/_codeBlender"
set :layout_dir,   "_codeBlender/"
set :layout,       "_codeBlender/fullWidth"
set :debug_assets, true
set :haml,         { ugly: true, format: :html5 }

# Assets
set :css_dir,      "assets/stylesheets"
set :js_dir,       "assets/javascripts"
set :images_dir,   "assets/images"

# @see https://github.com/twbs/bootstrap-sass#number-precision
::Sass::Script::Value::Number.precision = [ 8, ::Sass::Script::Value::Number.precision ].max

# Markdown engine and options
# auto_ids, footnote_nr, entity_output, toc_levels, smart_quotes, kramdown_default_lang, input, hard_wrap
# @see http://kramdown.gettalong.org/options.html
set :markdown_engine, :kramdown
set :markdown, toc_levels: "2", auto_id_prefix: "#"

# Time zone
Time.zone = "Europe/London"

# I18n
# @see https://middlemanapp.com/advanced/localization/
# @see http://www.rubydoc.info/github/svenfuchs/i18n/I18n
activate :i18n, :mount_at_root => :en

# Per-page layout changes
page '/*.xml',       layout: false
page '/*.json',      layout: false
page '/*.txt',       layout: false
page "atom.xml",     layout: false
page "channel.html", layout: false
page "config.xml",   layout: false
page "feed.xml",     layout: false
page "runner.html",  layout: false
page "sitemap.xml",  layout: false

# Remove 404 from directory indexes
page "/404.html", :directory_index => false

# Middleman Deploy
# @see https://github.com/middleman-contrib/middleman-deploy
activate :deploy do | deploy |
    deploy.deploy_method = :git
    deploy.remote        = 'git@github.com:DryKISS/drykiss.com.git'
    deploy.build_before  = false
end

# Portfolio blog collection
# @see https://elenichappen.svbtle.com/getting-tags-to-work-with-middlemans-blog-gem
activate :blog do | blog |

    blog.name              = "portfolio"
    blog.prefix            = "portfolio"
    blog.default_extension = ".haml"

    blog.permalink         = "{title}.html"
    blog.sources           = ":title.html"

    blog.layout            = "_codeBlender/portfolio"
    blog.summary_separator = /(READMORE)/
    blog.summary_length    = 250

    blog.calendar_template = "blog-calendar.html"
    blog.year_link         = "/calendar/:year.html"
    blog.month_link        = "/calendar/:year/:month.html"
    blog.day_link          = "/calendar/:year/:month/:day.html"

    blog.tag_template      = "blog-tag.html"
    blog.taglink           = "/tag/:tag.html"

    blog.paginate          = true
    blog.per_page          = 5
    blog.page_link         = "page/{num}"

end

# Build-specific configuration
configure :build do

    # Asset hash
    activate :asset_hash, :ignore => [/facebookShare.png/]

    # GZIP Files
    # @see https://middlemanapp.com/advanced/file_size_optimization/
    activate :gzip

    # Use relative URLs
    activate :relative_assets

    # For example, change the Compass output style for deployment
    # activate :minify_css, inline: true

    # Minimise JavaScript on build
    # @see https://github.com/crtvhd/middleboy
    # activate :minify_javascript
    # activate :minify_javascript, inline: true, compressor: Uglifier.new( mangle: false, comments: :none )

    # Minimise HTML
    # https://github.com/middleman/middleman-minify-html
    activate :minify_html

    # Favicon
    # activate :favicon_maker, icons: {
    #     "favicon_base.png" => [
    #         { icon: "favicon.png", size: "32x32" },
    #         { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
    #     ]
    # }

    # Auto-generate multiple favicon versions
    activate :favicon_maker do | icon |

        # Template
        icon.template_dir = File.join( root, 'source/assets/images/favicon/' )
        icon.output_dir   = File.join( root, 'build/assets/images/favicon' )

        # Icon
        icon.icons = {

            # High resolution icon
            "favicon_template_hires.png" => [
                { icon: "favicon-152x152.png" },
                { icon: "favicon-120x120.png" },
                { icon: "favicon-76x76.png"   },
                { icon: "favicon-60x60.png"   },
                { icon: "favicon-32x32.png"   },
                { icon: "favicon-16x16.png"   },
                { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" }
            ]
        }

    end

end
