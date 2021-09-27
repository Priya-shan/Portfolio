/* Testing changes */

console.log('hii');
(() =>{
    const aboutSection = document.querySelector(".about-section");
    console.log(aboutSection);
    var tabsContainer = document.querySelector(".about-tabs");
    console.log(tabsContainer);
    tabsContainer.addEventListener("click",(event)=>{
        console.log(event.target);
    if(event.target.classList.contains("tab-item") && !event.target.classList.contains('active')){
        const target = event.target.getAttribute("data-target");
        //deactivate existing active tab item
        tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
        //console.log(tabsContainer.querySelector(".active").classList);
        //activate new tab item
        event.target.classList.add("active","outer-shadow");
        //deactivate existing tab content
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        //activate new tab content
        aboutSection.querySelector(target).classList.add("active");
    }
    })
})();


window.addEventListener("load",()=>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(()=>{
         document.querySelector(".preloader").style.display="none";
        
    },600)
})