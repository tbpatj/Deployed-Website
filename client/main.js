let navBttn = document.getElementById("nav-bttn");
let navCntn = document.getElementById("nav-container");
let navBar = document.getElementById("nav-bar-3");
navBar.addEventListener("transitionend",createAnimation);

navBttn.addEventListener("click",addNavClass);
let toggledNav = false;

function addNavClass(event){
    console.log("yeeeah");
        navBar.classList.add("nav-bar-anim");
        toggledNav = !toggledNav;
        
        // navCntn.classList.toggle("hidden");
}
function createAnimation(event){
    if(navBar.classList.contains("nav-bar-anim")){
        navBar.classList.toggle("nav-bar-anim");
        navBar.classList.toggle('nav-bar-anim2');
        
    }else if(navBar.classList.contains("nav-bar-anim2") && toggledNav){
        navCntn.classList.add("display-nav");
    }
}