//DOM- Document Objet Model, uma API disponibilizada nos browser que permite editar o que é mostrado na tela, uma interface entre o mundo do JS e do HTML. Sempre que euiser acessar elementos do HTML.

// toda vez que estiver falando do DOM, estou falando do objeto document.


(function(){
    const nomeUsuario = null
    const elemento =document.querySelector(".top-bar p")
  
    if(nomeUsuario) {
        //document.querySelector(".top-bar p").textContent = "Bem-vindo(a), " + nomeUsuario
        console.log(elemento.textContent)
        //elemento.textContent = elemento.textContent + nomeUsuario
        elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
    } else {
        //esconder elemento elemento.parentElement.style.display = "none"
        //remover elemento, só funciona no suporte E11 elemento.remove()
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }
    console.log(elemento)
})()