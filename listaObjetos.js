const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "4144444550"],
}; 

cliente.enderecos = [
    {
     rua: "R. Joseph Climber",
     numero: 1337,
     apartamento: true,
     complemento: "ap 934",
    }
]; 

cliente.enderecos.push({
    rua: "R. Joseph Ledder",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);
