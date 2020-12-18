const container = document.getElementById("container");

function displayAssignmentDiv(assignmentTitle, assignmentDescription, aCodeLink, codeSrc, imgLink, assignmentID) {
    const assignmentDiv = document.createElement("div");
    assignmentDiv.setAttribute("id", assignmentID);
    assignmentDiv.classList.add("assignment");

    const assignmentDetailsDiv = document.createElement("div");

    const title = document.createElement("h3");
    const titleNode = document.createTextNode(assignmentTitle);
    title.classList.add("assignment-details-title");

    title.appendChild(titleNode);
    assignmentDetailsDiv.appendChild(title);

    const requirements = document.createElement("p");
    requirements.innerHTML=assignmentDescription;

    assignmentDetailsDiv.appendChild(requirements);

    const assignmentCodeLink = document.createElement("a");
    assignmentCodeLink.href= aCodeLink;
    assignmentCodeLink.target="_blank";
    assignmentCodeLink.innerText = "CODE";
    assignmentCodeLink.classList.add("code-link-style");

    assignmentDetailsDiv.appendChild(assignmentCodeLink);

    assignmentDetailsDiv.classList.add("assignment-details");

    assignmentDiv.appendChild(assignmentDetailsDiv);

    const imgCodeHref = document.createElement("a");
    imgCodeHref.href = codeSrc;
    imgCodeHref.target = "_blank";

    const assignmentImg = document.createElement("img");
    assignmentImg.src=imgLink
    assignmentImg.classList.add("img-style");

    imgCodeHref.appendChild(assignmentImg)

    assignmentDiv.appendChild(imgCodeHref);

    const upArrowAnchor = document.createElement("a");
    upArrowAnchor.href="#shortcuts";
    upArrowAnchor.innerText="⮥";
    upArrowAnchor.classList.add("arrow-buttons");

    assignmentDiv.appendChild(upArrowAnchor);

    container.appendChild(assignmentDiv);
}

