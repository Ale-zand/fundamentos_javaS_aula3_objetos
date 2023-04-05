const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "4144444550"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
}; 

cliente.efetuaPagamento(25);

