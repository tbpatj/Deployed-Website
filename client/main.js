let navBttn = document.getElementById("nav-bttn");
let navCntn = document.getElementById("nav-container");
let navBar = document.getElementById("nav-bar-3");
let testBttn = document.getElementById('test-bttn');
testBttn.addEventListener('click', sendRequest)
navBar.addEventListener("transitionend",createAnimation);

navBttn.addEventListener("click",addNavClass);
let toggledNav = false;

function sendRequest( event ){
    axios
    .get('/hitem')
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(error));
}

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