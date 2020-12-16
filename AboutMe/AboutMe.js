const container = document.getElementById("container");

function displayAssignmentDiv(imgLink, hobbyTitle, hobbyDescription, hobbyID) {
    const hobbyDiv = document.createElement("div");
    hobbyDiv.setAttribute("id", hobbyID);
    hobbyDiv.classList.add("hobby");

    const upArrowAnchor = document.createElement("a");
    upArrowAnchor.href="#shortcuts";
    upArrowAnchor.innerText="⤴";
    upArrowAnchor.classList.add("arrow-buttons");

    hobbyDiv.appendChild(upArrowAnchor);

    const hobbyImg = document.createElement("img");
    hobbyImg.src=imgLink
    hobbyImg.classList.add("img-style");

    hobbyDiv.appendChild(hobbyImg);

    const hobbyDetailsDiv = document.createElement("div");

    const title = document.createElement("h3");
    const titleNode = document.createTextNode(hobbyTitle);
    title.classList.add("hobby-details-title");

    title.appendChild(titleNode);
    hobbyDetailsDiv.appendChild(title);

    const aboutHobby = document.createElement("p");
    aboutHobby.innerHTML=hobbyDescription;

    hobbyDetailsDiv.appendChild(aboutHobby);

    hobbyDetailsDiv.classList.add("hobby-details");

    hobbyDiv.appendChild(hobbyDetailsDiv);

    container.appendChild(hobbyDiv);
}

const hobbies = [{
    imgLink: "../Pictures/hobby1picture.PNG",
    h3Element: "Digital drawing",
    pElement: "I've liked to draw as a hobby even since I was in high school, because it relaxes me when I'm stressed. Even though I am not too confident to share my art, I still like to practice for myself in my free time. Visuals and arts have always been on my liking.",
    divID: "hobby1"
}, {
    imgLink: "../Pictures/hobby2picture.PNG",
    h3Element: "Playing games",
    pElement: "Another passion I found when I was in high school was to play online games. The games I like to play, usually focus on a fantasy theme that is also inspired by Japanese animations art style. Currently I am playing with some of my University colleagues a newly release game this year called \'Genshin Impact\'.",
    divID: "hobby2"
}, {
    imgLink: "../Pictures/hobby3picture.PNG",
    h3Element: "Watching anime & Asian dramas",
    pElement: "This is just a habit I've built since middle school. I prefer the topics that Asian content brings me, because I find them interesting. Since I'm very passionate about arts and admiring it, I love to watch animations on top of actual movies with real people. I find animation a very ambitious and beautiful industry.",
    divID: "hobby3"
}, {
    imgLink: "../Pictures/hobby4picture.PNG",
    h3Element: "Writing for fun",
    pElement: "Since I'm so intrigued by fiction, sometimes I like to open Word and try my own imagination. I like to write down my ideas and project them onto original characters that I may come up with. This is also something I do not share with others and I'm rather critical about my own creative work.",
    divID: "hobby4"
}, {
    imgLink: "../Pictures/hobby5picture.PNG",
    h3Element: "Cycling",
    pElement: "I grew up learning how to ride a bicycle and I had a lot of other friends my age who also practiced it. It became my second nature to know how to ride a bike and whenever I have free time, since I live in a small village with many country roads, I like to take my bike for a little trip.",
    divID: "hobby5"
}, {
    imgLink: "../Pictures/hobby6picture.PNG",
    h3Element: "Nail art",
    pElement: "This is a hobby I made together with a childhood friend who likes to watch a lot of tutorials on YouTube about how to make nail art and different techniques about it. It's a pretty fun activity that requires creativity and patience, which I both like to believe that I own, so I grew very fond of it in a short time.",
    divID: "hobby6"
}];

for (let i = 0; i<=hobbies.length; i++) {
    const hobby = hobbies[i];
    displayAssignmentDiv(hobby.imgLink,
                         hobby.h3Element,
                         hobby.pElement,
                         hobby.divID);
}