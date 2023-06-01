$(document).ready(function () {
    $path = ''
    if (document.title === 'Home Page')
        $path = './html/footer.html';
    else
        $path = './footer.html';

    $('footer').load($path);
});