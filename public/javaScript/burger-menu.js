const btn = document.querySelector("#burger");
const menu = document.querySelector("#overlay");
const nav = document.querySelector("#nav-container");

btn.addEventListener("click", handleClick);

function handleClick(e){
    if(menu.classList.contains("d-none")){
        btn.classList.add("burger-active");
        menu.classList.remove("d-none");
        nav.classList.remove("nav-grad");
        nav.classList.add("nav-grad-extend");
    }else{
        btn.classList.remove("burger-active");
        nav.classList.remove("nav-grad-extend");
        nav.classList.add("nav-grad");
        menu.classList.add("d-none");
    }
}