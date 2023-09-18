const express = require('express');
const router = express.Router()
const path = require('path');
const caminho = path.join(__dirname, '../views');
const pesquisa = require('../pesquisa')

router.use(express.json())

router.get(`/detalhes/?`, async (req, res) => {
    let id = req.query.id;

    try {
        const result = await pesquisa(id);
        const comentario = result[0].comentarios;
        
        res.render(`${caminho}/detalhes.handlebars`, { result, comentario })

    } catch (error) {
        console.log(error)
    }


})

module.exports = router;