 // Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var infoAluno = {
    nome: 'Raphael',
    sobrenome: 'Westim',
    idade: 28,
    Nascionalidade: 'Brasileiro',
    estadoCivil: 'Solteiro',
    profissao: 'Programador',
    possuiFaculdade: true,
    estudando: true,
}

// Crie um método no objeto anterior, que mostre o seu nome completo

infoAluno.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}



// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
    somaValor(){
        return this.preco*3;
    }
  }
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  var cachorro = {
    raca: "labrador",
    cor: "preto",
    idade: 10,
    latir(pessoa){
        if(pessoa === 'homem'){
            return "latir";
        }else{
            return "Não latir";
        }
    }
}

  
  