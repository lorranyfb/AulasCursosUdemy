// função callback: função passada por parâmetro

function fn(cb) {
    console.log("executar ação de callbak")
    console.log(typeof cb)
    typeof ceb ==="function"  && cb ()
}
fn(function ()){
    console.log("função passada por parâmetro")
}

//atribuir função a propr de objeto 

function fn(cb) {
    console.log("executar ação de callbak")
    console.log(typeof cb)
    typeof ceb ==="function"  && cb ()
}
fn(function ()){
    console.log("função passada por parâmetro")
}
fn(callback)
const obj = {
    callback: callback
} obj.callback()

// Retorna uma função com resultado de outra função

function fn2(n1){
    return function(n2){
        returnn1 +n2
    }
}
const funcao2 = fn2(10)
const mult = funcao2(2)
console.log(mult)

//Atribuir as propriedades 


