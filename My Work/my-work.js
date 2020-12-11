//it'd be nice if i had a function that can implement a hyperlink to the word 'image' as well. to display the templates i tried to reproduce.

const container = document.getElementById("container");

//V3 : works too
function displayAssignmentDiv(assignmentTitle, assignmentDescription, assignmentID) {
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
    const requirementsNode = document.createTextNode(assignmentDescription);

    requirements.appendChild(requirementsNode);
    assignmentDetailsDiv.appendChild(requirementsNode);

    assignmentDetailsDiv.classList.add("assignment-details");

    assignmentDiv.appendChild(assignmentDetailsDiv);

    const iframe = document.createElement("iframe");
    iframe.classList.add("iframes");

    assignmentDiv.appendChild(iframe);

    container.appendChild(assignmentDiv);
}
displayAssignmentDiv("Introduction to HTML 1",
                     "Implement with HTML and CSS your personal CV.",
                     "assignment1");
displayAssignmentDiv("Introduction to HTML 2",
                     "Implement the template of the following picture with HTML & CSS only.",
                     "assignment2");
displayAssignmentDiv("Semantic HTML",
                     "Update one of the previous homework to use semantic elements and CSS positioning techniques that you learned about. Use in your code as many elements of the following: article, aside, section, header, footer, nav, main. Try to have at least one element that's positioned using float, relative, absolute and fixed position values. Use other CSS properties to style your content, keeping in mind to avoid repetition, and to keep them well organized.",
                     "assignment3");
displayAssignmentDiv("Layouting Practice 1",
                     "Implement the following design using HTML and CSS. The font used in the layout is called \"Muli\". Use the PerfectPixel Chrome add-on to find out font sizes.",
                     "assignment4");


//hyperlinks:
const backButton = document.getElementById("home-button");

function goBack() {
    window.location.href='../Home/home.html';
}

backButton.addEventListener("click", goBack);

const myCvButton = document.getElementById("my-cv-button");

function visitMyCvPage() {
    window.location.href='../My CV/my-cv.html';
}

myCvButton.addEventListener("click", visitMyCvPage);

const aboutMeButton = document.getElementById("about-me-button");

function visitAboutMePage() {
    window.location.href='../About Me/about-me.html';
}

aboutMeButton.addEventListener("click", visitAboutMePage);

//V2 it worked at first-
// const assignments = [{
//     h3Element: "Introduction to HTML 1",
//     pElement: "Implement with HTML and CSS your personal CV.",
//     divID: "assignment1" 
// }, {
//     h3Element: "Introduction to HTML 2",
//     pElement: "Implement the template of the following picture with HTML & CSS only.",
//     divID: "assignment2"
// }]

// function displayAssignmentDiv(assignment1) {
//     for (let i = 1; i <= assignments.length; i++) {
//         const assignmentDiv = document.createElement("div");
//         assignmentDiv.setAttribute("id", assignment1.divID);
//         assignmentDiv.classList.add("assignment");

//         const assignmentDetailsDiv = document.createElement("div");

//         const title = document.createElement("h3");
//         const titleNode = document.createTextNode(assignment[i].h3Element);
//         title.classList.add("assignment-details-title");

//         title.appendChild(titleNode);
//         assignmentDetailsDiv.appendChild(title);

//         const requirements = document.createElement("p");
//         const requirementsNode = document.createTextNode(assignment[i].pElement);

//         requirements.appendChild(requirementsNode);
//         assignmentDetailsDiv.appendChild(requirementsNode);

//         assignmentDetailsDiv.classList.add("assignment-details");

//         assignmentDiv.appendChild(assignmentDetailsDiv);

//         const iframe = document.createElement("iframe");
//         iframe.classList.add("iframes");

//         assignmentDiv.appendChild(iframe);

//         container.appendChild(assignmentDiv);
//     }
// }

// displayAssignmentDiv(assignment[1]);
// displayAssignmentDiv(assignment[2]);