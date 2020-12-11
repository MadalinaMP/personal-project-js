const myCvButton = document.getElementById("my-cv-button");

function visitMyCvPage() {
    window.location.href='../My CV/my-cv.html';
}

myCvButton.addEventListener("click", visitMyCvPage);

const myWorkButton = document.getElementById("my-work-button");

function visitMyWorkPage(){
    window.location.href = '../My Work/my-work.html';
}

myWorkButton.addEventListener("click", visitMyWorkPage);

const backButton = document.getElementById("home-button");

function goBack() {
    window.location.href='../Home/home.html';
}

backButton.addEventListener("click", goBack);
