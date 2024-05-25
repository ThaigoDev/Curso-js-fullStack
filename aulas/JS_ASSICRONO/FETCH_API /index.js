//FETCH API 
//FECTH é  uma melhoria de XMLHttpRequest 
//Como funciona  ?   
//Uma fetch por padrão  já retorna uma promise 
//passamos uma url ou o caminho de um arquivo para fazermos o fetch 
//como ele retorna uma promise, usamos o then()  para pegarmos o  valor  resovle. 
fetch('pega2.html').then((response)=> {
   if(response.status!==200 ) throw new Error("Error 404"); // sempre que estamos dentro do then e lanaçamos um erro. automaticamente ele vai para o catch
   return response.text() //Quando usamos o fetch, ele não retorna o valor que precisamos, então devemos converter. 
   //No caso eu quero converter em texto e foi isso que fizemos. apois isso, ela retorna outra promise, vimos que para pegar esse valor temos que adcioanr outro then()
}).then((data)=> {
  console.log(data); // aqui estamos mostrando os dados.
}
)
.catch(e => console.error(e)); 

 
document.addEventListener("click",(e)=>{ 
    const el =  e.target; 
    const tag = el.tagName.toLowerCase();   
    
    if(tag =="a") { 
        e.preventDefault();
        carregaPagina(el); 
    }
}) 

  function carregaPagina(el) {
   const href = el.getAttribute('href');     

   fetch(href).then(response =>{
     if(response.status !== 200) throw new Error("Error 404");  
     return response.text(); 
   }).then(response =>load(response)).catch((e)=>console.error(e));
   
} 
 //Podemos converter o fetch utilizando asyc await : 
 
 async function reloader(el) { 
   try {
    const href = el.getAttribute('href'); 
    const response = await fetch(href);  
    if(response.status !==200) throw new Error("Error 404"); 
    const html = await response.text(); 
    load(html)
   }catch(e) {
    console.error(e); 
   } 
    
 } 

 function load(response) {
  const result = document.querySelector('.resultado'); 
  result.innerHTMl = response; 
}