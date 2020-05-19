//Устинов Александр 
const playSlider = ()=>{
    const portfolioItem = document.querySelectorAll(".portfolio-item"),
    dot = document.querySelectorAll(".dot"),
    arrowRight=document.getElementById("arrow-right"),
    arrowLeft=document.getElementById("arrow-left"),
    allProgects=document.getElementById("all-progects");

    function animateSlideRight(){
        removeClass(portfolioItem, count, "portfolio-item-active");
        removeClass(dot, count, "dot-active");
        count++;
        if (count === portfolioItem.length) count = 0;
        addClass(portfolioItem, count, "portfolio-item-active");
        addClass(dot, count, "dot-active");
    }
    let Animation = setInterval(animateSlideRight, 5000); 
    allProgects.addEventListener("mouseover", (event) =>{
        clearInterval(Animation);
    })
    function animateSlideLeft(){
        removeClass(portfolioItem, count, "portfolio-item-active");
        removeClass(dot, count, "dot-active");
        count--;
        if (count < 0) count = portfolioItem.length-1;
        addClass(portfolioItem, count, "portfolio-item-active");
        addClass(dot, count, "dot-active");
    allProgects.addEventListener("mouseout", (event) =>{
        Animation = setInterval(animateSlideRight, 5000);
    })
    let count = 0;
    const addClass = (item, index, classStyle) => {
        item[index].classList.add(classStyle);
    };
    const removeClass = (item, index, classStyle) => {
        item[index].classList.remove(classStyle);
    };
    }
    arrowRight.addEventListener("click", (event) =>{
        animateSlideRight();
    })

    arrowLeft.addEventListener("click", (event) =>{
        animateSlideLeft();
    })
}
playSlider();
