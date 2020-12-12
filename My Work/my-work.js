//it'd be nice if i had a function that can implement a hyperlink to the word 'image' as well. to display the templates i tried to reproduce.

const container = document.getElementById("container");

//V3 : works too
function displayAssignmentDiv(assignmentTitle, assignmentDescription, assignmentID, iframeLink) {
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

    assignmentDetailsDiv.classList.add("assignment-details");

    assignmentDiv.appendChild(assignmentDetailsDiv);

    const iframe = document.createElement("iframe");
    iframe.src=iframeLink
    iframe.classList.add("iframes");

    assignmentDiv.appendChild(iframe);

    container.appendChild(assignmentDiv);
}
// displayAssignmentDiv("Introduction to HTML 1",
//                      "Implement with HTML and CSS your personal CV.",
//                      "assignment1");
// displayAssignmentDiv("Introduction to HTML 2",
//                      "Implement the template of the following picture with HTML & CSS only.",
//                      "assignment2");
// displayAssignmentDiv("Semantic HTML",
//                      "Update one of the previous homework to use semantic elements and CSS positioning techniques that you learned about. Use in your code as many elements of the following: article, aside, section, header, footer, nav, main. Try to have at least one element that's positioned using float, relative, absolute and fixed position values. Use other CSS properties to style your content, keeping in mind to avoid repetition, and to keep them well organized.",
//                      "assignment3");
// displayAssignmentDiv("Layouting Practice 1",
//                      "Implement the following design using HTML and CSS. The font used in the layout is called \"Muli\". Use the PerfectPixel Chrome add-on to find out font sizes.",
//                      "assignment4");
// displayAssignmentDiv("Layouting Practice 2",
//                      "Implement the following template using HTML and CSS. Use in your code as many elements of the following: article, aside, section, header, footer, nav, main. Try to have at least one element that's positioned using float, relative, absolute and fixed position values. Use other CSS properties to style your content, keeping in mind to avoid repetition, and to keep them well organized.",
//                      "assignment5");
// displayAssignmentDiv("JS Control Structures",
//                      "Using control structures, do the following: display in the console the numbers from 1 to 20, display in the console the odd numbers from 1 to 20, compute the sum of the elements of an array and display it in the console, compute the maximum of the elements of an array and display it in the console & compute how many times a certain element appears in an array.",
//                      "assignment6");
// displayAssignmentDiv("JS DOM Manipulation",
//                      "Implement a Contact form component. Your form should have: 2 text inputs, 1 radio button, 1 text area, 1 submit button and an optional image on the right, just to make the form look a little better.",
//                      "assignment7");
// displayAssignmentDiv("Rock Paper Scissors Game",
//                      "Implement “play” function that is a “Rock, paper, scissors” game. Implementations notes: create an array with all the possibilities (rock, paper, scissors); pick a random option for Computer (use Math.random); Pick a random option for User (use Math.random) & apply game rules for both options (use if/else if structures)",
//                      "assignment8");
// displayAssignmentDiv("Book List",
//                      "Create a book list app that has the following functionalities: validate that the title and author fields have values before adding a new book, display errors, which indicates which field is not completed, validate duplicate items, if the book already exist in the list display an error, remove the errors, after the input has value (hint: use \"keypress\" event listener on inputs), reset the form after adding an item. You can rethink the UI.",
//                      "assignment9");
// displayAssignmentDiv("AJAX - Games API",
//                      "Implement a Games application, using the Games API (documentation provided in the pdf file called \"Games API Documentation\"). Display the games on a page & for each game, display at least the title, description and image.",
//                      "assignment10");
// displayAssignmentDiv("AJAX & Promises - NASA API",
//                      "Using NASA's Astronomy Picture of the Day API get Today's Astronomy Picture of the Day. Generate an API Key on there website: https://api.nasa.gov/. Study how the API works. Using fetch function make a request to get the Astronomy Picture of the Day and display the picture and it's title, use a loader for a better UI experience until the picture si loading from the server. Optionally, add an input type of date and use the \"date\" query parameter of the request to get the picture based on the selected date.",
//                      "assignment11");
// displayAssignmentDiv("Full Games List App",
//                      "Implement a Games application, using the Games API (documentation provided in the pdf file called \"Games API Documentation\"). Functionalities: add & remove game. Use OOP. You must use at least one class.",
//                      "assignment12");
// displayAssignmentDiv("The Player Game",
//                      "Define a container with fixed dimensions where you add a player. The player should be able to move within the game container and it shouldn't be able to get out of it.",
//                      "assignment13",
//                      "https://madalinamp.github.io/the-player-hw/index.html");
// displayAssignmentDiv("BOM Practice",
//                      "When clicking a button, change the URL and display something new on the (same!) page. Make sure the user is not actually redirected to a new page. Set a cookie on a document. Read all cookies. Add two radio buttons with two available languages (e.g., en-US, ro-RO). Use local storage and then session storage. Add again two radio buttons with two available languages (e.g., en-US, ro-RO). Store the value of this preference. he one whose value equals the stored value should be “pre-selected”. When the user selects the other radio button, his option should be saved in the storage.",
//                      "assignment14");

const assignments = [{
    h3Element: "Introduction to HTML 1",
    pElement: "Implement with HTML and CSS your personal CV.",
    divID: "assignment1" 
}, {
    h3Element: "Introduction to HTML 2",
    pElement: "Implement the template of the following <a href=\"https://madalinamp.github.io/the-player-hw/index.html\">picture</a> with HTML & CSS only.",
    divID: "assignment2"
}]

for (let i = 0; i<=assignments.length; i++) {
    const assignment = assignments[i];
    displayAssignmentDiv(assignment.h3Element,
                         assignment.pElement,
                         assignment.divID);
}