/*! 04-slider.js */

(function(global, $){

'use strict';

	//select
	$(function() {
	  var selectTarget = $('.select_sorting_type select');

	  selectTarget.change(function() {
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	  });
	});

})(this, jQuery);

