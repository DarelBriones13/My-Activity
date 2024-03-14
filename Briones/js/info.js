const leftDiv = ( title, para1, contactBtn) => {
    let div = document.createElement("div")
    div.className = "classL"
    div.innerHTML = `
    <h1 class = "title">${title}</h1>
    <p class = "paragraph">${para1}</p>
    <button>${contactBtn}</button>`
    

    return div
}

export { leftDiv }