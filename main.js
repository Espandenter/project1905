const playSlider = ()=>{
    const portfolioItem = document.querySelectorAll(".portfolio-item"),
    dot = document.querySelectorAll(".dot"),
    arrowRight=document.getElementById("arrow-right"),
    arrowLeft=document.getElementById("arrow-left"),
    allProgects=document.getElementById("all-progects");
    let idAnimate = setInterval(animateSlide, 5000); 
    allProgects.addEventListener("mouseover", (event) =>{
        clearInterval(idAnimate);
    })

    allProgects.addEventListener("mouseout", (event) =>{
        idAnimate = setInterval(animateSlide, 5000);
    })

    const addClass = (item, index, classStyle) => {
        item[index].classList.add(classStyle);
    };
    const removeClass = (item, index, classStyle) => {
        item[index].classList.remove(classStyle);
    };

    let count = 0;
    function animateSlide(){
        removeClass(portfolioItem, count, "portfolio-item-active");
        removeClass(dot, count, "dot-active");
        count++;
        if (count === portfolioItem.length) count = 0;
        addClass(portfolioItem, count, "portfolio-item-active");
        addClass(dot, count, "dot-active");
    }
    function animateSlideBack(){
        removeClass(portfolioItem, count, "portfolio-item-active");
        removeClass(dot, count, "dot-active");
        count--;
        if (count < 0) count = portfolioItem.length-1;
        addClass(portfolioItem, count, "portfolio-item-active");
        addClass(dot, count, "dot-active");
    }
    arrowRight.addEventListener("click", (event) =>{
        animateSlide();
    })

    arrowLeft.addEventListener("click", (event) =>{
        animateSlideBack();
    })
}
playSlider();