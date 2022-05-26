var nome = 'RAPHAEL';

var nomeMinusculo = nome.toLowerCase();

var altura = 4.8;

altura.toString();  // converte para string
altura.toFixed();  // converte para string com 2 casas decimais

function areaQuadrado(lado) {
    return lado * lado;
  }
  
  areaQuadrado.toString();
  //"function areaQuadrado(lado) {
  //  return lado * lado;
  //}"
  
  areaQuadrado.length; // 1

  var btn = document.querySelector('.btn');

  btn.classList.add('azul') // adiciona a classe azul
  btn.innerText; // 'Clique'
  btn.addEventListener('click', function() {
    console.log('Clicou')
  })
  