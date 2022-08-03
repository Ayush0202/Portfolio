/*jshint esversion: 6 */

const express = require('express')

const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000')
})