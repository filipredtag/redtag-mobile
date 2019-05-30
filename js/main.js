$(document).ready(function () {
	$('.old-price-show').css({'left':0});
	
	$(".hide-price").hover(function(){
	$(".old-price-show", this).stop().animate({left:"-120px", opacity:".8"},{queue:false,duration:100});
	$(".bigger", this).stop().animate({left:"-140px", opacity:".8"},{queue:false,duration:100});
	}, 

	function() {
	$(".old-price-show", this).stop().animate({left:"0px", opacity:"0"},{queue:false,duration:300});
	$(".bigger", this).stop().animate({left:"0px", opacity:"0"},{queue:false,duration:300});

	});
});



