const productDropdown = document.getElementById("product-dropdown");
const dropdownLink = document.getElementById("dropdown-link");

const navbarLink = document.getElementById("navbar-link");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
    navbarLink.classList.toggle("active");
})