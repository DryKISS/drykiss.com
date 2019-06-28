---

heading :
    small : "Marketing nurture application"
    title : "IBM - Pivot"

meta :
    description        : "Pivot - IBM email marketing nurture application - DryKISS"
    twitterDescription : "Pivot - IBM email marketing nurture application - DryKISS"
    image              : "/assets/images/portfolio/ibm/ibm-pivot.jpg?v=1.00"
    subject            : "IBM - Pivot"
    title              : "Pivot - IBM email marketing nurture application - DryKISS"
    type               : "article"

caption   : "<h3>IBM Pivot</h3><p>Email nurturing application</p>"
category  : Site
comment   : false
date      : 2014-10-30
excerpt   : ""
image     : "/assets/images/portfolio/ibm/ibm-pivot.jpg?v=1.00"
lang      : en
modified  : 2014-10-30
published : true
tags      : [ Site ]

---

-# http://fentonbutcher.co.uk/news/
-# https://www.linkedin.com/in/leila-d-angelo-31719816

-# Variable
- path  = "portfolio/ibm/ibm-"
- title = current_page.data.heading.title

-# Bootstrap row
.row

    -# Bootstrap column
    .col-md-4

        -# Image - portfolio thumbnail
        = codeBlender "image", "atom",
            { alt:        "#{ title } - pivot",
              extraClass: "img-thumbnail img-responsive",
              src:        "#{ path }pivot.jpg" }

%hr

-# Bootstrap row
.row

    -# Bootstrap column
    .col-md-4

        -# Heading
        = codeBlender "heading", "molecule", { tag: "h4", text: "What we did" }

        :markdown

            **Dates**

            * Oct 2014 - Oct 2015

            **Links**

            * [IBM iX London Studio Video](https://www.youtube.com/watch?v=2wN-vgbFnoc)
            * [IBM Studios](http://studios.ibm.com/)
            * [IBM London](https://www-03.ibm.com/press/uk/en/pressrelease/46148.wss)

            **Tasks**

            * Accessibility
            * SEO
            * UX
            * Responsive development
            * Deployment
            * Analytics

            **Project Duration**

            * 1 year

            **Outcome**

            * Highest NPS score of any IBM Studios product.
            * MVP delivered 6 months.
            * Rolled out globally.

            **Team**

            * [Ian Warner](linkedin.com/in/iwarner) - Lead Developer
            * [Guillermo Noain Molina](https://www.linkedin.com/in/gnoain) - Node
            * [Matthew Parish](https://www.linkedin.com/in/mattjparish) - AngularJS
            * [Fenton Butcher](https://www.linkedin.com/in/fentonbutcher) - UX
            * [Leila d'Angelo](https://www.linkedin.com/in/leila-d-angelo-31719816) - Content
            * [Patrick Odey](https://www.linkedin.com/in/patrick-odey-7a9a891) - Product owner
            * [Krishna Chodipilli](https://www.linkedin.com/in/krishnachodipilli) - Scrum master

            **Technologies**

            * Scrum
            * Middleman
            * AngularJS
            * HAML
            * CoffeeScript
            * Sass
            * BlueMix
            * NodeJS
            * CloudAnt
            * Cordova
            * Protractor
            * Karma
            * Prototyping

    -# Bootstrap column
    .col-md-8

        -# Heading
        = codeBlender "heading", "molecule", { tag: "h4", text: "Description" }

        -# Content
        :markdown

            Lead developer in a cross­-functional scrum team. Responsible for
            developing a hybrid iPad application for sales enablement, and an
            internal application aimed at improving the conversion rate of the
            sales funnel by identifying nurture opportunities.

        -# Vimeo video
        %iframe{ src:                   "https://player.vimeo.com/video/133353787?title=0&byline=0&portrait=0",
                 width:                 "750",
                 height:                "422",
                 frameborder:           "0",
                 webkitallowfullscreen: true,
                 mozallowfullscreen:    true,
                 allowfullscreen:       true }
