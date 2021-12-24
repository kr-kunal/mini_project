const togglebtn = document.getElementsByClassName("toggle-btn")[0];
const navlinks = document.getElementsByClassName("navlinks")[0];

togglebtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});