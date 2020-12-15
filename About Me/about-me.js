const container = document.getElementById("container");

function displayAssignmentDiv(assignmentTitle, assignmentDescription, aCodeLink, imgLink, assignmentID) {
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

    const assignmentImg = document.createElement("img");
    assignmentImg.src=imgLink
    assignmentImg.classList.add("img-style");

    assignmentDiv.appendChild(assignmentImg);

    const upArrowAnchor = document.createElement("a");
    upArrowAnchor.href="#shortcuts";
    
    const upArrowButton = document.createElement("button")
    upArrowAnchor.innerText="⤴";
    upArrowAnchor.classList.add("arrow-buttons");

    upArrowAnchor.appendChild(upArrowButton);

    assignmentDiv.appendChild(upArrowAnchor);

    container.appendChild(assignmentDiv);
}
