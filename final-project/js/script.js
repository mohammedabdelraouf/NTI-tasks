const topBtn = document.getElementsByClassName("top-btn")
const navBar = document.querySelector("nav")

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