// nomeie 3 propriedades ou métodos de strings
var nome = "RAPHAEL"

var idNome = nome.toLowerCase();
nome.length;
nome.slice(0, 3);
nome.charAt(0);
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');

btn.classList.add('btn-primary');
btn2.getAttribute('class');
btn3.children[0].innerHTML;
btn.id;
btn.appendChild(btn3);
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V