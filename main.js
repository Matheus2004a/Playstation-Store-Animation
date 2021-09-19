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

iconAccount.addEventListener("mouseover", () => {
    modalAccount.style.display = "block"
})

iconAccount.addEventListener("mouseout", () => {
    modalAccount.style.display = "none"
})

var listaProdutosLancamentos = ["https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/2751078/7/2751078757_1GG.jpg", "https://images-americanas.b2w.io/produtos/01/00/img/2590036/0/2590036053_1GG.jpg", "https://images-americanas.b2w.io/produtos/01/00/img/134193/9/134193952_1GG.jpg", "https://images-americanas.b2w.io/produtos/01/00/img/3270861/3/3270861396_1GG.jpg"]

for(var i = 0; i < listaProdutosLancamentos.length; i++){
    document.write("<img class='filmes-lançamentos'" + listaProdutosLancamentos[i] + "/>")
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
