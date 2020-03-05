function myFunction() {
    //nav responsive
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  
}

       // ==================================================scrollToTop
  $(window).scroll(function () {
           if ($(this).scrollTop() != 0) {
               $(".scrollToTop").fadeIn();
           } else {
               $(".scrollToTop").fadeOut();
           }
       });
       $(".scrollToTop").click(function () {
           $("body,html").animate({ scrollTop: 0 }, 800);
       });


       // ==================================================news
$('.news').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            autoplay:true,
            autoplayTimeout:2500
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false,
                     navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ],
        }
    }
  
  })
// =======================================================for comments
$('.Comments').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            autoplay:true,
            autoplayTimeout:2500

        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false,
                     navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ],
        }
    }
  
  })

  // for Gallery
$('.gallary').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
              items:1,
            nav:false,
            autoplay:true,
            autoplayTimeout:2500
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false,
                     navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ],
        }
    }
  
  })