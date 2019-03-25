const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 8080;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/views'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})


hbs.registerHelper('message', (text) => {
    return text.toUpperCase();
})

app.use((request,response,next) => {
    var time = new Date ().toString();
   // console.log(`${time}: ${request.method} ${request.url}`);
   var log = (`${time}: ${request.method} ${request.url}`);
    fs.appendFile('server.log', log + '/n', (error) => {
        if (error) {
            console.log('Unable to log message');
        }
    });
        next();
});

app.use((request,response,next) => {
    response.render('main.hbs',{
        title : 'Info Page',
        year: new Date().getFullYear(),
        welcome: 'The Homepage',
        heading : 'Info'
    });
    var time = new Date ().toString();
   // console.log(`${time}: ${request.method} ${request.url}`);
   var log = (`${time}: ${request.method} ${request.url}`);
    fs.appendFile('server.log', log + '/n', (error) => {
        if (error) {
            console.log('Unable to log message');
        }
    });
        next();
});


app.get('/home', (request, response) => {
    response.render('home.hbs', {
            title : 'Info Page',
            year: new Date().getFullYear(),
            welcome: 'The Homepage',
            heading : 'Info'
        });
});

app.get('/info', (request, response) => {
    response.render('about.hbs', {
        title : 'Info Page',
        year: new Date().getFullYear(),
        welcome: 'Welcome!',
        heading : 'Info'
    });
});

app.get('/web',(request, response) => {
    response.render('web.hbs', {
        title : 'Homepage',
        year: new Date().getFullYear(),
        welcome: 'Welcome!',
        heading : 'homepage'
    });
});

app.get('/weather', (request, response) => {
    response.render('weather.hbs')
        var weatherRequest = (capital, countryCode) => {
            return new Promise((resolve, reject) => {
                weather.getWeather(capital, countryCode, (errorMessage, results) => {
                    if (errorMessage)
                        reject(errorMessage);
                    else
                        resolve(results);
                })
            });
        };
        response.send(`The weather in ${results.capital}, capital of ${countryName}, is ${results.temperature} degrees Fahrenheit with wind speed of ${results.windSpeed}`);
    });
    


app.get('/404', (request, response) => {
    response.send({
        error: 'Page not found'
    })
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});