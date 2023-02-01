//Métodos: arr.concat(), arr.join(), arr.toString()

let arr1 = [1,2,3]
let arr2 = [4,5,6]
//toString():mostrar uma representação em string da array
console.log(arr1.toString())
//join():retorna uma string mas tbm pode receber um parametro opcional, um caractere usado pra separar os elementos 
console.log(arr1.join("-"))

//concat(): unir as arrays/ pode passar tanto arrays individuais como valores (let arr3 = arr1.concat(arr2)ou let arr3 = arr1.concat(arr2, 4, 89, ["Olá"]))
let arr3 = arr1.concat(arr2)
console.log(arr1)
console.log(arr2)
console.log(arr3)

//Usava o concat() para fazer clones de array
let arr4 = ["a","b","c"]
let arr5 = [].concat(arr4)

arr5[arr5.length] = "novo valor"

console.log(arr4)
console.log(arr5)