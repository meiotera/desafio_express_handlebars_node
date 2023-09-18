const express = require('express');
const exphbs = require('express-handlebars');
// const path = require('path')
const app = express();
const port = process.env.PORT || 3000;
const contatoRouter = require('./routes/contato');
const detalhesRouter = require('./routes/detalhes')
// const fs = require('fs');
const pesquisa = require('./pesquisa');
const hbs = exphbs.create({
    partialsDir: ['views/partials']
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', contatoRouter, detalhesRouter);



app.get('/', async (req, res) => {
    try {
        const result = await pesquisa();             
        res.render('home', { result })
    } catch (err) {
        console.log(err)
    }
})



app.listen(port)
