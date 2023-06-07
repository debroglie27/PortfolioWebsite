const toggleBtn = document.querySelector(".nav-toggle");
const toggleBtnIcon = document.querySelector(".nav-toggle i");
const dropDownMenu = document.querySelector(".dropdown-menu");

window.onload = function () {
    const isOpen = dropDownMenu.classList.contains('open');
    if (isOpen) {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
};

toggleBtn.addEventListener('click', function () {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark': 'fa-solid fa-bars';
});