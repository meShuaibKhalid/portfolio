import "../src/style.css";
import "../src/image-popup";

const darkModeToggle = document.getElementById("color_mode");
darkModeToggle?.addEventListener("click", () => {
    darkModeToggle.classList.toggle('uil-moon');
    darkModeToggle.classList.toggle('uil-sun');
    document.getElementsByTagName('body')[0].classList.toggle('dark-mode')
});