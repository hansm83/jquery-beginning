/*! 04-slider.js */

(function(global, $){

'use strict';

	// drop-down-list
	var  $drop_down_list = $('.drop_down_list'),
	     $btn_link = $drop_down_list.find('.btn_link'),
		 $ul_list = $drop_down_list.find('.ul_list'),
		 $bg_drop_down = $('.bg_drop_down');

	$btn_link.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('on');
		$ul_list.toggle();
		$bg_drop_down.toggle();			
	});		
	
	$bg_drop_down.on('click', function(e) {
		$ul_list.hide();
		$($btn_link).removeClass('on');
		$(this).toggle();
	});

})(this, jQuery);

