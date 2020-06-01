// Preloader
jQuery(window).load(function(){
	$("#preloader").fadeOut("slow");
});

$(document).ready(function(){
	
	// Welcome Section Slider
$(function() {
    const Page = (function() {
        const $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {
                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );
                }
            } ),
            init = function() {
                initEvents();
            },
            initEvents = function() {
                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {
                    slitslider.next();
                    return false;
                } );
                $navArrows.children( ':first' ).on( 'click', function() {  
                    slitslider.previous();
                    return false;
                } );
                $nav.each( function( i ) {
                    $( this ).on( 'click', function( event ) {   
                        const $dot = $( this );
                        if( !slitslider.isActive() ) {
                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );          
                        }                       
                        slitslider.jump( i + 1 );
                        return false;                   
                    } );                    
                } );
            };
            return { init : init };
    })();
    Page.init();
});

// Countries Carousel
$("#country").owlCarousel({	 
	navigation : true,
	pagination : false,
	slideSpeed : 700,
	paginationSpeed : 400,
	singleItem:true,
	navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
});

// Menu item highlighting
	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
			$('#navbar-collapse').removeClass('in');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	}); 
    $('a.move').on('click', function(e){
        
//store hash
        const target = this.hash;               
        e.preventDefault();       
		$('body').scrollTo(target, 800, {offset: -50, 'axis':'y'});
	});
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("matr_logo").css("color","#fff");
            $("#navigation").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
        }
    });

    // Slider Height
    const slideHeight = $(window).height();
    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });

	// resize video

$(window).resize (function () {
	$("iframe").each(function() {
	const width = $(this).width ();
	$(this).css("height", width / 1.7777 + "px");
	});
   }); 

// Form for contact
$("#form").submit(function () { 
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: {
		  name: $('#name').val(),
		  phone: $('#phone').val(),
		  email: $('#email').val(),
		  message: $('#message').val()
	  } 
	}).done(function() {
	  $(this).find("input").val("");
	  $('#form').hide();
	  $('.hide-after').hide();
	  $('#thanks').css({
	  display: 'block',
	});
$("#form").trigger("reset");
});
  return false;
});

// Animate
   const wow = new WOW ({
	offset:       75,          
	mobile:       false,       
});
wow.init();

});


