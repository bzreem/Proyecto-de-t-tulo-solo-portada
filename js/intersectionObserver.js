const d = document;
export default function Intersection() {
  const $sectionGames = d.querySelector(".section-create-games figure");
  const $video = d.createElement("video");
  $video.src = "assets/video/battlefield_Trim.mp4";
  const $fragment = d.createDocumentFragment();
  // const $p = d.querySelectorAll(".section-create-games .information-games p");
let myInterval;
  const call = (entries) => {
    entries.forEach((e) => {
      console.log(e)
      if (e.isIntersecting) {
       myInterval= setTimeout(() => {
          $video.classList.add("video-play");
          $video.muted = true;
          $video.play();
          $fragment.appendChild($video);
          $sectionGames.innerHTML = "";
          $sectionGames.appendChild($fragment);
         
          $video.addEventListener("ended", ()=>{
            if($video.ended){
              $sectionGames.innerHTML = ""
              $sectionGames.innerHTML =`<div class="information-games">
                  <p>¿Por qué solo jugar, cuando puedes crear tu propio juego?</p>
                  <p>¡Accede a los últimos cursos de creación de videojuegos!</p>
              </div>`;
              
            }     
          })
      
        }, 1500);

      } else {

        clearTimeout(myInterval)
        $video.pause();
      }

    });
  };

  let options = {
    threshold: 0.8,
  };

  const observer = new IntersectionObserver(call, options);

  observer.observe(d.querySelector(".section-create-games"));
}
