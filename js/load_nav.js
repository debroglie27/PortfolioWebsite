$(document).ready(function () {
    $path = ''
    if (document.title === 'Home Page')
        $path = './html/nav.html';
    else
        $path = './nav.html';

    $('nav').load($path);
});