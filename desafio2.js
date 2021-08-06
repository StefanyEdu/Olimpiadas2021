let olympicsMedalTable = [
    { id: 1, country: "BRASIL", gold: 7, silver: 6, bronze: 6, continent: "AMERICA DO SUL" },
    { id: 2, country: "USA", gold: 46, silver: 37, bronze: 17, continent: "AMERICA DO NORTE" },
    { id: 3, country: "CHINA", gold: 26, silver: 18, bronze: 26, continent: "ASIA" },
    { id: 4, country: "RUSSIA", gold: 19, silver: 18, bronze: 19, continent: "EUROPA" },
    { id: 5, country: "REINO UNIDO", gold: 27, silver: 23, bronze: 17, continent: "EUROPA" },
    { id: 6, country: "ALEMANHA", gold: 17, silver: 10, bronze: 15, continent: "EUROPA" },
    { id: 7, country: "JAPÃO", gold: 12, silver: 8, bronze: 21, continent: "ASIA" },
    { id: 8, country: "ARGENTINA", gold: 3, silver: 1, bronze: 0, continent: "AMERICA DO SUL" },
    { id: 9, country: "ITALIA", gold: 8, silver: 12, bronze: 8, continent: "EUROPA" },
    { id: 10, country: "QUÊNIA", gold: 6, silver: 6, bronze: 1, continent: "AFRICA" },
];

Array.prototype.customFind = function (predicate) {
    // Implemente aqui seu algoritmo
    return null;
}

Array.prototype.customSome = function (predicate) {
    // Implemente aqui seu algoritmo
    return false;
}

Array.prototype.customFilter = function (predicate) {
    // Implemente aqui seu algoritmo
    return [];
}

Array.prototype.customMap = function (callback) {
    // Implemente aqui seu algoritmo
    return [];
}

Array.prototype.customReduce = function (callback, initialValue) {
    // Implemente aqui seu algoritmo
    return null;
}

// Código modelo utilizando filter, map e reduce

const resultFilterMapReduce = olympicsMedalTable.filter(i => i.continent === "ASIA") // JAPÃO e CHINA 
    .map(i => i.gold) // 26 e 12
    .reduce((total, quantity) => total + quantity); // 38

console.log(`Medalhas de Ouro no continente Asiático: ${resultFilterMapReduce}`);


// Implemente as funções customizadas - customFilter, customMap e customReduce e verique se o retorno é igual ao do código modelo

const resultByCustomFilterMapReduce = olympicsMedalTable.customFilter(i => i.continent === "ASIA")
    //.customMap(i => i.gold)
    .customReduce((total, quantity) => total + quantity);

console.log(`Resultado custom - Medalhas de Ouro no continente Asiático: ${resultByCustomFilterMapReduce}`);

/* DESAFIOS - CONCLUA AS FUNÇÕES customSome, customFind E UTILIZANDO TODAS AS FUNÇÕES 'CUSTOM' CONCLUA OS DESAFIOS ABAIXO: */

// 1 - Crie um algoritmo que encontre o único pais do continente Africano
// const paisAfricano =  <seu código aqui>;
// console.log(paisAfricano);

// 2 - Crie um algoritmo que retorne o total de medalhas por país
// const medalhasPorPais =  <seu código aqui>;
// console.log(medalhasPorPais);

// 3 - Crie um algoritmo para encontrar os países que conquistaram mais que 10 medalhas de ouro
// const paisesCom10MedalhasOuroNoMinimo =  <seu código aqui>;
// console.log(paisesCom10MedalhasOuroNoMinimo);

// 4 - Crie um algoritmo para encontrar os países que conquistaram no minímo 30 medalhas (Ouro, Prata e Bronze)
// const paisesCom30MedalhasNoMinimo =  <seu código aqui>;
// console.log(paisesCom30MedalhasNoMinimo);

