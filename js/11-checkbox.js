/*! 04-slider.js */

(function(global, $){

'use strict';

	// Checkbox
	var checkBox = $('.checkbox_wrap');
	var addClassCheckBox = function($input) {
		if ($input.prop('checked')) {
		  $input.parent().addClass('checked');
		} else {
		  $input.parent().removeClass('checked');
		}

	};
	checkBox.on('change', 'input', function() {
		addClassCheckBox($(this));
	})

})(this, jQuery);

