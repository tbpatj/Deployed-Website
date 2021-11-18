let navBttn = document.getElementById("nav-bttn");
let navCntn = document.getElementById("nav-container");
let navBar = document.getElementById("nav-bar-3");
let testBttn = document.getElementById('test-bttn');
let testBttn2 = document.getElementById('testBoy');
let testBttn3 = document.getElementById('crit');
testBttn.addEventListener('click', sendRequest);
testBttn2.addEventListener('click', sendWarning);
testBttn3.addEventListener('click', sendCrit);
navBar.addEventListener("transitionend",createAnimation);

navBttn.addEventListener("click",addNavClass);
let toggledNav = false;

function sendRequest( event ){
    axios
    .get('/hitem').then(res => {

    }).catch(error => console.log(error));
}

function sendCrit( event ){
    axios
    .get('/criticalErr').then(res => {

    }).catch(error => console.log(error))
}

function sendWarning( event ){
    axios
    .get('/warning').then(res => {

    }).catch(error => console.log(error));
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