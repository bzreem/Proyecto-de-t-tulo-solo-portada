const w = window;
const d = document;
const $nav = d.querySelector(".header-sticky nav");
const $menuHamburguer = d.querySelector(".menu-hamburguer");
const $fragment = d.createDocumentFragment();
export default function mediaQuerie(media) {
  let md = w.matchMedia(media);
  const resize = () => {
    if (md.matches) {
      $menuHamburguer.style.display = "none";
      $nav.innerHTML = "";
      $nav.innerHTML = `<a class=" complete-menu" href="index.html"><img src="assets/logos/prueba1.jpeg" alt="Logo"></a>
      <a class=" complete-menu" href="#">Cursos</a>
      <a class=" complete-menu" href="#">Componentes</a>
      <a class=" complete-menu" href="#">Prueba</a>
      <a class=" complete-menu" href="#"><img src="assets/logos/inicioSesion.svg" alt="Logo"></a>`;
    } else {
      $menuHamburguer.innerHTML = "";
      $nav.innerHTML = "";
      const $a = d.createElement("a");
      $a.classList.add("menu-click");
      const $img = d.createElement("img");
      $img.src = "assets/logos/menu.svg";
      $img.alt = "Menú";
      $a.appendChild($img);
      $fragment.appendChild($a);
      $nav.appendChild($fragment);

      const $a2 = d.createElement("a");
      const $img2 = d.createElement("img");
      $img2.src = "assets/logos/prueba1.jpeg";
      $img2.alt = "Logo";
      $a2.appendChild($img2);
      $fragment.appendChild($a2);
      $nav.appendChild($fragment);

      const $a3 = d.createElement("a");
      $a3.href = "session.html"
      const $img3 = d.createElement("img");
      $img3.src = "assets/logos/inicioSesion.svg";
      $img3.alt = "Sesión";
      $a3.appendChild($img3);
      $fragment.appendChild($a3);
      $nav.appendChild($fragment);

      $menuHamburguer.style.display = "block";
      $menuHamburguer.innerHTML = "";
      $menuHamburguer.innerHTML = `<a href="#">sdsdsdmsdd</a>
      <a href="#">sdsdsdmsdd</a>
      <a href="#">sdsdsdmsdd</a>
      <a href="#">sdsdsdmsdd</a>
      <a href="#">sdsdsdmsdd</a>
      <a href="#">sdsdsdmsdd</a>
      <a href="#">sdsdsdmsdd</a>`;
    }
  };
  w.addEventListener("resize", resize);

  resize();
}
