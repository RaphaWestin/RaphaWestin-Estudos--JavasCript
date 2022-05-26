var possuiGraducao = true;

if(possuiGraducao){
    console.log("possui uma graduacao sim!");
}else{
    console.log("vai estudar mlk!");
}


var possuiDoutorado = false;

if(possuiDoutorado){
    console.log("ele possui graduacao e doutorado");
}else if(possuiGraducao){
    console.log("ele tem graduacao, mas nao tem doutorado");
}else{
    console.log("nao possui nada");
}

var nome = ''

if(nome){
    console.log('ele tem um nome', nome);
}else{
    console.log("ele nao tem nome");
}


var possuiMetro = true;

if(!possuiMetro){
    console.log(possuiMetro);
    console.log("tem metro");
}else{
    console.log(possuiMetro);
    console.log("tem nada nao");
}

//operadores comparacao

var somaCorrida = 100;
var taxas = 25;
var total = somaCorrida + taxas;

if(total == 125){
    console.log("corrida paga!")
}else{
    console.log("multa!");
}


if((5-5) && (5+5)){
    console.log("verdadeiro!");
}else{
    console.log("falso!");
}

if((5-10) && (5+5)){
    console.log("verdadeiro!");
}else{
    console.log("falso!");
}

var condicional2 = (5-5) || (5+5) || (10-2);
console.log(condicional2);

var corFavorita = "vermelho"

switch(corFavorita){
    case 'roxo':
    console.log("muito que bem!");
    break;
    case 'amarelo':
    console.log("karacaaaaa");
    break;
    case 'azul':
    console.log("uhuuuu legal!");
    break;
    case 'rosa':
    console.log("xuxu beleza!");
    break;
    default: console.log("num sei...")
}