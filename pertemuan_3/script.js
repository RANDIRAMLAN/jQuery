$(document).ready(function () {
    // event click
    $('#click').click(function () {
        alert('sedang belajar');
    });
    // event dobleclick
    $('#doubleclick').dblclick(function () {
        // alert('sedang belajar');
        $(this).css('background-color', 'red');
    });
    //  event mouseenter
    $('.mouse').mouseenter(function () {
        $(this).css('color', 'blue');
    });
    // event mouseleave
    $('.mouse').mouseleave(function () {
        $(this).css('color', 'black');
    });

    //  event keydown
    $('#keydown').keydown(function () {
        $('#pesan_keydown').text($(this).val());
    });

    // keyup
    $('#keyup').keyup(function () {
        $('#pesan_keyup').text($(this).val());
    });

    $('.tambah').click(function () {
        let angka1 = parseInt($('.angka1').val());
        let angka2 = parseInt($('.angka2').val());
        let hasil = angka1 + angka2;
        $('.hasil').val(hasil);
    });

    $('.angka2').keyup(function () {
        let angka1 = parseInt($('.angka1').val());
        let angka2 = parseInt($('.angka2').val());
        let hasil = angka1 * angka2;
        $('.hasil').val(hasil);
    });
});