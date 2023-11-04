
$('.hide').on('click', function(){
    // $('.el').hide();
    // $('.el').fadeOut();
    $('.el').slideUp();
});

$('.show').on('click', function(){
    // $('.el').show();
    // $('.el').fadeIn();
    $('.el').slideDown();
});

$('.toggle').on('click', function(){
    // $('.el').toggle();
    // $('.el').fadeToggle();
    $('.el').slideToggle();
});
