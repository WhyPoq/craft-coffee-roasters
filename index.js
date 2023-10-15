
function toggleMenu(){
    menu = document.getElementById("dropdown-menu");
    if(menu.classList.contains("closed")){
        menu.classList.remove("closed");
        menu.classList.add("open");
    }
    else{
        menu.classList.remove("open");
        menu.classList.add("closed");
    }
}