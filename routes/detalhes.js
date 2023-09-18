const express = require('express');
const router = express.Router()
const path = require('path');
const caminho = path.join(__dirname, '../views');

router.use(express.json())

router.get(`/detalhes/?`, (req, res) => {

    produto = [
        {
            id: req.query.id,
            marca: req.query.marca,
            modelo: req.query.modelo,
            preco: req.query.preco,
            cor: req.query.cor
        }

    ]

    res.render(`${caminho}/detalhes.handlebars`, { produto })
})

module.exports = router;