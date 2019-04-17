const express = require('express');
const hbs = require('hbs');
const request = require('request');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('views engine', 'hbs');
app.use(express.static(__dirname + '/public'));



app.get('/home', (request, response) => {
    response.render('home.hbs', {
        title: 'About page',
        year: new Date().getFullYear(),
        welcome: 'Hello!'
    });
});

app.get('/nasa', (request, response) => {
    response.render('nasa.hbs', {
        title: 'About page',
        year: new Date().getFullYear(),
        welcome: 'Hello!'
    });
});

app.get('/cards', (request, response) => {
    response.render('cards.hbs', {
        title: 'About page',
        year: new Date().getFullYear(),
        welcome: 'Hello!'
    });
});

app.get('/404', (request, response) => {
    response.send({
        error: 'Page not found'
    })
})

app.listen(8080, () => {
    console.log('Server is up on the port 8080');
});
