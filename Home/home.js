/*created background here~*/
let canvas = document.getElementById("rectangles");

if (canvas.getContext) {
const c = canvas.getContext("2d");

    for (var i = 0; i<=5; i++) {
        const rectangleWidth = Math.random() * canvas.width;
        const rectangleHeight = Math.random() * canvas.height;

        c.beginPath();
        c.rect(rectangleHeight, rectangleWidth, rectangleHeight, rectangleWidth);
        c.strokeStyle = "#89D2A3";
        //c.strokeStyle = "#FF97C4";
        c.stroke();
    }
}

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

const aboutMeButton = document.getElementById("about-me-button");

function visitAboutMePage() {
    window.location.href='../About Me/about-me.html';
}

aboutMeButton.addEventListener("click", visitAboutMePage);