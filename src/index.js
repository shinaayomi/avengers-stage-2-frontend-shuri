const hamburger = document.getElementById('hamburger')


$(function() {
    $('#hamburger').on('click', function() {
        if($('.items').hasClass('active')) {
            $('.items').removeClass('active')
        }
        else{
            $('.items').addClass('active')
        }
    })
})