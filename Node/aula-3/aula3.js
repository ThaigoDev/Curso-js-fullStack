/*
{
    "name": "aula-3",  nome do projeto  // se deve colocar um nome sem ser de modulo.
    "version": "1.0.0", 1 = mager , 0 = miner  0 = path
    "description": "", descrição do projeto 
    "main": "aula3.js",
    "scripts": { 
       podemos criar os próprios e iniciar usando o npm run nome do script 
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  } 
} 

INSTALANDO  SCRIPTS DE TERCEIROS  : 
  USAMOS O NPM  INSTALL NOME 
   FOI INSTALADO O EXPRESS. 

   {
  "name": "aula-3",
  "version": "1.0.0",
  "description": "",
  "main": "aula3.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"  <-- VEMOS UM ACENTO CIRCUFLEXO  AQUI  SIGINIFICA QUE ELE PODE ATUALIZAR  PARA PEGAR APENAS  1 VERSÃO EXATA USAMOS A FLAG -E : 
                                                                                                                             npm install -E
                                                                                                                             
  } 
  //FAZENDO UPDATE NOS PACOTES : 
  npm update  

  --DEPENDENCIAS DE DESENVOLVIMENTO-- 
  WEBBACK  

  --COMO MOVER UMA DEPENDENCIA PARA UMA DEPENDENCIA DE DESENVOLVIMENTO ?

  utilizamos o npm install "nome" --save-dev <-- ele instala no package JSON  como Dependencia de Desenvolvimento :  
  {
  "name": "aula-3",
  "version": "1.0.0",
  "description": "",
  "main": "aula3.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {  <-- DEPENDENCIAS DE DESENVOLVIMENTO
    "express": "^4.18.2" 
  }
}

--COMO MOVER PARA AS DEPENDENCIAS NORMAIS ?  
npm install --save-prod  

{
  "name": "aula-3",
  "version": "1.0.0",
  "description": "",
  "main": "aula3.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"  <--  VOLTOU AO NORMAL
  }
} 

--CASO MEU  PROJETO NECESSITE DE UMA VERSSÃO ESPECÍFICA, UTILOZAMOS: 

npm install "nome"@2.1.0 -E usamos a flag para não atualizar 

{
  "name": "aula-3",
  "version": "1.0.0",
  "description": "",
  "main": "aula3.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^2.1.0" <--a versão não foi  atualizada
  }
} 

--EXPLICANDO MAJOR MINOR E PATCH  

2.    1.      0 
MAJOR  MINOR  PATCH  

REMOÇÕES DE BUG sem novas atualizações +1 para o PATCH 2.1.1

FUNCIONALIDADES QUE NÃO INTERFEREM NA MAJOR : +1 MINOR 2.2.1 

QUANDO O MAJOR MUDA, ELE QUEBRA COMPATIBILIDADE COM OS MAJORS ANTERIORES 

 QUANDO TEMOS ESSE SINAL  ^ SIGINIFICA QUE O NPM VAI ATUALIZAR SOMENTE A MINOR E A PATCH 

"express": "^2.1.0" <--a versão não foi  atualizada

"~" ATUALIZA SOMENTE O PATCH

"express": "~2.1.0" <--a versão não foi  atualizada  

npm install express@4.x pega a ultima versão da versão 4  

--DESINSTALAND 

npm uninstall "nome do modulo ou versão"  

--LISTANDO OS PACOTES : 

npm ls mstra todos as dependencias e pacotes 

--PARA VER SOMENTE O QUE INSTALAMOS : 
npm  ls --depth=0 Você pode definir até quando quer ver a profundidade

--NPM OUTDATED 
npm outdated vÊ as versões em que estamos 
*/