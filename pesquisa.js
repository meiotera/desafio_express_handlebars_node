const fs = require('fs').promises;

async function pesquisa(index) {
    try {
        const data = await fs.readFile('./database/produtos.json', 'utf8')
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
                        img: oculo.img,
                        comentarios: oculo.comentarios
                    }
                );


            });

            if(index) {                
                return [produtos[index - 1]]
            }
        return produtos;
        
    } catch (err) {
        throw err;
    }
}

module.exports = pesquisa