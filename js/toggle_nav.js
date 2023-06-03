const toggleBtn = document.querySelector(".nav-toggle");
const toggleBtnIcon = document.querySelector(".nav-toggle i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener('click', function () {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark': 'fa-solid fa-bars';
});