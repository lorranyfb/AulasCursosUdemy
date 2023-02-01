//Métodos: indexOf(), lastIndexOf()- os dosi funcionam no 1 e 11, includes(), find() - não vai funcionar em nenhum versão do Internet Explorer, findIndex()


//indexOf():retornam o primeiro valor do indice encontrado, lastIndexOf(): o ultimo elemento encontrado 
let arr = [4,5,10,20,35,4,5]
console.log(arr.indexOf(5))
console.log(arr.lastIndexOf(5555)> -1)

//includes(),: retoranm true ou false se o valor procurado for encontrado/ find():vai encontrar o primeiro elemento que o valor de retorno for true / findIndex() vai retornar o indice do primeiro elemento encontrado do array é maiorque 10
console.log(arr.includes(5555))
console.log(arr.find(function(el){
    return el > 10
}))
console.log(arr.findIndex(function (el){
    return el > 10
}))