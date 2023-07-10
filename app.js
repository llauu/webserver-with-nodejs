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
        titulo: 'Curso de node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Lautaro Monserrat',
        titulo: 'Curso de node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Lautaro Monserrat',
        titulo: 'Curso de node'
    })
});

app.get('*', (req, res) => {
    res.render('404');
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})