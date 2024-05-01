class work {
    constructor(workTitle, workCourse, workDate, workTags, workImageFile, workImageAlt, workType){
        this.title = workTitle;
        this.course = workCourse;
        this.date = workDate;
        this.relTags = workTags;
        this.imageFile = workImageFile;
        this.imageAlt = workImageAlt;
        this.workType = workType;
    }
}

/*inputting projects as objects ******************************************/
workArray = []

for (const workItem of allWork){
    let workTitle = workItem.title;
    let workCourse = workItem.course;
    let workDate = workItem.date;
    let workTags = workItem.relTags;
    let workImageFile = workItem.imageFile;
    let workImageAlt = workItem.imageAlt;
    let workType = workItem.workType;
    let workObject = new work(workTitle, workCourse, workDate, workTags, workImageFile, workImageAlt, workType);

    if (workItem.extraLink != null){
        workObject.extraLink = workItem.extraLink;
        console.log(workArray)
    }

    workArray.push(workObject);
}

/*creating elements for the projects with template ****************************/
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

/*updating info on templates ******************************************/
function updateWorkDisplay(workItem, workBlock){
    /*inserting link to each work block */
    if (workItem.extraLink != null){
        workBlock.href = workItem.extraLink;
        workBlock.setAttribute("target", "_blank");
    }
    else{
        let currWorkLink = "detail.html?work=" + workItem.course;
        workBlock.href = currWorkLink;
    }

    /*updating title */
    let currWorkTitle = workBlock.querySelector(".work-title");
    currWorkTitle.innerText = workItem.title;

    /*updating img */
    let currWorkImg = workBlock.querySelector(".work-img");
    currWorkImg.src = "assets/" + workItem.imageFile;
    currWorkImg.alt = workItem.imageAlt;

    /*updating tags */
    let tagRow = workBlock.querySelector(".tag-row");
    for (const tagItem of workItem.relTags){
        let tagDisplay = document.createElement("p");
        tagDisplay.textContent = tagItem;
        tagDisplay.setAttribute("class", "HCI-tag");
        tagRow.appendChild(tagDisplay);
    }
}

/*reveal animation for projects ******************************************/
revealWork()

function revealWork(){
    let blocksList = document.querySelectorAll(".work-block");
    const windowHeight = window.innerHeight; 
    for (const block of blocksList){
        blockHeight = block.getBoundingClientRect().top
        /*close enough and should reveal */
        if (blockHeight < windowHeight - 100){
            block.style.opacity = 1;
            block.style.transform = "translateY(0)"
        }
        /* not close should stay hidden */
        else{
            block.style.opacity = 0;
            block.style.transform = "translateY(50px)"
        }
    }
}

window.addEventListener("scroll", revealWork)

