import { Text, Image } from "./res.js";
import { fadeIn, fadeOut, imgAnim, slideDown, typeWritting } from "./animation.js";


function DatenTime() {
   const date = document.querySelectorAll('header h4')[0]
   const time = document.querySelectorAll('header h4')[1]
	const day = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	setInterval(function(){
		let d = new Date();
	   let t = d.toLocaleTimeString();
	   date.innerHTML = day[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
	   time.innerHTML = t;
	}, 1);
}

function scene1() {
   const div = document.querySelector('#scene-1')
   
   fadeIn(div, 10, 'flex')
   setTimeout(() => {
      fadeOut(div, 10, 'none')
      setTimeout(() => {
         scene2()
      }, 1000);
   }, 4000);
}

function scene2() {
   const div = document.querySelector('#scene-2')
   const textArea = document.querySelector('#scene-2 .text-area')
   const paragraph = document.querySelector('#scene-2 .text-area p')
   
   div.style.display = 'flex'
   div.style.opacity = 0
   const textAreaHeight = textArea.offsetHeight + 'px'
   textArea.style.height = textAreaHeight

   fadeIn(div, 10, 'flex')
   typeWritting(paragraph, Text.Scene_2, 50, 2000)
   setTimeout(() => {
      fadeOut(div, 10, 'none')
      setTimeout(() => {
         scene3()
      }, 1000);
   }, 4000);
}

function scene3() {
   const div = document.querySelector('#scene-3')
   const img = document.querySelector('#scene-3 img')
   const title = document.querySelector('#scene-3 .title')
   const textArea = document.querySelector('#scene-3 .text-area')
   const paragraph = document.querySelector('#scene-3 .text-area p')

   div.style.display = 'flex'
   div.style.opacity = 0
   const divMarginTop = getComputedStyle(div).marginTop
   const textAreaHeight = textArea.offsetHeight + 'px'
   textArea.style.height = textAreaHeight
   div.style.marginTop = divMarginTop
   title.style.display = 'none'

   // Start Animation
   fadeIn(div, 10, 'flex')
   imgAnim(img, Image, 25, 'vw', 10)
   typeWritting(paragraph, Text.Scene_3, 50, 2000)
   setTimeout(() => {
      slideDown(title, 10)
      fadeIn(title, 10, 'flex')
   }, 4000);
}

scene1()
DatenTime()
