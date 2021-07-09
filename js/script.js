import { Text, Image } from "./res.js";
import { imgAnim, slideDown } from "./animation.js";



console.log(Image.length)

function scene3() {
   const div = document.querySelector('#scene-3')
   const img = document.querySelector('#scene-3 img')
   const title = document.querySelector('#scene-3 .title')
   const divMarginTop = getComputedStyle(div).marginTop
   div.style.marginTop = divMarginTop
   div.style.height = div.offsetHeight
   imgAnim(img, Image, 25, 'vw', 10)
   title.style.display = 'none'
   setTimeout(() => {
      slideDown(title, 10, 0)
   }, 1000);
}

scene3()
