const btnWhatsApp = document.querySelector('.btn-whatsapp');
const btnGmail = document.querySelector('.btn-gmail');
const copyIconWhatsApp = document.querySelector('.btn-whatsapp i');
const copyIconGmail = document.querySelector('.btn-gmail i');

const linkWhatsApp = document.querySelector('.link-whatsapp');
const linkGmail = document.querySelector('.link-gmail');

let isCopyWhatsApp = false;
let isCopyGmail = false;

btnWhatsApp.addEventListener('click', function () {
    if (isCopyGmail) {
        copyIconGmail.classList = 'fa-regular fa-clone';
    }

    navigator.clipboard.writeText(linkWhatsApp.innerHTML);

    isCopyWhatsApp = copyIconWhatsApp.classList.contains('fa-clone');
    if (isCopyWhatsApp) {
        copyIconWhatsApp.classList = 'fa-solid fa-check';
    }
});

btnGmail.addEventListener('click', function () {
    if (isCopyWhatsApp) {
        copyIconWhatsApp.classList = 'fa-regular fa-clone';
    }

    navigator.clipboard.writeText(linkGmail.innerHTML);

    isCopyGmail = copyIconGmail.classList.contains('fa-clone');
    if (isCopyGmail) {
        copyIconGmail.classList = 'fa-solid fa-check';
    }
});