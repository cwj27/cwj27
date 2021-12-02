const content = "Welcome! sunam elementary school 3grade 7th Class!"
const text = document.querySelector(".text")
let index = 0;
 
function typing(){
  text.textContent += content[index++]
  if(index > content.length){
    text.textContent = ""
    index = 0;
  }
}
setInterval(typing, 500)