/*! 04-slider.js */

(function(global, $){

'use strict';

	// file input
	var $fileBox = null;  
	$(function() {
		init();
	})		  
	
	function init() {
		$fileBox = $('.input_file');
		fileLoad();
	}
	
	function fileLoad() {
		$.each($fileBox, function(idx){
			var $this = $fileBox.eq(idx), // .input_file
				$btnUpload = $this.find('[type="file"]'), 
				$label = $this.find('.file_label');

			console.log($btnUpload);
			
			$btnUpload.on('change', function(e) {
				e.preventDefault();
				var $target = $(this),
					fileName = $target.val(),
					$fileText = $target.siblings('.file_name');
					$fileText.val(fileName);
			})
			
			$btnUpload.on('focusin focusout', function(e) {
				e.preventDefault();
				e.type == 'focusin' ?
				  $label.addClass('file_focus') : $label.removeClass('file_focus');
			})
		})
	}

})(this, jQuery);

