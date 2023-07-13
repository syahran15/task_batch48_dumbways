let hamburgerIsOpen = false;

function openHamburger() {
  let hamburgerNavContainer = document.getElementById(
    "hamburger-nav-container"
  );

  // !hamburgerIsOpen > hamburgerIsOpen == false
  // hamburgerIsOpen > hamburgerIsOpen == true

  if (!hamburgerIsOpen) {
    console.log(hamburgerIsOpen)
    hamburgerNavContainer.style.display = "block";
    hamburgerIsOpen = true;
  } else {
    console.log(hamburgerIsOpen)
    hamburgerNavContainer.style.display = "none";
    hamburgerIsOpen = false;
  }
}

//Klik di luar sidebar untuk menghilangkan nav

const hamburger = document.getElementById("hamburger-nav-container");
const navbar = document.querySelector(".hamburger-nav-container")

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

