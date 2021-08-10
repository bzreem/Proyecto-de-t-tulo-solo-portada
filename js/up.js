const d = document;
const w = window
const $button = d.querySelector(".swip-up")
export default function swipUp(){
    w.addEventListener("scroll", ()=>{
        if(w.scrollY >=1000){
            $button.classList.add("is-swip-active")

            d.addEventListener("click", e=>{
                if(e.target.matches(".swip-up")){
                    w.scrollTo(0, 0)
                }
            })
        }else{
            $button.classList.remove("is-swip-active")
        }
    })  
}