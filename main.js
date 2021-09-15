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