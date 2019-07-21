/**
 * Server
 */
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()

  .then(() => {
    const server = express()

    // Blog Tag
    server.get('/blog/tag/:tag', (req, res) => {
      return app.render(req, res, '/blog/tag', {
        tag: req.params.tag
      })
    })

    // Blog Article
    server.get('/blog/:category/:articleSlug', (req, res) => {
      return app.render(req, res, '/blog/article', {
        articleSlug: req.params.articleSlug,
        category: req.params.category
      })
    })

    // Blog Author
    server.get('/blog/:author', (req, res) => {
      return app.render(req, res, '/blog/author', {
        author: req.params.author
      })
    })

    // Blog Category
    server.get('/blog/:category', (req, res) => {
      return app.render(req, res, '/blog/category', {
        category: req.params.category
      })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })

  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
