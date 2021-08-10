import mediaQuerie from "./mediaQuerie.js";
import hamburguerMenu from "./hamburguerMenu.js";
import sideBar from "./sideBar.js"; 
import Intersection from "./intersectionObserver.js";
import swipUp from "./up.js";

const d = document;

d.addEventListener("DOMContentLoaded", ()=>{
    sideBar()
    mediaQuerie("(min-width : 770px)");
    hamburguerMenu();
     Intersection();
    swipUp();
})
