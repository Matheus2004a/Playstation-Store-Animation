const menuLista = document.querySelector("nav ul")
const menuIcon = document.querySelector(".icon-menu")

menuIcon.addEventListener("click", exibirMenu)

function exibirMenu(){
    if(menuLista.style.display == "none"){
        menuLista.style.display = "block"
    }
    else{
        menuLista.style.display = "none"
    }
}

const modalCar = document.querySelector(".background-modal-car")
const modalAccount = document.querySelector(".background-modal-account")
const iconCar = document.querySelector(".icon-car")
const iconAccount = document.querySelector(".icon-person")
const iconCloseModalCar = document.querySelector(".icon-close-modal-car")
const iconCloseModalAccount = document.querySelector(".icon-close-modal-account")

iconCar.addEventListener("mouseover", () => {
    modalCar.style.display = "block"
})

iconCloseModalCar.addEventListener("click", () => {
    modalCar.style.display = "none"
})

iconCloseModalAccount.addEventListener("click", () => {
    modalAccount.style.display = "none"
})

iconAccount.addEventListener("mouseover", () => {
    modalAccount.style.display = "block"
})

var listaProdutosLancamentos = [, "", "", ""]

//var listaCards = document.querySelectorAll(".cards picture")

for(var i = 0; i < listaProdutosLancamentos.length; i++){
    document.write(`<img class="filmes-lançamentos" src="${listaProdutosLancamentos[i]}" >`)
}

const btnVoltarTopo = document.querySelector(".voltar-topo")

/* Adicionando exibição do botão de voltar ao topo de acordo com a altura do browser */
window.addEventListener("scroll", () => {
    if(window.scrollY >= 700){
        btnVoltarTopo.classList.add("show")
    }
    else{
        btnVoltarTopo.classList.remove("show")
    }
})
