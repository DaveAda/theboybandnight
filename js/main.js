$(document).ready(function(){

  var $black = $('#black');
  var $blackband = $('#blackband');
  var $blue = $('#blue');
  var $burger1 = $('.burger1');
  var $burger2 = $('.burger2');
  var $burger3 = $('.burger3');  
  var $formxshirt = $('.form-x-shirt');
  var $formxcoozie = $('.form-x-coozie');
  var $formxposter = $('.form-x-poster');
  var $formxtanktop = $('.form-x-tanktop');
  var $formxwristband = $('.form-x-wristband');
  var $greenband = $('#greenband');
  var $header = $('.header');
  var $headera = $('.headera');
  var $headeraway = $('.headeraway');
  var $headerwhite = $('.headerwhite');
  var $mainband = $('#mainband');
  var $mobilelinkhome = $('#mobile-link-home');
  var $mobilemedialink = $('#mobile-link-media');
  var $mobilecircle = $('.mobile-circle');
  var $mobiledropdown = $('.mobile-dropdown');
  var $productcoozie= $('#product-coozie');
  var $productcooziepopup = $('#product-coozie-popup');
  var $productpopupshirtblue = $('#product-popup-shirt-blue');
  var $productpopupshirtblueselect = $('#product-popup-shirt-blue-select');
  var $productpopupshirtwhite = $('#product-popup-shirt-white');
  var $productpopupshirtwhiteselect = $('#product-popup-shirt-white-select');
  var $productpopuptanktopblack = $('#product-popup-tanktop-black');
  var $productpopuptanktopblackselect = $('#product-popup-tanktop-black-select');
  var $productpopuptanktoppurple = $('#product-popup-tanktop-purple');
  var $productpopuptanktoppurpleselect = $('#product-popup-tanktop-purple-select');
  
  var $productpopupwristbandblack= $('#product-popup-wristband-black');
  var $productpopupwristbandblackselect= $('#product-popup-wristband-black-select');
  var $productpopupwristbandgreen = $('#product-popup-wristband-green');
  var $productpopupwristbandgreenselect = $('#product-popup-wristband-green-select');
  var $productpopupwristbandpurple = $('#product-popup-wristband-purple');
  var $productpopupwristbandpurpleselect = $('#product-popup-wristband-purple-select');
  var $productpopupwristbandred = $('#product-popup-wristband-red');
  var $productpopupwristbandredselect = $('#product-popup-wristband-red-select');
  var $productpopupwristbands = $('#product-popup-wristbands');
  
  var $productposter= $('#product-poster');
  var $productposterpopup = $('#product-poster-popup');
  var $productshirtclick = $('.product-shirt-click');
  var $productshirtblackblue = $('#product-shirt-black-blue');
  var $productshirtblackwhite = $('#product-shirt-black-white');
  var $productshirtpopup = $('#product-shirt-popup');
  var $producttanktop = $('#product-tanktop');
  var $producttanktopblack = $('#product-tanktop-black');
  var $producttanktoppurple = $('#product-tanktop-purple');
  var $producttanktopclick = $('.product-tanktop-click');
  var $producttanktoppopup = $('#product-tanktop-popup');
  
  var $productwristbandmain = $('#product-wristband-main');
  var $productwristbandblack = $('#product-wristband-black');
  var $productwristbandgreen = $('#product-wristband-green');
  var $productwristbandpurple = $('#product-wristband-purple');
  var $productwristbandred = $('#product-wristband-red');
  var $productwristbandclick = $('.product-wristband-click');
  var $productwristbandpopup = $('#product-wristband-popup');
  
  var $purple = $('#purple');
  var $purpleband = $('#purpleband');
  var $redband = $('#redband');
  var $storecontainerrowone = $('.store-container-row-one');  
  var $storecontainerrowtwo = $('.store-container-row-two');
  var $storeviewless = $('.store-view-less');
  var $storeviewmore = $('.store-view-more');
  var $tanktopsizechartlink = $('#tanktop-size-chart-link');
  var $tanktopsizingbox = $('#tanktop-sizing-box');
  var $tanktopsizingtitlex = $('#tanktop-sizing-title-x');
  var $tshirtsizechartlink = $('#tshirt-size-chart-link');
  var $tshirtsizingbox = $('#tshirt-sizing-box');
  var $tshirtsizingtitlex = $('#tshirt-sizing-title-x');
  var $upcoming = $('.upcoming');
  var $white = $('#white');

  $upcoming.waypoint(function(producthoodie){
    $header.toggleClass('headerwhite');
    $headera.toggleClass('headeraway');
  });
  /*MAIN STORE COLOR SELECTIONS*/
    /*SHIRT*/
  $blue.click(function(){
    $productshirtblackwhite.hide();
    $productshirtblackblue.show();
  })
  $white.click(function(){
    $productshirtblackwhite.show();
    $productshirtblackblue.hide();
  })
    /*TANKTOP*/
  $black.click(function(){
    $producttanktoppurple.hide();
    $producttanktopblack.show();
  })  
  $purple.click(function(){
    $producttanktoppurple.show();
    $producttanktopblack.hide();
  })

  /*WRISTBANDS*/
  $mainband.click(function(){
    $productwristbandmain.show();    
    $productwristbandblack.hide();
    $productwristbandgreen.hide();
    $productwristbandpurple.hide();
    $productwristbandred.hide();    
  })
   $blackband.click(function(){
    $productwristbandmain.hide();    
    $productwristbandblack.show();
    $productwristbandgreen.hide();
    $productwristbandpurple.hide();
    $productwristbandred.hide();    
  })
   $greenband.click(function(){
    $productwristbandmain.hide();    
    $productwristbandblack.hide();
    $productwristbandgreen.show();
    $productwristbandpurple.hide();
    $productwristbandred.hide();    
  })
   $purpleband.click(function(){
    $productwristbandmain.hide();    
    $productwristbandblack.hide();
    $productwristbandgreen.hide();
    $productwristbandpurple.show();
    $productwristbandred.hide();    
  })
   $redband.click(function(){
    $productwristbandmain.hide();    
    $productwristbandblack.hide();
    $productwristbandgreen.hide();
    $productwristbandpurple.hide();
    $productwristbandred.show();    
  })
   /*WRISTBAND*/

  /*PRODUCT POPUPS*/
  $storeviewmore.click(function(){
    $storecontainerrowtwo.toggle();
    $storeviewless.show();
    $storeviewmore.hide();
  })
  $storeviewless.click(function(){
    $storecontainerrowtwo.toggle();
    $storeviewless.hide();
    $storeviewmore.show();
  })
  $productcoozie.click(function(){
    $productcooziepopup.fadeToggle();
  });
  /*SHIRTS*/
  $productshirtclick.click(function(){
    $productshirtpopup.fadeToggle();
  });
  $productpopupshirtblueselect.click(function(){
    $productpopupshirtblue.show();
    $productpopupshirtwhite.hide();
  })
  $productpopupshirtwhiteselect.click(function(){
    $productpopupshirtwhite.show();
    $productpopupshirtblue.hide();
  })
  /*TANKTOPS*/
  $producttanktopclick.click(function(){
    $producttanktoppopup.fadeToggle();
  });
  $productpopuptanktopblackselect.click(function(){
    $productpopuptanktopblack.show();
    $productpopuptanktoppurple.hide();
  })
  $productpopuptanktoppurpleselect.click(function(){
    $productpopuptanktoppurple.show();
    $productpopuptanktopblack.hide();
  })
  /*WRISTBANDS*/
  $productwristbandclick.click(function(){
    $productwristbandpopup.fadeToggle();
  });
  $productpopupwristbandblackselect.click(function(){
    $productpopupwristbands.hide();
    $productpopupwristbandblack.show();
    $productpopupwristbandgreen.hide();
    $productpopupwristbandpurple.hide();
    $productpopupwristbandred.hide();
  })
  $productpopupwristbandgreenselect.click(function(){
    $productpopupwristbands.hide();
    $productpopupwristbandblack.hide();
    $productpopupwristbandgreen.show();
    $productpopupwristbandpurple.hide();
    $productpopupwristbandred.hide();
  })
  $productpopupwristbandpurpleselect.click(function(){
    $productpopupwristbands.hide();
    $productpopupwristbandblack.hide();
    $productpopupwristbandgreen.hide();
    $productpopupwristbandpurple.show();
    $productpopupwristbandred.hide();
  })
  $productpopupwristbandredselect.click(function(){
    $productpopupwristbands.hide();
    $productpopupwristbandblack.hide();
    $productpopupwristbandgreen.hide();
    $productpopupwristbandpurple.hide();
    $productpopupwristbandred.show();
  })
  /*POSTERS*/
  $productposter.click(function(){
    $productposterpopup.fadeToggle();
  });
  /*PRODUCT X's*/
  $formxcoozie.click(function(){
    $productcooziepopup.fadeToggle();
  });
  $formxshirt.click(function(){
    $productshirtpopup.fadeToggle();
  });
  $formxtanktop.click(function(){
    $producttanktoppopup.fadeToggle();
  });
  $formxwristband.click(function(){
    $productwristbandpopup.fadeToggle();
  });
  $formxposter.click(function(){
    $productposterpopup.fadeToggle();
  });
  /*SIZING CHART X's*/
  $tshirtsizechartlink.click(function(){
    $tshirtsizingbox.toggle();
  })
  $tshirtsizingtitlex.click(function(){
    $tshirtsizingbox.toggle();
  })
  $tanktopsizechartlink.click(function(){
    $tanktopsizingbox.toggle();
  })
  $tanktopsizingtitlex.click(function(){
    $tanktopsizingbox.toggle();
  })
  /*MOBILE DROPDOWN*/
  $('.mobile-circle, .burger1, .burger2, .burger3, #mobile-link-home, #mobile-link-events, #mobile-link-media, #mobile-link-store, #mobile-link-weddings, #mobile-link-booking').click(function(){
    $mobiledropdown.slideToggle();
  });

$('.mainstreambox').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.mainstream-nav',
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
$('.mainstream-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.mainstreambox',
  dots: false,
  centerMode: true,
  centerPadding: "5px",
  infinite: true,
  focusOnSelect: true,
  prevArrow: $('#mainstream-nav-left-arrow'),
  nextArrow: $('#mainstream-nav-right-arrow'),
  verticalAlign: true,
  height: '400px'
});

/*PHOTO COLLAGE*/
$('#photocolumn-1-A').slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-1-B').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 800,
  infinite: false,
  cssEase: 'reverse',
  lazyLoad: 'ondemand'
  });
$('#photocolumn-1-C').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 500,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-1-D').slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1200,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-2-A').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 600,
  infinite: false,
  cssEase: 'reverse',
  lazyLoad: 'ondemand'
  });
$('#photocolumn-2-B').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1300,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-2-C').slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2800,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-2-D').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 900,
  infinite: false,
  cssEase: 'reverse',
  lazyLoad: 'ondemand'
  });
$('#photocolumn-3-A').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-3-B').slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 600,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-3-C').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: false,
  cssEase: 'reverse',
  lazyLoad: 'ondemand'
  });
$('#photocolumn-3-D').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-4-A').slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 700,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-4-B').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 400,
  infinite: false,
  cssEase: 'reverse',
  lazyLoad: 'ondemand'
  });
$('#photocolumn-4-C').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1300,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-4-D').slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 800,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-5-A').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1200,
  infinite: false,
  cssEase: 'reverse',
  lazyLoad: 'ondemand'
  });
$('#photocolumn-5-B').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-5-C').slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1800,
  infinite: false,
  lazyLoad: 'ondemand'
  });
$('#photocolumn-5-D').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: false,
  lazyLoad: 'ondemand'
  });


});

