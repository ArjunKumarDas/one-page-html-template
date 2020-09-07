//Counter Up Main Js..
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


//Wow Animation
new WOW().init();


// jQuery navbar smooth effect
$(window).scroll(function() {
    if ($(".navbar").offset().top > 80) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


//Start In preloader Jquery..
jQuery(window).load(function(){
    $('.preloader').fadeOut();
    $('.full-body').fadeIn();
});

////-----Back To Top-----//
$(document).ready(function(){$(".scrollup").hide(),$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollup").fadeIn(500):$(".scrollup").fadeOut(500)}),$(".scrollup").click(function(t){return t.preventDefault(),$("html, body").animate({scrollTop:0},1e3),!1})});


  // portfolio filtering

   $(function(){
        $(".project-wrapper").mixItUp();
   });
	
	
	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});


// jQuery navbar smooth Scroll 

     $('.navbar ul li a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 2500);
       return false;
      }
    }
  });