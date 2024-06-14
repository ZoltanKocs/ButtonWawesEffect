const btnElement = document.querySelector(".btn");

btnElement.addEventListener("mouseover",(event)=>{
   //console.log(event.pageY - btnElement.offsetTop);
   const x = (event.pageX - btnElement.offsetLeft);
   const y = (event.pageY - btnElement.offsetTop);

   btnElement.style.setProperty("--xPos", x + "px");
   btnElement.style.setProperty("--yPos", y + "px");
   
})