// 5 - Crie um algoritmo para verificar se o continente América do Sul conquistou pelo menos 20 medalhas de ouro
// const paisesComPeloMenos20MedalhasDeOUro =  <seu código aqui>;
// console.log(paisesComPeloMenos20MedalhasDeOUro);

//Iniciando o desafio
//Autor(a):Stefany Eduarda de Oliveira 

//1-Função Filter

const paisAfricano=olympicsMedalTable.filter(i => i.continent =="AFRICA")
console.log(paisAfricano);

//2-Filter and Reduce

//Soma das medalhas por país

const medalhasPorPais1=olympicsMedalTable.filter(i =>i.continent=="EUROPA" && i.country=="REINO UNIDO")
.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("Reino Unido:"+medalhasPorPais1);
 //
const medalhasPorPais2=olympicsMedalTable.filter(i =>i.continent=="EUROPA" && i.country=="RUSSIA")
.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("Russia:"+medalhasPorPais2);
 //
 const medalhasPorPais3=olympicsMedalTable.filter(i =>i.continent=="EUROPA" && i.country=="ALEMANHA")
.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("ALEMANHA:"+medalhasPorPais3);
 //
 const medalhasPorPais4=olympicsMedalTable.filter(i =>i.continent=="AMERICA DO SUL" && i.country=="BRASIL")
.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("Brasil"+medalhasPorPais4);
 //
  const medalhasPorPais5=olympicsMedalTable.filter(i =>i.continent=="AMERICA DO SUL" && i.country=="ARGENTINA")
.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("ARGENTINA:"+medalhasPorPais5);
 //
 const medalhasPorPais6=olympicsMedalTable.filter(i =>i.continent=="AMERICA DO NORTE"&& i.country=="USA")
.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("USA:"+ medalhasPorPais6);
  //
  const medalhasPorPais7=olympicsMedalTable.filter(i =>i.continent=="ASIA"&& i.country=="CHINA")
.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("China: "+medalhasPorPais7);
//
  const medalhasPorPais8=olympicsMedalTable.filter(i =>i.continent=="ASIA"&&i.country=="JAPÃO")
.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("Japão: "+medalhasPorPais8);
//
  const medalhasPorPais9=olympicsMedalTable.filter(i =>i.continent=="AFRICA"&&i.country=="QUÊNIA")
.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("QUÊNIA: "+medalhasPorPais9);
//
  const medalhasPorPais10=olympicsMedalTable.filter(i =>i.continent=="EUROPA"&&i.country=="ITALIA")
.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("Japão: "+medalhasPorPais10);

//Total do quadro de medalhas

 const totalDoQuadroDeMedalhas=olympicsMedalTable.reduce((acc,i)=>acc+i.gold+i.silver+i.bronze,0);
 console.log("o Total do quadro de medalhas foi de "+totalDoQuadroDeMedalhas); 

//3- país que conquistaram mais de 10 medalhas de ouro.

const paisesCom10MedalhasOuroNoMinimo=olympicsMedalTable.filter(i => i.gold>=10)
.map(i => i.country);
console.log("Paises com mais de 10 medalhas de ouros" + paisesCom10MedalhasOuroNoMinimo);
//

// 4- Países com o somatorio de medalhas acima de 30.
const paisesCom30MedalhasNoMinimo=olympicsMedalTable.filter(i => i.gold+i.silver+i.bronze >= 30)
.map(i => i.country);
console.log("Paises com mais de 30 medalhas" + paisesCom30MedalhasNoMinimo);
// 

//5- Países da america do sul com o saldo de medalhas de ouro acima de 20.
const paisesCom20MedalhasOuroNoMinimo=olympicsMedalTable.filter(i => i.continent=="AMERICA DO SUL" && i.gold>= 20 )
.map(i=> i.country);
if(paisesCom20MedalhasOuroNoMinimo == ""){
console.log("Nenhum país com mais de 20 medalhas encontrado");}


//fim do desafio

