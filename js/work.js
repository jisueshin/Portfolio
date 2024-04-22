class Research {
    constructor(title, blurb){
        this.title = title;
        this.blurb = blurb;
    }
}

new Research("hello", "hi")

const papers = [
    ["Ethics and Perception of AI-generated Images in Political Campaigns", "FATE fall 2023"],
    ["Clinton and Bush Administrations' Approach to Denuclearization of North Korea: a Decision Science Perspective", "hi2"],
    ["Lynching in Post-Reconstruction America", "blurb"]
]

let expanded = false 

const researchHeader = document.querySelector("#research-header")
researchHeader.addEventListener("click", expandResearch)

function expandResearch(){
    if (expanded == false){
        for (const paper of papers){
            let title = paper[0];
            let courseInfo = paper[1];
            addPaper(paper, title, courseInfo);
        }
        expanded = true; 
    }
    else{
        closeResearch();
        expanded = false 
    }
}

function addPaper(paper, title, courseInfo){
    const template = document.querySelector('#paper-template');
    const clone = template.content.cloneNode(true);
    let newPaper = clone.querySelector("#work-paper");
    newPaper.innerText = title;
    let newPaperInfo = clone.querySelector(".paper-course");
    newPaperInfo.innerText = courseInfo;
    const researchContainer = document.querySelector(".work-research");
    researchContainer.append(newPaper);
    researchContainer.append(newPaperInfo);
}

function closeResearch(){
    let currentPapers = document.querySelectorAll("#work-paper");
    currentPapers.forEach((currPaper) => currPaper.remove());
}

