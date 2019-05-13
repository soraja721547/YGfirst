$('.fa-angle-double-left').click(function(){
    $('nav').css('width','0');
})


    $('.nav-link').click(function(){
        if($('.nav-link') != $(this)){
            $('.nav-link').removeClass('active');
            $(this).toggleClass('active');
        };
    })

