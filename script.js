document.addEventListener('DOMContentLoaded',()=>{
  const deno =  document.querySelector('.deno');
  const grid =  document.querySelector('.grid');

//   console.log(deno);
 function Control(e){
   if(e.keyCode === 32){
    console.log("Jump!");
    jump()
    
   }
 }

 let position = 0
function jump(){
    let timeId = setInterval(function (){
        // move up
        position += 30
        deno.style.bottom = "px"
    }, 20)
}

  document.addEventListener("keyup",Control)
})