$('.fa-angle-double-left').click(function(){
    $('nav').toggleClass('navmini');
    $('.fa-angle-double-left').toggleClass('icon-rotate');
    $('.sidebar-list').toggleClass('d-none');
    $('.logo').toggleClass('d-none');
    $('.main-content').toggleClass('main-content-full');
})

$('.index-tab').click(function(){
    $('.index-tab').removeClass('active');
    $(this).addClass('active');
})

// $(window).click(function(){
//     $('.nav-link').removeClass('active');
// })
// $('.nav-link').click(function(event){
//     event.stopPropagation();
// })
$('.nav-link').click(function(){
    $('.nav-link').removeClass('active');
    
    $(this).addClass('active');
    $('.nav-link').each(function(e){
        // console.log(e.classList);
    })
    if($(this)){
        // console.log($(this).classList);
    }
})


$(function () {
    $(window).scroll(function () {
      var scrollVal = $(this).scrollTop();
      if(scrollVal >= 100){
          $('.logo').css('background-image','url(../img/LOGO4.png)');
      }else if(scrollVal < 100){
        $('.logo').css('background-image','url(../img/LOGO2.png)');
      }
    //   console.log(scrollVal);
    });
});


