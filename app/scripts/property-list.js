/* jshint devel:true */
(function () {

    'use strict';
//     function swipeTop(){
//         var galleryTop = new Swiper('.gallery-top', {
//             nextButton: '.swiper-button-next',
//             prevButton: '.swiper-button-prev',
//             spaceBetween: 10,
//             autoplay: 2500,
//             autoplayDisableOnInteraction: false
//         });

//         var galleryThumbs = new Swiper('.gallery-thumbs', {
//             spaceBetween: 10,
//             centeredSlides: true,
//             slidesPerView: 'auto',
//             touchRatio: 0.2,
//             slideToClickedSlide: true
//         });
//         galleryTop.params.control = galleryThumbs;
//  //此处没运行？
//         galleryThumbs.params.control = galleryTop;
//     }
//      $('body').on('click', '#thumbnail-a', function () { 
//            console.log( "thumbnail")
//      });
  $('body').on('click', '.thumbnail', function () { 
         $($(this).parents().find('.ai-listing-detail-spa-container')).each(function(){
              $(this).hide();
              $(this).prev().find('.selected-listing-pointer').hide();
        });
        $(this).parent().parent().find('.ai-listing-detail-spa-container').show();
        $(this).next().show();
        // swipeTop();
        // swipeTop($(this).find('.gallery-top'),$(this).find('.gallery-thumbs'))
   });
// .ai-close-container a不能这么使

     $('body').on('click', '.ai-close-container', function () { 
         $(this).parent().parent().parent().hide();
//           console.log("ai-close-container")
        $(this).parent().parent().parent().parent().find('.selected-listing-pointer').hide();
     });
//      var isDisplayPriceRangeMenu=false;
     var priceRangeStartActive = false;
     var priceRangeEndActive = false;
//      $('#price-button').click(function () {
//         if(!isDisplayPriceRangeMenu){
//             $('#price-menu').css('display','block');
//             isDisplayPriceRangeMenu=true;
//          }else{
//              $('#price-menu').css('display','none');
//             isDisplayPriceRangeMenu=false;
//          }
//      });
     $('#price-start').click(function () {
            $('#price-range-menu').css('display','block');
            priceRangeStartActive = true;
     });
     $('#price-end').click(function () {
        $('#price-range-menu').css('display','block');
        priceRangeEndActive = true ;
     });
     $('#price-range-menu li').click(function(){ 
        if (priceRangeStartActive ) {
            $('#price-start').val($(this).find('.text-right').text());  
            $('#price-range-menu').css('display','none'); 
            priceRangeStartActive = false;
        }
        if (priceRangeEndActive ) {
            $('#price-end').val($(this).find('.text-right').text());  
            $('#price-range-menu').css('display','none');
            priceRangeEndActive = false ;
        }
         
     });
     
     $('#o-header-link-1').hover(function(){
        $('#o-header-mega-1').css('display','block');
        console.log('display');
    },function(){
        $('#o-header-mega-1').css('display','none');
    });
    $('#o-header-link-2').hover(function(){
        $('#o-header-mega-2').css('display','block');
        console.log('display');
    },function(){
        $('#o-header-mega-2').css('display','none');
    });

    var isDisplayContactNumber=false;   
     $('body').on('click', '.inquiry-agent-call', function () {
         if(!isDisplayContactNumber){
            $(this).next('#inquiry-agent-contact-number').css('display','block'); 
            // $('#inquiry-agent-contact-number').css('display','block');
            isDisplayContactNumber=true;
         }else{
             $(this).next('#inquiry-agent-contact-number').css('display','none'); 
            //  $('#inquiry-agent-contact-number').css('display','none');
            isDisplayContactNumber=false;
         }

    });
   
})(); 