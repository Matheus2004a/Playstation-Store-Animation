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
const iconCloseModalCar = document.querySelector(".icon-close")
const iconCloseModalAccount = document.querySelector(".icon-close-account")

iconCar.addEventListener("mouseover", function(){
    modalCar.style.display = "block"
})

iconCloseModalCar.addEventListener("click", function(){
    modalCar.style.display = "none"
})

iconCloseModalAccount.addEventListener("click", function(){
    modalAccount.style.display = "none"
})

iconAccount.addEventListener("mouseover", function(){
    modalAccount.style.display = "block"
})

const btnVoltarTopo = document.querySelector(".voltar-topo")

window.addEventListener("scroll", function(){
    if(window.scrollY >= 800){
        btnVoltarTopo.classList.add("show")
    }
    else{
        btnVoltarTopo.classList.remove("show")
    }
})
