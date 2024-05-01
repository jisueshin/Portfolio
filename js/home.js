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

    if (workItem.sampleDisplay == true){
        workObject.display = true;
    } 

    if (workItem.blurb != null){
        blurb = workItem.blurb;
        workObject.blurb = blurb;
    } 

    workArray.push(workObject);
}
console.log(workArray)

function addSampleWork(project){
    const template = document.querySelector("#sample-template");
    const clone = template.content.cloneNode(true);
    let sampleBlock = clone.querySelector(".sample-block");
    let samplesContainer = document.querySelector("#home-samples");
    samplesContainer.append(sampleBlock);
    updateSampleDisplay(project, sampleBlock); 
}

for (const project of workArray){
    if (project.display === true){
        addSampleWork(project);
    } 
}

function updateSampleDisplay(project, sampleBlock){
    /*updating image */
    sampleImage = sampleBlock.querySelector(".sample-image");
    sampleImage.src = "assets/" + project.imageFile;

    /*updating title */
    sampleTitle = sampleBlock.querySelector(".sample-title");
    sampleTitle.innerText = project.title;

    /*updating blurb*/
    sampleBlurb = sampleBlock.querySelector(".sample-blurb");
    sampleBlurb.innerText = project.blurb;

    /*updating tags */
    let tagRow = sampleBlock.querySelector(".tag-row");
    for (const tagItem of project.relTags){
        let tagDisplay = document.createElement("p");
        tagDisplay.textContent = tagItem;
        tagDisplay.setAttribute("class", "HCI-tag");
        tagRow.appendChild(tagDisplay);
    }
    /* TODO: update links!!!!!! */
}


function updateWorkDisplay(sampleBlock){
    /*inserting link to each work block */
    let currSampleLink = "detail.html?work=" + workItem.course;
    workBlock.href = currSampleLink;
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

function revealSamples(){
    let blocksList = document.querySelectorAll(".sample-block");
    const windowHeight = window.innerHeight; 
    for (const block of blocksList){
        blockHeight = block.getBoundingClientRect().top
        /*close enough and should reveal */
        if (blockHeight < windowHeight - 100){
            block.style.opacity = 1;
            /*block.style.transition = "opacity 0.5s ease"*/
            block.style.transform = "translateY(0)"
        }
        /* not close should stay hidden */
        else{
            block.style.opacity = 0;
            block.style.transform = "translateY(50px)"
        }
    }
}

window.addEventListener("scroll", revealSamples)
