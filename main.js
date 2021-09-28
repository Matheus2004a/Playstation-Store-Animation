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

iconCar.addEventListener("mouseover", () => {
    modalCar.style.display = "block"
})

iconCar.addEventListener("mouseout", () => {
    modalCar.style.display = "none"
})

iconAccount.addEventListener("mouseout", () => {
    modalAccount.style.display = "none"
})

iconAccount.addEventListener("mouseover", () => {
    modalAccount.style.display = "block"
})

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
