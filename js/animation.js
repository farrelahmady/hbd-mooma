const imgAnim = (elm, src = [], distance, unit = 'px', interval = 10) => {
   elm.style.position = 'relative'
   let pos = distance
   let opc = 0
   let index = 0
   const changeImg = () => {
      if (index === src.length) {
         index = 0
      }
      elm.src = "../img/" + src[index]
   }

   elm.onload = () => {
      let anim = setInterval(() => {
         elm.style.left = pos + unit
         elm.style.opacity = opc
         if (opc >= 1) {
            elm.style.left = 0 + unit
            clearInterval(anim)
            setTimeout(() => {
               anim = setInterval(() => {
                  elm.style.left = pos + unit
                  elm.style.opacity = opc
                  if (opc <= 0) {
                     clearInterval(anim)
                     index++
                     pos = distance
                     changeImg()
                  }
                  
                  pos -= distance/(interval*10)
                  opc -= 1/(interval*10)
               }, interval);
            }, 2000);
         }

         pos -= distance/(interval*10)
         opc += 1/(interval*10)
      }, interval);
   }
   changeImg()
}

const slideDown = (elm, interval = 10, opacity = 1) => {
   elm.style.display = 'block'
   elm.style.overflow = 'hidden'
   let elmHeight = elm.offsetHeight
   let height = 0
   let opc = opacity
   elm.style.height = '0px'
   elm.style.opacity = opacity

   let anim = setInterval(() => {
      elm.style.height = height + 'px'
      elm.style.opacity = opc
      if (height >= elmHeight) {
         elm.style.height = elmHeight + 'px'
         clearInterval(anim)
      }
      height += elmHeight/(interval*10)
      opc += 1/(interval*10)
   }, interval);

}

export {imgAnim, slideDown}