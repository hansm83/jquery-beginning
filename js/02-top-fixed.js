/*! 04-slider.js */

(function(global, $){

'use strict';

	// top_fixed
		var $wrap = $('.wrap');
		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 30 ) {
			$wrap.addClass('top_fixed');	
			} else {
			$wrap.removeClass('top_fixed');
			}
		});

})(this, jQuery);

