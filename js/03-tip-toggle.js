/*! 04-slider.js */

(function(global, $){

'use strict';

	// tip toggle
	var $btn_tip_toggle = $('.btn_tip_toggle'),
		$cont_tip_toggle = $('.cont_tip_toggle');
		
	$btn_tip_toggle.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('on');
		$cont_tip_toggle.toggle();
	});

})(this, jQuery);

