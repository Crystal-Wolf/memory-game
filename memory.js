document.addEventListener('DOMContentLoaded', function () {
    var x = document.querySelectorAll(".tile-wrap");
    x.forEach(link=>{
        link.addEventListener("click",function(){
            link.classList.toggle("flipped");
         })
    })
 });