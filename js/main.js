$(function(){
  $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots: false,
        arrows:false,
        autoplay : true,
        autoplaySpeed : 3000,
      });
      $(".center").slick({
        dots: false,
        arrows:false,
        infinite: true,
        centerMode: true,   
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay : true,
        autoplaySpeed : 1800,

        responsive: [                   
          {  breakpoint: 1100,    
                 settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1
                 }
            }, {  breakpoint: 760,
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
                 }
            }
    ]  //반응형 포인트 지정
      });
      $(".variable").slick({
        arrows:true,
        dots:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for'
      });

      $('.con a').click(function (event) {
        event.preventDefault();
  });
 /*     $('.ten .close').click(function(){
        $('.ten').fadeOut();
      })
      $('.ten2 .close').click(function(){
        $('.ten2').fadeOut();
      })
      $('.ten_link').click(function(){
        $('.ten').fadeIn();
      })
      $('.ten2_link').click(function(){
        $('.ten2').fadeIn();
      })
  
*/
$('.con a').each(function(){
  //$('.pop').hide();
  $(this).click(function(){
    var ahref = $(this).attr('href');
    $('.pop').hide();
    $(ahref).fadeIn();
    $('.con a').removeClass('on');
    $(this).addClass('on')
  })
})
$('.close').click(function(){
  $('.pop').fadeOut(500);
  $('.con a').removeClass('on');
})
$('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.variable'
   });
      
}) //제이쿼리 전체끝

