(function () {
    const nomeUsuario = "Daniel"

    if (nomeUsuario) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top=bar"
         topBarElemento.innerHTML = `<p> Olá, <b> ${nomeUsuario} </b></p>`
         
         const elementoPAi = document.querySelector(".hero")
         elementoPAi.insertBefore(topBarElemento, elementoPAi.firstElementChild)

    }
})()