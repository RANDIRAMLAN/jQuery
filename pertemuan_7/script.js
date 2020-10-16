$(document).ready(function () {

    $ | ('.navbar li')

    $('.navbar li').hover(function () {
        $(this).find('ul').slideToggle("normal");
    });
});
