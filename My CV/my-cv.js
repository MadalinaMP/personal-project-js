const backButton = document.getElementById("home-button");

function goBack() {
    window.location.href='../Home/home.html';
}

backButton.addEventListener("click", goBack);

const myWorkButton = document.getElementById("my-work-button");

function visitMyWorkPage(){
    window.location.href = '../My Work/my-work.html';
}

myWorkButton.addEventListener("click", visitMyWorkPage);

const aboutMeButton = document.getElementById("about-me-button");

function visitAboutMePage() {
    window.location.href='../About Me/about-me.html';
}

aboutMeButton.addEventListener("click", visitAboutMePage);