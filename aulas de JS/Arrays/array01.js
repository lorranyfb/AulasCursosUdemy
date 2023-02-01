//Sintaxes da array - const arr = [] (mais comum e const arr = new Array () (não é muito usual)
//Métodos: arr. every (), arr. some(), arr.forEach(), arr. map(), arr. filter()

//Métodos some() e every() : validação/verificação dos elementos da array e retorna valores booleanos

const arr = [1, 5, 10, "ola", true]

let sohNumeros = arr.every(function () {

    return typeof el === "number"
})
console.log(sohNumeros)

/*let sohNumeros = arr.some(function () {

  return typeof el === "number" && el >20
})

console.log(sohNumeros)*/

//Método  arr.filter() - retorna nova array com os valores filtrados
  
  let arr1 = arr.filter(function(el, i, _arr) {
    return typeof el ==="number"
  })

  //Método  arr.forEach() - não tem valor de retorno / para fazer alguma interação nos elementos do  array / um loop elegante
 
     arr.forEach(function(el, i, _arr) {
      console.log(i, ":", el)
    })
 
//Método map() - retorna uma nova array com os dados treansformados
 
let arr2 = arr1.map(function (el, i, _array){
    return el * el

})
    console.log(arr)
    console.log(arr1)
    console.log(arr2)