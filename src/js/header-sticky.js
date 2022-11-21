let header = document.querySelector("header.header");
let navOffset = header.offsetTop;

window.onscroll = () => sticky();

const sticky = () => {
  window.scrollY > navOffset
    ? header.classList.add("fixed-header")
    : header.classList.remove("fixed-header");
};
