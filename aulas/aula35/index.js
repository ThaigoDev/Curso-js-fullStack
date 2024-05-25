//DOM
//NO NAVEGAR O OBJETO GLOBAL É O WINDOW, ELE É O PAI DE TODOS OS OBJETOS.
// DOCUMENT É O DOCUMENTO HTML.
//DENTRO DE DOCUMENT TEMOS A ESTRUTURA HTML
// O TOPO DO DOM TEMOS O WINDOW >  DOCUMENT > HTML QUE CHIELD DE DOCUMENT> HEAD E BODY É CHIELD DE HTML
//PARA CRIAR ELEMENTOS UTILIZANDO A API DO DOM USAMOS : 
//usamos o createElement(tag);   
let div = document.createElement("div"); 

//para adicionar esse elemento  no Dom usamos :

let section = document.querySelector(".content"); 
section.appendChild(div); 
//podemos mudar o estilo de determinado elemento usando : 
section.style.backgroundColor = "red";  

//DOM É A REFERENCIA DO NAVEGADOR, É A INTERFACE DE DE OBJETOS. 