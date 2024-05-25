//for of para  dados interável COMO STRNG E ARRAYS
                        
const nome = "THIAGO";

//antes



for (let i = 0; i < nome.length; i++) {
  //PRECISAMOS DO TAMANHO UTILIZANDO VARIÁVEL DO CONTROLE
  console.log(nome[i]); //estamos mostrando cada letra.
}
//for in :

for (let i in nome) {
  //AQUI TEMOS A VARIÁVEL DE CONTROLE
  console.log(nome[i]); //retorna o indice
} 

//Agora o for of

for (let frutas of fruits) { 
    //em Objets não é usado. 
  //NÃO TEMOS O INDICE, TEMOS APENAS O VALOR.
  console.log(frutas); //ELE RETORNA O VALOR MESMO E NÃO O  INDICE.  ELE É DIREFENTE DO FOR IN. 
}
for (let i = 0; i < fruits.length; i++) {
    
}


//FOR EACH PARA ARRAYS.

fruits.forEach((el) => {
  console.log(el);
});
