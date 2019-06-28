---
heading :
  small : "Excuse generator"
title : "Deliveroo"

meta :
  author      : "Ian Warner"
  description : "Deliveroo - Excuse generator"
  image       : "http://drykiss.com/assets/images/portfolio/deliveroo/deliveroo-excuse-home.png"
  subject     : "Deliveroo - Excuse generator"
  title       : "Deliveroo - Excuse generator"
  type        : "article"

caption   : "<h3>Deliveroo</h3><p>Excuse-Generator</p>"
category  : Site
comment   : false
date      : 2016-10-24
image     : "portfolio/deliveroo/deliveroo-excuse-home.png"
lang      : en
modified  : 2016-10-24
published : true
tags      : [ site ]
---

-# Variable
- path = "portfolio/deliveroo/"
- title = current_page.data.heading.title

-# Bootstrap row
.row

    -# Bootstrap column
    .col-md-3

        -# Image - portfolio thumbnail
        = codeBlender "image", "atom",
            { alt:        "#{ title } - home",
              extraClass: "img-thumbnail img-responsive",
              src:        "#{ path }deliveroo-excuse-home.png" }

%hr

-# Bootstrap row
.row

    -# Bootstrap column
    .col-md-4

        -# Heading
        = codeBlender "heading", "molecule", { tag: "h4", text: "What we did" }

        :markdown

            **Links**

            * [Deliveroo Excuse generator](http://excuse-generator.com/)

            **Tasks**

            * Marketing application
            * 7 languages
            * Automatic image generation
            * Social sharing
            * Adaptive development
            * Analytics

            **Project Duration**

            * 3 weeks development

            **Outcome**

            * Delivered on time
            * Many change requests handled

            **Team**

            * Ian Warner - Technical lead

    -# Bootstrap column
    .col-md-8

        -# Heading
        = codeBlender "heading", "molecule", { tag: "h4", text: "Description" }

        -# Content
        :markdown

            DryKISS completed what is the most ambitious digital marketing
            build for Deliveroo in it's history.

            They required in a short development window the development of a
            global site for their #AnyExcuse campaign.
