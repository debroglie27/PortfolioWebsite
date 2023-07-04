const selection = document.querySelector('.selection');
const optionContainer = document.querySelector('.option-container');


selection.addEventListener('click', function (event) {
    selection.classList.toggle('highlight-selection');
    optionContainer.classList.toggle('show-options');
    event.stopPropagation();
});

window.addEventListener('click', function () {
    selection.classList.remove('highlight-selection');
    optionContainer.classList.remove('show-options');
});
