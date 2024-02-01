function toggleMenu() {
    var login = document.querySelector('.sample');
    login.classList.toggle("visible");
    var user = document.querySelector('.fa-user');
    user.style.color = (user.style.color === 'black') ? 'white' : 'black';
    
}

const media =()=>{
    let q = matchMedia("(max-width:700px)");
    if(q.matches){
        let scrollContainer1 = document.querySelector(".gallery");
        let backBtn1 = document.getElementById("backbtn");
        let nextBtn1 = document.getElementById("nextbtn");

    nextBtn1.addEventListener("click",()=>{
      scrollContainer1.style.scrollBehavior = "smooth";
      scrollContainer1.scrollLeft += 143;
    })
    backBtn1.addEventListener("click",()=>{
      scrollContainer1.style.scrollBehavior = "smooth";
      scrollContainer1.scrollLeft -= 143;
    })
    }else{
        let scrollContainer1 = document.querySelector(".gallery");
        let backBtn1 = document.getElementById("backbtn");
        let nextBtn1 = document.getElementById("nextbtn");

    nextBtn1.addEventListener("click",()=>{
      scrollContainer1.style.scrollBehavior = "smooth";
      scrollContainer1.scrollLeft += 220;
    })
    backBtn1.addEventListener("click",()=>{
      scrollContainer1.style.scrollBehavior = "smooth";
      scrollContainer1.scrollLeft -= 220;
    })
    }
}
onload = media;
