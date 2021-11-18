let navBttn = document.getElementById("nav-bttn");
let navCntn = document.getElementById("nav-container");

navBttn.addEventListener("click",addNavClass);

function addNavClass(event){
    console.log("yeeeah");
        navCntn.classList.toggle("display-nav");
        // navCntn.classList.toggle("hidden");
}