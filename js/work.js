console.log(allWork[0].title)

for (const paper of allWork){
    let paperTitle = paper.title;
    let paperCourse = paper.course;
    let paperTags = paper.tags;
    addPaper(paperTitle, paperCourse, paperTags);
    /*addTags(paperTags);*/
}

function addPaper(paperTitle, paperCourse, paperTags){
    const template = document.querySelector('#research-template');
    const clone = template.content.cloneNode(true);
    let researchBlock = clone.querySelector(".research-block");
    const researchContainer = document.querySelector(".research-row");
    researchContainer.append(researchBlock);
    updatePaper(researchBlock, paperTitle, paperCourse, paperTags);
}

function updatePaper(researchBlock, paperTitle, paperCourse, paperTags){
    let researchTitle = researchBlock.querySelector(".research-title");
    researchTitle.innerText = paperTitle;
    let researchImg = researchBlock.querySelector(".research-img");
    researchImg.src = "assets/" + paperCourse + ".jpg";
    let tagRow = researchBlock.querySelector(".tag-row");
    for (const tag of paperTags){
        console.log(tag)
        let tagDisplay = document.createElement("p");
        tagDisplay.textContent = tag;
        tagDisplay.setAttribute("class", "HCI-tag")
        console.log(tagDisplay)
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

