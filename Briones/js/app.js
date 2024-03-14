import { leftDiv  } from "./info.js";
import { rightDiv } from "./image.js";
import { project } from "./card.js";

const data1 = {
    title: "Briones, Darel",
    para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    contactBtn:"Contact me",
    img: "man.png",
}

const data2 = {
    title2:"PROJECT COMPLTE",
    img1:"proj.jpg",
    img2:"proj.jpg",
    img3:"proj.jpg",
    para2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    learnBtn:"Learn More"
}

const { title, para1, contactBtn, img } = data1
const { title2, img1, img2, img3, para2, learnBtn } = data2

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(leftDiv(title, para1, contactBtn))
sectionOne.append(rightDiv(img))
sectionTwo.append(project(title2, img1, img2, img3, para2, learnBtn))