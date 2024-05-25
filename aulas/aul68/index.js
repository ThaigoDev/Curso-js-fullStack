//filter + map+reduce

const numeros = [1, 2, 3, 4, 5, 6, 7];

//podemos utilizar as funções encadeadas :

let numerosPares = numeros
  .filter((val) => val % 2 === 0)
  .map((val) => val * 2)
  .reduce((ac, val) => {
    return (ac += val);
  }); //podemos utilizar essas funções encaeadas utilizado apenas os pontos. dessa forma.
console.log(numerosPares);
