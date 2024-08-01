const topBtn = document.getElementsByClassName("top-btn")
const navBar = document.querySelector("nav")

$(document).ready(function() {
 
    $(".owl-carousel").owlCarousel({

        items:2,
        margin:30,
        loop:true,
        nav:true,
        navText:['<i class="fa-solid fa-left-long  rounded-start-pill bg-primary px-3 py-2 me-1 text-white text-center fs-14"></i>' , '<i class="fa-solid fa-right-long px-3 py-2 ms-1 rounded-end-pill bg-primary text-white text-center fs-14"></i>' ],
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:2,
            }
        }
    });
   
  });
console.log(navBar);
document.addEventListener("scroll" , (e)=>{
    if (document.documentElement.scrollTop < 220)
    {
        for (var btn of topBtn)
            btn.classList.remove("h-to-v")
    }
    else{
        for (var btn of topBtn)
            btn.classList.add("h-to-v")

    } 
    
    if(document.documentElement.scrollTop > 200 && document.documentElement.scrollTop <= 300 )
    {
        navBar.classList.add("position-sticky" , "nav-top-neg")
        navBar.classList.remove("top-0")
    }
    else if(document.documentElement.scrollTop >= 300){
        navBar.classList.remove("nav-top-neg")
        navBar.classList.add("top-0")
        console.log(e);
    }
    else{
        navBar.classList.remove("position-sticky")
    }
})


for(var btn of topBtn){

    btn.addEventListener("click" ,(e)=>{
        document.documentElement.scrollTop = 0

    })
}