const path = require('path')
const express = require('express')
const hbs = require('hbs')
const post = require('./app-back-end.js')

const app = express()

//Define paths for Express config
const publicDirFolder = path.join(__dirname, '../public') //علشان يقرا مسار الcss و js
const viewDir = path.join(__dirname, '../templates/views') //علشان اغير مسار الفيو لل تيمب
const partialsDir = path.join(__dirname, '../templates/partials') //علشان اغير مسار البارشل


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewDir)
hbs.registerPartials(partialsDir)


//Setup static dir to serve
app.use(express.static(publicDirFolder))

app.get('', (req, res) => {

    res.render('index', {
        title: 'Posts',
        name: 'Tata'
    })
})
app.get('/about', (req, res) => {

    res.render('about', {
        title: 'About',
        name: 'Tata'
    })
})

app.get('/help', (req, res) => {

    res.render('help', {
        title: 'Help',
        name: 'Tata'
    })
})

app.get('/post', (req, res) => {



    post.request((error, re) => {

        if (error) {
            res.send({
                error: error
            })
        } else if (!req.query.id) {
            res.send({
                post: re
            })
        } else {
            res.send({
                post: re[(req.query.id - 1)]
            })
        }

    })


})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'you must provide a search term '
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {

    res.render('404', {
        title: '404',
        name: 'Tata',
        error: 'Help artical not found.'
    })
})

app.get('*', (req, res) => {

    res.render('404', {
        title: '404',
        name: 'Tata',
        error: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})