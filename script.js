const aside = document.querySelector("aside");
const closeBtn = document.querySelector("#close");
const openBtn = document.querySelector("#open");
const stickyHeader = document.querySelector(".sticky-header");

document.addEventListener("DOMContentLoaded", function () {
  closeBtn.addEventListener("click", function () {
    closeAside();
  });
  openBtn.addEventListener("click", function () {
    openAside();
  });
});

document.addEventListener("scroll", function () {
  let y = window.pageYOffset;
  if (y > 128) {
    stickyHeader.style.position = "fixed";
  } else {
    stickyHeader.style.position = "inherit";
  }
});

function closeAside() {
  aside.style.transform = "translateX(-100vw)";
}

function openAside() {
  aside.style.transform = "translateX(0)";
}
