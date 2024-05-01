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

let currImg = document.querySelector(".detail-img")
currImg.src = "assets/" + currWork.imageFile

let currTeam = document.querySelector(".detail-team")
if (currWork.team != null){
    currTeam.innerText = "In collaboration with " + currWork.team
}

/*updating text in main section of detail page */
const detailMain = document.querySelector(".detail-main")

/*adding image after one paragraph */
if (currWork.detailDesc != null){
    for (const item of currWork.detailDesc){
        let detailPara = document.createElement("p");
        detailPara.innerText = item;
        detailMain.appendChild(detailPara);
        detailPara.setAttribute("class", "detail-para")
    }
}

for (var i = 0; i < currWork.detailDesc.length; i++){
    let detailPara = document.createElement("p");
    if (i = 0){
        detailPara.innerText = currWork.detailDesc[i];
        detailMain.appendChild(detailPara);
        let detailTestImage = document.createElement("img");
        detailTestImage.src = "assets/" + currWork.imageFile;
        detailTestImage.setAttribute("class", ".detail-img")
        detailMain.appendChild(detailTestImage)
    }
    else{
        detailPara.innerText = currWork.detailDesc[i];
        detailMain.appendChild(detailPara);
    }
    /*let detailPara = document.createElement("p");
    detailPara.innerText = item;
    detailMain.appendChild(detailPara);
    detailPara.setAttribute("class", "detail-para")*/
}
