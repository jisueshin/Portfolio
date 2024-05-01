const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const workName = params.get("work");

let currWork = ""

/*finding object for current work being displayed */
function findCurrWork(){
    for (const workItem of allWork){
        let currCourse = workItem.course;
        if (workName == currCourse){
            currWork = workItem;
        }
    }
    return currWork
}

findCurrWork()

/* updating header elements on page */
let currTitle = document.querySelector(".detail-title")
currTitle.innerText = currWork.title

let currDate = document.querySelector(".detail-date")
currDate.innerText = currWork.date

let currCourse = document.querySelector(".detail-course")
currCourse.innerText = currWork.course

let currTeam = document.querySelector(".detail-team")
if (currWork.team != null){
    currTeam.innerText = "In collaboration with " + currWork.team
}

/*updating text in main section of detail page */
const detailMain = document.querySelector(".detail-main")

/*adding image after one paragraph */
if (currWork.detailDesc != null){
    /*adding one paragraph */
    let detailPara = document.createElement("p");
    detailPara.innerText = currWork.detailDesc[0];
    detailMain.appendChild(detailPara);
    detailPara.setAttribute("class", "detail-para")

    let currImg = document.createElement("img");
    currImg.src = "assets/" + currWork.imageFile;
    currImg.alt = currWork.imageAlt;
    detailMain.appendChild(currImg);
    currImg.setAttribute("class", "detail-img");

    /*adding rest of text */
    if (currWork.detailDesc.length > 1){
        for (var i = 1; i < currWork.detailDesc.length; i++){
            let detailPara = document.createElement("p");
            detailPara.innerText = currWork.detailDesc[i];
            detailMain.appendChild(detailPara);
            detailPara.setAttribute("class", "detail-para")
        }
    }
}

/*animating image reveals */
function revealImg(){
    let imgsList = document.querySelectorAll(".detail-img");
    const windowHeight = window.innerHeight; 
    for (const block of imgsList){
        blockHeight = block.getBoundingClientRect().top
        /*close enough and should reveal */
        if (blockHeight < windowHeight - 150){
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

window.addEventListener("scroll", revealImg)
