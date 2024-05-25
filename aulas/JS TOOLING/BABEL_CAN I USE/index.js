//BABEl e "CAN I USE..." 
//compatibilidade de códigos com navegadores antigos. 
//Por exemplo, internet explore. 
//pesquisamos can I use para saber quais recurso são compatíveis com os outros navegadores. 
//Oque devemos fazer para escrever um código para que ele funcione em todos os navegadores ? 
//Usamos o Babel , ele é um transpilador de código, ele traduz e compila o código. 
//Para utilizarmos pesquisamos Babeljs.io 
//Utilizando o npm para instalar o Babel  
//Para instalar o Babel usamos :  
//iniciamos o  npm com npm init -y <-- vai gerar um arquivo package.json 
// no terminal instalamos dessa forma : 
//npm install --save-dev  @babel/cli @babel/preset-env @babel/core <-- dessa forma estamos instalando o babel como usa dev dependence   

//vamos converter esse codigo usando o babel. 
const nome = "Luiz"; 

const Obj = {nome}; 

const Obj2 = {...Obj};  
// para converter fazemos :    

//npx babel index.js -o bundle.js --presets=@babel/env 
// npx babel nome do arquivo -o = arquivo de saida e nome do arquivo, no caso bundle.js, e depois o preset que será usado para a conversão 
// todas as vezes que há alterações no código, podemos fazer com que o  código execute automaticamente 
// usamos no package.json colocamos 
/* 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", 
    "babel": "babel ./main.js -o ./budle.js --preset=@babel/env -w" <== adicionamos  essa configuração
  },  
  // depois disso devemos ir no terminal e executar  npm run babel 
  // toda alteração que for feita, devemos ir no terminal, car ctrl +c 
  e der novamete NPM run babel

 infelizmene não é muito usado. 

*/ 
class Pessoa {
    constructor(nome,idade) {
        this.nome = nome; 
        this.idade = idade; 
    }
} 
let p1 = new Pessoa('THIAGO',19); 