const express = require('express');
const router = express.Router()
const path = require('path');
const caminho = path.join(__dirname, '../views');

router.get('/contato', (req, res) => {

    const links = ['Instagram', 'FaceBook', 'Github']

    res.render(`${caminho}/contato`, { links });
})


module.exports = router;