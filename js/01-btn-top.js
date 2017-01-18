/*! 04-slider.js */

(function(global, $){

'use strict';

	// btnTop
	var $btn_top = $('.btn-top');
	$(window).on('scroll', function() {
		var winTop = $(window).scrollTop();
		if ( winTop > 100 ) {
		$btn_top.fadeIn();
		} else {
		$btn_top.fadeOut();
		}
	});
	$btn_top.on('click', function() {
		$('html, body').animate( { scrollTop : 0 }, 400 );
		return false;
	});

})(this, jQuery);

