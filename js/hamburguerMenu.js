const d = document;
export default function hamburguerMenu() {
  const $menu = d.querySelector(".menu-hamburguer");
  const $nav = d.querySelector("header nav");
  d.addEventListener("click", (e) => {
    const $img = d.querySelector(".menu-click img");
    if (
      e.target.matches(".menu-click") ||
      e.target.matches(".menu-click img")
    ) {
      e.preventDefault();
      $menu.classList.toggle("active-menu");
      $nav.classList.toggle("active-menu");
      if ($menu.className.match("active-menu")) {
        $img.src = "assets/logos/cerrar.svg";
      } else {
        $img.src = "assets/logos/menu.svg";
      }
    }
  });
}
