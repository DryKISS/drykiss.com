---
author      : DryKISS
category    : frontend
description : "Middleman"
image       : ""
published   : true
subcategory : middleman
tags        : [middleman]
title       : "Middleman Blogging"
---

[Middleman][]

READMORE

    $ cd ~/Dropbox/www/DryKiss/drykiss.com
    $ bundle exec middleman server
    $ open http://0.0.0.0:4567

## BLOGGING

[Blogging][]

On a current project run

    $ middleman init --template=blog

Create a blog article, with an optional date attribute. It will default to the
current system date if left off.

    $ bundle exec middleman article "TITLE" -d 2013-05-03

## PARTIALS

    = codeBlender 'navbar', 'organism', { :foo => "bar" }

    <%= request.path %>
    <%= current_page.path %>
    <%= current_page.url %>

[Middleman]:http://middlemanapp.com/ "Middleman"
[Blogging]:http://middlemanapp.com/blogging/ "Middleman Blogging"