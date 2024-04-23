const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const workName = params.get("work");

let currWork = ""

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

let currTitle = document.querySelector(".detail-title")
currTitle.innerText = currWork.title

let currDate = document.querySelector(".detail-date")
currDate.innerText = currWork.date

let currImg = document.querySelector(".detail-img")
currImg.src = "assets/" + currWork.imageFile
