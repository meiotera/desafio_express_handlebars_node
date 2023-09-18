const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;
const contatoRouter = require('./routes/contato');
const detalhesRouter = require('./routes/detalhes')
const fs = require('fs');
const hbs = exphbs.create({
    partialsDir: ['views/partials']
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.engine('handlebars', hbs.engine);
app.set('veiw engine', 'handlebars');

app.use('/', contatoRouter, detalhesRouter);



app.get('/', (req, res) => {
    fs.readFile('./database/produtos.json', (err, data) => {
        const dados = JSON.parse(data);
        const oculos = dados.oculos;
        let produtos = []

        oculos.forEach((oculo, index) => {
            produtos.push(
                {
                    _id: (index + 1),
                    modelo: oculo.modelo,
                    marca: oculo.marca,
                    cor: oculo.cor,
                    material: oculo.material,
                    preco: oculo.preco.toFixed(2),
                    img: oculo.img
                }
            );
        });

        res.render('home.handlebars', { produtos });
    });
})



app.listen(port)