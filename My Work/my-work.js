const container = document.getElementById("container");

//Assignment 1:
const assignment1Div = document.createElement("div");
assignment1Div.classList.add("assignment");

const assignment1DetailsDiv = document.createElement("div");

const title1 = document.createElement("h3");
const title1Node = document.createTextNode("Introduction to HTML 1");
title1.classList.add("assignment-details-title");

title1.appendChild(title1Node);
assignment1DetailsDiv.appendChild(title1);

const requirements1 = document.createElement("p");
const requirements1Node = document.createTextNode("Implement with HTML and CSS your personal CV.");

requirements1.appendChild(requirements1Node);
assignment1DetailsDiv.appendChild(requirements1Node);

assignment1DetailsDiv.classList.add("assignment-details");

assignment1Div.appendChild(assignment1DetailsDiv);

const iframe1 = document.createElement("iframe");
iframe1.classList.add("iframes");

assignment1Div.appendChild(iframe1);

container.appendChild(assignment1Div);




//Assignment 2:

const assignment2Div = document.createElement("div");
assignment2Div.classList.add("assignment");

const assignment2DetailsDiv = document.createElement("div");

const title2 = document.createElement("h3");
const title2Node = document.createTextNode("Introduction to HTML 2");
title2.classList.add("assignment-details-title");

title2.appendChild(title2Node);
assignment2DetailsDiv.appendChild(title2);

const requirements2 = document.createElement("p");
const requirements2Node = document.createTextNode("Implement the template of the following picture with HTML & CSS only.");

requirements2.appendChild(requirements2Node);
assignment2DetailsDiv.appendChild(requirements2Node);

assignment2DetailsDiv.classList.add("assignment-details");

assignment2Div.appendChild(assignment2DetailsDiv);

const iframe2 = document.createElement("iframe");
iframe2.classList.add("iframes");

assignment2Div.appendChild(iframe2);

container.appendChild(assignment2Div);






//Function attempt:

// function displayAssignmentDiv(assignmentTitle, assignmentRequirements) {
//     const assignmentDiv = document.createElement("div");
//     assignmentDiv.classList.add("assignment");

//     const assignmentDetailsDiv = document.createElement("div");

//     const title = document.createElement("h3");
//     const titleNode = document.createTextNode(assignmentTitle);

//     title.appendChild(titleNode);
//     assignmentDetailsDiv.appendChild(title);

//     const requirements = document.createElement("p");
//     const requirementsNode = document.createTextNode(assignmentRequirements);

//     requirements.appendChild(requirementsNode);
//     assignmentDetailsDiv.appendChild(requirementsNode);

//     assignmentDetailsDiv.classList.add("assignment-details");

//     assignmentDiv.appendChild(assignmentDetailsDiv);

//     const iframe = document.createElement("iframe");
//     iframe.classList.add("iframes");

//     assignment1Div.appendChild(iframe);

//     container.appendChild(assignmentDiv);
// }
// displayAssignmentDiv("Introduction to HTML 1","Implement with HTML and CSS your personal CV.");