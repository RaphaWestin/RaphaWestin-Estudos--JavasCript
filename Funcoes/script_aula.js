// funcão e um bloc de código

function areaQuadrado(lado){
    return lado * lado;
}

areaQuadrado(4);
areaQuadrado(5);
areaQuadrado(2);

function pi(){
    return 3.14;
}
 var total = 5 * pi();
 console.log(total);

 function imc(peso, altura){
     const imc = peso / (altura**2);
     return imc;
 }

 console.log(imc(80, 1.8));

 function corFavorita(cor){
     if(cor === 'azul'){
         return ' eu gosto do mar';
     }else if(cor == 'verde'){
         return 'gosto de mato';
     }else{
         return 'eu nao curto';
     }
 }

 //argumentos tbm podem ser funcões

 addEventListener('click', function(){
     console.log('funciona');
 })

 function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
  }
  
  imc(80, 1.80); // retorna o imc
  console.log(imc(80, 1.80)); // retorna o imc e undefined


  function terceiraIdade(idade) {
      console.log(typeof idade);
      if(typeof idade !== 'number'){
          return 'por favor preencha um numero';
      }else if(idade >= 60){
          return true;
      }else{
          return false;
      }
  }

  console.log(terceiraIdade(50));


  function visitaPaises(paisesVisitados){
      var totalPaises = 193;
      return `falta visitar ${totalPaises - paisesVisitados} paises`;
  }


var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

  
  
