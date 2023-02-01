//Método: push(), pop(), shift(), unshift(), slice(), splice()

let arr = [1,3,5,7,9]

//push(): acrescentar valores no array
let teste = arr.push(11,13,true,"ola")
console.log(teste)
console.log(arr)

//pop(): retornar um elemento removido, remove o ultimo elemrnto 

let ultimoElemento = arr.pop()
console.log(ultimoElemento)
console.log(arr)