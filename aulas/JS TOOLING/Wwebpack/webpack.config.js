const path = require('path'); 
//O node js utilizada o CommoJs que é diferente do sistema de modulos do JS Vanilla  
/* 
Todo arquivo js no node é um modulo, e para isso devemos exportar  
se não exportarmos, ningúem conseguirá utilizar  

para isso usamos o module.exports = {
    configarções que serão exportadas: 
}
*/ 
//antes de prosseguir, devemos criar uma pasta src, onde o código fonte vai ficar
// como vamos utilozar o export e import  é importante saber isso.
//devemos criar uma pasta public, onde os arquivos que o usuário consegue acessar e ver> 


module.exports = {
 mode: "development",  //esse modo não minifica o arquivo, ou seja, não comprime o codigo..   
 entry : "./src/index.js",  // passamos o caminho do arquivo JS  
  
 // esse objeto é as configurações do arquivo de saida. 
 output : {
    // utilizamos o path.resolve(__dirname, pastas) ele tenta resolver o caminho absoluto através do ___dirname, esse __dirname
 //sabe como utilizra as barras, ele pega  o caminho absoluto do arquivo atual e  sabe como chegar nas pastas referenciadas pelos nomes :
    patch : path.resolve(__dirname, 'public','assets','js'), 
     filename: 'bundle.js'    // definimos o nome do arquivo de saida
 }, 
  module :{ 
    // dentro do modules, devemos definir algumas regras como : 
     // é um array de regras para cada tipo de arquivo, no caso vamos usar para js
    rules:[ {
        exclude : /node_modules/,  // não queremos que o babel analise a pasta node_modules, pois como ela é grande, pode demorar muito. 
        test : /\.js$/, 
        // essa expressão indica que vai analisar todos os arquivos com a extenção js. 
        use: {
            loader : 'babel-loader',  // estamos definindo o loader que foi instalado com dependencia
            options : {
                presets :['@babel/env'],  //estamos definindo o preset que vai ser utilizado, nesse caso o @babel/env 
            } 
        }
    }], 
  }, 
  // É utilizado para mapear erros do nosso arquivo bundle.js 
  devtool : 'source-map',  

} 
//depois de pronto, podemos testar : criamos no package.json um script que vai carregar