const assignments = [{
    h3Element: "Introduction to HTML 1",
    pElement: "Implement with HTML and CSS your personal CV.",
    aCodeLink: "https://github.com/MadalinaMP/my-cv",
    codeHref: "https://madalinamp.github.io/my-cv/",
    imgLink: "../Pictures/assignment1picture.PNG",
    divID: "assignment1"
}, {
    h3Element: "Introduction to HTML 2",
    pElement: "Implement the template of the following <a class=\"link-style\" href=\"../Pictures/assignment2.png\" target=\"_blank\">picture</a> with HTML & CSS only.",
    aCodeLink: "https://github.com/MadalinaMP/dog-breeds-extra",
    codeHref: "https://madalinamp.github.io/dog-breeds-extra/",
    imgLink: "../Pictures/assignment2picture.PNG",
    divID: "assignment2"
}, {
    h3Element: "Semantic HTML",
    pElement: "Update one of the previous homework to use semantic elements and CSS positioning techniques that you learned about. Use in your code as many elements of the following: article, aside, section, header, footer, nav, main. Try to have at least one element that's positioned using float, relative, absolute and fixed position values. Use other CSS properties to style your content, keeping in mind to avoid repetition, and to keep them well organized.",
    aCodeLink: "https://github.com/MadalinaMP/semantic-html-hw",
    codeHref: "https://madalinamp.github.io/semantic-html-hw/",
    imgLink: "../Pictures/assignment3picture.PNG",
    divID:"assignment3"
}, {
    h3Element: "Layouting Practice 1",
    pElement: "Implement the following <a class=\"link-style\" href=\"../Pictures/assignment4.jpg\" target=\"_blank\">design</a> using HTML and CSS. The font used in the layout is called \"Muli\". Use the PerfectPixel Chrome add-on to find out font sizes.",
    aCodeLink: "https://github.com/MadalinaMP/layouting-challenge",
    codeHref: "https://madalinamp.github.io/layouting-challenge/",
    codeHref: "https://madalinamp.github.io/layouting-challenge/",
    imgLink: "../Pictures/assignment4picture.PNG",
    divID: "assignment4"
}, {
    h3Element: "Layouting Practice 2",
    pElement:  "Implement the following templates: <a class=\"link-style\" href=\"../Pictures/assignment5-1.png\" target=\"_blank\">[1]</a> <a class=\"link-style\" href=\"../Pictures/assignment5-2.jpg\" target=\"_blank\">[2]</a> using HTML and CSS. Use in your code as many elements of the following: article, aside, section, header, footer, nav, main. Try to have at least one element that's positioned using float, relative, absolute and fixed position values. Use other CSS properties to style your content, keeping in mind to avoid repetition, and to keep them well organized.",
    aCodeLink: "https://github.com/MadalinaMP/bonus-CSS---HTML-hw",
    codeHref: "https://madalinamp.github.io/bonus-CSS---HTML-hw/implementing-a-layout-using-HTML---CSS/index.html",
    imgLink: "../Pictures/assignment5picture.PNG",
    divID: "assignment5"
}, {
    h3Element: "JS Control Structures",
    pElement: "Using control structures, do the following: display in the console the numbers from 1 to 20, display in the console the odd numbers from 1 to 20, compute the sum of the elements of an array and display it in the console, compute the maximum of the elements of an array and display it in the console & compute how many times a certain element appears in an array.",
    aCodeLink: "https://github.com/MadalinaMP/js-basics-hw",
    codeHref: "https://madalinamp.github.io/js-basics-hw/control-structures/index.html",
    imgLink: "../Pictures/assignment6picture.PNG",
    divID: "assignment6"
}, {
    h3Element: "JS DOM Manipulation",
    pElement: "Implement a Contact form component. Your form should have: 2 text inputs, 1 radio button, 1 text area, 1 submit button and an optional image on the right, just to make the form look a little better.",
    aCodeLink: "https://github.com/MadalinaMP/dom-manipulation-hw",
    codeHref: "https://madalinamp.github.io/dom-manipulation-hw/",
    imgLink: "../Pictures/assignment7picture.PNG",
    divID: "assignment7"
}, {
    h3Element: "Rock Paper Scissors Game",
    pElement: "Implement “play” function that is a “Rock, paper, scissors” game. Implementations notes: create an array with all the possibilities (rock, paper, scissors); pick a random option for Computer (use Math.random); Pick a random option for User (use Math.random) & apply game rules for both options (use if/else if structures)",
    aCodeLink: "https://github.com/MadalinaMP/rock-paper-scissors-game-hw",
    codeHref: "https://madalinamp.github.io/rock-paper-scissors-game-hw/RPSgame.html",
    imgLink: "../Pictures/assignment8picture.PNG",
    divID: "assignment8"
}, {
    h3Element: "Book List",
    pElement: "Create a book list app that has the following functionalities: validate that the title and author fields have values before adding a new book, display errors, which indicates which field is not completed, validate duplicate items, if the book already exist in the list display an error, remove the errors, after the input has value (hint: use \"keypress\" event listener on inputs), reset the form after adding an item. You can rethink the UI.",
    aCodeLink: "https://github.com/MadalinaMP/book-list-bonus-hw",
    codeHref: "https://madalinamp.github.io/book-list-bonus-hw/books-basic.html",
    imgLink: "../Pictures/assignment9picture.PNG",
    divID: "assignment9"
}, {
    h3Element: "AJAX - Games API",
    pElement: "Implement a Games application, using the Games API (documentation provided in the pdf file called \"Games API Documentation\"). Display the games on a page & for each game, display at least the title, description and image.",
    aCodeLink: "https://github.com/MadalinaMP/ajax-games-api-hw",
    codeHref: "https://madalinamp.github.io/ajax-games-api-hw/games_api.html",
    imgLink: "../Pictures/assignment10picture.PNG",
    divID: "assignment10"
}, {
    h3Element: "AJAX & Promises - NASA API",
    pElement: "Using NASA's Astronomy Picture of the Day API get Today's Astronomy Picture of the Day. Generate an API Key on their <a class=\"link-style\" href=\"https://api.nasa.gov/\" target=\"_blank\">website</a>. Study how the API works. Using fetch function make a request to get the Astronomy Picture of the Day and display the picture and it's title, use a loader for a better UI experience until the picture si loading from the server. Optionally, add an input type of date and use the \"date\" query parameter of the request to get the picture based on the selected date.",
    aCodeLink: "https://github.com/MadalinaMP/nasa-pic-of-the-day-hw",
    codeHref: "https://madalinamp.github.io/nasa-pic-of-the-day-hw/",
    imgLink: "../Pictures/assignment11picture.PNG",
    divID: "assignment11"
}, {
    h3Element: "Full Games List App",
    pElement: "Implement a Games application, using the Games API (documentation provided in the pdf file called \"Games API Documentation\"). Functionalities: add & remove game. Use OOP. You must use at least one class.",
    aCodeLink: "https://github.com/MadalinaMP/full-game-app-hw",
    codeHref: "https://madalinamp.github.io/full-game-app-hw/games_api.html",
    imgLink: "../Pictures/assignment12picture.PNG",
    divID: "assignment12"
}, {
    h3Element: "The Player Game",
    pElement: "Define a container with fixed dimensions where you add a player. The player should be able to move within the game container and it shouldn't be able to get out of it.",
    aCodeLink: "https://github.com/MadalinaMP/the-player-hw",
    codeHref: "https://madalinamp.github.io/the-player-hw/",
    imgLink: "../Pictures/assignment13picture.PNG",
    divID: "assignment13"
}, {
    h3Element: "BOM Practice",
    pElement: "When clicking a button, change the URL and display something new on the (same!) page. Make sure the user is not actually redirected to a new page. Set a cookie on a document. Read all cookies. Add two radio buttons with two available languages (e.g., en-US, ro-RO). Use local storage and then session storage. Add again two radio buttons with two available languages (e.g., en-US, ro-RO). Store the value of this preference. he one whose value equals the stored value should be “pre-selected”. When the user selects the other radio button, his option should be saved in the storage.",
    aCodeLink: "https://github.com/MadalinaMP/bom-hw",
    codeHref: "https://madalinamp.github.io/bom-hw/Homework%204/ex4.html",
    imgLink: "../Pictures/assignment14picture.PNG",
    divID: "assignment14"
}]

for (let i = 0; i<=assignments.length; i++) {
    const assignment = assignments[i];
    displayAssignmentDiv(assignment.h3Element,
                         assignment.pElement,
                         assignment.aCodeLink,
                         assignment.codeHref,
                         assignment.imgLink,
                         assignment.divID);
}