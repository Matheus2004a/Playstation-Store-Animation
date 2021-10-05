const menuLista = document.querySelector("nav ul")
const backgroundMenuLista = document.querySelector(".background-nav")
const menuIcon = document.querySelector(".icon-menu")

menuIcon.addEventListener("click", () => {
    menuLista.classList.toggle("show-menu")
    backgroundMenuLista.classList.toggle("show-background")
})

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
    window.scrollY >= 700 ? btnVoltarTopo.classList.add("show") : btnVoltarTopo.classList.remove("show")
})
