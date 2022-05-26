var idade = 28;

//console.log(idade);

// operadores aritimeticos

// var soma  = 100 + 50;
// var subtracao = 100 - 50;
// var multiplicacao = 100 * 2;
// var divisao = 100 / 2;
// var expoente  = 2 ** 4;
// var modulo = 14 % 5;

//console.log(soma,subtracao,multiplicacao, divisao,expoente,modulo);

//operacores aritimeticos (strings)

var soma = '100' + 50;
var subtracao = '100' - 50;
var multiplicacao = '100' * '2';
var divisao = 'comprei 10' / 2;

console.log(soma,subtracao,multiplicacao, divisao);

var testeNaN = 'isso e 100' / 2;
console.log(isNaN(testeNaN));

//NaN = Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

//a ordem importa
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

console.log(total1,total2,total3,total4);

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;

console.log(soma1);

//Operadores Aritmeticos Unarios

var incremento = 1;

console.log(incremento++);
console.log(incremento);

var decremento = 1;

console.log(decremento--);
console.log(decremento);

//O + e - tenta transformar o valor seguinte em número
var idade  = '28';
var somaIdade = 5

console.log(+idade + somaIdade);


