const checkbox = document.getElementById("checkbox");
const header = document.getElementById("header");
const sticky = header.offsetTop;

// dark theme setup begins here
let darkMode = "";

if (localStorage.getItem("dark-mode")) {
  darkMode = localStorage.getItem("dark-mode");
} else {
  darkMode = "off";
}

localStorage.setItem("dark-mode", darkMode);

if (localStorage.getItem("dark-mode") === "on") {
  document.body.classList.add("dark-mode");
  checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "on");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "off");
  }
});

// scroll effect
const scrollEffect = () => {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

window.addEventListener("scroll", scrollEffect);
