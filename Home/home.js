/*created background here~*/
let canvas = document.getElementById("rectangles");

function generateRectangles(borderColor) {
    if (canvas.getContext) {
    const c = canvas.getContext("2d");

        for (var i = 0; i<=5; i++) {
            const rectangleWidth = Math.random() * canvas.width;
            const rectangleHeight = Math.random() * canvas.height;

            c.beginPath();
            c.rect(rectangleHeight, rectangleWidth, rectangleHeight, rectangleWidth);
            c.strokeStyle = borderColor; //this might affect the quality of the strokes.
            c.stroke();
        }
    }
}

generateRectangles("#89D2A3");
generateRectangles("#FF97C4");