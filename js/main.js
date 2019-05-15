$('.fa-angle-double-left').click(function(){
    $('nav').toggleClass('navmini');
    $('.fa-angle-double-left').toggleClass('icon-rotate');
    $('.sidebar').toggleClass('d-none');
    $('.main-content').toggleClass('main-content-full');
})

$('.index-tab').click(function(){
    $('.index-tab').removeClass('active');
    $(this).addClass('active');
})

$('.nav-link').click(function(){
    $('.nav-link').removeClass('active');
    
    $(this).addClass('active');
    if(!$(this).hasClass('active')){
        console.log($(this).hasClass('active'));
    }
})

