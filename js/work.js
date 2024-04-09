class Research {
    constructor(title, blurb){
        this.title = title;
        this.blurb = blurb;
    }
}

new Research("hello", "hi")

const papers = [
    ["Ethics and Perception of AI-generated Images in Political Campaigns", "hihi"],
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
            addPaper(paper, title);
        }
        expanded = true; 
    }
    else{
        closeResearch();
        expanded = false 
    }
}

function addPaper(paper, title){
    const template = document.querySelector('#paper-template');
    const clone = template.content.cloneNode(true);
    let newPaper = clone.querySelector("#work-paper");
    newPaper.innerText = title;
    const researchContainer = document.querySelector(".work-research");
    researchContainer.append(newPaper);
}

function closeResearch(){
    let currentPapers = document.querySelectorAll("#work-paper");
    currentPapers.forEach((currPaper) => currPaper.remove());
}
/*function expandResearch(paper){
    const template = document.querySelector('#paper-template');
    const clone = template.content.cloneNode(true);
    paper.element = clone.querySelector("#work-paper");
    const researchContainer = document.querySelector(".work-research");
    researchContainer.append(paper.element);
    updatePaper()
}

function updatePaper(paper){
    let title = paper[0]
    paper.element.innerText = title;   
}*/
