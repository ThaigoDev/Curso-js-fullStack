//AJAX em js 

//buscando dados com  com ajax  
//AJAX só funciona com links https  

//Podemos pegar conteudo de páginas e jogar dentro de outras páginas, vamos explicar ajax dessa forma. 
//Poderia ser JSON, xml   
//essa requisição, podemos pedir qualquer tipo de dado. 
//Primeiro vamos criar uma função para fazer a requisição para o servidor;  
//ele vai receber um objeto de configuração
const request = obj => { 
   //const xhr que representa HTMLHttprequest  que representa AJAX 
   return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest()// estamos chamando o construtor da função 

    //vamos utilizar um verbo XMLH; 
    //get : é como se fosse o padrão do navegador, quando abrimos o navegador por exemplo, quando clicamos em um site, estamos fazendo uma requisição 
    //http get  para determinado servidor. 
    xhr.open(obj.method,obj.url,true)// passamos a variável xhr.open(passamos o verbo desejado, url, e se é assícrono ou sícrono); 
   //em caso de post, deveriamos mandar os dados em xhr.send()  
     xhr.send(); 
 
     xhr.addEventListener("load",()=>{
         if(xhr.status>=200 && xhr.status < 300) {
             resolve(xhr.responseText); 
         }else {
             reject(xhr.statusText); 
              
         }
     })
   })
  

} 

document.addEventListener("click",(e)=>{ 
    
    const el =  e.target; 
    const tag = el.tagName.toLowerCase();  
    if(tag =="a") { 
        e.preventDefault();
        carregaPagina(el); 
    }
}) 

async  function carregaPagina(el) {
   const href = el.getAttribute('href');    
   try {
    const reponse =  await  request({
        method:"GET", 
        url:href})
   }catch (er) {
    console.log(er); 
   }
   
} 

 function load(response) {
  const result = document.querySelector('.resultado'); 
  result.innerHTMl = response; 
}