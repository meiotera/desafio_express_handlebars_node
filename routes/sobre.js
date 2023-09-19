const express = require('express');
const router = express.Router()
const path = require('path');
const caminho = path.join(__dirname, '../views');


router.use(express.json())

router.get('/sobre', (req, res) => {

    res.render(`${caminho}/sobre`)
})


module.exports = router;