const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'Lautaro Monserrat',
        titulo: 'Road Trip'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Lautaro Monserrat',
        titulo: 'Road Trip'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Lautaro Monserrat',
        titulo: 'Road Trip'
    })
});

app.get('*', (req, res) => {
    res.render('404');
})

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}/`);
})