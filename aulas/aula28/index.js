//OBJETO  DATE
//A FUNÇÃO DATE É UMA FUNÇÃO CONSTRUTORA - ELA SEMPRE COMEÇA COM UMA LETRA MAIÚSCULA.
const date = new Date(); //TODAS AS VEZES QUE EU CHAMO A FUNÇÃO DATE, ELA GERA UM OBJETO DE DATA ATUAL.
console.log(date.toDateString()); // ela converte no padrão gringo
//essa datas são baseadas  desde o timestamp unix

/*          milésimos de segundo
SE USAMOS O new Date(0) pegamos a data de 01/01/1970 pois foi aqui que iniciou o Timestamp 

*/

//CRIAR UMA DATA :
//MANDANDO UMA DATA   ANO   MES DIA HORAS MINUTOS SEGUNDOS   E MILÉSIMO DE SEGUNDOS
const data = new Date(2024, 3, 20, 15, 14, 27, 1000); //Milésimos de segundo vai até 999; caso ultrapasse ele aumenta 1 segundo. Isso funciona para os segundos- Ele zera.

console.log(data.toString());

//O MÊS EM JS SEMPRE COMEÇA EM   0 E VAI ATÉ 11.

//DATAS COM FORMATO STRING
//passamos como (ano, mes, dia, [espaço] horas:minutos: segundos)
const dataSting = new Date("2024-04-20 20:59:20");
console.log(dataSting.toString());

//OBTENDO Mês, Dia,Ano.

//DIA

let dia = dataSting.getDate(); //get date pega o dia da data desejada.

//Mês
console.log(data.getMonth()); //começa do 0

//Ano
console.log(data.getFullYear());
//Horas
console.log(data.getHours());
//Minutos
console.log(data.getMinutes());
//segundos
console.log(data.getSeconds());
//Milisegundos
console.log(data.getMilliseconds());
//Dia da  semana
console.log(data.getDay()); //começa do 0

//PEGANDO OS MILÉSIMOS DE SEGUNDO DO PONTO 0 ATÉ HOJE
console.log(Date.now());

//Criando uma função que formata DATA.

const zeroLeft = (num) => {
    return num >= 10 ? num : `0${num}`
}

const formataData = (data) => {
    const dia = zeroLeft(data.getDate());
  const month = zeroLeft(data.getMonth());
  const year = zeroLeft(data.getFullYear());

  return `${dia}/${month}/${year}`;
};
let dataBr = formataData(data);
console.log(dataBr);