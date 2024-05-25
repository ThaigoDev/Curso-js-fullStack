//UTILIZAREMOS  o FS para rastrear nossas pastas e verificar se  ele está lá 
//.promises me retorna o vaor apenas depois de  ele executar a varredura. 
const fs = require("fs").promises;  

const path = require("path");     
fs.readdir("./").then(files => console.log(files)).catch(e => {
    console.log(e)
})
