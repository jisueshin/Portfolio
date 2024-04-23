class work {
    constructor(workTitle, workCourse, workDate, workTags, workImageFile, workType){
        this.title = workTitle;
        this.course = workCourse;
        this.date = workDate;
        this.relTags = workTags;
        this.imageFile = workImageFile;
        this.workType = workType;
    }
}

workArray = []

for (const workItem of allWork){
    let workTitle = workItem.title;
    let workCourse = workItem.course;
    let workDate = workItem.date;
    let workTags = workItem.relTags;
    let workImageFile = workItem.imageFile;
    let workType = workItem.workType;
    let workObject = new work(workTitle, workCourse, workDate, workTags, workImageFile, workType);
    workArray.push(workObject);
}

for (const workItem of workArray){
    addWork(workItem);
}

function addWork(workItem){
    const template = document.querySelector('#work-template');
    const clone = template.content.cloneNode(true);
    let workBlock = clone.querySelector(".work-block");
    let researchContainer = document.querySelector(".research-grid");
    let projectsContainer = document.querySelector(".projects-grid");
    let currWorkType = workItem.workType;
    if (currWorkType == "research"){
        researchContainer.append(workBlock);
    }
    else{
        projectsContainer.append(workBlock);
        let projectIndex = workArray.indexOf(workItem);
        let projectBlockID = "project-block" + projectIndex;
        workBlock.setAttribute("id", projectBlockID);
    };
    updateWorkDisplay(workItem, workBlock);
}

function updateWorkDisplay(workItem, workBlock){
    /*inserting link to each work block */
    let currWorkLink = "detail.html?work=" + workItem.course;
    workBlock.href = currWorkLink;
    console.log(workBlock.href)
    /*updating title */
    let currWorkTitle = workBlock.querySelector(".work-title");
    currWorkTitle.innerText = workItem.title;
    /*updating img */
    let currWorkImg = workBlock.querySelector(".work-img");
    currWorkImg.src = "assets/" + workItem.imageFile;
    /*updating tags */
    let tagRow = workBlock.querySelector(".tag-row");
    for (const tagItem of workItem.relTags){
        let tagDisplay = document.createElement("p");
        tagDisplay.textContent = tagItem;
        tagDisplay.setAttribute("class", "HCI-tag");
        tagRow.appendChild(tagDisplay);
    }
}



/*function addTags(paperTags){
    let tagRow = document.querySelector(".tag-row");
    for (const tag of paperTags){
        console.log(tag)
        let tagDisplay = document.createElement("p");
        tagDisplay.textContent = tag;
        console.log(tagDisplay)
        tagRow.appendChild(tagDisplay);
    }
}*/
/*
const papers = [
    ["Ethics and Perception of AI-generated Images in Political Campaigns", "FATE fall 2023"],
    ["Clinton and Bush Administrations' Approach to Denuclearization of North Korea: a Decision Science Perspective", "hi2"],
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
}*/

