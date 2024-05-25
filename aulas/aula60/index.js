// FUNÇÕES RECURSIVAS :

function recursiva(max) {
    if (max >= 10) return;  
    max++;
    console.log(max)  
    recursiva(max); 
    //funciona como um  for ou while.
    //ela simplesmente se chama novamente. 
    // ELE MAS RECURSIVIDADE TEM LIMITE DE ATÉ MIL.
} 
recursiva(1); 