const project = ( title2, image1, image2, image3, para2, learnBtn) => {
    let div = document.createElement("div")
    div.className = "proj"
    div.innerHTML = `
    
    <div class="proj-1">
        <img class="proj-image" src="images/${image1}" alt="project"> 
        <p class="para2">${para2}</p>
        <button class="learnBtn">${learnBtn}</button>
    </div>
    <div class="proj-2">
        <img class="proj-image" src="images/${image2}" alt="project"> 
        <p class="para2">${para2}</p>
        <button class="learnBtn">${learnBtn}</button>
    </div>
    <div class="proj-3">
        <img class="proj-image" src="images/${image3}" alt="project"> 
        <p class="para2">${para2}</p>
        <button class="learnBtn">${learnBtn}</button>
    </div>
    `
    return div
}

export { project }