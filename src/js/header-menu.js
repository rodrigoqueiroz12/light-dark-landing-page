const menuButton = document.querySelector("button.hamburguer-menu");

menuButton.addEventListener("click", (_) => {
  const menu = document.querySelector("nav#menu");
  const contactButton = document.querySelector("a.contact-button");

  const body = document.body;

  menuButton.classList.contains("active")
    ? menuButton.classList.remove("active")
    : menuButton.classList.add("active");

  body.classList.contains("active")
    ? body.classList.remove("active")
    : body.classList.add("active");

  menu.classList.contains("active")
    ? menu.classList.remove("active")
    : menu.classList.add("active");
  
  contactButton.classList.contains("active")
    ? contactButton.classList.remove("active")
    : contactButton.classList.add("active");
});
