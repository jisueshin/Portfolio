let aboutMePara = [
    "I’m a third-year student at Carnegie Mellon studying International Relations and Human Computer Interaction. International relations and domestic policy are increasingly intertwined with technology in the modern day. I’m interested in exploring the implications of the intersection between those two spheres and how we can better harness technology to shape policy.",
    "I’m currently based in Pittsburgh, PA, but prior to that, I’ve lived in Seoul, South Korea and Shanghai, China. My interest in East Asian geopolitical issues stems from this background.",
    "In my free time, you can find me on movie marathons or exploring new recipes to try out on YouTube."
]

/*creating paragraph element on page*/
for (const para of aboutMePara){
    let mePara = document.createElement("p");
    mePara.textContent = para;
    mePara.setAttribute("class", "about-detail")
    let aboutText = document.querySelector(".about-text");
    aboutText.appendChild(mePara);

}