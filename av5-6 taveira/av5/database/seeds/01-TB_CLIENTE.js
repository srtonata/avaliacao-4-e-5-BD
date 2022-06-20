exports.seed = function(knex) {
  return knex('TB_CLIENTE').truncate()
    .then(function () {
      return knex('TB_CLIENTE').insert([
        {id: 1, codigo: '605', cnpjcpf: 'euuuu', nome: "joao", TipoCliente: "Pessoa_Fisica"},
        {id: 2, codigo: '407', cnpjcpf: '0490', nome: "rodrigo", TipoCliente: "Pessoa_Fisica"},
        {id: 3, codigo: '012', cnpjcpf: '6053', nome: "Lya", TipoCliente: "Pessoa_Fisica"},
      ]);
    });
};
