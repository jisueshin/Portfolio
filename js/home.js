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

workArray = []

/*inputting file as objects ******************************************/
for (const workItem of allWork){
    let workTitle = workItem.title;
    let workCourse = workItem.course;
    let workDate = workItem.date;
    let workTags = workItem.relTags;
    let workImageFile = workItem.imageFile;
    let workImageAlt = workItem.imageAlt;
    let workType = workItem.workType;
    let workObject = new work(workTitle, workCourse, workDate, workTags, workImageFile, workImageAlt, workType);

    if (workItem.sampleDisplay == true){
        workObject.display = true;
    } 

    if (workItem.blurb != null){
        blurb = workItem.blurb;
        workObject.blurb = blurb;
    } 

    workArray.push(workObject);
}

/*creating elements for samples with template*********************************/
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

/*updating info on template******************************************/
function updateSampleDisplay(project, sampleBlock){
    /*updating image */
    sampleImage = sampleBlock.querySelector(".sample-image");
    sampleImage.src = "assets/" + project.imageFile;
    sampleImage.alt = project.imageAlt;

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
    /* updating links */
    let sampleLink = sampleBlock.querySelector(".see-more");
    sampleLink.href = "detail.html?work=" + project.course;
}

/*animating reveals for templates******************************************/
function revealSamples(){
    let blocksList = document.querySelectorAll(".sample-block");
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

window.addEventListener("scroll", revealSamples)
