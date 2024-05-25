//funções de callback.
//são executadas quando ocorre uma ação desejada.
//quando uma ação finaiza podemos ativar uma função de callback.
//exemplos :

function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
// para   usarmos um callback (Adicionamos o nome callback aqui);

function f1(callback) {
  //função de callback
  //quando usamos um callback, temos que fazer uma verificação se  ele existe ou não  :
  if (callback) callback();
  setTimeout(() => {
    console.log("f1");
  }, rand());
}

function f2(callback) {
  if (callback) callback();
  setTimeout(() => {
    console.log("f2");
  }, rand());
}

function f3(callback) {
    if (callback) callback(); 
    //um exemplo de função callback é o do setTimeout
  setTimeout(() => {
    console.log("f3");
  }, rand());
}

//chamando o callback


f1(() => { 
  f2(() => { //f2 nunca será executada antes de f1 e f3 nunca será executada antes de f2  
    f3(() => {
      console.log("Hello word !");
    });
  });
});

console.log("Hello world");
