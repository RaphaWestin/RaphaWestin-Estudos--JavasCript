var pessoa = {
    nome: 'Raphael',
    idade: 28,
    profissao: 'Programador',
    possuiFaculdade: true,
}

console.log(pessoa);


// METODO 1
var quadrado = {
    lados: 4,
    area: function(lado){
        return lado*lado
    },
    perimetro: function(lado){
        return this.lados * lado;
    },
}

console.log(quadrado.area(5));

console.log(quadrado.perimetro(2));

//METODO 2
var quadrado2 = {
    lados: 4,
    areaQuadrado(lado){
        return lado*lado
    },
    perimetroQuadrado(lado){
        return this.lados * lado;
    },
    cinco(){
        return 5;
    }
}
 
console.log(quadrado2.areaQuadrado(22));
console.log(quadrado2.perimetroQuadrado(30));

console.table(quadrado);

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84e',
    //backgroundColor: '#84E',
    metadeHight(){
        return this.height/2;
    }
  }
  menu.backgroundColor = "#000";
  var bg = menu.backgroundColor;

  menu.esconder = function(){
      console.log("esconder bacana");
  }

  menu.color = "red";