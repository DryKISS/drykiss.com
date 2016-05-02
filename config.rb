##
# Middleman Configuration File
#
# @author Ian Warner <ian.warner@drykiss.com>
##

# Variables
set :partials_dir,   "partial/_codeBlender"
set :layout_dir,     "_codeBlender/"
set :layout,         "_codeBlender/fullWidth"
set :debug_assets,   true
# set :relative_links,   true
# set :strip_index_file, false
set :syntaxScheme,   "ThankfulEyes"
set :haml,           { ugly: true, format: :html5 }
set :css_dir,        "assets/stylesheets"
set :js_dir,         "assets/javascripts"
set :images_dir,     "assets/images"

# @see https://github.com/twbs/bootstrap-sass#number-precision
::Sass::Script::Value::Number.precision = [ 8, ::Sass::Script::Value::Number.precision ].max

# Markdown engine and options
# auto_ids, footnote_nr, entity_output, toc_levels, smart_quotes, kramdown_default_lang, input, hard_wrap
# @see http://kramdown.gettalong.org/options.html
set :markdown_engine, :kramdown
set :markdown, toc_levels: "2", auto_id_prefix: "#"

# Syntax Highlighting
activate :syntax

# Time zone
Time.zone = "Europe/London"

# I18n
# @see https://middlemanapp.com/advanced/localization/
# @see http://www.rubydoc.info/github/svenfuchs/i18n/I18n
activate :i18n, :mount_at_root => :en

# Live reload
# activate :livereload

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

# Sprockets
activate :sprockets

sprockets.append_path File.join root, "bower_components"
sprockets.append_path File.join root, "source/partial/_codeBlender/atom"
sprockets.append_path File.join root, "source/partial/_codeBlender/molecule"
sprockets.append_path File.join root, "source/partial/_codeBlender/organism"
sprockets.append_path File.join( root, "source/partial/_codeBlender/template" )

# Portfolio blog collection
# Template files cannot be within a folder path with a _ i.e. _codeBlender/template
# @see https://elenichappen.svbtle.com/getting-tags-to-work-with-middlemans-blog-gem
activate :blog do | blog |

    blog.name              = "portfolio"
    blog.prefix            = "portfolio"
    blog.default_extension = ".md"

    blog.permalink         = "{title}.html"
    blog.sources           = ":title.html"

    blog.layout            = "portfolio.template"
    # blog.layout            = "partial/_library/template/portfolio/portfolio.template"

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

    # Subcategory collections
    blog.custom_collections = {
        category: {
            link:     "/categories/{category}.html",
            template: "partial/codeBlender/template/blog-tag.html"
        }
    }

end

# Middleman Deploy
# @see https://github.com/middleman-contrib/middleman-deploy
activate :deploy do | deploy |
    deploy.deploy_method = :git
end

# Build-specific configuration
configure :build do

    # Use relative URLs
    activate :relative_assets

    # GZIP Files
    # activate :gzip

    # For example, change the Compass output style for deployment
    activate :minify_css

    # Minify Javascript on build
    activate :minify_javascript

    # Minify HTML
    activate :minify_html

    # Favicon
    activate :favicon_maker, icons: {
        "favicon_template.png" => [
            { icon: "favicon.png", size: "32x32" },
            { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
        ]
    }

end