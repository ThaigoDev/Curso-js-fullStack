//Listando arquivos com Nodejs e Recurção Mútua 

// para trabalhar com caminhos utlizamos o FS  

const fs = require("fs").promises; // como queremos que seja asíncrono, vamos usar promises; 
//vamos usar promisses para evitar que o codigo pare.  

//devemos importar o path tambem.
const path = require('path');  
//chamamos o fs.readdir = que vai varrar a pasta       //sabemos que o path.resolve() resolve as rotas e o __dirname pega da raiz da pasta
// passamos qual caminho queremos, para isso usamos o path.resolve(__dirname) 
                                        //estamos pegando o resolved da promise e tratando  
fs.readdir(path.resolve(__dirname)).then(files => console.log(files)).catch(e=> console.error(e)); // estamos dizendo para o file Stystem ler as pastas  

//podemos criar uma função que faz isso : 

async function readdir(caminho) { 
    caminho  = (caminho !== "" ? path.resolve(__dirname) : caminho);// criamos uma função assíncrona para requisitar ao diretorio os arquivos 
    const response = await fs.readdir(path.resolve(caminho));    // estamos lendo esses arquivos com o fs.readdir() ele retorna uma promise resolvida. 
    walk (response,caminho); 

} 
async function walk(files,caminho) {  
  for(let file of files) { // aqui estamos percorrendo o array resolvido pela promise que foi retornada pelo método readdir()   
    //criamos a rota completa do arquivo, usamos o  caminho da pasta que foi passado na função readdir, e unimos com o nome dos arquivos. 
    const fullPathRoot = path.resolve(caminho,file)
    const stats =await  fs.stat(fullPathRoot); //vamos pegar os caminhos completos dos arquivos// no  caso tambem retorna uma promise  
    //vamos listar os arquivos dentro de outras pastas com  fs: 
    if(stats.isDirectory) {
        readdir(fullPathRoot)
        continue; 
    } 
    if(/\.git/g.test(fullPathRoot))  continue;  // esse if vai verificar se o arquivo é .git, se for ele continua.
    if(/node_modules/g.test(fullPathRoot))  continue;  // esse if vai verificar se o arquivo é .git, se for ele continua. 
    //podemos fazer encontrar apenas arquivos .css : 

     if(!/\.css$/.g.test(fullPathRoot)) continue
    
    console.log(fullPathRoot);   
    
  
}   
}  
readdir(); 