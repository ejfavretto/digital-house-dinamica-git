const marcasVeiculo = require('./database/marcasVeiculo.json')

/**
 * Listar todas as marcas de veículos
 * Exemplo Json buscados na API: https://parallelum.com.br/fipe/api/v1/carros/marcas
 * @author evandrof
 */
function listarMarcasVeiculo() {
  marcasVeiculo.forEach(marca => {
    console.log(marca.nome)
  })
}

/**
 * Listar todas as marcas de veículos com o código
 */
function listarMarcasVeiculoComCodigo() {
  marcasVeiculo.map(marca => console.log(marca.codigo + ' - ' + marca.nome))
}

/**
 * Execução da função para listar todos as marcas de veículo do json
 */
listarMarcasVeiculo()
listarMarcasVeiculoComCodigo()
