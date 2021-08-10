const d = document;
const $img = d.querySelectorAll(".side-bar figure img");
export default function sideBar() {
  let contador = 0;
  let cleanSetInterval;
  const controllInterval = () => {
    cleanSetInterval = setInterval(() => {
      if ($img.length - 1 > contador) {
        $img[contador].classList.add("remove");
        contador++;
        $img[contador].classList.remove("remove");
      } else {
        $img[contador].classList.add("remove");
        $img[0].classList.remove("remove");
        contador = 0;
      }
    }, 3500);
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(".next")) {
      clearInterval(cleanSetInterval);
      e.preventDefault();

      if ($img.length - 1 > contador) {
        $img[contador].classList.add("remove");
        contador++;
        $img[contador].classList.remove("remove");
        controllInterval();
      } else {
        $img[contador].classList.add("remove");
        $img[0].classList.remove("remove");
        contador = 0;
        controllInterval();
      }
    }

    if (e.target.matches(".previous")) {
      e.preventDefault();
      clearInterval(cleanSetInterval)

      if (contador > 0) {
        $img[contador].classList.add("remove");
        contador--;
        $img[contador].classList.remove("remove");
        controllInterval();
      } else {
        $img[contador].classList.add("remove");
        contador = $img.length - 1;
        $img[contador].classList.remove("remove");
        controllInterval();
      }
    }
  });
   controllInterval();
}
